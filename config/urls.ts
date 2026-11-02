import dotenv from 'dotenv';
import path from 'path';

// Carrega o .env caso ainda não tenha sido carregado
dotenv.config({ path: path.resolve(__dirname, '../.env') });

/**
 * Encapsulamento das URLs da aplicação
 */
export const URLS = {
  BASE_URL: process.env.BASE_URL || 'https://www.saucedemo.com',
  INVENTORY_URL: '/inventory.html',
} as const;

