#!/bin/sh

set -ex

if [ ! -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

npx prisma migrate deploy --schema /app/api/db/schema.prisma
npx @redwoodjs/cli-data-migrate@canary
