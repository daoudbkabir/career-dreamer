# Career Dreamer Design System

> Category: Education & Career Development

Career Dreamer is a calm, evidence-aware career product under Youth Academy. Its interface should help people make consequential decisions without making the software feel consequentially heavy. The visual language is warm, focused, and editorial: an ivory canvas, deep navy text, royal-blue actions, and generous breathing room.

## Visual theme and atmosphere

The product should feel like a trusted university career center brought into a contemporary digital workspace. It is **premium without being luxury-coded**, professional without feeling corporate, and approachable without becoming playful or childish. Use white and ivory surfaces to separate layers gently. Reserve royal blue for action, progress, and selected states. Avoid gradients, neon accents, robot imagery, heavy glass effects, and oversized dashboard panels.

The primary composition is a narrow, readable content column paired with an occasional supporting rail. Hero sections may use a quiet navy panel or blue marker detail, but the screen should always have one obvious next action and a clear visual reading order.

## Color roles and contrast intent

The Youth Academy foundation uses:

- **Royal Blue `#1565C0`** for primary actions, active navigation, links, and progress accents.
- **Deep Navy `#172033`** for headings, navigation, high-emphasis text, and dark surfaces.
- **Ivory `#F7F3EA`** for the product canvas and warm empty states.
- **White `#FFFFFF`** for cards, inputs, and clear reading surfaces.

Supporting semantic roles are muted slate text for secondary information, a pale blue tint for selected states, a green success tone for demonstrated skills, amber for needs-improvement signals, and a restrained red for errors only. All normal text should target at least 4.5:1 contrast against its actual background; large display text should target at least 3:1. Never communicate status through color alone.

## Typography

Use **DM Sans** for interface text and **Fraunces** sparingly for editorial display moments. DM Sans keeps forms, labels, and dense career information readable. Fraunces gives the landing statement and a few section headings a human, reflective quality without turning the product into a magazine. The core scale is compact and intentional: 12px metadata, 14px labels, 16px body, 18px lead, 24px section heading, 36px page heading, and 60px maximum display size on wide screens. Body leading should be relaxed at 1.6; headings should be tight at 1.1–1.2.

## Spacing and composition

Use a 4px base unit with a practical rhythm of 8, 12, 16, 24, 32, 48, and 64px. Page gutters start at 20px on mobile, 32px on tablet, and 56px on desktop. Content should generally cap at 1180px, while reading-heavy content should cap closer to 720px. Prefer aligned sections and asymmetry created by whitespace rather than decorative shapes.

## Shape, borders, and elevation

Cards use a moderate 16px radius; small controls use 10–12px; the product shell remains mostly rectangular and grounded. Use a 1px border in a low-contrast navy tint where grouping needs to be explicit. Elevation is soft and shallow: one neutral shadow for floating menus and one slightly stronger shadow for focused work surfaces. Do not stack shadows on every card.

## Navigation and shell

The public entry shell uses a compact top navigation with the lowercase **ya.** mark, the product name **Career Dreamer**, a small journey status cue, and an understated account action. On mobile, navigation collapses into a simple menu or prioritizes the next action; it must not become a dense horizontal strip. Authenticated workspace routes can use a persistent contextual rail after the shell is proven, but Phase 1 avoids an enterprise-style sidebar.

## Buttons, inputs, and cards

Primary buttons are royal blue with white text, 12px radius, and a clear verb such as “Start with your career identity” or “Explore job ideas.” Secondary buttons are white with a navy border. Tertiary actions are text links. Buttons have visible focus rings and a subtle pressed scale, not a bounce. Inputs use white surfaces, 12px radius, explicit labels, helpful descriptions, and inline validation. Cards should make their hierarchy obvious: eyebrow, title, supporting copy, and one next action.

## Status, loading, and empty states

Use sentence-case status labels and explain what a user can do next. Skill classifications should distinguish **Strong**, **Needs improvement**, **Not currently demonstrated**, and **Potentially useful**. A missing resume should say what information is needed and why; an empty saved-courses state should invite discovery rather than suggest failure. Skeletons should match the final layout and avoid infinite spinners for local actions.

## Interaction and motion

Motion is quiet and functional. Use the standard ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, around 200ms for entering and 140ms for exiting. Animate only opacity and transform. Use a small upward reveal for page sections and a short highlight transition for selected journey steps. Respect `prefers-reduced-motion: reduce` by removing non-essential transitions. Keyboard-initiated navigation should be immediate.

## Responsive behavior

Design from the smallest layout upward. On mobile, stack the journey, keep the primary CTA within the first viewport, turn paired card layouts into a single reading column, and preserve comfortable tap targets. On tablet, introduce two-column summaries where the supporting panel remains secondary. On desktop, use whitespace and a supporting rail for orientation; do not simply stretch cards across the screen.

## Accessibility expectations

Use semantic landmarks, one clear page heading, logical heading order, visible `:focus-visible` styles, accessible names for icon buttons, and labels that persist outside the input value. Maintain keyboard reachability for every action. Pair icons with text when an action is important. Provide text alternatives for progress and statuses. Never hide meaningful information behind hover-only interactions.

## Trust and content principles

Career advice must clearly distinguish facts, user-provided information, model interpretation, and unknowns. Avoid unsupported salary or labor-market claims. When a course is shown, make the provider, access status, source date, and official link visible where relevant. The UI should prefer “Not currently demonstrated in the information provided” over claiming that a user lacks a skill.

## Anti-patterns

Do not use AI-chat bubbles as the primary product metaphor, generic blue-purple gradients, huge feature tiles, noisy badges, decorative charts without a decision purpose, fake social proof, “guaranteed ATS success” language, fabricated sample achievements, or a full job-board layout in the foundation. Career Dreamer should feel like a connected guided journey, not a collection of AI utilities.

## Implementation notes

`tokens.css` is the canonical compiled token stylesheet for this package. The application mirrors these semantic values in `client/src/index.css`. `manifest.json` declares the package metadata and the canonical files. When a token changes, update the prose and both token sources together.
