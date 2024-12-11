/// <reference types="cypress" />

describe('TesteBackEND', () => {
    let nomeRepositorio
    let repositorioId
    let issueId

    it('Criação de um repositório no github', () => {
        nomeRepositorio = 'NexDom'
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: `token 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`,
            },
            body: {
                name: nomeRepositorio,
                private: false,
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            repositorioId = response.body.id
            cy.log(repositorioId)
        })
    })

    it('Consulta do respositório criado', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repositories/${repositorioId}`,
            headers: {
                Authorization: `token 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`,
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(nomeRepositorio)
        })
    })

    it('Criação de uma isuue no repositório recém-criado', () => {
        cy.request({
            method: 'POST',
            url: `https://api.github.com/repos/Alissonnoberto/${nomeRepositorio}/issues`,
            headers: {
                Authorization: `token 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`,
            },
            body: {
                title: 'Teste de issue para a EtapaDesafio',
                body: 'Criação via Cypress',
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            issueId = response.body.number
        })
    })

    it('Consulta a issue', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/Alissonnoberto/${nomeRepositorio}/issues/${issueId}`,
            headers: {
                Authorization: `token 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`,
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('Teste de issue para a EtapaDesafio')
        })
    })

    it('Exclusão do repositório', () => {
        cy.request({
            method: 'DELETE',
            url: `https://api.github.com/repos/Alissonnoberto/${nomeRepositorio}`,
            headers: {
                Authorization: `token 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`,
            }
        }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })

    it('Consultar de o respositório foi eliminado', () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/Alissonnoberto/${nomeRepositorio}`,
            headers: {
                Authorization: `token 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`,
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })


})