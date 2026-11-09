# Boutique Hotel Management System (Phase 1: Customer Booking Engine) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, resilient customer-facing hotel booking web application with dynamic room search, guest checkout, concurrency-safe inventory holds, ABA PayWay KHQR payment integration with dual-mode simulation, real-time WebSocket payment detection via Laravel Reverb, and digital check-in vouchers.

**Architecture:** Laravel 13 backend providing robust domain services, PostgreSQL row-level locking (`SELECT ... FOR UPDATE`) to prevent double-booking, and scheduled hold cleanup. React 19 + Inertia.js v3 frontend styled with Tailwind CSS v4 and Radix UI in a Warm Minimalist Boutique aesthetic. Real-time updates delivered through Laravel Reverb WebSockets with fallback polling.

**Tech Stack:** 
- Backend: PHP 8.3+, Laravel 13, Laravel Fortify, Laravel Wayfinder, Pest 5
- Frontend: React 19, Inertia.js v3, Tailwind CSS v4, Lucide React, Radix UI
- Database: Neon PostgreSQL (with SQLite compatibility for lightning-fast test suites)
- Realtime: Laravel Reverb (WebSockets) + Laravel Echo
- Payments: ABA PayWay (USD and KHR via dynamic KHQR code modal + deep link + local simulation mode)

**Spec:** Defined in chat alignment interview (Single boutique property, room type inventory model, 15-minute hold lock, USD base currency with configurable KHR exchange rate, net pricing with 10% VAT, guest checkout, manual front-desk cancellation policy).

---

## Global Constraints

- Never swap or introduce unrelated frameworks (respect Laravel 13, React 19, Inertia v3, Tailwind v4).
- Base currency is USD; default exchange rate is 1 USD = 4,100 KHR.
- Net pricing shown on room cards; taxes (default 10% VAT) and optional add-ons calculated and itemized at checkout.
- Room inventory is managed by Room Type; physical room allocation is deferred to the Cashier (Phase 2).
- Zero double-booking tolerance: all hold creations must use atomic database transactions with row-level locking.
- Dual-mode payments: support official ABA PayWay API while providing a built-in dev payment simulator (`ABA_PAYWAY_SIMULATE=true`).
- Run `vendor/bin/pint --format agent` after any backend PHP changes.
- Ensure all Pest feature and unit tests pass at each task completion.

---

## Review Focus

1. **Concurrent Hold Collision:** Two users attempting to book the last available room of a type for the same date range simultaneously. The database lock must allow exactly one hold and gracefully notify the second user.
2. **Expired Hold Release:** A user abandons the KHQR payment modal. The room hold must strictly expire after 15 minutes, release inventory back to the search pool, and notify the client via Reverb.
3. **ABA Webhook Idempotency:** The payment webhook receives duplicate POST requests from ABA PayWay. The system must process payment once, mark the reservation `confirmed`, and return HTTP 200 without double-crediting.
4. **Currency Rounding & Precision:** Calculating KHR from USD at checkout must follow standard Cambodian banking rules (integer KHR amounts without floating point rounding errors).
5. **Guest Checkout Validation:** Invalid phone formats or malicious script input in special requests must be rejected by Form Requests before database transactions start.

---

### Task 1: Database Migrations & Eloquent Models

**Files:**
- Create: `database/migrations/2026_11_10_000001_create_hotel_core_tables.php`
- Create: `app/Enums/UserRole.php`
- Create: `app/Enums/ReservationStatus.php`
- Create: `app/Enums/PaymentStatus.php`
- Create: `app/Models/RoomType.php`
- Create: `app/Models/Room.php`
- Create: `app/Models/Amenity.php`
- Create: `app/Models/Addon.php`
- Create: `app/Models/Reservation.php`
- Create: `app/Models/ReservationAddon.php`
- Create: `app/Models/Payment.php`
- Create: `app/Models/Setting.php`
- Modify: `app/Models/User.php`
- Test: `tests/Feature/ModelRelationshipTest.php`

**Interfaces:**
- Consumes: Existing Laravel 13 foundation and `users` table.
- Produces: Complete relational schema for room types, rooms, reservations, add-ons, payments, and settings.

