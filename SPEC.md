# SPEC.md - Product Promotional Site

## Project Overview
- **Project Name**: Product Promo Landing
- **Type**: Promotional landing page (single page)
- **Core Functionality**: Showcase product features with compelling visuals and CTAs that link to Shopee
- **Target Users**: Potential customers browsing on mobile/desktop

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo and Shopee CTA button
- **Hero Section**: Full-viewport intro with product name, tagline, and primary CTA
- **Features Section**: 3-column grid showcasing key product features
- **Gallery Section**: Horizontal scrollable product images
- **Testimonials**: Customer reviews carousel
- **CTA Section**: Final push with Shopee link
- **Footer**: Minimal with social links

### Responsive Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (full layout)

### Visual Design

#### Color Palette
- **Background**: `#0D0D0D` (deep black)
- **Primary**: `#FF6B35` (vibrant coral/orange)
- **Secondary**: `#1A1A2E` (dark navy)
- **Accent**: `#F7C94B` (golden yellow)
- **Text Primary**: `#FFFFFF`
- **Text Muted**: `#9CA3AF`

#### Typography
- **Headings**: "Clash Display" (Google Fonts) - bold, modern
- **Body**: "Satoshi" (Fontshare) - clean sans-serif
- **Sizes**: 
  - H1: 72px (desktop), 48px (mobile)
  - H2: 48px (desktop), 32px (mobile)
  - Body: 18px

#### Spacing
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container max-width: 1200px
- Grid gap: 32px

#### Visual Effects
- Gradient mesh background on hero
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover scale on cards (1.02)
- Button glow effect on hover

### Components

1. **NavButton** - Shopee link button in header (pill shape, coral bg)
2. **Hero** - Large headline, subtext, dual CTA buttons
3. **FeatureCard** - Icon, title, description (dark card with border glow)
4. **GalleryImage** - Rounded corners, shadow
5. **TestimonialCard** - Quote, name, rating stars
6. **CTASection** - Bold headline, Shopee button with pulse animation

## Functionality Specification

### Core Features
- Smooth scroll navigation
- Scroll-triggered fade animations
- External link to Shopee (placeholder: https://shopee.com)
- Responsive image gallery
- Star rating display

### User Interactions
- Click "Beli di Shopee" → opens Shopee in new tab
- Scroll → elements fade in
- Hover on cards → subtle lift effect

## Acceptance Criteria
- [x] Page loads without errors
- [x] All sections visible and properly styled
- [x] Shopee button links work
- [x] Responsive on mobile/tablet/desktop
- [x] Animations trigger on scroll
- [x] No console errors

## Content Placeholder
- Product: "Smart Home Hub" (example product)
- Features: Connectivity, Voice Control, Energy Saving
- Use Shopee link as placeholder