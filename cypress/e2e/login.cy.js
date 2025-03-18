describe('test suite for lohin',()=>{
    it('login orange hrm',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="submit"]').click()
    })
})