- [ ] **Step 1: Write the failing test for models and relationships**
Create `tests/Feature/ModelRelationshipTest.php` asserting that:
  - `RoomType` has many `Room`s, belongs to many `Amenity`s, and has many `Reservation`s.
  - `Reservation` belongs to `RoomType`, has many `ReservationAddon`s, has many `Payment`s, and casts `status` to `ReservationStatus`.
  - `Setting::get('khr_exchange_rate', 4100)` retrieves stored values.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/ModelRelationshipTest.php`
Expected: FAIL with missing classes/tables.

- [ ] **Step 3: Implement Enums and Migrations**
  - Create Enums:
    - `UserRole`: `CUSTOMER = 'customer'`, `CASHIER = 'cashier'`, `ADMIN = 'admin'`
    - `ReservationStatus`: `PENDING = 'pending'`, `CONFIRMED = 'confirmed'`, `CHECKED_IN = 'checked_in'`, `CHECKED_OUT = 'checked_out'`, `CANCELLED = 'cancelled'`, `EXPIRED = 'expired'`
    - `PaymentStatus`: `PENDING = 'pending'`, `COMPLETED = 'completed'`, `FAILED = 'failed'`
  - Create migration `2026_11_10_000001_create_hotel_core_tables.php` with:
    - `role` column added to `users` (default: `'customer'`)
    - `room_types`: `id` (uuid), `name`, `slug` (unique), `description`, `base_price_usd` (decimal 10,2), `max_adults`, `max_children`, `total_inventory`, `images` (json), `is_active` (boolean)
    - `rooms`: `id` (uuid), `room_type_id` (foreign uuid), `room_number` (string unique), `floor` (integer), `status` (string: available, occupied, maintenance)
    - `amenities`: `id` (uuid), `name`, `icon` (string)
    - `room_type_amenity`: pivot table
    - `addons`: `id` (uuid), `name`, `description`, `price_usd` (decimal 10,2), `price_type` (per_night, per_stay, per_person), `is_active` (boolean)
    - `reservations`: `id` (uuid), `booking_code` (string unique), `room_type_id` (foreign uuid), `assigned_room_id` (nullable foreign uuid), `guest_name`, `guest_email`, `guest_phone`, `special_requests` (nullable text), `check_in_date` (date), `check_out_date` (date), `adults` (int), `children` (int), `nights` (int), `base_total_usd` (decimal 10,2), `tax_total_usd` (decimal 10,2), `grand_total_usd` (decimal 10,2), `currency_paid` (string: USD/KHR), `status` (string), `expires_at` (timestamp nullable), timestamps
    - `reservation_addons`: `id` (uuid), `reservation_id`, `addon_id`, `quantity`, `unit_price_usd`, `total_price_usd`
    - `payments`: `id` (uuid), `reservation_id`, `provider` (string), `transaction_id` (string nullable), `amount` (decimal 12,2), `currency` (string), `exchange_rate` (decimal 10,2), `status` (string), `raw_payload` (json nullable), timestamps
    - `settings`: `id`, `key` (unique), `value`, timestamps

- [ ] **Step 4: Implement Eloquent Models with Casts & Scopes**
Implement `RoomType`, `Room`, `Amenity`, `Addon`, `Reservation`, `ReservationAddon`, `Payment`, `Setting` with typed relationships and casts.

- [ ] **Step 5: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/ModelRelationshipTest.php`
Expected: PASS.

- [ ] **Step 6: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 2: Boutique Hotel Seeders & Setting Service

**Files:**
- Create: `app/Services/SettingService.php`
- Create: `database/seeders/HotelSeeder.php`
- Modify: `database/seeders/DatabaseSeeder.php`
- Test: `tests/Feature/HotelSeederTest.php`

**Interfaces:**
- Consumes: Task 1 Models and Schema.
- Produces: `SettingService::get(string $key, mixed $default = null)` and seeded boutique hotel inventory (Deluxe King, Garden Villa, Executive Suite, etc.).

