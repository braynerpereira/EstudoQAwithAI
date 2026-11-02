import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { loginData } from '../data/login.data';
import { URLS } from '../config/urls';

test.describe('Autenticação — Tela de Login (SauceDemo)', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
  });

  test('CT-01: Login realizado com sucesso com credenciais válidas', async ({ page }) => {
    await loginPage.fillUsername(loginData.validUser.username);
    await loginPage.fillPassword(loginData.validUser.password);
    await loginPage.clickLogin();

    // Valida redirecionamento para a página de inventário
    await expect(page).toHaveURL(new RegExp(URLS.INVENTORY_URL));
    await expect(inventoryPage.title).toBeVisible();
    await expect(inventoryPage.title).toHaveText('Products');
    await expect(inventoryPage.inventoryList).toBeVisible();
  });

  test('CT-02: Tentativa de login com campos vazios', async () => {
    await loginPage.clickLogin();

    // Valida mensagem de erro e indicadores visuais
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      loginData.errorMessages.usernameRequired
    );
    await expect(loginPage.errorIcons).toHaveCount(2);
  });

  test('CT-03: Tentativa de login informando apenas o Username', async () => {
    await loginPage.fillUsername(loginData.onlyUsername.username);
    await loginPage.clickLogin();

    // Valida mensagem de erro exigindo a senha
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      loginData.errorMessages.passwordRequired
    );
  });

  test('CT-04: Tentativa de login informando apenas a Senha', async () => {
    await loginPage.fillPassword(loginData.onlyPassword.password);
    await loginPage.clickLogin();

    // Valida mensagem de erro exigindo o usuário
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      loginData.errorMessages.usernameRequired
    );
  });

  test('CT-05: Tentativa de login com senha incorreta', async () => {
    await loginPage.fillUsername(loginData.invalidPassword.username);
    await loginPage.fillPassword(loginData.invalidPassword.password);
    await loginPage.clickLogin();

    // Valida mensagem de credenciais que não combinam
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      loginData.errorMessages.invalidCredentials
    );
  });

  test('CT-06: Tentativa de login com usuário inexistente', async () => {
    await loginPage.fillUsername(loginData.invalidUser.username);
    await loginPage.fillPassword(loginData.invalidUser.password);
    await loginPage.clickLogin();

    // Valida mensagem de credenciais inexistentes
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      loginData.errorMessages.invalidCredentials
    );
  });

  test('CT-07: Tentativa de login com usuário bloqueado', async () => {
    await loginPage.fillUsername(loginData.lockedOutUser.username);
    await loginPage.fillPassword(loginData.lockedOutUser.password);
    await loginPage.clickLogin();

    // Valida mensagem específica de usuário bloqueado
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
      loginData.errorMessages.lockedOut
    );
  });
});
