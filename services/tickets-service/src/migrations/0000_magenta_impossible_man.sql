CREATE TABLE "tickets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"schedule_id" varchar NOT NULL,
	"seat_id" varchar NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"payment_status" varchar(20) DEFAULT 'pending',
	"stripe_session_id" varchar(255) NOT NULL,
	"issued_at" timestamp DEFAULT now(),
	CONSTRAINT "tickets_user_id_schedule_id_seat_id_unique" UNIQUE("user_id","schedule_id","seat_id")
);
