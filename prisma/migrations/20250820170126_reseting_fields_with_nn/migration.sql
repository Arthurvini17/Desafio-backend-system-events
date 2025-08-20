/*
  Warnings:

  - You are about to drop the column `userId` on the `UserEvent` table. All the data in the column will be lost.
  - You are about to drop the `Events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[participantId,eventId]` on the table `UserEvent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `participantId` to the `UserEvent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "systemevents"."UserEvent" DROP CONSTRAINT "UserEvent_eventId_fkey";

-- DropForeignKey
ALTER TABLE "systemevents"."UserEvent" DROP CONSTRAINT "UserEvent_userId_fkey";

-- DropIndex
DROP INDEX "systemevents"."UserEvent_userId_eventId_key";

-- AlterTable
ALTER TABLE "systemevents"."UserEvent" DROP COLUMN "userId",
ADD COLUMN     "participantId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "systemevents"."Events";

-- DropTable
DROP TABLE "systemevents"."Users";

-- CreateTable
CREATE TABLE "systemevents"."Event" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "limiteVagas" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systemevents"."Participant" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_email_key" ON "systemevents"."Participant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserEvent_participantId_eventId_key" ON "systemevents"."UserEvent"("participantId", "eventId");

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "systemevents"."Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "systemevents"."Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
