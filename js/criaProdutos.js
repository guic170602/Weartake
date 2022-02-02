function criaImagens(index, produtos){
    const figure = document.createElement('figure')
    figure.classList.add('imagem')
    const img = document.createElement('img')
    img.src = produtos[index].imagem
    figure.appendChild(img)
    return figure
}

function criaCategoria(index, produtos){
    const categoria = document.createElement('p')
    categoria.classList.add('categoria')
    categoria.innerHTML = produtos[index].categoria
    return categoria
}

function criaNome(index, produtos){
    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.innerHTML = produtos[index].nome
    return nome
}

function criaDescricao(index, produtos){
    const descricao = document.createElement('p')
    descricao.classList.add('descricao')
    descricao.innerHTML = produtos[index].descricao
    return descricao
}

function criaPreco(index, produtos){
    const preco = document.createElement('p')
    preco.classList.add('preco')
    preco.innerHTML = produtos[index].preco
    return preco
}

function criaAdicionarAoCarrinho(index){
    const add = document.createElement('button')
    add.classList.add('addCart')
    add.innerHTML = 'Adicionar ao carrinho'
    return add
}

function criaPrudutos(produtos){
    const secaoProdutos = document.querySelector('.products')
    secaoProdutos.innerHTML=''
    if(produtos<1){
        const erro = document.createElement('h1')
        erro.innerHTML = '<span>Erro</span><br>Não foi possivel achar ou esta fora de estoque'
        secaoProdutos.classList.add('erro')
        secaoProdutos.appendChild(erro)
    }else{    
        secaoProdutos.classList.remove('erro')

        for(let index in produtos){
            const article = document.createElement('article')
            article.classList.add('produto')

            article.appendChild(criaImagens(index, produtos))

            const divDescricao = document.createElement('div')
            divDescricao.classList.add('descricaoProduto')

            divDescricao.appendChild(criaCategoria(index, produtos))

            divDescricao.appendChild(criaNome(index, produtos))

            divDescricao.appendChild(criaDescricao(index, produtos))

            divDescricao.appendChild(criaPreco(index, produtos))

            divDescricao.appendChild(criaAdicionarAoCarrinho(index, produtos))

            article.appendChild(divDescricao)
            secaoProdutos.appendChild(article)
        }
    }
}

criaPrudutos(produtosBd)