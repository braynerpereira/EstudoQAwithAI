import { type Locator, type Page } from '@playwright/test';
import { URLS } from '../config/urls';

/**
 * Page Object para a tela de Login do SauceDemo
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorIcons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorIcons = page.locator('.error_icon');
  }

  /**
   * Acessa a página de login no navegador
   */
  async navigate(): Promise<void> {
    await this.page.goto(URLS.BASE_URL);
  }

  /**
   * Preenche o campo de usuário
   */
  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  /**
   * Preenche o campo de senha
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Clica no botão de login
   */
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }
}
