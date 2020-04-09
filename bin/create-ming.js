#!/usr/bin/env node

'use strict';

const Command = require('../lib/main');

async function main() {
  try {
    await new Command().run(process.cwd(), process.argv.slice(2));
  } catch (err) {
    console.error(err.stack);
    process.exit(1);
  }
}

main();