- [ ] **Step 1: Write the failing test for seeders and SettingService**
Create `tests/Feature/HotelSeederTest.php`:
  - Assert `php artisan db:seed --class=HotelSeeder` populates settings, amenities, room types with images, physical rooms, and addons.
  - Assert `SettingService::getExchangeRate()` returns `4100`.
  - Assert `SettingService::getVatRate()` returns `10.0`.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/HotelSeederTest.php`
Expected: FAIL.

- [ ] **Step 3: Implement SettingService**
In `app/Services/SettingService.php`:
  - Method `get(string $key, mixed $default = null): mixed`
  - Method `set(string $key, mixed $value): void`
  - Method `getExchangeRate(): float` (returns `(float) Setting::get('khr_exchange_rate', 4100)`)
  - Method `getVatRate(): float` (returns `(float) Setting::get('vat_percentage', 10.0)`)
  - Method `convertUsdToKhr(float $usdAmount): int` (calculates `(int) round($usdAmount * $this->getExchangeRate())`)

- [ ] **Step 4: Implement HotelSeeder**
Populate 4 realistic boutique room types:
  1. *Deluxe King Room* (Base: \$65/night, 2 Adults, 1 Child, 8 rooms)
  2. *Tropical Garden Villa* (Base: \$120/night, 2 Adults, 2 Children, 4 rooms)
  3. *Executive Pool Suite* (Base: \$180/night, 3 Adults, 2 Children, 3 rooms)
  4. *Family Heritage Loft* (Base: \$150/night, 4 Adults, 2 Children, 3 rooms)
Include curated Unsplash luxury boutique hotel photos, standard amenities (High-speed Wi-Fi, Rainfall Shower, Smart TV, Espresso Machine, Private Balcony), add-ons (Daily Gourmet Breakfast: \$12/person, VIP Airport Transfer: \$25, Late Check-out: \$20), and default settings.

- [ ] **Step 5: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/HotelSeederTest.php`
Expected: PASS.

- [ ] **Step 6: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 3: Availability Engine & Concurrency-Safe Hold Service

**Files:**
- Create: `app/Services/ReservationService.php`
- Create: `app/DTOs/SearchCriteriaDTO.php`
- Create: `app/DTOs/CreateHoldDTO.php`
- Test: `tests/Feature/ReservationHoldConcurrencyTest.php`

**Interfaces:**
- Consumes: Task 1 models and Task 2 SettingService.
- Produces:
  - `ReservationService::searchAvailableRoomTypes(SearchCriteriaDTO $criteria): Collection`
  - `ReservationService::createHold(CreateHoldDTO $dto): Reservation`
  - `ReservationService::calculatePricing(RoomType $roomType, int $nights, array $addons): array`

- [ ] **Step 1: Write the failing test for availability search and concurrent holds**
Create `tests/Feature/ReservationHoldConcurrencyTest.php`:
  - Test date overlap logic (checks check-in vs check-out boundaries).
  - Test that an active hold (`expires_at > now()`) reduces available inventory.
  - Test that an expired hold (`expires_at < now()`) does NOT block inventory.
  - Test that when inventory is 1, two simultaneous `createHold()` calls permit the first and throw a `ValidationException` / `DomainException` on the second.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/ReservationHoldConcurrencyTest.php`
Expected: FAIL.

- [ ] **Step 3: Implement ReservationService with Row-Level Locking**
In `app/Services/ReservationService.php`:
  - `getAvailableCount(string $roomTypeId, string $checkIn, string $checkOut): int`
    Calculates: Total Inventory - Count(Active Reservations where dates overlap and `status IN ('confirmed', 'checked_in') OR (status = 'pending' AND expires_at > NOW())`).
  - `createHold(CreateHoldDTO $dto): Reservation`
    Opens `DB::transaction()`:
    1. Lock room type: `RoomType::where('id', $dto->roomTypeId)->lockForUpdate()->firstOrFail()`
    2. Verify `getAvailableCount() >= 1`. If 0, throw `DomainException("Selected room type is no longer available for these dates.")`.
    3. Calculate nights, base total, tax total (10%), addon totals, and grand total.
    4. Generate random human-friendly `booking_code` (e.g. `HTL-8X9K2P`).
    5. Create `Reservation` with `status = ReservationStatus::PENDING`, `expires_at = now()->addMinutes(15)`.
    6. Attach chosen add-ons to `reservation_addons`.

- [ ] **Step 4: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/ReservationHoldConcurrencyTest.php`
Expected: PASS.

- [ ] **Step 5: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 4: ABA PayWay & Payment Gateway (Dual-Mode)

