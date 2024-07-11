#!/bin/sh

echo "INSTALLING..."
npm install --legacy-peer-
echo "FINISHED INSTALL."

npm run dev -- --host
