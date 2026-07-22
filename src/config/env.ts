/**
 * Tempat terpusat untuk membaca environment variables.
 * Tambahkan variabel baru di sini agar type-safe dan mudah dilacak.
 */
export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;
