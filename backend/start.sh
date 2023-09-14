#! /bin/sh -e

sleep 10
npx prisma generate --schema=$PRISMA_OUT \
&& npx prisma migrate dev --schema=$PRISMA_OUT \
&& npm run start:dev
