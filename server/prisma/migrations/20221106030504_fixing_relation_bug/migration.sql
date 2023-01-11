-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "hearts" INTEGER NOT NULL DEFAULT 0,
    "cutie" INTEGER NOT NULL DEFAULT 0,
    "cool" INTEGER NOT NULL DEFAULT 0,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "Cat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cat" ("cool", "createAt", "cutie", "hearts", "id", "job", "name", "phone", "userId") SELECT "cool", "createAt", "cutie", "hearts", "id", "job", "name", "phone", "userId" FROM "Cat";
DROP TABLE "Cat";
ALTER TABLE "new_Cat" RENAME TO "Cat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
