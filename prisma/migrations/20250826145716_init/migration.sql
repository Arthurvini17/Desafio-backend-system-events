-- CreateTable
CREATE TABLE "systemevents"."Event" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "limiteVagas" INTEGER NOT NULL,
    "creatorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systemevents"."User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "systemevents"."UserEvent" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "systemevents"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserEvent_userId_eventId_key" ON "systemevents"."UserEvent"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "systemevents"."Event" ADD CONSTRAINT "Event_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "systemevents"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "systemevents"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "systemevents"."UserEvent" ADD CONSTRAINT "UserEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "systemevents"."Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
