function filtro(){
    const input = document.getElementsByClassName('pesquisa')
    for(let index = 0; index < input.length; index++){
            input[index].addEventListener('keypress',  e => {
            mudaAtual(input[index].value)
            const newProduto = produtosBd.filter(produto => produto.nome.toLowerCase().includes(input[index].value.toLowerCase()))
            criaPrudutos(newProduto)
            add(newProduto)
        })
    }
    const pesquisa = document.getElementsByClassName('pesquisar')
    for(let index = 0; index<pesquisa.length; index++){
        pesquisa[index].addEventListener('click', ()=>{
            mudaAtual(input[index].value)
            const newProduto = produtosBd.filter(produto => produto.nome.toLowerCase().includes(input[index].value.toLowerCase()))
            criaPrudutos(newProduto)

            add(newProduto)
        })
    }

    const todos = document.getElementById('todos')
    todos.addEventListener('click', ()=>{
        mudaAtual('todos')
        const newProduto = produtosBd
        criaPrudutos(newProduto)

        add(newProduto)
    })
    
    const acessorios = document.getElementById('acessorios')
    acessorios.addEventListener('click', ()=>{
        mudaAtual('acessorios')
        const newProduto = produtosBd.filter(produto => produto.categoria.toLowerCase().includes('acessórios'))
        criaPrudutos(newProduto)

        add(newProduto)
    })
    
    const calçados = document.getElementById('calçados')
    calçados.addEventListener('click', ()=>{
        mudaAtual('calçados')
        const newProduto = produtosBd.filter(produto => produto.categoria.toLowerCase().includes('calçados'))
        criaPrudutos(newProduto)

        add(newProduto)
    })
    
    const camisetas = document.getElementById('camisetas')
    camisetas.addEventListener('click', ()=>{
        mudaAtual('camisetas')
        const newProduto = produtosBd.filter(produto => produto.categoria.toLowerCase().includes('camisetas'))
        criaPrudutos(newProduto)

        add(newProduto)
    })
}

function mudaAtual(atual){
    const filtro = document.getElementsByClassName('filtro')
    const id = document.getElementById(atual)
    for(let index = 0; index<filtro.length; index++){
        if(filtro[index] == id){
            filtro[index].classList.add('atual')
        }else{
            filtro[index].classList.remove('atual')
        }
    }
}

filtro()