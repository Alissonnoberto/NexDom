/// <reference types="cypress" />

import * as TelasGlobais from '../../Funcoes/FuncoesGlobais/TelaGlobais.js'
import * as Contato from '../../Funcoes/Pages/Tela_Contato.js'

describe('Navegação e Submissão do formulário de contato', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })
    describe('Verificar navegação para página de contato', () => {
        it('Dado que o usuário esteja na página inicial do site', () => {
            cy.visit('https://nexdom.tec.br/')
        })
        it('Quando o mesmo clica na opção "Contato" do menu de Navegação', () => {
            TelasGlobais.MenuNavegacao({ AcessarMenuContato: true })

        })
        it('Então o usuário deve ser deve ser redirecionado para a página de contato', () => {
            Contato.PaginaDeContato({ ValidaPagina: true })

        })

    })

    describe('Submissão do formulário de contato', () => {
        it('Dado que estou na página de contato', () => {
            cy.url().should('include', '/contato')
        })
        it('Quando eu preencho o formulário com: Nome, E-mail, Empresa e Assunto', () => {
            Contato.PaginaDeContato({ Nome: 'Etapa Desagio Teste', Email: 'testedesafio@teste.com', Empresa: 'DesafioTeste', Assunto: 'Teste da mensagem de assunto' })

        })
        it('E marco o checkbox "Li e aceito os termos de uso"', () => {
            Contato.PaginaDeContato({ TermoDeUso: true })

        })
        it('E clico no botão "Enviar"', () => {
            Contato.PaginaDeContato({ Enviar: true })

        })
        it('Então a mensagem de sucesso "As suas respostas foram recebidas com sucesso!" deve ser exibida', () => {
            Contato.PaginaDeContato({ SubmissaoSuceso: true })

        })

    })

})