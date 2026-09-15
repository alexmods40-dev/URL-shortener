-- CreateTable
CREATE TABLE "URL" (
    "id" SERIAL NOT NULL,
    "originalURL" TEXT NOT NULL,
    "shortedURL" TEXT NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "URL_shortedURL_key" ON "URL"("shortedURL");
