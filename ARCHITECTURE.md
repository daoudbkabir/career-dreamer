# Career Dreamer Architecture

## Scope

This document describes the Phase 1 foundation for **Career Dreamer**, a Youth Academy product that helps students, graduates, and early-career users move from self-understanding to practical career action. Phase 1 establishes the product boundaries, information architecture, domain model, and security posture. It does not claim that the downstream AI workflows or provider integrations are complete.

## Repository status

The starting sandbox did not contain an existing Career Dreamer repository. A new project was initialized at `/home/ubuntu/career-dreamer` using the managed full-stack WebDev scaffold. There was therefore no legacy UI, route, database schema, deployment configuration, or test suite to preserve beyond the scaffold's framework code and auth plumbing.

## Existing stack

| Layer | Phase 1 choice | Notes |
| --- | --- | --- |
| Frontend | React 19, TypeScript, Vite | Client application with Wouter routing |
| Styling | Tailwind CSS 4, CSS custom properties, shadcn/ui primitives | Semantic tokens are defined in `client/src/index.css` |
| Server | Express 4 with tRPC 11 | Typed procedures under `/api/trpc` |
| Authentication | Manus OAuth scaffold | Session context is available through `useAuth` and protected procedures |
| Database | MySQL/TiDB through Drizzle ORM | Auth users are scaffolded; career entities are defined as the next persistence boundary |
| File storage | S3-compatible storage helpers | Intended for private career documents; no resume bytes are stored in the database |
| AI boundary | Server-side Manus built-in API helpers | AI is intentionally not called from the browser |
| Tests | Vitest | The scaffold includes an auth logout test |
| Hosting | Managed WebDev runtime | Autoscale is appropriate for request/response workflows; scheduled synchronization should use the platform's supported job mechanism later |

## Architectural principles

1. **One connected journey.** Profile information, selected paths, job requirements, application materials, skill gaps, and learning resources should compound rather than become isolated utilities.
2. **Truthful assistance.** AI may improve wording, structure, and relevance, but it must not invent employment, education, achievements, certifications, skills, or measurable results.
3. **Evidence before certainty.** Job requirements, course access status, and demand classifications must retain a source or be explicitly marked as unknown or needing verification.
4. **Private by default.** Uploaded resumes and generated materials are user-scoped records. Document bytes belong in private object storage and should be accessed through authorized server operations.
5. **Thin clients.** The browser renders typed responses and submits user-provided context. Secrets, model calls, provider credentials, course verification, and document processing remain server-side.
6. **Progressive delivery.** The project is deliberately starting with the shell and contracts instead of prematurely building a job board, auto-apply behavior, or a broad integration matrix.

## Application layers

### Presentation layer

`client/src/pages` contains route-level experiences. `client/src/components` contains reusable navigation, cards, form controls, status indicators, and future career workflow modules. `client/src/index.css` is the semantic token source for the product UI.

### Application/API layer

`server/routers.ts` is the typed entry point for product procedures. Future routers should be split by bounded context as they grow: `careerIdentity`, `exploration`, `jobAnalysis`, `documents`, `skillGap`, and `courses`. Every mutation should validate input with Zod, check ownership, and return a typed status suitable for an accessible UI state.

### Domain and persistence layer

`drizzle/schema.ts` contains the initial entity boundary. User identity remains in the scaffold's `users` table. Career Dreamer entities are user-scoped where appropriate and keep source, verification, and provenance fields explicit rather than hiding them in unstructured JSON.

### Integration layer

Provider adapters live under `server/course-providers`. Each adapter will eventually discover and normalize official provider records into the shared course shape. Adapters should report `unknown` when access status or freshness cannot be verified; they should never infer that a course is free from an AI response alone.

## Information architecture

### Public and entry routes

- `/` — Career Dreamer entry and connected journey overview.
- `/career-identity` — guided profile capture and career identity summary.
- `/explore` — recommended paths and related job ideas.
- `/career-path/:slug` — a deeper view of one career direction.
- `/take-action` — the starting point for a target role and job description.

### Preparation routes

- `/job-analysis` — job description analysis and requirements summary.
- `/resume` — truthful, editable, job-tailored resume workspace.
- `/cover-letter` — editable cover letter workspace.
- `/skill-gap` — evidence-aware comparison between user information and role requirements.

### Learning and personal workspace routes

- `/build-skills` — course discovery with official provider links.
- `/my-career` — saved paths, jobs, courses, documents, and next action.

Only the initial shell and route structure are established in Phase 1. The remaining routes should be added as their corresponding phases are implemented.

## AI architecture

The browser will call typed server procedures, never provider endpoints or AI APIs directly. A future AI request should follow this path:

```text
User input + owned profile data
        ↓
Validated server procedure
        ↓
Prompt builder with explicit factual constraints
        ↓
Server-side model call
        ↓
Structured response + provenance / uncertainty fields
        ↓
User review and editable UI
        ↓
Explicit save
```

AI outputs are drafts until the user reviews and saves them. Prompts must treat resumes, job descriptions, and external text as untrusted input to reduce prompt injection risk. The server must avoid logging full document contents and should redact sensitive fields in operational logs.

## Course integration architecture

Provider adapters implement a common contract that returns normalized candidates, source URLs, a source capture timestamp, and a verification status. The order of authority is:

```text
Official API → Official feed → Official public catalog → Approved structured source → Admin/manual verification
```

Course discovery, duplicate detection, normalization, access verification, skill classification, and persistence should be separate steps. Scheduled synchronization is intentionally deferred until an official provider strategy and the platform's supported background execution model are confirmed.

## Privacy and security boundaries

- Resume and LinkedIn content must be private, user-scoped, and stored only for an explicit product purpose.
- File uploads must be validated by type, size, ownership, and safe storage key generation.
- API keys and provider credentials remain server-side environment variables.
- Generated documents should use safe HTML/text rendering and never execute model-provided markup.
- Course links should be retained as official URLs and opened deliberately in a new browser context where appropriate.
- Rate limits, audit events, retention policies, and deletion behavior are production follow-ups before handling sensitive documents at scale.

## Deferred decisions

The following are **Unknown / Needs verification** until official documentation and product requirements are available: exact provider APIs and licensing terms, final document parsing libraries, retention duration, model selection and cost controls, production rate limits, and the final authentication/account deletion UX.

## Phase 1 acceptance boundary

Phase 1 is complete when the project has a coherent responsive shell, a documented architecture, a semantic Youth Academy design system, initial domain tables and provider interfaces, passing static checks, and a saved checkpoint. It is not complete merely because a visual mock is attractive, nor does it imply that AI generation, job analysis, or course synchronization is already live.
