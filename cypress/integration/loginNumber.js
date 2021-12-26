/// <reference types="cypress" />



describe('Navigate to Webstore', () => {
context('Desktop resolution', () => {
beforeEach(() => {
      // browser with a 720p monitor
      cy.viewport(1440, 1520)
    })

	it('Should Navigate to Homepage ', () =>
	{
		
		cy.visit('https://new-smanager-webstore.dev-sheba.xyz/s/watch-stop')
		cy.get('.Nav_fixedNav__47fUG').should('be.visible');
	})
	
	it('Should navigate to Login', () =>
	{
		cy.get('[href="/s/watch-stop/login"] > .Nav_allCategory__QvThd').should('be.visible');
		cy.get('[href="/s/watch-stop/login"] > .Nav_allCategory__QvThd').click();
	})

	it('Enter Credentials', () =>
	{
		cy.get('.Login_mobileInput__h8lKt > .Login_loginInput__iueOx').should('be.visible');
		cy.get('#login-password').should('be.visible');
		cy.get('.Login_mobileInput__h8lKt > .Login_loginInput__iueOx').type('01833309521');
		cy.get('#login-password').type(123456);
		cy.get('.Login_loginButton__Si_w4').should('be.visible');
		cy.get('.Login_loginButton__Si_w4').click();
		
		

		
	});



  })


});