**Files:**
- Create: `config/payway.php`
- Create: `app/Services/AbaPaywayService.php`
- Create: `app/Events/BookingPaid.php`
- Create: `app/Http/Controllers/Api/AbaWebhookController.php`
- Test: `tests/Feature/AbaPaywayIntegrationTest.php`

**Interfaces:**
- Consumes: `Reservation` model and environment config (`ABA_PAYWAY_API_URL`, `ABA_PAYWAY_MERCHANT_ID`, `ABA_PAYWAY_API_KEY`, `ABA_PAYWAY_SIMULATE`).
- Produces:
  - `AbaPaywayService::generateQr(Reservation $reservation, string $currency): array` (returns `qr_string`, `qr_image_url`, `deep_link`, `transaction_id`, `expires_at`)
  - `AbaPaywayService::processWebhook(array $payload): Reservation`
  - `AbaPaywayService::simulatePayment(string $reservationUuid): Reservation`
  - Broadcasts `BookingPaid` event.

- [ ] **Step 1: Write the failing test for ABA PayWay Service & Webhook**
Create `tests/Feature/AbaPaywayIntegrationTest.php`:
  - Test QR generation in simulate mode returns mock KHQR and deep link.
  - Test webhook processing updates reservation `status` to `confirmed`, creates a `Payment` record with status `completed`, and fires `BookingPaid` event.
  - Test duplicate webhook call returns success idempotently without re-crediting.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/AbaPaywayIntegrationTest.php`
Expected: FAIL.

- [ ] **Step 3: Implement config/payway.php and AbaPaywayService**
  - Add config mapping environment variables (`merchant_id`, `api_key`, `api_url`, `simulate`).
  - In `AbaPaywayService.php`:
    - Method `generateQr(Reservation $reservation, string $currency = 'USD'): array`
      If `config('payway.simulate') === true`, generate a structured valid mock KHQR string, base64 QR payload, and mock transaction ID. If false, sign HMAC-SHA512 payload and call ABA PayWay `/api/payment-gateway/v1/payments/purchase` endpoint.
    - Method `processWebhook(array $payload): Reservation`
      Verify transaction signature, find reservation, check if already confirmed (idempotency guard), set status to `CONFIRMED`, record `Payment`, and broadcast `BookingPaid::dispatch($reservation)`.
    - Method `simulatePayment(string $bookingCode): Reservation`
      Instantly triggers `processWebhook` for local development testing.

- [ ] **Step 4: Implement AbaWebhookController**
In `app/Http/Controllers/Api/AbaWebhookController.php`:
  - `handleWebhook(Request $request)`: Calls `AbaPaywayService::processWebhook()`, returns JSON `{ "status": 200 }`.
  - `simulate(string $uuid)`: Available when `app()->environment('local')` or `config('payway.simulate') === true`.

- [ ] **Step 5: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/AbaPaywayIntegrationTest.php`
Expected: PASS.

- [ ] **Step 6: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 5: Realtime Reverb & Hold Expiration Scheduler

**Files:**
- Create: `app/Events/BookingExpired.php`
- Create: `app/Console/Commands/ExpireReservationHoldsCommand.php`
- Modify: `routes/console.php`
- Test: `tests/Feature/ExpireReservationHoldsTest.php`

**Interfaces:**
- Consumes: Task 1 and Task 3 models.
- Produces:
  - Broadcastable events: `BookingPaid` and `BookingExpired` on public channel `booking.{bookingCode}`.
  - Scheduled command `bookings:expire-holds` running every minute.

- [ ] **Step 1: Write the failing test for hold expiration command**
Create `tests/Feature/ExpireReservationHoldsTest.php`:
  - Create a reservation with `status = 'pending'` and `expires_at = now()->subMinutes(1)`.
  - Run `php artisan bookings:expire-holds`.
  - Assert reservation status becomes `'expired'`.
  - Assert `BookingExpired` event is dispatched with booking code.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/ExpireReservationHoldsTest.php`
Expected: FAIL.

- [ ] **Step 3: Implement Events and Console Command**
  - Implement `BookingPaid` implementing `ShouldBroadcastNow`:
    Channel: `new Channel("booking.{$this->reservation->booking_code}")`
    Payload: `{ booking_code, status: 'confirmed', redirect_url: route('booking.confirmation', booking_code) }`
  - Implement `BookingExpired` implementing `ShouldBroadcastNow`:
    Channel: `new Channel("booking.{$this->reservation->booking_code}")`
    Payload: `{ booking_code, status: 'expired' }`
  - Implement `ExpireReservationHoldsCommand`:
    Queries `Reservation::where('status', ReservationStatus::PENDING)->where('expires_at', '<=', now())->get()`.
    Updates each to `ReservationStatus::EXPIRED` and dispatches `BookingExpired`.
  - Register in `routes/console.php`: `Schedule::command('bookings:expire-holds')->everyMinute();`.

- [ ] **Step 4: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/ExpireReservationHoldsTest.php`
Expected: PASS.

