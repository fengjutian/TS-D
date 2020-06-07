#!/bin/bash
tsc $1.ts --outDir ./js
node ./js/$1.js


