# 🧪 Casos de Teste de Interface — Tela de Login | SauceDemo (Swag Labs)

**URL:** https://www.saucedemo.com  
**Aplicação:** Swag Labs  
**Foco:** Testes funcionais de interface (UI)  
**Credencial válida padrão:**  
- **Usuário:** `standard_user`  
- **Senha:** `secret_sauce`  

---

## 📋 Mapeamento dos Elementos Principais

| Elemento | Seletor Recomendado | Descrição |
|---|---|---|
| Campo Username | `[data-test="username"]` | Input de texto (`#user-name`) |
| Campo Password | `[data-test="password"]` | Input de senha (`#password`) |
| Botão Login | `[data-test="login-button"]` | Botão de submit (`#login-button`) |
| Mensagem de Erro | `[data-test="error"]` | Texto do erro (`h3`) |
| Botão Fechar Erro | `[data-test="error-button"]` | Ícone "X" de dismiss |
| Ícones de Erro | `.error_icon` | SVG exibido nos inputs em caso de falha |

---

## 🟢 1. Cenário Positivo (Happy Path)

### CT-01: Login realizado com sucesso
- **Objetivo:** Garantir que o usuário consegue autenticar utilizando credenciais válidas.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Preencher o campo **Username** com `standard_user`.
  2. Preencher o campo **Password** com `secret_sauce`.
  3. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Redirecionar para `https://www.saucedemo.com/inventory.html`.
  - Página de produtos carregada com sucesso.

---

## 🔴 2. Cenários Negativos (Validação de Campos e Erros)

### CT-02: Tentativa de login com campos vazios
- **Objetivo:** Validar o bloqueio ao submeter o formulário sem preenchimento.
- **Pré-condição:** Estar na página de login com campos vazios.
- **Passos:**
  1. Deixar os campos **Username** e **Password** em branco.
  2. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Mensagem de erro exibida: `"Epic sadface: Username is required"`.
  - Destaque visual de erro (borda vermelha e ícones de alerta nos campos).

---

### CT-03: Tentativa de login informando apenas o Username
- **Objetivo:** Validar a obrigatoriedade do campo de senha.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Preencher o campo **Username** com `standard_user`.
  2. Deixar o campo **Password** em branco.
  3. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Mensagem de erro exibida: `"Epic sadface: Password is required"`.
  - Destaque visual de erro nos campos.

---

### CT-04: Tentativa de login informando apenas a Senha
- **Objetivo:** Validar a obrigatoriedade do campo de usuário.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Deixar o campo **Username** em branco.
  2. Preencher o campo **Password** com `secret_sauce`.
  3. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Mensagem de erro exibida: `"Epic sadface: Username is required"`.
  - Destaque visual de erro nos campos.

---

### CT-05: Tentativa de login com senha incorreta
- **Objetivo:** Validar rejeição quando a senha informada for inválida.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Preencher o campo **Username** com `standard_user`.
  2. Preencher o campo **Password** com `senha_invalida`.
  3. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Mensagem de erro exibida: `"Epic sadface: Username and password do not match any user in this service"`.
  - Destaque visual de erro nos campos.

---

### CT-06: Tentativa de login com usuário inexistente
- **Objetivo:** Validar rejeição quando o nome de usuário não existir na base.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Preencher o campo **Username** com `usuario_inexistente`.
  2. Preencher o campo **Password** com `secret_sauce`.
  3. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Mensagem de erro exibida: `"Epic sadface: Username and password do not match any user in this service"`.
  - Destaque visual de erro nos campos.

---

### CT-07: Tentativa de login com usuário bloqueado
- **Objetivo:** Validar o comportamento de bloqueio para contas inativas/bloqueadas.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Preencher o campo **Username** com `locked_out_user`.
  2. Preencher o campo **Password** com `secret_sauce`.
  3. Clicar no botão **Login**.
- **Resultado Esperado:**
  - Mensagem de erro exibida: `"Epic sadface: Sorry, this user has been locked out."`.

---

## 🔘 3. Cenários de Interação da UI

### CT-08: Fechar mensagem de erro (Botão X)
- **Objetivo:** Validar se o botão de dismiss fecha a mensagem e limpa o estado de erro visual.
- **Pré-condição:** Tela exibindo mensagem de erro (ex: após tentar submeter campos vazios).
- **Passos:**
  1. Clicar no botão **"X"** da caixa de erro (`[data-test="error-button"]`).
- **Resultado Esperado:**
  - Mensagem de erro desaparece da tela.
  - As bordas vermelhas e os ícones de erro dos campos são removidos.

---

### CT-09: Submeter login pressionando a tecla Enter
- **Objetivo:** Validar que o formulário responde ao envio via teclado.
- **Pré-condição:** Estar na página de login.
- **Passos:**
  1. Preencher o campo **Username** com `standard_user`.
  2. Preencher o campo **Password** com `secret_sauce`.
  3. Pressionar a tecla **Enter** no teclado.
- **Resultado Esperado:**
  - Redirecionar com sucesso para `/inventory.html`.

---

## 📊 Resumo da Suíte Enxuta

| ID | Cenário | Tipo | Prioridade |
|---|---|---|---|
| **CT-01** | Login com sucesso | Positivo | Alta |
| **CT-02** | Campos vazios | Negativo / Validação | Alta |
| **CT-03** | Apenas Username preenchido | Negativo / Validação | Alta |
| **CT-04** | Apenas Password preenchido | Negativo / Validação | Alta |
| **CT-05** | Senha incorreta | Negativo / Autenticação | Alta |
| **CT-06** | Usuário inexistente | Negativo / Autenticação | Alta |
| **CT-07** | Usuário bloqueado | Negativo / Regra de Negócio | Média |
| **CT-08** | Fechar mensagem de erro (botão X) | UI / Usabilidade | Média |
| **CT-09** | Submissão via Enter | UI / Usabilidade | Média |
