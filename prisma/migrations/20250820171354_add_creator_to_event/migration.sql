-- AlterTable
ALTER TABLE "systemevents"."Event" ADD COLUMN     "creatorId" INTEGER;

-- AddForeignKey
ALTER TABLE "systemevents"."Event" ADD CONSTRAINT "Event_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "systemevents"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
