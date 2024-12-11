# language: pt
Funcionalidade: Navegação e Submissão do formulário de contato

    Cenário: Verificar navegação para página de contato
        Dado que o usuário esteja na página inicial do site
        Quando o mesmo clica na opção "Contato" do menu de Navegação
        Então o usuário deve ser deve ser redirecionado para a página de contato
    
    Cenário: Submissão do formulário de contato
        Dado que estou na página de contato
        Quando eu preencho o formulário com:
            | Nome                | E-mail                 | Empresa      | Assunto                      |
            | Etapa Desafio Teste | testedesafio@teste.com | DesafioTeste | Teste da mensagem de assunto |
        E marco o checkbox "Li e aceito os termos de uso"
        E clico no botão "Enviar"
        Então a mensagem de sucesso "As suas respostas foram recebidas com sucesso!" deve ser exibida

