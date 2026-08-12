Build a production-quality, mobile-first responsive web application based on the attached BD ASTRO home-screen reference.

IMPORTANT:
This is not a native iPhone application.
Do not generate an iOS app.
Do not use SwiftUI, UIKit, native tab-bar conventions, or device-specific fixed positioning.

This is a responsive web app built with:
- React
- TypeScript
- Tailwind CSS
- Reusable functional components
- Mobile-first responsive CSS

Treat the attached home screen as the visual source of truth.

Do not redesign it.
Do not reinterpret the brand.
Do not replace its visual language with a generic astrology template.
Recreate the interface faithfully while converting it into a responsive, reusable web design system.

PRIMARY VIEWPORT BEHAVIOUR

Design mobile-first for viewport widths from 360px to 430px.

The interface must work correctly at:
- 360px
- 375px
- 390px
- 412px
- 430px

For screens wider than 480px:
- Keep the core app experience inside a centered responsive content column
- Use a maximum content width of approximately 480px
- Do not transform it into an unrelated desktop dashboard
- Preserve the same mobile product experience

Use:
- width: 100%
- min-height: 100dvh
- responsive horizontal padding
- fluid typography where appropriate
- CSS grid and flexbox
- Tailwind responsive utilities
- env(safe-area-inset-top)
- env(safe-area-inset-bottom)

Do not use fixed pixel positioning for the overall layout.
Do not absolutely position major sections.
Do not stretch or distort images.
Do not place the entire interface inside a fake phone frame.

HOME-SCREEN DESIGN DIRECTION

The visual language is:
- Premium Indian spiritual guidance platform
- Warm ivory and soft cream background
- Deep maroon primary brand colour
- Saffron and restrained gold accents
- Dark warm-brown typography
- Soft peach and beige surfaces
- Thin warm borders
- Subtle shadows
- Large but refined rounded corners
- Calm, trustworthy and premium
- Spiritual without looking old-fashioned
- Modern without looking like a generic fintech product

Do not use:
- Bright purple
- Neon gradients
- Generic blue SaaS colours
- Heavy black cards
- Material Design styling
- Excessive glassmorphism
- Cartoon religious icons
- Decorative clutter

TYPOGRAPHY

Support both Hindi and English.

Use a refined Devanagari-compatible font for Hindi and a clean modern sans-serif for interface text.

Create a clear typography system for:
- Hero heading
- Section heading
- Card title
- Body text
- Supporting text
- Button text
- Labels
- Prices
- Ratings
- Status indicators

Hindi must render correctly without clipping, incorrect line-height, broken conjuncts or cramped spacing.

DESIGN TOKENS

Create a centralized token structure for:

Colours:
- background
- surface
- surface-muted
- maroon-primary
- maroon-dark
- saffron
- gold
- text-primary
- text-secondary
- border
- success
- warning
- error

Spacing:
- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48

Radius:
- small
- medium
- large
- extra-large
- pill

Shadows:
- subtle card shadow
- elevated card shadow
- sticky-navigation shadow

Do not scatter arbitrary colour values and spacing values throughout the code.

APP SHELL

Build a reusable application shell containing:
- Responsive header
- Hamburger navigation
- BD ASTRO brand area
- Notification button
- Scrollable main-content region
- Persistent mobile bottom navigation
- Safe-area handling
- Shared page container

The bottom navigation must be fixed or sticky appropriately without covering page content.

Add sufficient bottom padding to the main content so the final section remains fully visible above the navigation.

HOME-SCREEN CONTENT HIERARCHY

Build the home page as a vertically scrollable responsive webpage.

The home screen should contain:

1. Header
2. Hero guidance banner
3. Trust and credibility strip
4. Featured verified astrologers
5. Primary service shortcuts
6. Live Darbar section
7. Guruji’s daily message
8. Upcoming events
9. Kundli or guidance promotional card
10. Bottom navigation

The hero should establish trust in Guruji and BD ASTRO.

However, the commercial conversion priority should also strongly support consultation with verified astrologers.

The astrologer consultation section must appear immediately after the hero and trust strip.

Do not make Guruji appear available for unlimited personal consultations.

Guruji-related actions should communicate:
- Submit a question
- Apply for weekly selection
- Watch Live Darbar

Verified astrologer actions should communicate:
- Available now
- Call
- Chat
- Price per minute
- Rating
- Experience
- Expertise

COMPONENT SYSTEM

Create reusable components for:

- AppHeader
- NotificationButton
- HeroBanner
- TrustItem
- TrustStrip
- SectionHeader
- AstrologerCard
- AstrologerCarousel
- OnlineStatus
- Rating
- PricePerMinute
- CallButton
- ChatButton
- ServiceShortcut
- ServiceGrid
- LiveDarbarCard
- DailyMessageCard
- EventCard
- PromotionalCard
- BottomNavigation
- BottomNavigationItem
- PrimaryButton
- SecondaryButton
- Badge
- EmptyState
- LoadingSkeleton

Create component variants rather than duplicating markup.

ASTROLOGER SECTION

The featured astrologers should use a horizontal swipeable layout on mobile.

Show approximately 1.3 to 1.7 cards within the viewport so users understand that the section is horizontally scrollable.

Each astrologer card must include:
- Portrait
- Verified indicator
- Online, busy or offline status
- Name
- Expertise
- Years of experience
- Rating and review count
- Price per minute
- Call action
- Chat action

This section should feel commercially prominent without overpowering the brand.

INTERACTIONS

Add realistic prototype interactions for:
- Hamburger menu
- Notifications
- Hero primary action
- Submit question
- Weekly Guruji selection
- Astrologer call
- Astrologer chat
- View all astrologers
- Live Darbar
- Upcoming events
- Bottom navigation

Use temporary routes and mock data.

Do not connect a real backend yet.

ACCESSIBILITY

- Minimum tap target approximately 44px
- Strong text contrast
- Visible focus states
- Semantic buttons and links
- Accessible labels
- Keyboard support
- Correct heading hierarchy
- Do not communicate status through colour alone

IMAGE HANDLING

Use the attached hero image as the composition reference.

Preserve the relationship between:
- Hindi headline
- Temple background
- Guruji portrait
- Supporting copy
- Trust strip

Create the hero using responsive layers and containers rather than using the entire screenshot as one flattened background image.

Use object-fit and responsive positioning.
The portrait must not crop incorrectly at narrower widths.

OUTPUT REQUIRED

Produce:
1. The responsive home page
2. A reusable app shell
3. A centralized design-token system
4. Reusable components
5. Mock data structures
6. Clean route-ready architecture
7. Semantic component and file names
8. No duplicated UI code
9. No fake phone frame
10. No native-app implementation

Before adding any additional screens, complete the home page and verify that it works correctly at 360px, 390px and 430px widths.