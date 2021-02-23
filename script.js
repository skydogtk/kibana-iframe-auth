$(function() {   

    // Endpoint que retorna o cookie de autenticação
    var kibanaLogin = "/internal/security/login";

    // Compartilhamento do Kibana (qualquer um)
    var kibanaView = "/s/financeiro/app/kibana#/dashboard/82494c60-6c74-11eb-8da9-3fcc4613c56e?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15y,to:now))&_a=(description:'orçamento ',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'46e75be0-6ae3-11eb-8da9-3fcc4613c56e',key:exercicio,negate:!f,params:(query:'2021'),type:phrase),query:(match_phrase:(exercicio:'2021')))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:11,i:'5f034cf1-4bc9-4a49-a960-88db238ac9ae',w:13,x:0,y:0),id:'51502970-6c7a-11eb-8da9-3fcc4613c56e',panelIndex:'5f034cf1-4bc9-4a49-a960-88db238ac9ae',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:5,i:'32dc5dd1-2418-4955-9aef-ceed4cf6e57b',w:35,x:13,y:0),id:'4ec806b0-6c74-11eb-8da9-3fcc4613c56e',panelIndex:'32dc5dd1-2418-4955-9aef-ceed4cf6e57b',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:6,i:'98829fd4-ad68-4d71-998c-d20a174bff59',w:35,x:13,y:5),id:f701a600-6c61-11eb-8da9-3fcc4613c56e,panelIndex:'98829fd4-ad68-4d71-998c-d20a174bff59',type:visualization,version:'7.6.2'),(embeddableConfig:(),gridData:(h:28,i:'54b8fbf8-135a-478f-86c2-c57d76c88218',w:48,x:0,y:11),id:'95db84d0-6be0-11eb-8da9-3fcc4613c56e',panelIndex:'54b8fbf8-135a-478f-86c2-c57d76c88218',type:visualization,version:'7.6.2')),query:(language:kuery,query:''),timeRestore:!f,title:'Limite da LOA Exercício ',viewMode:view)";
    
    // Esqueleto de iframe para embarcar o compartilhamento do Kibana
    var kibanaFrame = "<iframe id=kibana2 src=\"" + kibanaView + "\"></iframe>";

    // Substituir pelo usuário e senha que o sistema vai usar para autenticar no Kibana
    var usuario = "xxx";
    var senha = "yyy";

    var corpo = {
        password: senha,
        username: usuario
    };

    var cabecalhos = {
        "kbn-version": "7.6.2", // Preencher com a versão do Kibana
        "Content-Type": "application/json",
    }

    // Requisição POST que devolve o cookie de autenticação
    $.ajax({
        url: kibanaLogin,
        headers: cabecalhos,
        method: "POST",
        data: JSON.stringify(corpo),
    })
    .done(function() {
        // Se tudo correu bem, o navegador recebeu o cookie
        // Podemos carregar o iframe
        // Esse cookie só precisa ser carregado uma vez
        $("body").append(kibanaFrame);
    })
    .fail(function( jqXHR, textStatus ) {
        console.log( "Request failed: " + textStatus );
    })
});


