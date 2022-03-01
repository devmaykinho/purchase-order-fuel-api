## APIs para app de download de holerites

## Definição de negocio:
  O aplicativo tem como objetivo controlar a venda de combustivel entre postos e distribuidora.
  E será destinado aos postos para que os mesmos possam fazer seus pedidos.

> ### Casos de Uso
1 - Signup (Cadastro)
  - Antes de usar o aplicativo o usuário deverá se registrar através do app
    * Nome do posto
    * CNPJ
    * Email
    * Telefone
    * Cidade
    * Bairro
    * Rua
    * Numero
    * CEP
    * Senha
    * Bandeira
    * É rede?
    * Nome Rede
    * Confirmação de senha
  - Deve validar se a senha informada é igual a confirmação de senha
  - Todas as informações com exceção da rede, são obrigatórias pois serão necessárias para o fluxo de entrega
  - O nome da rede só é obrigatório caso esteja marcado como é rede?
  - Após se registrar o usuário ficará pendente de aprovação e não poderá realizar pedidos
  - A senha deve ser gravada cryptografada

2 - Signin (Login)
  - Para acessar o app, o usuário deverá informar usuário e senha
  - Validar se o usuário está cadastrado e se a senha está correta
  - Se o usuário e senha estiverem corretos, o app deve carregar a tela inicial
  - Se o usuário ou senha estiver invalido, retornar uma mensagem para o usuário (Usuário ou senha invalidos)
  - O usuário só podera fazer pedidos se o status estiver como aprovado

3 - ForgotPassword (Esqueci minha senha)
  - Na tela de login, deverá haver uma opção para o usuário solicitar uma nova senha
  - Ao clicar no link, "esqueci minha senha" exibir uma tela com um input para digitar o e-mail
  - É obrigatório informar o e-mail para fazer o reset
  - Após digitar o e-mail e clicar no botão "Enviar", deve enviar um e-mail para o usuário com uma nova senha.
  - Exibir uma mensagem para o usuário que a senha foi enviada para o e-mail

4 - Cadastro de fornecedor
 

5 - Tabela de Preços
  - A tebela de preço será vinculada para um fornecedor e só poderá ter uma tabela por fornecedor
  - A tabela de preço conterá todos os tipos de preço dispiniveis.
  - Só poderá haver um fornecedor ativo por vez, dessa forma teremos apenas uma tabela ativa
  - Os tipos de preço serão

    RETIRADA - ANTECIPADO
    RETIRADA - AVISTA
    RETIRADA - 7 DIAS
    RETIRADA - 10 DIAS

    COLOCADO - ANTECIPADO
    COLOCADO - AVISTA
    COLOCADO - 7 DIAS
    COLOCADO - 10 DIAS

  - Para cada tipo de preço, teremos um valor especifico para gasolina e um para etanol
  - Na tabela será cadastrado o preço de compra, pago ao fornecedor e o valor do preço de venda para o cliente
  - O preço exibido para o cliente no aplicativo, será o preço venda

6 - Tela inicial
  - Após logar no aplicativo o usuário deverá visualizar uma tela contendo informações de promoção e preços
  - A tela inicial dever mostrar sempre o preço mais barato, ou seja o preço antecipado
  - Caso o usuário tenha algum preço especifico, mostrar o preço especifico
  - Deverá existir um link que direciona para a tela de fazer pedidos 

7 - Realizar pedido
  TELA SELEÇÃO TIPOS

  - O usuário só poderá fazer o pedido caso o seu cadastro já tenha sido aprovado.
    * Definir momento do bloqueio
     1 - Nem aparecer a tela
     2 - Botão finalizar pedido bloqueado
     3 - Deixa o usuário fazer o pedido e o backend retorna a mensagem informando que o usuário não esta ativo.

  - O pedido será em etapas e a primeira tela deve ser a tela de seleção dos tipos

    * Usuário deve selecionar o tipo combustivel - 'GASOLINA' | 'ETANOL'
    * Usuário deve selecionar o tipo pagamento - 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS'
    * Usuário deve selecionar o tipo entrega - 'RETIRADA' | 'COLACADO'
    * Data de entrega
      - Usuario deve selecionar a data de entrega. A data de entrega não pode ser para o mesmo dia.
    * Quantidade de litros

  - Quantidade de litros deve ser maior que 0

  - A tela deve ser com uma seleção padrão
    Etanol
    Retirada
    1 litro
    Antecipado

  - Deve mostrar o total baseado nas informações selecionadas  
  - O total deve ser atualizado após a mudança de cada informação
  - Quando o usuário selecionar "colocada" informar que terá um acrescimo de frete. Mas esse valor de frete não será registridado no pedido.  

  - Só habilitar o botão de NEXT após selecionar todas as opções
  - Após clicar em next, so o tipo combustivel for retirada, direcionar para a tela de informações da transportadora, caso contrario ir direto para a tela de confirmação do pedido
  - Não permitir pedido após as 16:00
    * Deixar configurado
  - Para obter os valores deverá fazer a chamada para a api

  TELA DETALHES DO PEDIDO (CONFIRMAÇÃO)
  - Tela iniciada após clicado no botão de next na tela de seleção de tipo
  - Exibir o detalhe do pedido em modo consulta para que o usuário possa visualizar antes de confirmar

8 - Consulta pedidos
 - Carregar todos os pedidos ordernado pela data de criação mais recente
 - Exibir um card para cada pedido
   * Numero do pedido
   * Data realizada do pedido
   * Data de entrega
   * Status do pedido
   * Total do pedido
   * Tipo combustivel
  - Link para que direciona para a tela de detalhes do pedido

9 - Detalhes do pedido
 - Exibir as mesmas informações da tela de confirmação de pedido  
 - Botão para cancelamento do pedido
   Definir até que momento 

> ### Bibliotecas e Ferramentas

* Nodejs
* Express
* Typescript
* Jest
* Postgres
* Typeorm
* AWS S3
* AWS SES
* Docker
* Bcrypt
* Husky
* Eslint
* Lint Staged
* Standard Javascript Style

> ### Metodologias e Designs

* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

> ### Executando o projeto

1. Na pasta raiz executar o comando: <b>npm run up</b>
2. Sera realizado o build da aplicação na qual será iniciada utilizando containeres
3. As APIs ficaram disponiveis na porta 8080
4. Para interromper a execução, executar o comando: <b>npm run down</b>
5. Executando os testes unitários: <b>npm run test</b>