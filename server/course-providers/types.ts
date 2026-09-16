export type ProviderIntegrationMethod =
  | "api"
  | "feed"
  | "catalog"
  | "structured_source"
  | "manual_verification"
  | "unknown";

export type CourseAccessType =
  | "fully_free"
  | "free_to_audit"
  | "free_course_paid_certificate"
  | "free_with_financial_aid"
  | "free_certificate"
  | "paid"
  | "unknown";

export type VerificationState = "verified" | "needs_verification" | "unknown";

export type CourseCandidate = {
  externalId?: string;
  title: string;
  provider: string;
  providerLogo?: string;
  description?: string;
  skill?: string;
  skillCategory?: string;
  careerField?: string;
  demandLevel?: "high" | "growing" | "moderate" | "niche" | "unknown";
  difficulty?: string;
  duration?: string;
  accessType: CourseAccessType;
  certificateType?: string;
  language?: string;
  officialCourseUrl: string;
  sourceUrl: string;
  firstDiscovered: Date;
  lastVerified?: Date;
  lastUpdated: Date;
  verification: VerificationState;
};

export type ProviderAdapter = {
  slug: string;
  name: string;
  integrationMethod: ProviderIntegrationMethod;
  credentialsRequired: boolean;
  discoverCourses: (input: {
    query?: string;
    careerField?: string;
    skill?: string;
  }) => Promise<CourseCandidate[]>;
};
