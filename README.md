# Career Dreamer

**Career Dreamer** is Youth Academy's AI-powered career exploration and preparation platform. It is designed to help students, graduates, and early-career users move from understanding themselves to exploring realistic career paths, preparing truthful applications, identifying skill gaps, and finding credible learning opportunities.

## Phase 1 status

This repository contains the initial foundation only:

- product architecture and security boundaries;
- OpenDesign-compatible Youth Academy design-system package;
- responsive Career Dreamer entry shell;
- initial domain tables for future user-scoped workflows;
- course provider adapter contract and example empty registry;
- scaffolded Manus OAuth, tRPC, Drizzle, storage, and Vitest infrastructure.

AI generation, job-description analysis, document parsing, course synchronization, and saved-career workflows are intentionally not presented as complete.

## Local development

```bash
pnpm install
pnpm dev
```

The project runs as a full-stack Vite/Express development server. Use the managed WebDev preview for browser verification.

## Checks

```bash
pnpm check
pnpm test
pnpm build
```

## Repository map

```text
client/                 React application and reusable UI
  src/pages/             Route-level experiences
  src/components/        Shared UI primitives and shells
  src/index.css          Semantic application tokens and global styles
drizzle/                 MySQL/TiDB schema and migrations
server/                  tRPC procedures, storage, auth, and integrations
  course-providers/      Official provider adapter boundaries
shared/                  Shared constants and domain types
DESIGN.md               Canonical product design guidance
ARCHITECTURE.md         Phase 1 architecture and security decisions
DEPLOYMENT.md           Managed runtime and release notes
manifest.json           OpenDesign package metadata
tokens.css              OpenDesign canonical semantic tokens
```

## Product principles

Career Dreamer should feel like a focused career platform rather than a generic AI chatbot. It must preserve factual integrity, distinguish known information from interpretation and unknowns, keep uploaded documents private, and answer the user's next-step question at every major stage.

## Data and AI safety

Never place API keys in browser code. Never invent a user's employment, education, achievements, certifications, skills, responsibilities, or measurable results. Course access labels must be supported by an official source or marked unknown. User documents should be stored in private object storage and referenced by metadata rather than copied into logs or database blobs.

## Next development phase

The recommended next phase is **Phase 2: Career Dreamer core UI shell**. This should turn the current entry shell into a connected, navigable workspace with route-level placeholders and shared journey navigation before adding AI workflows or provider integrations.
