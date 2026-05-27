import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => ({
  base: '/jungle-juniors-adventure/',
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    command === "build" ? cloudflare() : null,
  ].filter(Boolean),
}));
