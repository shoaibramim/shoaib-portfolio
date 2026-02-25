/**
 * Runs after "vite build" and "vite build --ssr".
 * Imports the SSR bundle, renders the app to an HTML string,
 * and injects it into the built index.html placeholder.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const serverBundle = path.join(__dirname, "dist/server/entry-server.js");
  const clientIndex = path.join(__dirname, "dist/index.html");

  if (!fs.existsSync(serverBundle)) {
    throw new Error(
      `Server bundle not found: ${serverBundle}\nRun "vite build" and "vite build --ssr entry-server.tsx" first.`,
    );
  }
  if (!fs.existsSync(clientIndex)) {
    throw new Error(
      `Client index not found: ${clientIndex}\nRun "vite build" first.`,
    );
  }

  const { render } = await import(pathToFileURL(serverBundle).href);
  const template = fs.readFileSync(clientIndex, "utf-8");

  if (!template.includes("<!--app-html-->")) {
    throw new Error(
      "Placeholder <!--app-html--> not found in dist/index.html. Check index.html",
    );
  }

  const appHtml = render();
  const html = template.replace("<!--app-html-->", appHtml);

  fs.writeFileSync(clientIndex, html, "utf-8");
  console.log("Pre-render complete → dist/index.html");

  // Remove the SSR bundle — it has served its purpose and must not be
  // publicly deployed alongside the static client output.
  fs.rmSync(path.join(__dirname, "dist/server"), {
    recursive: true,
    force: true,
  });
  console.log("Cleaned up dist/server/");
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
