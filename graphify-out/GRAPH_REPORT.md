# Graph Report - hotel_mgs  (2026-11-09)

## Corpus Check
- Corpus is ~28,771 words - fits in a single context window. You may not need a graph.

## Summary
- 905 nodes · 2054 edges · 69 communities (36 shown, 33 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Two-Factor Auth & Dialog Components
- Core Service Providers & Middleware
- Frontend Runtime Dependencies
- Card & Feedback UI Components
- App Shell & Breadcrumbs Layout
- User Navigation & Dropdown Menus
- Database Migrations & Schemas
- Appearance & Application Bootstrap
- Sidebar Navigation & Menus
- Navigation Menu & Select Components
- CI Test GitHub Actions
- Frontend Dev Dependencies & Compilers
- App Header & Tooltip Elements
- Settings Layout & Separator UI
- Settings & Profile Controllers
- Shadcn Component Configuration
- User Eloquent Model
- TypeScript Configuration & Paths
- Database Seeding & Cache Config
- Rollup & Native Build Tooling
- Profile & Settings Form Requests
- Composer Tooling Scripts
- Security & Auth Feature Tests
- Toggle Group UI Components
- Fortify User Actions & Rules
- Composer Autoload & Dev Configuration
- PHP Development Tooling Packages
- Dependabot Dependency Automation
- Auth & Passkey Type Definitions
- Sheet & Drawer UI Components
- Vite & Tailwind Build Plugins
- Dashboard Pages & Placeholders
- Core Backend Dependencies
- Pest Test Suite Setup
- Profile Validation Concern Rules
- Composer Plugin Configurations
- Frontend Build Scripts
- Collapsible UI Components
- App PSR-4 Autoloading
- Laravel Installer Composer Extra
- Database Seeder Setup
- Badge & Slot UI Components
- Two-Factor Challenge Feature Tests
- PNPM Workspace Configuration
- Icon Component Wrapper
- Checkbox Radix Dependency
- Dialog Radix Dependency
- Label Radix Dependency
- React DOM Runtime Dependency

## God Nodes (most connected - your core abstractions)
1. `cn()` - 127 edges
2. `react` - 50 edges
3. `Button()` - 42 edges
4. `@inertiajs/react` - 39 edges
5. `AppHeader()` - 30 edges
6. `lucide-react` - 28 edges
7. `User` - 26 edges
8. `InputError()` - 26 edges
9. `Input()` - 20 edges
10. `Label()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  resources/js/components/ui/breadcrumb.tsx → resources/js/lib/utils.ts
- `CardFooter()` --calls--> `cn()`  [EXTRACTED]
  resources/js/components/ui/card.tsx → resources/js/lib/utils.ts
- `DropdownMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  resources/js/components/ui/dropdown-menu.tsx → resources/js/lib/utils.ts
- `DropdownMenuRadioItem()` --calls--> `cn()`  [EXTRACTED]
  resources/js/components/ui/dropdown-menu.tsx → resources/js/lib/utils.ts
- `DropdownMenuShortcut()` --calls--> `cn()`  [EXTRACTED]
  resources/js/components/ui/dropdown-menu.tsx → resources/js/lib/utils.ts

## Import Cycles
- None detected.

## Communities (69 total, 33 thin omitted)

### Community 0 - "Two-Factor Auth & Dialog Components"
Cohesion: 0.05
Nodes (69): @inertiajs/react, input-otp, @laravel/passkeys, lucide-react, react, DeleteUser(), Heading(), InputError() (+61 more)

### Community 1 - "Core Service Providers & Middleware"
Cohesion: 0.06
Nodes (15): HandleAppearance, HandleInertiaRequests, AppServiceProvider, {closure#1}(), {closure#1}(), {closure#10}(), {closure#2}(), {closure#3}() (+7 more)

### Community 2 - "Frontend Runtime Dependencies"
Cohesion: 0.06
Nodes (33): dependencies, concurrently@^10.0.3, @inertiajs/react@^3.0.0, input-otp@^1.4.2, @laravel/passkeys@^0.2.0, lucide-react@^0.475.0, @radix-ui/react-avatar@^1.1.3, @radix-ui/react-dropdown-menu@^2.1.6 (+25 more)

### Community 3 - "Card & Feedback UI Components"
Cohesion: 0.15
Nodes (20): AlertError(), AppLogo(), AppLogoIcon(), Props, TwoFactorRecoveryCodes(), Alert(), AlertDescription(), AlertTitle() (+12 more)

### Community 4 - "App Shell & Breadcrumbs Layout"
Cohesion: 0.15
Nodes (21): AppContent(), Props, AppShell(), Props, AppSidebarHeader(), Breadcrumbs(), Breadcrumb(), BreadcrumbEllipsis() (+13 more)

### Community 5 - "User Navigation & Dropdown Menus"
Cohesion: 0.11
Nodes (23): NavUser(), DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuGroup(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem() (+15 more)

### Community 6 - "Database Migrations & Schemas"
Cohesion: 0.12
Nodes (11): {closure#1}(), {closure#2}(), {closure#3}(), {closure#1}(), {closure#2}(), {closure#1}(), {closure#2}(), {closure#3}() (+3 more)

### Community 7 - "Appearance & Application Bootstrap"
Cohesion: 0.14
Nodes (23): sonner, withApp(), AppearanceToggleTab(), Toaster(), TooltipProvider(), Appearance, applyTheme(), getStoredAppearance() (+15 more)

### Community 8 - "Sidebar Navigation & Menus"
Cohesion: 0.18
Nodes (24): AppSidebar(), footerNavItems, mainNavItems, NavFooter(), NavMain(), SidebarContent(), SidebarContext, SidebarFooter() (+16 more)

### Community 9 - "Navigation Menu & Select Components"
Cohesion: 0.17
Nodes (17): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+9 more)

### Community 10 - "CI Test GitHub Actions"
Cohesion: 0.10
Nodes (20): runs-on, steps, jobs, ci, name, on, pull_request, push (+12 more)

### Community 11 - "Frontend Dev Dependencies & Compilers"
Cohesion: 0.12
Nodes (20): clsx@^2.1.1, @types/react@^19.2.0, devDependencies, babel-plugin-react-compiler@^1.0.0, @laravel/vite-plugin-wayfinder@^0.1.3, @rolldown/plugin-babel@^0.2.3, @types/node@^22.13.5, vite-plus@1.4.0 (+12 more)

### Community 12 - "App Header & Tooltip Elements"
Cohesion: 0.22
Nodes (16): AppHeader(), mainNavItems, Props, rightNavItems, Avatar(), AvatarFallback(), AvatarImage(), Sheet() (+8 more)

### Community 13 - "Settings Layout & Separator UI"
Cohesion: 0.14
Nodes (12): Separator(), SidebarMenuSkeleton(), SidebarSeparator(), Skeleton(), IsCurrentOrParentUrlFn, IsCurrentUrlFn, useCurrentUrl(), UseCurrentUrlReturn (+4 more)

### Community 14 - "Settings & Profile Controllers"
Cohesion: 0.18
Nodes (4): Controller, ProfileController, SecurityController, PasswordUpdateRequest

### Community 15 - "Shadcn Component Configuration"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 17 - "TypeScript Configuration & Paths"
Cohesion: 0.12
Nodes (15): compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 19 - "Rollup & Native Build Tooling"
Cohesion: 0.13
Nodes (15): optionalDependencies, @laravel/multiplex@^0.4.1, lightningcss-linux-x64-gnu@^1.29.1, lightningcss-win32-x64-msvc@^1.29.1, @rollup/rollup-linux-x64-gnu@4.9.5, @rollup/rollup-win32-x64-msvc@4.9.5, @tailwindcss/oxide-linux-x64-gnu@^4.0.1, @tailwindcss/oxide-win32-x64-msvc@^4.0.1 (+7 more)

### Community 20 - "Profile & Settings Form Requests"
Cohesion: 0.24
Nodes (3): ProfileDeleteRequest, ProfileUpdateRequest, TwoFactorAuthenticationRequest

### Community 21 - "Composer Tooling Scripts"
Cohesion: 0.15
Nodes (13): scripts, ci:check, dev, lint, lint:check, post-autoload-dump, post-create-project-cmd, post-root-package-install (+5 more)

### Community 22 - "Security & Auth Feature Tests"
Cohesion: 0.19
Nodes (3): {closure#2}(), {closure#2}(), {closure#5}()

### Community 23 - "Toggle Group UI Components"
Cohesion: 0.21
Nodes (11): class-variance-authority@^0.7.1, @radix-ui/react-toggle@^1.1.2, @radix-ui/react-toggle-group@^1.1.2, class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, ToggleGroup(), ToggleGroupContext (+3 more)

### Community 24 - "Fortify User Actions & Rules"
Cohesion: 0.24
Nodes (3): CreateNewUser, ResetUserPassword, PasswordValidationRules

### Community 25 - "Composer Autoload & Dev Configuration"
Cohesion: 0.17
Nodes (11): autoload-dev, psr-4, description, keywords, license, minimum-stability, name, prefer-stable (+3 more)

### Community 26 - "PHP Development Tooling Packages"
Cohesion: 0.17
Nodes (12): require-dev, fakerphp/faker, larastan/larastan, laravel/boost, laravel/pail, laravel/pao, laravel/pint, laravel/sail (+4 more)

### Community 27 - "Dependabot Dependency Automation"
Cohesion: 0.17
Nodes (11): default-days, patterns, github-actions, interval, updates, cooldown, directory, groups (+3 more)

### Community 29 - "Auth & Passkey Type Definitions"
Cohesion: 0.22
Nodes (9): Auth, Passkey, TwoFactorSecretKey, TwoFactorSetupData, User, InertiaConfig, @inertiajs/core, InputHTMLAttributes (+1 more)

### Community 31 - "Sheet & Drawer UI Components"
Cohesion: 0.31
Nodes (8): SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle(), Sidebar()

### Community 32 - "Vite & Tailwind Build Plugins"
Cohesion: 0.22
Nodes (8): @inertiajs/vite@^3.0.0, laravel-vite-plugin@^3.0.0, @tailwindcss/vite@^4.1.11, @vitejs/plugin-react@^6.1.1, @inertiajs/vite, laravel-vite-plugin, @tailwindcss/vite, @vitejs/plugin-react

### Community 33 - "Dashboard Pages & Placeholders"
Cohesion: 0.28
Nodes (3): PlaceholderPattern(), PlaceholderPatternProps, Dashboard()

### Community 34 - "Core Backend Dependencies"
Cohesion: 0.25
Nodes (8): require, inertiajs/inertia-laravel, laravel/chisel, laravel/fortify, laravel/framework, laravel/tinker, laravel/wayfinder, php

### Community 39 - "Composer Plugin Configurations"
Cohesion: 0.29
Nodes (7): pestphp/pest-plugin, php-http/discovery, config, allow-plugins, optimize-autoloader, preferred-install, sort-packages

### Community 40 - "Frontend Build Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, build:ssr, check, check:fix, dev, types:check

### Community 45 - "App PSR-4 Autoloading"
Cohesion: 0.40
Nodes (5): autoload, psr-4, App\\, Database\\Factories\\, Database\\Seeders\\

### Community 46 - "Laravel Installer Composer Extra"
Cohesion: 0.40
Nodes (5): extra, laravel, post-create-project, dont-discover, installer

### Community 49 - "Badge & Slot UI Components"
Cohesion: 0.50
Nodes (4): @radix-ui/react-slot@^1.2.3, @radix-ui/react-slot, Badge(), badgeVariants

## Knowledge Gaps
- **33 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Navigation Menu & Select Components` to `Two-Factor Auth & Dialog Components`, `Card & Feedback UI Components`, `App Shell & Breadcrumbs Layout`, `User Navigation & Dropdown Menus`, `Appearance & Application Bootstrap`, `Sidebar Navigation & Menus`, `App Header & Tooltip Elements`, `Settings Layout & Separator UI`, `Badge & Slot UI Components`, `Toggle Group UI Components`, `Sheet & Drawer UI Components`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `Two-Factor Auth & Dialog Components` be split into smaller, more focused modules?**
  _Cohesion score 0.05343511450381679 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Two-Factor Auth & Dialog Components` to `Dashboard Pages & Placeholders`, `Frontend Runtime Dependencies`, `Card & Feedback UI Components`, `App Shell & Breadcrumbs Layout`, `User Navigation & Dropdown Menus`, `Appearance & Application Bootstrap`, `Sidebar Navigation & Menus`, `Navigation Menu & Select Components`, `Frontend Dev Dependencies & Compilers`, `App Header & Tooltip Elements`, `Settings Layout & Separator UI`, `Badge & Slot UI Components`, `Toggle Group UI Components`, `Sheet & Drawer UI Components`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `Core Service Providers & Middleware` be split into smaller, more focused modules?**
  _Cohesion score 0.05805515239477504 - nodes in this community are weakly interconnected._
- **Why does `@inertiajs/react` connect `Two-Factor Auth & Dialog Components` to `Dashboard Pages & Placeholders`, `Frontend Runtime Dependencies`, `Card & Feedback UI Components`, `App Shell & Breadcrumbs Layout`, `User Navigation & Dropdown Menus`, `Appearance & Application Bootstrap`, `Sidebar Navigation & Menus`, `Frontend Dev Dependencies & Compilers`, `App Header & Tooltip Elements`, `Settings Layout & Separator UI`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Should `Frontend Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `Card & Feedback UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.14516129032258066 - nodes in this community are weakly interconnected._