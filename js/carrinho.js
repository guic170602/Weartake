function cartVazio(){
    const divVazia = document.createElement('div')
    divVazia.classList.add('vazia')
    
    const textoVazio = document.createElement('h3')
    textoVazio.classList.add('textoVazio')
    textoVazio.innerHTML = 'Carrinho vázio'
    divVazia.appendChild(textoVazio)

    const add = document.createElement('p')
    add.classList.add('addItens')
    add.innerHTML = 'Adicione itens'
    divVazia.appendChild(add)

    return divVazia
}

function criaImagensDoCarrinho(index){
    const figure = document.createElement('figure')
    figure.classList.add('imagemCarrinho')
    const img = document.createElement('img')
    img.src = cart[index].imagem
    figure.appendChild(img)
    return figure
}

function criaNomeDoCarrinho(index){
    const nome = document.createElement('h2')
    nome.classList.add('nomeDoCarrinho')
    nome.innerHTML = cart[index].nome
    return nome
}

function criaPrecoDoCarrinho(index){
    const preco = document.createElement('p')
    preco.classList.add('precoDoCarrinho')
    preco.innerHTML = cart[index].preco
    return preco
}

function criaRemoverElemento(){
    const add = document.createElement('button')
    add.classList.add('remove')
    add.innerHTML = 'Remover produto'
    return add
}

function cartPreenchido(index){
    const produtoCarrinho = document.createElement('div')
    produtoCarrinho.classList.add('produtoCarrinho')

    produtoCarrinho.appendChild(criaImagensDoCarrinho(index))

    const dadosProduto =  document.createElement('div')
    dadosProduto.classList.add('dadosProduto')

    dadosProduto.appendChild(criaNomeDoCarrinho(index))

    dadosProduto.appendChild(criaPrecoDoCarrinho(index))

    dadosProduto.appendChild(criaRemoverElemento())

    produtoCarrinho.appendChild(dadosProduto)
    return produtoCarrinho
}

function verificaCarrinho(){
    const divCart = document.querySelector('.carrinhoDeCompras') || document.querySelector('.carroDeCompras')
    const divQuant = document.querySelector('.quantidadeTotal')
    if (cart.length < 1){
        divQuant.style.display = 'none'
        divCart.classList.remove('carroDeCompras')
        divCart.classList.add('carrinhoDeCompras')
        divCart.innerHTML = ''
        divCart.appendChild(cartVazio())
    }else{
        divQuant.style.display = 'block'
        divCart.classList.remove('carrinhoDeCompras')
        divCart.classList.add('carroDeCompras')
        divCart.innerHTML = ''
        for(let index in cart){
            divCart.appendChild(cartPreenchido(index))
        }
        removeDoCarrinho()
        incrementador()
    }
}

function addAoCarrinho(produtos){
    const buttonAdd = document.getElementsByClassName('addCart')
    for(let index = 0; index < buttonAdd.length; index++){
        buttonAdd[index].addEventListener('click', () => {
            cart.push(produtos[index])
            verificaCarrinho()
        })
    }
}

function removeDoCarrinho(){
    const buttonRemove = document.getElementsByClassName('remove')
    for(let index = 0; index < cart.length; index++){
        buttonRemove[index].addEventListener('click', () => {
            cart.splice(index, 1)
            verificaCarrinho()
        })
    }
}

function incrementador(){
    const divQuant = document.querySelector('.quantidadeTotal')
    divQuant.innerHTML = ""

    let cont = 0
    let precoTotal = 0

    for(let index in cart){
        const precoStr = cart[index].preco.replace('R$ ','')
        const precoInt = Number.parseInt(precoStr)
        precoTotal += precoInt
        cont++
    }

    const quantidade = document.createElement('p')
    const total = document.createElement('p')

    const textoQuant = document.createElement('span')
    textoQuant.classList.add('textoQuant')
    textoQuant.innerHTML = 'Quantidade:'

    const numQuant = document.createElement('span')
    numQuant.classList.add('numQuant')
    numQuant.innerHTML = `${cont}`

    quantidade.classList.add('quantidade')
    quantidade.appendChild(textoQuant)
    quantidade.appendChild(numQuant)

    const textoTotal = document.createElement('span')
    textoTotal.classList.add('textoTotal')
    textoTotal.innerHTML = 'Total:'

    const numTotal = document.createElement('span')
    numTotal.classList.add('numTotal')
    numTotal.innerHTML = `R$ ${precoTotal}.00`

    total.classList.add('total')
    total.appendChild(textoTotal)
    total.appendChild(numTotal)
    
    divQuant.appendChild(quantidade)
    divQuant.appendChild(total)
}

addAoCarrinho(produtosBd)
verificaCarrinho()