- [ ] **Step 5: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 6: Customer Web Endpoints & Form Requests

**Files:**
- Create: `app/Http/Requests/SearchRoomsRequest.php`
- Create: `app/Http/Requests/CreateHoldRequest.php`
- Create: `app/Http/Requests/BookingLookupRequest.php`
- Create: `app/Http/Controllers/Customer/HomeController.php`
- Create: `app/Http/Controllers/Customer/RoomController.php`
- Create: `app/Http/Controllers/Customer/BookingController.php`
- Create: `app/Http/Controllers/Customer/BookingLookupController.php`
- Modify: `routes/web.php`
- Test: `tests/Feature/CustomerWebRoutesTest.php`

**Interfaces:**
- Consumes: Task 2, 3, 4 services and Wayfinder routes.
- Produces:
  - `GET /` -> `HomeController@index`
  - `GET /rooms` -> `RoomController@index` (Inertia `rooms/index`)
  - `GET /rooms/{slug}` -> `RoomController@show` (Inertia `rooms/show`)
  - `POST /booking/hold` -> `BookingController@storeHold` (creates hold & returns KHQR payload)
  - `GET /booking/status/{bookingCode}` -> `BookingController@checkStatus` (JSON status fallback)
  - `GET /booking/confirmation/{bookingCode}` -> `BookingController@showConfirmation` (Inertia `booking/confirmation`)
  - `GET /booking/lookup` -> `BookingLookupController@index` (Inertia `booking/lookup`)
  - `POST /booking/lookup` -> `BookingLookupController@search`
  - `GET /booking/{bookingCode}/voucher` -> `BookingLookupController@voucher`

- [ ] **Step 1: Write failing feature test for customer HTTP routes**
Create `tests/Feature/CustomerWebRoutesTest.php`:
  - Test `GET /` returns HTTP 200 with Inertia component `home`.
  - Test `GET /rooms?check_in=...&check_out=...` validates date logic (check-out must be after check-in).
  - Test `POST /booking/hold` validates guest fields, creates hold, and returns booking code & QR details.
  - Test `GET /booking/confirmation/{code}` returns 404 for nonexistent code and 200 for valid confirmed reservation.
  - Test `GET /booking/lookup` returns reservation details when given matching code and email/phone.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/CustomerWebRoutesTest.php`
Expected: FAIL.

- [ ] **Step 3: Implement Form Requests with Validation Rules**
  - `SearchRoomsRequest`: `check_in` (required, date, after_or_equal:today), `check_out` (required, date, after:check_in), `adults` (integer, min:1), `children` (integer, min:0).
  - `CreateHoldRequest`: `room_type_id` (required, exists), `check_in`, `check_out`, `adults`, `children`, `guest_name` (required, string, max:120), `guest_email` (required, email), `guest_phone` (required, string, max:25), `special_requests` (nullable, string, max:500), `addons` (array), `currency` (in:USD,KHR).
  - `BookingLookupRequest`: `booking_code` (required, string), `identifier` (required, string: matches email or phone).

- [ ] **Step 4: Implement Controllers & Web Routes**
Implement controllers using `Inertia::render()` sharing exchange rates and settings, returning clean JSON for API endpoints, and registering named routes in `routes/web.php`.

- [ ] **Step 5: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/CustomerWebRoutesTest.php`
Expected: PASS.

- [ ] **Step 6: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 7: Frontend Layout, Theme & Discovery Pages

