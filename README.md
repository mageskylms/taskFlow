# 🚀 TaskFlow

TaskFlow é uma aplicação web desenvolvida em Angular para gerenciamento de tarefas com foco em produtividade e simplicidade. Ideal para quem precisam organizar fluxos de trabalho, acompanhar prioridades e comentar suas tarefas em tempo real.

Essa ferramenta faz parte do HUB de Ferramentas Diárias. [M8Sky](https://magesky.vercel.app)

## Funcionalidades Principais

- **Criação de Tarefas:** Adicione novas tarefas com facilidade, especificando títulos, descrições.
- **Organização por Prioridade:** Baixa, alta e média
- **Acompanhamento de Status:** Pendente ou Concluída.
- **Interface Responsiva**

> Projeto criado com [Angular CLI](https://github.com/angular/angular-cli) versão 19.1.5.

---

## 📦 Tecnologias Utilizadas

- Angular 19+
- TypeScript
- Angular Material
- RxJS
- SCSS/CSS

---

## 🛠️ Como rodar localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/taskflow.git
cd taskflow
npm install
```

Depois, inicie o servidor de desenvolvimento:

```bash
ng serve
```

Abra o navegador em `http://localhost:4200`. A aplicação recarrega automaticamente ao salvar alterações nos arquivos-fonte.

---

## 🧱 Estrutura de Projeto

```bash
src/
├── app/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas e views principais
│   ├── models/           # Interfaces e tipos (ex: Task)
│   ├── services/         # Comunicação com backend (em breve)
│   └── app.module.ts     # Módulo principal
└── assets/               # Imagens, estilos globais, etc.
```

---

## ✨ Geração de código com Angular CLI

Quer gerar um novo componente, serviço ou módulo? Use o Angular CLI:

```bash
ng generate component nome-do-componente
ng generate service nome-do-servico
ng generate module nome-do-modulo
```

Veja a lista completa de esquemas disponíveis com:

```bash
ng generate --help
```

---

## 📦 Build para produção

Para compilar e gerar os artefatos otimizados para produção:

```bash
ng build
```

O output será gerado no diretório `dist/`.

---

## 🧪 Testes

### Unitários (Karma + Jasmine):

```bash
ng test
```

### E2E (End-to-End):

> ⚠️ O Angular CLI não inclui mais frameworks E2E por padrão. Você pode configurar o [Cypress](https://www.cypress.io/) ou [Playwright](https://playwright.dev/) conforme sua necessidade.

---

## 📌 Funcionalidades atuais

- [x] Cadastro e edição de tarefas
- [x] Atribuição de prioridades (baixa, média, alta)
- [x] Comentários em tarefas
- [x] Organização por tags
- [ ] Integração com backend (quem sabe mais pra frente?)
- [ ] Autenticação de usuários (quem sabe mais pra frente?)
- [ ] Filtro e busca avançada (quem sabe mais pra frente?)

---

## 📚 Recursos adicionais

- [Documentação oficial do Angular](https://angular.dev)
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)

---

## 💡 Contribuições

Sinta-se à vontade para abrir issues, sugerir melhorias ou mandar aquele PR maroto. Toda ajuda é bem-vinda!

---

## 🧙‍♂️ Autor

Desenvolvido por **Lucas Magesky - [M8Sky](https://magesky.vercel.app) **  
Você também pode me achar no LinkedIn, GitHub, ou tomando café enquanto debugo.

---

## 🏁 Licença

Este projeto está licenciado sob os termos da **MIT License**.
