import { type Locator, type Page } from '@playwright/test';
import { URLS } from '../config/urls';

/**
 * Page Object para a tela de Inventário (Catálogo de Produtos)
 */
export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryList: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  /**
   * Verifica se a URL atual corresponde à tela de inventário
   */
  async isLoaded(): Promise<boolean> {
    return this.page.url().includes(URLS.INVENTORY_URL);
  }
}

