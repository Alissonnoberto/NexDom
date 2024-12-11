function PaginaDeContato(obj) {

    const Text_FaleConosco = '.elementor-element-d25f09b > .elementor-widget-container > .elementor-heading-title'
    const Edit_Nome = '#form-field-name'
    const Edit_Email = '#form-field-email'
    const Edit_Empresa = '#form-field-message'
    const Edit_Assunto = '#form-field-field_f77a763'
    const CheckBox_TermosDeUso = '#form-field-field_7651528'
    const Button_Enviar = '.elementor-field-type-submit > .elementor-button'
    const Text_FormularioSubmissao = '.elementor-message'

    if (obj.ValidaPagina != undefined) {
        cy.get(Text_FaleConosco).should('be.visible')

        delete obj.PaginaCorreta
    }

    if (obj.Nome != undefined) {
        cy.get(Edit_Nome).type(obj.Nome)

        delete obj.Nome
    }

    if (obj.Email != undefined) {
        cy.get(Edit_Email).type(obj.Email)

        delete obj.Email
    }

    if (obj.Empresa != undefined) {
        cy.get(Edit_Empresa).type(obj.Empresa)

        delete obj.Empresa
    }

    if (obj.Assunto != undefined) {
        cy.get(Edit_Assunto).type(obj.Assunto)

        delete obj.Assunto
    }

    if (obj.TermoDeUso != undefined) {
        cy.get(CheckBox_TermosDeUso).click()

        delete obj.TermoDeUso
    }

    if (obj.Enviar != undefined) {
        cy.get(Button_Enviar).click()

        delete obj.Enviar
    }

    if (obj.SubmissaoSuceso != undefined) {
        cy.get(Text_FormularioSubmissao).should('be.visible')

        delete obj.SubmissaoSuceso
    }


}

export { PaginaDeContato }