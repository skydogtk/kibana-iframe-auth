**Autenticação de Kibana embarcado em um iframe**

**Conceito**
É possível se autenticar com o Kibana através de uma requisição post para o endpoint "/internal/security/login", enviando um objeto JSON com usuário e senha.
O retorno, em caso de sucesso é um cookie.
Para tanto é necessário, pelas regras de segurança impostas pelos navegadores, que a página que conterá o iframe e o Kibana estejam no mesmo domínio.
Usar proxy reverso é uma estratégia para que o Kibana esteja no mesmo domínio que a página web.

Para executar esta prova de conceito é necessário seguir os passos abaixo:

Instalar as dependências:
```
npm install
```


Subir o servidor com o proxy para o endereço do Kibana (para que tudo esteja sob o mesmo domínio)
```
node node_modules/http-server/bin/http-server --proxy http://endereco-do-kibana
```

Preencher o usuário e senha no arquivo script.js
