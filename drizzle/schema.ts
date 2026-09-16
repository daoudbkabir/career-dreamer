import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/** Core user table backing the Manus OAuth flow. */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/** User-provided career identity inputs; keep facts separate from generated interpretations. */
export const careerProfiles = mysqlTable("career_profiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  interests: text("interests"),
  strengths: text("strengths"),
  preferredActivities: text("preferredActivities"),
  education: text("education"),
  experience: text("experience"),
  skills: text("skills"),
  preferences: text("preferences"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CareerProfile = typeof careerProfiles.$inferSelect;
export type InsertCareerProfile = typeof careerProfiles.$inferInsert;

/** Curated career directions; evidence/source fields keep external claims reviewable. */
export const careerPaths = mysqlTable("career_paths", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  overview: text("overview").notNull(),
  responsibilities: text("responsibilities"),
  importantSkills: text("importantSkills"),
  sourceUrl: varchar("sourceUrl", { length: 1024 }),
  sourceLabel: varchar("sourceLabel", { length: 255 }),
  status: mysqlEnum("status", ["draft", "published", "needs_verification"]).default("draft").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CareerPath = typeof careerPaths.$inferSelect;
export type InsertCareerPath = typeof careerPaths.$inferInsert;

/** Related job ideas are educational exploration records, not a job-board listing. */
export const jobIdeas = mysqlTable("job_ideas", {
  id: int("id").autoincrement().primaryKey(),
  careerPathId: int("careerPathId").notNull().references(() => careerPaths.id),
  title: varchar("title", { length: 255 }).notNull(),
  summary: text("summary").notNull(),
  responsibilities: text("responsibilities"),
  skills: text("skills"),
  sourceUrl: varchar("sourceUrl", { length: 1024 }),
  status: mysqlEnum("status", ["draft", "published", "needs_verification"]).default("draft").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type JobIdea = typeof jobIdeas.$inferSelect;
export type InsertJobIdea = typeof jobIdeas.$inferInsert;

/** A user's target role and pasted job description, retained as private workflow context. */
export const jobAnalyses = mysqlTable("job_analyses", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  targetTitle: varchar("targetTitle", { length: 255 }).notNull(),
  jobDescription: text("jobDescription").notNull(),
  requiredSkills: text("requiredSkills"),
  preferredSkills: text("preferredSkills"),
  keywords: text("keywords"),
  responsibilities: text("responsibilities"),
  qualifications: text("qualifications"),
  tools: text("tools"),
  analyzedAt: timestamp("analyzedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type JobAnalysis = typeof jobAnalyses.$inferSelect;
export type InsertJobAnalysis = typeof jobAnalyses.$inferInsert;

/** Metadata for private uploaded resumes; bytes belong in object storage, not this table. */
export const resumes = mysqlTable("resumes", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  fileKey: varchar("fileKey", { length: 512 }),
  fileName: varchar("fileName", { length: 255 }),
  mimeType: varchar("mimeType", { length: 128 }),
  extractedText: text("extractedText"),
  generatedContent: text("generatedContent"),
  targetJobAnalysisId: int("targetJobAnalysisId").references(() => jobAnalyses.id),
  isDraft: boolean("isDraft").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Resume = typeof resumes.$inferSelect;
export type InsertResume = typeof resumes.$inferInsert;

export const coverLetters = mysqlTable("cover_letters", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  targetJobAnalysisId: int("targetJobAnalysisId").references(() => jobAnalyses.id),
  content: text("content").notNull(),
  isDraft: boolean("isDraft").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CoverLetter = typeof coverLetters.$inferSelect;
export type InsertCoverLetter = typeof coverLetters.$inferInsert;

export const providers = mysqlTable("providers", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  logoUrl: varchar("logoUrl", { length: 1024 }),
  officialCatalogUrl: varchar("officialCatalogUrl", { length: 1024 }).notNull(),
  integrationMethod: mysqlEnum("integrationMethod", ["api", "feed", "catalog", "structured_source", "manual_verification", "unknown"]).default("unknown").notNull(),
  credentialsRequired: boolean("credentialsRequired").default(false).notNull(),
  status: mysqlEnum("status", ["planned", "active", "paused", "needs_review"]).default("planned").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Provider = typeof providers.$inferSelect;
export type InsertProvider = typeof providers.$inferInsert;

export const courses = mysqlTable("courses", {
  id: int("id").autoincrement().primaryKey(),
  providerId: int("providerId").notNull().references(() => providers.id),
  title: varchar("title", { length: 255 }).notNull(),
  providerLogo: varchar("providerLogo", { length: 1024 }),
  description: text("description"),
  skill: varchar("skill", { length: 255 }),
  skillCategory: varchar("skillCategory", { length: 160 }),
  careerField: varchar("careerField", { length: 160 }),
  demandLevel: mysqlEnum("demandLevel", ["high", "growing", "moderate", "niche", "unknown"]).default("unknown").notNull(),
  difficulty: varchar("difficulty", { length: 80 }),
  duration: varchar("duration", { length: 120 }),
  accessType: mysqlEnum("accessType", ["fully_free", "free_to_audit", "free_course_paid_certificate", "free_with_financial_aid", "free_certificate", "paid", "unknown"]).default("unknown").notNull(),
  certificateType: varchar("certificateType", { length: 160 }),
  language: varchar("language", { length: 80 }),
  officialCourseUrl: varchar("officialCourseUrl", { length: 1024 }).notNull(),
  sourceUrl: varchar("sourceUrl", { length: 1024 }).notNull(),
  firstDiscovered: timestamp("firstDiscovered").defaultNow().notNull(),
  lastVerified: timestamp("lastVerified"),
  lastUpdated: timestamp("lastUpdated").defaultNow().notNull(),
  status: mysqlEnum("status", ["new", "updated", "removed", "access_changed", "needs_verification", "active"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Course = typeof courses.$inferSelect;
export type InsertCourse = typeof courses.$inferInsert;

export const skillGaps = mysqlTable("skill_gaps", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  jobAnalysisId: int("jobAnalysisId").notNull().references(() => jobAnalyses.id),
  skill: varchar("skill", { length: 255 }).notNull(),
  classification: mysqlEnum("classification", ["strong", "needs_improvement", "not_currently_demonstrated", "potentially_useful"]).notNull(),
  evidence: text("evidence"),
  source: varchar("source", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type SkillGap = typeof skillGaps.$inferSelect;
export type InsertSkillGap = typeof skillGaps.$inferInsert;

// TODO: Add user-owned saves and progress records once the core shell is validated.
