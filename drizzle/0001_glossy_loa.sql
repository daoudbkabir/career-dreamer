CREATE TABLE `career_paths` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(160) NOT NULL,
	`title` varchar(255) NOT NULL,
	`overview` text NOT NULL,
	`responsibilities` text,
	`importantSkills` text,
	`sourceUrl` varchar(1024),
	`sourceLabel` varchar(255),
	`status` enum('draft','published','needs_verification') NOT NULL DEFAULT 'draft',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `career_paths_id` PRIMARY KEY(`id`),
	CONSTRAINT `career_paths_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `career_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`interests` text,
	`strengths` text,
	`preferredActivities` text,
	`education` text,
	`experience` text,
	`skills` text,
	`preferences` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `career_profiles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `courses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`providerId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`providerLogo` varchar(1024),
	`description` text,
	`skill` varchar(255),
	`skillCategory` varchar(160),
	`careerField` varchar(160),
	`demandLevel` enum('high','growing','moderate','niche','unknown') NOT NULL DEFAULT 'unknown',
	`difficulty` varchar(80),
	`duration` varchar(120),
	`accessType` enum('fully_free','free_to_audit','free_course_paid_certificate','free_with_financial_aid','free_certificate','paid','unknown') NOT NULL DEFAULT 'unknown',
	`certificateType` varchar(160),
	`language` varchar(80),
	`officialCourseUrl` varchar(1024) NOT NULL,
	`sourceUrl` varchar(1024) NOT NULL,
	`firstDiscovered` timestamp NOT NULL DEFAULT (now()),
	`lastVerified` timestamp,
	`lastUpdated` timestamp NOT NULL DEFAULT (now()),
	`status` enum('new','updated','removed','access_changed','needs_verification','active') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `courses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `cover_letters` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`targetJobAnalysisId` int,
	`content` text NOT NULL,
	`isDraft` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `cover_letters_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `job_analyses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`targetTitle` varchar(255) NOT NULL,
	`jobDescription` text NOT NULL,
	`requiredSkills` text,
	`preferredSkills` text,
	`keywords` text,
	`responsibilities` text,
	`qualifications` text,
	`tools` text,
	`analyzedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `job_analyses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `job_ideas` (
	`id` int AUTO_INCREMENT NOT NULL,
	`careerPathId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`summary` text NOT NULL,
	`responsibilities` text,
	`skills` text,
	`sourceUrl` varchar(1024),
	`status` enum('draft','published','needs_verification') NOT NULL DEFAULT 'draft',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `job_ideas_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `providers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(120) NOT NULL,
	`name` varchar(255) NOT NULL,
	`logoUrl` varchar(1024),
	`officialCatalogUrl` varchar(1024) NOT NULL,
	`integrationMethod` enum('api','feed','catalog','structured_source','manual_verification','unknown') NOT NULL DEFAULT 'unknown',
	`credentialsRequired` boolean NOT NULL DEFAULT false,
	`status` enum('planned','active','paused','needs_review') NOT NULL DEFAULT 'planned',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `providers_id` PRIMARY KEY(`id`),
	CONSTRAINT `providers_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `resumes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fileKey` varchar(512),
	`fileName` varchar(255),
	`mimeType` varchar(128),
	`extractedText` text,
	`generatedContent` text,
	`targetJobAnalysisId` int,
	`isDraft` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `resumes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `skill_gaps` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`jobAnalysisId` int NOT NULL,
	`skill` varchar(255) NOT NULL,
	`classification` enum('strong','needs_improvement','not_currently_demonstrated','potentially_useful') NOT NULL,
	`evidence` text,
	`source` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `skill_gaps_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `career_profiles` ADD CONSTRAINT `career_profiles_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `courses` ADD CONSTRAINT `courses_providerId_providers_id_fk` FOREIGN KEY (`providerId`) REFERENCES `providers`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `cover_letters` ADD CONSTRAINT `cover_letters_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `cover_letters` ADD CONSTRAINT `cover_letters_targetJobAnalysisId_job_analyses_id_fk` FOREIGN KEY (`targetJobAnalysisId`) REFERENCES `job_analyses`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `job_analyses` ADD CONSTRAINT `job_analyses_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `job_ideas` ADD CONSTRAINT `job_ideas_careerPathId_career_paths_id_fk` FOREIGN KEY (`careerPathId`) REFERENCES `career_paths`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `resumes` ADD CONSTRAINT `resumes_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `resumes` ADD CONSTRAINT `resumes_targetJobAnalysisId_job_analyses_id_fk` FOREIGN KEY (`targetJobAnalysisId`) REFERENCES `job_analyses`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `skill_gaps` ADD CONSTRAINT `skill_gaps_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `skill_gaps` ADD CONSTRAINT `skill_gaps_jobAnalysisId_job_analyses_id_fk` FOREIGN KEY (`jobAnalysisId`) REFERENCES `job_analyses`(`id`) ON DELETE no action ON UPDATE no action;