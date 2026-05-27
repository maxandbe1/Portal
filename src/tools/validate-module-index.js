// src/tools/validate-module-index.js
//
// Portal OS — Module Index Validator
// Run with: node src/tools/validate-module-index.js
//

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const MODULE_INDEX_PATH = path.join(ROOT, "public", "module-index.json");
const MODULES_SRC = path.join(ROOT, "src", "modules");

function log(title, color = "36") {
  console.log(`\x1b[${color}m${title}\x1b[0m`);
}

function fail(msg) {
  console.log(`\x1b[31m✗ ${msg}\x1b[0m`);
}

function ok(msg) {
  console.log(`\x1b[32m✓ ${msg}\x1b[0m`);
}

function warn(msg) {
  console.log(`\x1b[33m⚠ ${msg}\x1b[0m`);
}

//
// 1. Load module-index.json
//
log("Validating module-index.json...\n");

if (!fs.existsSync(MODULE_INDEX_PATH)) {
  fail("module-index.json not found in /public/");
  process.exit(1);
}

let index;
try {
  const raw = fs.readFileSync(MODULE_INDEX_PATH, "utf8");
  index = JSON.parse(raw);
  ok("module-index.json loaded");
} catch (err) {
  fail("module-index.json is invalid JSON");
  console.error(err);
  process.exit(1);
}

//
// 2. Validate structure
//
if (!Array.isArray(index.modules)) {
  fail("module-index.json must contain: { modules: [] }");
  process.exit(1);
}

ok("module-index.json has valid structure");

//
// 3. Validate each module entry
//
log("\nChecking module entries...\n");

const declaredModules = index.modules.map(m => m.name);
const srcModules = fs.readdirSync(MODULES_SRC).filter(f =>
  fs.statSync(path.join(MODULES_SRC, f)).isDirectory()
);

for (const entry of index.modules) {
  const name = entry.name;

  log(`Module: ${name}`, "35");

  const modulePath = path.join(MODULES_SRC, name);

  if (!fs.existsSync(modulePath)) {
    fail(`Missing folder: src/modules/${name}/`);
    continue;
  } else {
    ok(`Folder exists: src/modules/${name}/`);
  }

  //
  // Required files
  //
  const requiredFiles = [
    "module-ui.js",
    "module-bridge.js",
    `${name}-engine.js`
  ];

  for (const file of requiredFiles) {
    const full = path.join(modulePath, file);
    if (!fs.existsSync(full)) {
      fail(`Missing file: ${file}`);
    } else {
      ok(`Found: ${file}`);
    }
  }

  console.log("");
}

//
// 4. Check for modules in src/ not listed in module-index.json
//
log("Checking for unused modules...\n");

for (const folder of srcModules) {
  if (!declaredModules.includes(folder)) {
    warn(`Module folder exists but is NOT in module-index.json: ${folder}`);
  }
}

//
// 5. Check for modules listed but missing folders
//
log("\nChecking for missing module folders...\n");

for (const name of declaredModules) {
  if (!srcModules.includes(name)) {
    fail(`module-index.json lists module "${name}" but folder is missing`);
  }
}

log("\nValidation complete.\n", "32");
