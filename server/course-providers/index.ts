import type { ProviderAdapter } from "./types";

/**
 * Phase 1 intentionally ships no live provider adapters.
 * Add one adapter only after its official API, feed, or catalog authority is verified.
 */
export const providerAdapters: ProviderAdapter[] = [];

export function getProviderAdapter(slug: string) {
  return providerAdapters.find((adapter) => adapter.slug === slug);
}
