function pesquisar(){ 

    let section = document.getElementById("resultados-pesquisa")
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //pesquisa sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada Foi Encontrado</p>"
    return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    //para cada dado dentro da lista
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
    if (titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa)) {
//cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <H2>
                <a href="${dado.redes}" target="_blank">${dado.titulo}
                </a>
            </H2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
        `
    
    }
    }
        
        
    section.innerHTML = resultados
    

}

//console.log(dados[0].titulo);

