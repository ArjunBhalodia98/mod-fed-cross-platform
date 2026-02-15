import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig, RsbuildPlugin } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

const pluginManifestDistribution = (): RsbuildPlugin => ({
  name: "manifest-distribution",
  setup(api) {
    api.onAfterBuild(() => {
      console.log("Build completed! Manifest distribution plugin executed.");
    });
    api.onBeforeStartDevServer(({ server }) => {
      console.log(
        "Starting development server... Manifest distribution plugin executed.",
      );
    });
  },
});

const mfConfig = {
  name: "svelte_app",
  exposes: {
    "./button": "./src/components/Button/SvelteBaseButton.svelte",
  },
};

export default defineConfig({
  plugins: [
    pluginSvelte(),
    pluginManifestDistribution(),
    pluginModuleFederation(mfConfig),
  ],
});
