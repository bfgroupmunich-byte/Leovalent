# Technical Specification - Psychologische Beratung

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTA buttons, form submit | Custom colors, hover effects |
| Card | Service cards | 3D hover transforms |
| Accordion | FAQ section | Custom animation, border effects |
| Input | Contact form fields | Focus animations |
| Textarea | Contact form message | Focus animations |
| Separator | Visual dividers | Animated draw-on |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| AnimatedCounter | Stats counter animation | components/AnimatedCounter.tsx |
| ScrollReveal | Intersection Observer wrapper | components/ScrollReveal.tsx |
| TestimonialSlider | Auto-advancing testimonials | components/TestimonialSlider.tsx |
| TimelineStep | Approach section steps | components/TimelineStep.tsx |
| FloatingParticles | Hero ambient particles | components/FloatingParticles.tsx |
| AnimatedText | Text reveal animations | components/AnimatedText.tsx |

### Section Components
| Section | File | Key Features |
|---------|------|--------------|
| Hero | sections/Hero.tsx | Full viewport, parallax, particles |
| Quote | sections/Quote.tsx | Dark background, word stagger |
| About | sections/About.tsx | Image reveal, counter stats |
| Services | sections/Services.tsx | 3D cards, icon animations |
| Approach | sections/Approach.tsx | Sticky image, timeline |
| Testimonials | sections/Testimonials.tsx | Slider, crossfade |
| FAQ | sections/FAQ.tsx | Accordion with animations |
| Contact | sections/Contact.tsx | Form with focus effects |
| Footer | sections/Footer.tsx | Link animations |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero background parallax | GSAP ScrollTrigger | scrub: true, y transform | Medium |
| Hero title clip reveal | GSAP + SplitType | clipPath animation on words | Medium |
| Hero floating particles | CSS + React | Random positioned divs with CSS animation | Low |
| Hero CTA glow pulse | CSS | @keyframes box-shadow pulse | Low |
| Quote word stagger | GSAP + SplitType | stagger: 0.05, y + opacity | Medium |
| About image clip reveal | GSAP ScrollTrigger | clipPath: inset animation | Medium |
| About counter animation | Custom React hook | requestAnimationFrame counting | Medium |
| Services 3D card flip | CSS | perspective + rotateX transform | Medium |
| Services card hover lift | CSS | translateY + translateZ + shadow | Low |
| Approach timeline fill | GSAP ScrollTrigger | scaleY linked to scroll progress | High |
| Approach step activation | GSAP ScrollTrigger | scrub with snap points | High |
| Testimonial crossfade | React state + CSS | opacity + transform transition | Medium |
| FAQ accordion expand | CSS + React | height animation with overflow | Medium |
| FAQ icon rotation | CSS | rotate transform on open | Low |
| Contact input focus border | CSS | scaleX animation on ::after | Low |
| Footer link underline | CSS | scaleX from 0 to 1 | Low |
| Scroll reveal (global) | Intersection Observer | Generic wrapper component | Medium |
| Navigation glass effect | CSS | backdrop-filter on scroll | Low |

---

## Animation Library Choices

### GSAP + ScrollTrigger
**Rationale:** Industry-standard for complex scroll animations, excellent performance, precise control
**Used for:**
- Hero parallax and title reveals
- About image reveal
- Approach timeline progress
- Section entrance animations

**Installation:**
```bash
npm install gsap @gsap/react
```

### CSS Animations
**Rationale:** Best performance for simple effects, no JS overhead
**Used for:**
- Hover effects (buttons, cards, links)
- Continuous ambient animations (particles, pulses)
- Accordion transitions
- Input focus states

### Intersection Observer API
**Rationale:** Native API, efficient triggering
**Used for:**
- Scroll reveal wrapper
- Counter animation trigger
- Lazy animation initialization

### React State (Minimal)
**Rationale:** For component-specific state only
**Used for:**
- Testimonial slider index
- FAQ accordion open states
- Form validation states

---

## Project File Structure

```
app/
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── about-portrait.jpg
│       ├── approach-session.jpg
│       └── contact-office.jpg
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── AnimatedCounter.tsx    # Stats counter
│   │   ├── ScrollReveal.tsx       # Intersection Observer wrapper
│   │   ├── TestimonialSlider.tsx  # Testimonials carousel
│   │   ├── TimelineStep.tsx       # Approach step component
│   │   ├── FloatingParticles.tsx  # Hero particles
│   │   └── AnimatedText.tsx       # Text reveal animations
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Quote.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Approach.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollProgress.ts   # Scroll position tracking
│   │   ├── useInView.ts           # Intersection Observer hook
│   │   └── useCountUp.ts          # Counter animation hook
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── styles/
│   │   └── animations.css         # Custom CSS animations
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Dependencies

### Core
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0"
}
```

### Animation
```json
{
  "gsap": "^3.12.0",
  "@gsap/react": "^2.0.0"
}
```

### UI
```json
{
  "tailwindcss": "^3.4.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0",
  "lucide-react": "^0.300.0"
}
```

### Fonts
- Google Fonts: Cormorant Garamond, Work Sans
- Loaded via CSS @import

---

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary-dark: #1d2721;
  --color-primary-light: #ffffff;
  --color-accent: #b0d9a5;
  --color-accent-hover: #a0c995;
  --color-muted: rgba(29, 39, 33, 0.6);
  --color-overlay: rgba(29, 39, 33, 0.5);
  
  /* Animation Easings */
  --ease-breath-in: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-breath-out: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-flow: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.68, -0.15, 0.265, 1.15);
  --ease-dramatic: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-meditation: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Durations */
  --duration-micro: 200ms;
  --duration-fast: 400ms;
  --duration-medium: 600ms;
  --duration-slow: 1000ms;
  
  /* Spacing */
  --section-padding: 120px;
  --container-max: 1280px;
}
```

---

## Responsive Strategy

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Animation Scaling

**Desktop (lg+):**
- Full animation suite
- All parallax effects
- 3D card transforms
- Floating particles

**Tablet (md-lg):**
- Reduced parallax (50% intensity)
- Simplified 3D (no rotateX)
- Fewer particles

**Mobile (<md):**
- Essential animations only
- No parallax
- No particles
- Simpler entrances

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance Budget

### Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Animation frame rate: 60fps

### Optimizations
- Lazy load images below fold
- Use `will-change` sparingly
- Implement `content-visibility: auto`
- Throttle scroll handlers
- Use CSS transforms only
- Defer non-critical animations

---

## Implementation Phases

### Phase 1: Setup
1. Initialize project with webapp-building skill
2. Install GSAP and dependencies
3. Set up CSS custom properties
4. Configure Tailwind with custom colors

### Phase 2: Components
1. Build reusable animation components
2. Create section components (static first)
3. Implement shadcn/ui components

### Phase 3: Animations
1. Add scroll reveal wrapper
2. Implement GSAP ScrollTrigger animations
3. Add hover and interaction effects
4. Test performance

### Phase 4: Polish
1. Add ambient animations
2. Fine-tune timings
3. Test responsive behavior
4. Add reduced motion support

### Phase 5: Build & Deploy
1. Optimize images
2. Build production
3. Deploy
