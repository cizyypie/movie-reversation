CREATE TABLE "movie_schedules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"movieId" uuid NOT NULL,
	"theaterId" varchar NOT NULL,
	"screenNumber" numeric NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "movies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(500),
	"genre" varchar(255)[],
	"duration" numeric,
	"rating" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "movies_title_unique" UNIQUE("title")
);
--> statement-breakpoint
ALTER TABLE "movie_schedules" ADD CONSTRAINT "movie_schedules_movieId_movies_id_fk" FOREIGN KEY ("movieId") REFERENCES "public"."movies"("id") ON DELETE cascade ON UPDATE no action;