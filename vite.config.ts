import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        // Externalize Node.js built-in modules that might be incorrectly imported by dependencies
        'fs',
        'path',
        'os',
        'crypto',
        'stream',
        'buffer',
        'util',
        'http',
        'https',
        'url',
        'querystring',
        'events',
        'net',
        'tls',
        'zlib',
        'child_process',
        'cluster',
        'dgram',
        'dns',
        'domain',
        'readline',
        'repl',
        'string_decoder',
        'timers',
        'tty',
        'v8',
        'vm',
        'worker_threads',
      ],
    },
  },
}));