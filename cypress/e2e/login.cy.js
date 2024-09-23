const LOGIN_URL = 'http://127.0.0.1:5500/index.html';

describe('Login Page', () => {
    it('should load the login page', () => {
        cy.visit(LOGIN_URL); 
        cy.get('input[id="username"]').should('be.visible');
        cy.get('input[id="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    });
});

describe('Teste de Login', () => {
    it('Deve acessar a página de login e realizar o login com sucesso', () => {
      cy.visit(LOGIN_URL);
      
      cy.get('input[id="username"]').type('admin');
      cy.get('input[id="password"]').type('admin');
      cy.get('button[type="submit"]').click();
      
      cy.url().should('include', 'classroom.html');
    });
  });
  
