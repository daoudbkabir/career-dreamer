# Career Dreamer Deployment Notes

## Current runtime

Career Dreamer uses the managed WebDev full-stack runtime created with the `web-db-user` scaffold. The development server runs the React/Vite client and Express/tRPC server together. Production builds generate the Vite client and a bundled Node server.

The project is currently a foundation and should be treated as a preview-quality product shell until document privacy, error handling, rate limits, and production QA are completed.

## Environment configuration

The scaffold provides server-side environment variables for the database, session signing, Manus OAuth, built-in APIs, and storage. Code should read these through the existing `server/_core/env.ts` boundary. Do not commit `.env` files, hard-code secrets, or expose server-only API keys in `VITE_*` variables.

## Database rollout

When a product table changes:

1. Update `drizzle/schema.ts`.
2. Generate a migration with `pnpm drizzle-kit generate`.
3. Review the generated SQL.
4. Apply it through the managed project database workflow.
5. Run `pnpm check`, `pnpm test`, and a browser verification pass.

Do not assume local schema files are enough; the database and generated migration must remain synchronized.

## File storage and privacy

Resume and other career documents must use the existing server-side storage helpers. Store only metadata and private object references in the database. Validate file size and MIME type, scope access to the authenticated owner, and avoid logging contents. A production launch should define retention and deletion behavior before accepting sensitive documents.

## Release checks

Before a meaningful release:

```bash
pnpm check
pnpm test
pnpm build
```

Then verify the primary routes at desktop and mobile widths, keyboard focus order, empty/loading/error states, authentication transitions, and official course-link behavior when course work is implemented.

## Background synchronization

Automatic course discovery is not enabled in Phase 1. Later synchronization should use the managed WebDev background execution model supported by the project, with provider-specific adapters, bounded runs, deduplication, access-status verification, and audit metadata. Do not add a long-lived local worker or assume a provider has an API without checking its official documentation.

## Known deployment risks

- AI and document workflows are not yet implemented and require server-only secrets and input limits.
- The course provider registry is an interface, not a live synchronization service.
- Schema tables establish the contract but do not replace production authorization tests.
- External claims about demand, course access, or job requirements need source capture and freshness handling.
