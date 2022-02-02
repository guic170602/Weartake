let contaCart = 0

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
    img.src = produtosBd[index].imagem
    figure.appendChild(img)
    return figure
}

function criaNomeDoCarrinho(index){
    const nome = document.createElement('h2')
    nome.classList.add('nomeDoCarrinho')
    nome.innerHTML = produtosBd[index].nome
    return nome
}

function criaPrecoDoCarrinho(index){
    const preco = document.createElement('p')
    preco.classList.add('precoDoCarrinho')
    preco.innerHTML = produtosBd[index].preco
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

function verifica(){
    const divQuant = document.querySelector(".carrinhoDeCompras") || document.querySelector(".carroDeCompras") 
    const divCont = document.querySelector(".quantidadeTotal")
    if(contaCart <= 0){
        divQuant.innerHTML = ''
        divQuant.appendChild(cartVazio())
        const textoVazio = document.querySelector(".textoVazio").style.display = "block"
        const add = document.querySelector(".addItens").style.display = "block" 
        divCont.style.display = "none"
        divQuant.classList.add("carrinhoDeCompras")
        divQuant.classList.remove("carroDeCompras")
    }else{
        divQuant.classList.remove("carrinhoDeCompras")
        divQuant.classList.add("carroDeCompras")
        const textoVazio = document.querySelector(".textoVazio").style.display = "none"
        const add = document.querySelector(".addItens").style.display = "none"
        divCont.style.display = "flex"
    }
}

verifica()

function add(){    
    const addCart = document.getElementsByClassName('addCart')
    const divQuant = document.querySelector(".carrinhoDeCompras") || document.querySelector(".carroDeCompras") 
    for(let index = 0; index<addCart.length; index++){
        addCart[index].addEventListener('click', () => {
            contaCart++
            divQuant.appendChild(cartPreenchido(index))
            incrementador()
            verifica()
            remove()
        })
    }
}

function deleteItem(){
    this.parentElement.parentElement.remove()
    contaCart--
    incrementador()
    verifica()
}

function remove(){
    const removeCart = document.getElementsByClassName('remove')
    for(let index = 0; index<contaCart; index++){
        const produtos = document.getElementsByClassName("produtoCarrinho")
        removeCart[index].addEventListener('click', deleteItem)
    }
}

function incrementador(){
    const divQuant = document.querySelector('.quantidadeTotal')
    divQuant.innerHTML = ""
    const divCart = document.getElementsByClassName('produtoCarrinho')
    const preco = document.getElementsByClassName('precoDoCarrinho')
    let cont = 0
    let precoTotal = 0

    for(let index = 0; index<divCart.length; index++){
        const precoStr = preco[index].textContent.replace('R$ ','')
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

remove()
add()