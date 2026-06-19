CREATE TABLE "seats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"movieScheduleId" varchar NOT NULL,
	"seat_code" varchar(3) NOT NULL,
	"status" varchar DEFAULT 'available' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "seats_movieScheduleId_seat_code_unique" UNIQUE("movieScheduleId","seat_code")
);
