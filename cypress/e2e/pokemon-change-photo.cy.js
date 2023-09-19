describe('pokemonbattle.me' , function () {
	it('Покупка нового аватара для тренера' , function () {
		cy.visit('https://pokemonbattle.me/login');
		cy.get(':nth-child(1) > .auth__input').click().type('rusik.off-1@yandex.ru');
		cy.get('#password').click().type('Samur2001');
		cy.get('.auth__button').should('be.enabled').click();
		cy.wait(3000);
		cy.get('.header__btns > [href="/shop"]').click();
		cy.get(':nth-child(2) > .shop__button').should('be.enabled').click();
		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click().type('5100000000000008');
		cy.get(':nth-child(1) > .pay_base-input-v2').click().type('12/24');
		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click().type('125');
		cy.get('.pay__input-box-last-of > .pay_base-input-v2').click().type('Ivan Petrov').type('{enter}');
		cy.get('#cardnumber').click().type('56456');
		cy.get('.payment__submit-button').click();
		cy.get('.payment__padding').contains('Покупка прошла успешно');
		cy.get('.payment__adv').click();
	})
})

	