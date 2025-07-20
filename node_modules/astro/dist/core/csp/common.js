import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import astroIslandPrebuilt from "../../runtime/server/astro-island.prebuilt.js";
import astroIslandPrebuiltDev from "../../runtime/server/astro-island.prebuilt-dev.js";
import { ISLAND_STYLES } from "../../runtime/server/astro-island-styles.js";
import { generateCspDigest } from "../encryption.js";
function shouldTrackCspHashes(csp) {
  return csp === true || typeof csp === "object";
}
function getAlgorithm(csp) {
  if (csp === true) {
    return "SHA-256";
  }
  return csp.algorithm;
}
function getScriptHashes(csp) {
  if (csp === true) {
    return [];
  } else {
    return csp.scriptDirective?.hashes ?? [];
  }
}
function getScriptResources(csp) {
  if (csp === true) {
    return [];
  }
  return csp.scriptDirective?.resources ?? [];
}
function getStyleHashes(csp) {
  if (csp === true) {
    return [];
  }
  return csp.styleDirective?.hashes ?? [];
}
function getStyleResources(csp) {
  if (csp === true) {
    return [];
  }
  return csp.styleDirective?.resources ?? [];
}
function getDirectives(csp) {
  if (csp === true) {
    return [];
  }
  return csp.directives ?? [];
}
function getStrictDynamic(csp) {
  if (csp === true) {
    return false;
  }
  return csp.scriptDirective?.strictDynamic ?? false;
}
async function trackStyleHashes(internals, settings, algorithm) {
  const clientStyleHashes = [];
  for (const [_, page] of internals.pagesByViteID.entries()) {
    for (const style of page.styles) {
      if (style.sheet.type === "inline") {
        clientStyleHashes.push(await generateCspDigest(style.sheet.content, algorithm));
      }
    }
  }
  for (const clientAsset in internals.clientChunksAndAssets) {
    const contents = readFileSync(
      fileURLToPath(new URL(clientAsset, settings.config.build.client)),
      "utf-8"
    );
    if (clientAsset.endsWith(".css") || clientAsset.endsWith(".css")) {
      clientStyleHashes.push(await generateCspDigest(contents, algorithm));
    }
  }
  if (settings.renderers.length > 0) {
    clientStyleHashes.push(await generateCspDigest(ISLAND_STYLES, algorithm));
  }
  return clientStyleHashes;
}
async function trackScriptHashes(internals, settings, algorithm) {
  const clientScriptHashes = [];
  for (const script of internals.inlinedScripts.values()) {
    clientScriptHashes.push(await generateCspDigest(script, algorithm));
  }
  for (const directiveContent of Array.from(settings.clientDirectives.values())) {
    clientScriptHashes.push(await generateCspDigest(directiveContent, algorithm));
  }
  for (const clientAsset in internals.clientChunksAndAssets) {
    const contents = readFileSync(
      fileURLToPath(new URL(clientAsset, settings.config.build.client)),
      "utf-8"
    );
    if (clientAsset.endsWith(".js") || clientAsset.endsWith(".mjs")) {
      clientScriptHashes.push(await generateCspDigest(contents, algorithm));
    }
  }
  for (const script of settings.scripts) {
    const { content, stage } = script;
    if (stage === "head-inline" || stage === "before-hydration") {
      clientScriptHashes.push(await generateCspDigest(content, algorithm));
    }
  }
  if (settings.renderers.length > 0) {
    clientScriptHashes.push(await generateCspDigest(astroIslandPrebuilt, algorithm));
    clientScriptHashes.push(await generateCspDigest(astroIslandPrebuiltDev, algorithm));
  }
  return clientScriptHashes;
}
export {
  getAlgorithm,
  getDirectives,
  getScriptHashes,
  getScriptResources,
  getStrictDynamic,
  getStyleHashes,
  getStyleResources,
  shouldTrackCspHashes,
  trackScriptHashes,
  trackStyleHashes
};
