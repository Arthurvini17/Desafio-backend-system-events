-- CreateTable
CREATE TABLE "systemevents"."_UserEvents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserEvents_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserEvents_B_index" ON "systemevents"."_UserEvents"("B");

-- AddForeignKey
ALTER TABLE "systemevents"."_UserEvents" ADD CONSTRAINT "_UserEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "systemevents"."Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systemevents"."_UserEvents" ADD CONSTRAINT "_UserEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "systemevents"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
