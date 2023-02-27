import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(
    {
        plugins: [react()],
        resolve: {
            alias: {
                '@': '/src',
                '@assets': '/src/assets',
                '@components': '/src/components',
                '@middleware': '/src/middleware',
                '@pages': '/src/pages',
                '@layouts': '/src/layouts'
            },
        },
    }
)
