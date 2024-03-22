$(document).ready(function(){
    
    let dados = [
        {
            "id": 10,
            "titulo": "O que é JavaScript",
            "descricao": "JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Desde o momento em que a página web é exibida no navegador, JavaScript é usado para tornar a página mais responsiva, interativa e dinâmica."
        },
        {
            "id": 11,
            "titulo": "Statement 'for'",
            "descricao": "O statement 'for' cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência."
        },
        {
            "id": 12,
            "titulo": "Funções em JavaScript",
            "descricao": "Uma função em JavaScript é um bloco de código projetado para realizar uma tarefa específica. Uma função é executada quando 'algo' a invoca (chama)."
        },
        {
            "id": 13,
            "titulo": "Objetos em JavaScript",
            "descricao": "JavaScript é uma linguagem baseada em objetos. Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor."
        }
    ];

    
    function atualizarDescricao() {
        let selectedIndex = $('#topicos').prop('selectedIndex');
        $('#informação').val(dados[selectedIndex].descricao);
        $('#descricaoLabel').text($('#topicos option:selected').text()); 
    }

    
    atualizarDescricao();

    
    $('#topicos').change(function(){
        atualizarDescricao();
    });
});
