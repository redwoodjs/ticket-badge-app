#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

node ./node_modules/.bin/rw-server api & node ./node_modules/.bin/rw-serve-fe --port ${PORT}
