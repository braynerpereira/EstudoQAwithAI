import { test, expect } from '@playwright/test';

// ==============================================
// Teste de Exemplo - Smoke Test
// ==============================================
// Este é um teste de exemplo para validar que
// o Playwright está funcionando corretamente.
// Substitua pela URL da sua aplicação.

test.describe('Smoke Test', () => {
  test('deve carregar a página inicial do Google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
  });

  test('deve ter o campo de busca visível', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchInput = page.locator('textarea[name="q"]');
    await expect(searchInput).toBeVisible();
  });
});

