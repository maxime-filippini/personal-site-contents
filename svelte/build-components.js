#!/usr/bin/env node

import { execSync } from "child_process";
import { readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";

const COMPONENTS_DIR = "./src/components";

function getAllSvelteComponents(dir) {
  const components = [];

  function scanDirectory(currentDir) {
    const files = readdirSync(currentDir);

    for (const file of files) {
      const fullPath = join(currentDir, file);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (extname(file) === ".svelte") {
        const relativePath = fullPath.replace("./src/components/", "");
        const componentName = basename(file, ".svelte");
        components.push({
          path: fullPath,
          name: componentName,
          fileName: componentName.toLowerCase(),
        });
      }
    }
  }

  scanDirectory(dir);
  return components;
}

async function buildComponent(component, isFirst) {
  console.log(`Building ${component.name}...`);

  const viteConfig = `
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
  build: {
    lib: {
      entry: '${component.path}',
      name: '${component.name}',
      fileName: '${component.fileName}',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    outDir: 'dist/components',
    emptyOutDir: ${isFirst}
  }
})
  `.trim();

  const fs = await import("fs");
  fs.writeFileSync("vite.config.temp.js", viteConfig);

  try {
    execSync("npx vite build --config vite.config.temp.js", {
      stdio: "inherit",
      cwd: process.cwd(),
    });
    console.log(`✓ Built ${component.name} -> dist/components/${component.fileName}.js`);
  } catch (error) {
    console.error(`✗ Failed to build ${component.name}:`, error.message);
  } finally {
    // Clean up temp config
    fs.unlinkSync("vite.config.temp.js");
  }
}

async function buildAllComponents() {
  const components = getAllSvelteComponents(COMPONENTS_DIR);

  if (components.length === 0) {
    console.log("No Svelte components found in", COMPONENTS_DIR);
    return;
  }

  console.log(`Found ${components.length} component(s) to build:`);
  components.forEach((comp) => console.log(`  - ${comp.name} (${comp.path})`));
  console.log("");

  for (let i = 0; i < components.length; i++) {
    await buildComponent(components[i], i === 0);
  }

  console.log("\n✅ All components built successfully!");
}

buildAllComponents().catch(console.error);
