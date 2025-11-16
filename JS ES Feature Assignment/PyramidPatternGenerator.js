"use strict";

function getLimitOrDefault(defaultLimit = 5) {
  if (typeof prompt === "function") {
    const raw = prompt(`Enter pyramid height (default ${defaultLimit}):`);
    const n = Number(raw);
    if (!isNaN(n) && n > 0) return Math.floor(n);
    return defaultLimit;
  }
  if (typeof process !== "undefined" && process.argv) {
    const arg = process.argv[2];
    const n = Number(arg);
    if (!isNaN(n) && n > 0) return Math.floor(n);
  }
  return defaultLimit;
}

function generatePatternSync(limit) {
  console.log("\n--- Synchronous Pyramid (generatePatternSync) ---");
  for (let i = 1; i <= limit; i++) {
    console.log("* ".repeat(i).trim());
  }
}

function generatePatternAsync_let(limit) {
  console.log("\n--- Async Pyramid using let (expected correct per-line values) ---");
  for (let i = 1; i <= limit; i++) {
    setTimeout(() => {
      console.log(`[let] ${"* ".repeat(i).trim()}`);
    }, i * 120);
  }
}

function generatePatternAsync_var(limit) {
  console.log("\n--- Async Pyramid using var (shows variable reuse issue) ---");
  for (var i = 1; i <= limit; i++) {
    setTimeout(() => {
      try {
        console.log(`[var] ${"* ".repeat(i).trim()}`);
      } catch (e) {
        console.log(`[var] error repeating for i=${i}: ${e.message}`);
      }
    }, i * 120);
  }
}
function generatePatternAsync_var_fixWithIIFE(limit) {
  console.log("\n--- Async Pyramid using var + IIFE (fixed capture) ---");
  for (var i = 1; i <= limit; i++) {
    (function (currentI) {
      setTimeout(() => {
        console.log(`[var+IIFE] ${"* ".repeat(currentI).trim()}`);
      }, currentI * 120);
    })(i);
  }
}
function printDebuggingHelp() {
  console.log("\n=== Debugging / Watch instructions ===");
  console.log("1) Use a breakpoint inside the for-loop (uncomment a `debugger;` line) to inspect `i` each iteration.");
  console.log("2) Watch variables: add `i`, `currentI` (for IIFE case) and `limit` to WATCH panel.");
  console.log("3) In VS Code: open Run & Debug -> add a breakpoint -> Run (F5). Inspect CALL STACK and Scope.");
  console.log("4) Observe differences:");
  console.log("   - with `let` each callback captures the per-iteration `i` (expected behavior).");
  console.log("   - with `var` callbacks see the same `i` (final value) unless captured via IIFE or closure.");
  console.log("5) Because we run setTimeout, logs show in delayed order which helps reveal closure capture.\n");
}
(function main() {
  const limit = getLimitOrDefault(5);

  console.log(`\nPyramid limit chosen: ${limit}`);
  generatePatternSync(limit);
  generatePatternAsync_let(limit);
  generatePatternAsync_var(limit);
  generatePatternAsync_var_fixWithIIFE(limit);
  printDebuggingHelp();
})();
