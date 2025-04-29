import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: 'localhost', // Use localhost or 0.0.0.0
    port: 5173,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
});
