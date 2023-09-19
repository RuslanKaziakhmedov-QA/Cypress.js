
describe('Тестирование формы логина и пароля', function () {
   it('Проверка кейса авторизации', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').click().type('german@dolnikov.ru');
      cy.get('#pass').click().type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
   })

   it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').click().type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click();
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
   })

   it('Авторизация с некорректным паролем', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').click().type('german@dolnikov.ru');
      cy.get('#pass').click().type('qaqaqa111');
      cy.get('#loginButton').should('be.enabled');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
   })

    it('Авторизация с некорректным логином', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').click().type('privet@gmail.com');
      cy.get('#pass').click().type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled').click()
      cy.contains('Такого логина или пароля нет')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
   })

    it('Авторизация с не правильной валидацией', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').click().type('germandolnikov.ru');
      cy.get('#pass').click().type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled').click()
      cy.contains('Нужно исправить проблему валидации')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible').click()
   })

    it('Проверка на приведение к строчным бкувам в логине', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').click().type('GerMan@Dolnikov.ru');
      cy.get('#pass').click().type('iLoveqastudio1');
      cy.get('#loginButton').should('be.enabled').click();
      cy.contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
   })
})



