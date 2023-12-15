-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_hour" DATETIME NOT NULL,
    "day_week" TEXT NOT NULL,
    "user_name" TEXT,
    "professional_id" INTEGER NOT NULL,
    CONSTRAINT "Schedule_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "Professional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Schedule" ("date_hour", "day_week", "id", "professional_id", "user_name") SELECT "date_hour", "day_week", "id", "professional_id", "user_name" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
CREATE TABLE "new_Professional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "description" TEXT,
    "value" INTEGER NOT NULL,
    "time" INTEGER NOT NULL
);
INSERT INTO "new_Professional" ("Location", "description", "email", "id", "job", "name", "time", "value") SELECT "Location", "description", "email", "id", "job", "name", "time", "value" FROM "Professional";
DROP TABLE "Professional";
ALTER TABLE "new_Professional" RENAME TO "Professional";
CREATE UNIQUE INDEX "Professional_email_key" ON "Professional"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
