function PegarValor() {
    console.log(imput)
}

function apiBase() {
    var imput = document.getElementById('buscaTxt').value;
    console.log(imput)
    const list = document.getElementById('list')//Cria o elemento list e solicita que ele pege o elemento list no HTML
    const buscaTxt = document.getElementById('buscaTxt')
    const btnBusca = document.getElementById('btnBusca')

    let url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    let urlFilter = `https://pokeapi.co/api/v2/pokemon/${imput}`
    if (imput) {

        fetch(urlFilter)

            .then((data) => {
                fetch(data.url)
                    .then((Response) => {
                        return Response.json();
                    })
                    .then((data) => {

                        console.log(data);
                        const img = data.sprites.front_default;
                        const card = document.createElement('div')
                        card.setAttribute("class", "card")
                        const contentText = document.createElement('div')
                        contentText.setAttribute("class", "contentText")
                        const nomePokemon = document.createElement('span')
                        nomePokemon.textContent = data.name
                        const idPokemon = document.createElement('span')
                        //idPokemon.textContent = "#" + index + 1;
                        const imgPokemon = document.createElement('img');
                        imgPokemon.src = img
                        contentText.appendChild(nomePokemon)
                        contentText.appendChild(idPokemon)
                        card.appendChild(contentText)
                        card.appendChild(imgPokemon)
                        list.appendChild(card)



                    })



                var li = list.setAttribute.nomePokemon;
            })

    }
    fetch(url)//Faz o GET na API, o fetch tem o GET como metodo padrão
        .then((Response) => {
            return Response.json();
        })//Retorna a API no formato json para ser lida pelo Script
        .then((data) => {
            const pokemons = data.results;
            pokemons.map((pokemon, index) => {
                fetch(pokemon.url)
                    .then((Response) => {
                        return Response.json();
                    })
                    .then((data) => {
                        const img = data.sprites.front_default;
                        const card = document.createElement('div')
                        card.setAttribute("class", "card")
                        const contentText = document.createElement('div')
                        contentText.setAttribute("class", "contentText")
                        const nomePokemon = document.createElement('span')
                        nomePokemon.textContent = pokemon.name
                        const idPokemon = document.createElement('span')
                        idPokemon.textContent = "#" + index + 1;
                        const imgPokemon = document.createElement('img');
                        imgPokemon.src = img
                        contentText.appendChild(nomePokemon)
                        contentText.appendChild(idPokemon)
                        card.appendChild(contentText)
                        card.appendChild(imgPokemon)
                        list.appendChild(card)


                    })
            })
        })
        .catch((erro) => {
            console.log("Erro", erro)
        });
}
apiBase();