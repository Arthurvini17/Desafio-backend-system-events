-- CreateTable
CREATE TABLE "systemevents"."Events" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);
