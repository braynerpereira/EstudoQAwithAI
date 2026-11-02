import { faker } from '@faker-js/faker';

// ==============================================
// Utilitários e Helpers
// ==============================================

/**
 * Gera dados fake de um usuário para testes
 */
export function generateUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
  };
}

/**
 * Aguarda um tempo específico (use com moderação!)
 * Prefira sempre waitForSelector, waitForURL, etc.
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formata data para o padrão brasileiro
 */
export function formatDateBR(date: Date): string {
  return date.toLocaleDateString('pt-BR');
}

