import { test as base, expect } from '@playwright/test';

// ==============================================
// Custom Fixtures
// ==============================================
// Use fixtures para compartilhar setup/teardown
// entre testes e encapsular lógica reutilizável.
//
// Exemplo de uso:
//
// type MyFixtures = {
//   authenticatedPage: Page;
// };
//
// export const test = base.extend<MyFixtures>({
//   authenticatedPage: async ({ page }, use) => {
//     await page.goto('/login');
//     await page.fill('[data-testid="email"]', process.env.USER_EMAIL!);
//     await page.fill('[data-testid="password"]', process.env.USER_PASSWORD!);
//     await page.click('[data-testid="submit"]');
//     await page.waitForURL('/dashboard');
//     await use(page);
//   },
// });

export { base as test, expect };