**Files:**
- Create: `resources/js/layouts/customer-layout.tsx`
- Create: `resources/js/components/navbar.tsx`
- Create: `resources/js/components/footer.tsx`
- Create: `resources/js/components/search-bar.tsx`
- Create: `resources/js/components/room-card.tsx`
- Create: `resources/js/pages/home.tsx`
- Create: `resources/js/pages/rooms/index.tsx`
- Create: `resources/js/pages/rooms/show.tsx`
- Test: Frontend build & type check (`npm run types:check && npm run build`)

**Interfaces:**
- Consumes: Inertia props (`roomTypes`, `amenities`, `settings`, `filters`) and Lucide icons.
- Produces: Warm Minimalist Boutique UI with responsive search, room filtering, image galleries, and pricing display in both USD and KHR.

- [ ] **Step 1: Create Customer Layout and Navigation**
Implement `CustomerLayout` in `resources/js/layouts/customer-layout.tsx`:
  - Header with Boutique Hotel logo, "Our Rooms", "Amenities", "Contact", and "Find My Booking" button.
  - Active currency badge showing live exchange rate (e.g. `1 USD ≈ 4,100 KHR`).
  - Warm stone backdrop (`bg-[#FDFBF7]` or `bg-stone-50`), charcoal typography (`text-stone-900`), and terracotta accents.

- [ ] **Step 2: Implement Interactive Search Bar Component**
In `resources/js/components/search-bar.tsx`:
  - Check-in and Check-out date pickers with default 1-night minimum and disabled past dates.
  - Guests popover selector (Adults & Children counters).
  - "Check Availability" submit button using Inertia visit to `/rooms`.

- [ ] **Step 3: Implement Landing Page (`home.tsx`)**
Hero section with captivating photography, embedded sticky search bar, "Curated Stays" highlights grid, boutique amenities showcase, and guest reviews.

- [ ] **Step 4: Implement Room Catalog (`rooms/index.tsx`)**
Displays filtered rooms with available counts (e.g. "Only 2 rooms left for your dates"), badge highlights (e.g. "Max 2 Adults · King Bed"), net price per night in USD with KHR secondary conversion, and "View Details & Reserve" CTA.

- [ ] **Step 5: Implement Room Details (`rooms/show.tsx`)**
High-res image gallery carousel, comprehensive amenities checklist, full room description, interactive Add-on selector (breakfast, airport shuttle), real-time pricing breakdown (Nights × Rate + Add-ons + 10% VAT = Grand Total in USD & KHR), and "Book Now" trigger opening the checkout modal.

- [ ] **Step 6: Run Type Check and Build**
Run: `npm run types:check && npm run build`
Expected: Build succeeds with 0 type errors.

---

### Task 8: Dynamic KHQR Checkout Modal & Reverb Integration

**Files:**
- Create: `resources/js/components/checkout-modal.tsx`
- Create: `resources/js/components/khqr-modal.tsx`
- Create: `resources/js/hooks/use-booking-reverb.ts`
- Modify: `resources/js/pages/rooms/show.tsx`
- Test: Frontend build & simulation flow test

**Interfaces:**
- Consumes: `POST /booking/hold`, `POST /api/payway/simulate/{uuid}`, Laravel Echo Reverb channel `booking.{bookingCode}`.
- Produces: Seamless modal-based guest intake, 15:00 countdown timer, dynamic KHQR code display with ABA deep link, and automatic transition upon payment.

- [ ] **Step 1: Implement Checkout Modal (Guest Intake)**
In `resources/js/components/checkout-modal.tsx`:
  - Clean form fields: First Name, Last Name, Email, Phone Number, Special Requests.
  - Currency toggle for payment: Pay in USD or Pay in KHR (KHQR).
  - Clear itemized price breakdown (Room Rate, Add-ons, 10% VAT, Total).
  - "Proceed to Payment" button triggering `POST /booking/hold`.

- [ ] **Step 2: Implement Dynamic KHQR Modal with Countdown**
In `resources/js/components/khqr-modal.tsx`:
  - Renders official ABA KHQR SVG/Canvas and merchant badge.
  - Live 15:00 countdown timer showing remaining hold time.
  - Mobile detection with "Open ABA Mobile App" deep-link button.
  - Local dev badge: "Simulate Instant Payment" button (calls `/api/payway/simulate/{code}`) to allow 1-click test checkout without an external phone.

