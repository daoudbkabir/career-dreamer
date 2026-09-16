import { describe, expect, it } from "vitest";
import { getProviderAdapter, providerAdapters } from "./index";

describe("course provider registry", () => {
  it("starts empty until an official provider adapter is verified", () => {
    expect(providerAdapters).toEqual([]);
    expect(getProviderAdapter("microsoft-learn")).toBeUndefined();
  });
});
