function adicionar() {
    //Pega os elementos do HTML
    const tarefas = document.querySelector("#tarefas").value
    const lista = document.querySelector("#lista")
    const imagem = document.querySelector("#imagem").value

    //Cria e formata a div
    const div = document.createElement("div");
    div.style.backgroundColor = "red"
    div.style.width = "100px"
    div.style.height = "100px"
    div.innerHTML = `
    <p>${tarefas}</p>`
    //Cria um img
    const foto = document.createElement('img')
    foto.setAttribute('src', imagem)

    //Cria um botão
    const botao = document.createElement('button')
    botao.addEventListener("click", function () {
        alert("ERROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")

    })
    botao.textContent = 'Clique'
    
    //adiciona mo HTML
    div.append (foto)
    div.append (foto)
    lista.append(div)



}