- [ ] **Step 3: Implement Real-Time Listener Hook (`useBookingReverb`)**
In `resources/js/hooks/use-booking-reverb.ts`:
  - Connects to Laravel Echo listening on `booking.{bookingCode}` for:
    1. `.BookingPaid`: Triggers success chime/notification and redirects to `/booking/confirmation/{bookingCode}`.
    2. `.BookingExpired`: Disables QR code, displays "Hold expired due to inactivity", and prompts user to re-search.
  - Includes a 10-second polling fallback check to `/booking/status/{bookingCode}` in case WebSocket connectivity is interrupted.

- [ ] **Step 4: Wire Modal into Room Detail Page**
Integrate `CheckoutModal` and `KhqrModal` into `rooms/show.tsx`.

- [ ] **Step 5: Run Type Check and Build**
Run: `npm run types:check && npm run build`
Expected: Build succeeds with 0 errors.

---

### Task 9: Confirmation View, Digital Check-in QR & Public Lookup

**Files:**
- Create: `resources/js/pages/booking/confirmation.tsx`
- Create: `resources/js/pages/booking/lookup.tsx`
- Create: `resources/js/components/checkin-qr.tsx`
- Create: `resources/js/components/printable-voucher.tsx`
- Test: `tests/Feature/CustomerVoucherAndLookupTest.php`

**Interfaces:**
- Consumes: Confirmed `Reservation` record with loaded `roomType`, `addons`, and `payments`.
- Produces:
  - Printable / downloadable voucher page.
  - Scannable digital check-in QR containing encrypted booking token for Cashier check-in (Phase 2).
  - Public lookup screen where guests search with Booking Code + Email/Phone.

- [ ] **Step 1: Write failing test for confirmation and lookup functionality**
Create `tests/Feature/CustomerVoucherAndLookupTest.php`:
  - Test `/booking/confirmation/{code}` displays confirmed details and payment reference.
  - Test `/booking/lookup` finds reservation with matching code and phone/email, and fails with mismatched phone/email.
  - Test `/booking/{code}/voucher` renders print-ready HTML view.

- [ ] **Step 2: Run test to verify it fails**
Run: `vendor/bin/pest tests/Feature/CustomerVoucherAndLookupTest.php`
Expected: FAIL.

- [ ] **Step 3: Implement Check-in QR & Printable Voucher Components**
  - Implement `resources/js/components/checkin-qr.tsx` generating a crisp QR code for front-desk scanning.
  - Implement `resources/js/components/printable-voucher.tsx` with dedicated `@media print` CSS ensuring hotel logo, guest name, booking code, check-in dates, and payment receipt print cleanly on standard A4/letter paper.

- [ ] **Step 4: Implement Confirmation Page (`booking/confirmation.tsx`)**
Celebratory confirmation banner ("Reservation Confirmed!"), booking reference badge with 1-click copy, digital check-in QR code, stay summary, hotel address & check-in guidelines (Check-in: 14:00, Check-out: 12:00), and "Print / Save Voucher" button.

- [ ] **Step 5: Implement Public Booking Lookup Page (`booking/lookup.tsx`)**
Card allowing guests to input their `Booking Code` and `Email or Phone Number`. Upon lookup, renders their active reservation status, stay dates, add-ons, and voucher download option.

- [ ] **Step 6: Run test to verify it passes**
Run: `vendor/bin/pest tests/Feature/CustomerVoucherAndLookupTest.php`
Expected: PASS.

- [ ] **Step 7: Run Pint Formatter**
Run: `vendor/bin/pint --format agent`

---

### Task 10: End-to-End Verification & Formatting

**Files:**
- Modify: Any files needing cleanup or polish
- Test: Complete backend suite & frontend build

- [ ] **Step 1: Run Full Pint Style Check**
Run: `vendor/bin/pint --format agent`
Expected: All files conform to Laravel Pint standards.

- [ ] **Step 2: Run Complete Pest Test Suite**
Run: `vendor/bin/pest`
Expected: 100% passing tests across all models, services, concurrencies, and customer HTTP endpoints.

- [ ] **Step 3: Run TypeScript & Vite Production Build**
Run: `npm run types:check && npm run build`
Expected: Successful production asset bundle generation without errors.

- [ ] **Step 4: Verify Database Seeding on Clean Database**
Run: `php artisan migrate:fresh --seed`
Expected: Clean migration and population of boutique hotel room types, amenities, add-ons, and settings.
