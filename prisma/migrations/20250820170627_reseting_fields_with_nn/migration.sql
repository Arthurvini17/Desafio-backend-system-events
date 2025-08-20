/*
  Warnings:

  - You are about to drop the column `participantId` on the `UserEvent` table. All the data in the column will be lost.
  - You are about to drop the `Participant` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,eventId]` on the table `UserEvent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserEvent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "systemevents"."UserEvent" DROP CONSTRAINT "UserEvent_participantId_fkey";

-- DropIndex
DROP INDEX "systemevents"."UserEvent_participantId_eventId_key";

-- AlterTable
ALTER TABLE "systemevents"."UserEvent" DROP COLUMN "participantId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "systemevents"."Participant";

-- CreateTable
CREATE TABLE "systemevents"."User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "systemevents"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserEvent_userId_eventId_key" ON "systemevents"."UserEvent"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "systemevents"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
