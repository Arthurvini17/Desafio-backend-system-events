/*
  Warnings:

  - You are about to drop the `_UserEvents` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `vagas` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "systemevents"."_UserEvents" DROP CONSTRAINT "_UserEvents_A_fkey";

-- DropForeignKey
ALTER TABLE "systemevents"."_UserEvents" DROP CONSTRAINT "_UserEvents_B_fkey";

-- AlterTable
ALTER TABLE "systemevents"."Events" ADD COLUMN     "vagas" INTEGER NOT NULL;

-- DropTable
DROP TABLE "systemevents"."_UserEvents";

-- CreateTable
CREATE TABLE "systemevents"."UserEvent" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserEvent_userId_eventId_key" ON "systemevents"."UserEvent"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "systemevents"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "systemevents"."Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
