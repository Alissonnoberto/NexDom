function MenuNavegacao(obj) {

    const Menu_Home = '#e-n-menu-title-2391 > .e-n-menu-title-container > .e-n-menu-title-text'
    const Menu_SobreNos = '#e-n-menu-title-2392 > .e-n-menu-title-container > .e-n-menu-title-text'
    const Menu_Solucoes = '#e-n-menu-title-2393 > .e-n-menu-title-container > .e-n-menu-title-text'
    const Menu_Carreiras = '#e-n-menu-title-2394 > .e-n-menu-title-container > .e-n-menu-title-text'
    const Menu_Contato = '#e-n-menu-title-2395 > .e-n-menu-title-container > .e-n-menu-title-text'


    if (obj.AcessarMenuHome != undefined) {
        cy.get(Menu_Home).click()

        delete obj.AcessarMenuHome
    }
    if (obj.AcessarMenuSobreNos != undefined) {
        cy.get(Menu_SobreNos).click()

        delete obj.AcessarMenuSobreNos
    }
    if (obj.AcessarMenuSolucoes != undefined) {

        switch (obj.AcessarMenuSolucoes) {

            case "Gestão de planos de saúde": cy.get(Menu_Solucoes).trigger('mouseover')
                cy.contains('a', 'Gestão de planos de saúde').click({ force: true }); break;
            case "Autorização e Atendimento": cy.get(Menu_Solucoes).trigger('mouseover')
                cy.contains('a', 'Autorização e Atendimento').click({ force: true }); break;
            case "Ressarcimento ao SUS": cy.get(Menu_Solucoes).trigger('mouseover')
                cy.contains('a', 'Ressarcimento ao SUS').click({ force: true }); break;
            case "Portal da empresa e beneficiário": cy.get(Menu_Solucoes).trigger('mouseover')
                cy.contains('a', 'Portal da empresa e beneficiário').click({ force: true }); break;
            case "Gestão de relacionamento e ouvidoria": cy.get(Menu_Solucoes).trigger('mouseover')
                cy.contains('a', 'Gestão de relacionamento e ouvidoria').click({ force: true }); break;
            case "Business Intelligence": cy.get(Menu_Solucoes).trigger('mouseover')
                cy.contains('a', 'Business Intelligence').click({ force: true }); break;
        }

        delete obj.AcessarMenuSolucoes
    }
    if (obj.AcessarMenuCarreiras != undefined) {
        cy.get(Menu_Carreiras).click()

        delete obj.AcessarMenuCarreiras
    }
    if (obj.AcessarMenuContato != undefined) {
        cy.get(Menu_Contato).click()

        delete obj.AcessarMenuContato
    }
}

export { MenuNavegacao }