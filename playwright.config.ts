import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // Diretório dos testes
  testDir: './tests',

  // Execução em paralelo
  fullyParallel: true,

  // Falhar o build no CI se houver test.only() esquecido
  forbidOnly: !!process.env.CI,

  // Retries: 0 local, 2 no CI
  retries: process.env.CI ? 2 : 0,

  // Workers: metade no CI para estabilidade
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  // Configurações globais dos testes
  use: {
    // URL base da aplicação
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Captura de evidências
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    // Timeouts de ação
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },

  // Timeout global por teste
  timeout: 60_000,

  // Timeout do expect
  expect: {
    timeout: 10_000,
  },

  // Diretório para resultados de teste
  outputDir: './test-results',

  // Projetos (browsers)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Testes mobile (descomente se necessário)
    // {
    //   name: 'mobile-chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'mobile-safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

  // Servidor de desenvolvimento (descomente se necessário)
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120_000,
  // },
});

