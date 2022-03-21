# Technical Challenge
****

Queremos evoluir com você para a próxima etapa do nosso processo que será um desafio técnico, a fim de entender um pouco mais sobre sua capacidade técnica! Nessa etapa, será observado:

● uso de boas práticas de programação

● legibilidade do código

● presença e qualidade de testes unitários

● versionamento do código

● capacidade de identificar e prever problemas

● lógica implementada

Recomendamos que use linguagem Node.js para desenvolvimento deste Desafio. A interface usada pode ser Console (linha de comando), Form do Windows ou Angular e a sua entrega do desafio será feita através de um link pelo Github ou se preferir, pode ser pelo zip.fonte também.

1. Um cliente precisa de um sistema que seja capaz de decompor um número em todos os seus divisores, enumerando também aqueles que forem primos. Obs.: Não é permitido o uso de bibliotecas prontas, se houver, que façam a decomposição.



* Dado um número de entrada, o programa deve calcular todos os divisores que compõem o número.

* Dado um número de entrada, o programa deve calcular todos os divisores primos que compõem o número.



> Exemplo de Console:  
Digite um número: 45  
Após o usuário digitar o número, Console pode mostrar:  
Número de Entrada: 45  
Números divisores: 1 3 5 9 15 45  
Divisores Primos: 1 3 5


### Acesso ao serviço

para acessar o serviço, basta acessar pelo terminal entrar na pasta backend:

```shell
npm install ou npm i # Instalar as dependencias com o comando
npm run dev # para escutar a aplicação no modo de desenvolvimento
npm run test ou npm t # execulta testes no modo wacth
npm run test:cov # executa testes no coverage
npm run test:func # executa testes unitários
npm run build # executa a compilação do código
mpm start # inicia o servidor modo produção
```

antes de iniciar cirar um arquivo ```.env```

````.env
NODE_ENV=development

PORT=3000
HOST=localhost

ENABLE_HTTPS=true
CERT_FILE=./cert/cert.pem
KEY_FILE=./cert/key.pem

````

obs.: ele esta pré configurado para desenvolvimento, porta 3000 e host localhost em um server https mas pode ser mudados os valores como o desenvolvedor quiser, lembrando que isso deve ser mudado no enviroment.ts e/ou no environment.prod.ts no frontend.

### Acesso ao frontend

para aceesar o frontend, basta acessar pelo terminal entrar na pasta frontend:
como ele esata em angular, basta acessar o terminal e digitar:

```shell
npm start # inicia o servidor
npm run build # gera a build
npm run waitch # inicia o watch
npm run test  # executa os testes
```

2. Já temos nossa funcionalidade principal. Contudo, você acaba de descobrir que essa funcionalidade vai ser usada em outros sistemas e, por isso, é necessário que seja disponibilizada um serviço que forneça as informações. Fique atento a:

* Performance

* Escalabilidade

* Disponibilidade

* Resiliência

* Robustez


 O serviço deve esta disponível nas seguintes Urls:

 > backend: https://localhost:3000/calc/:numero  
 > backend simulação de produção com cluste: https://localhost:8080/calc/:numero  
 > frontend: https://localhost:4200
 >
> Obs.: O serviço https só serar apresentado caso as variaveis de ambiente ENABLE_HTTPS sejam definidas como true.
> e os certivicados CERT_FILE e KEY_FILE estajam apontando para o caminho certo no caso para testes eu deixei a pasta cert no projeto com certificados auto assinados.