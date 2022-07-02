function reset() {
    const list = document.getElementById('list')//Cria o elemento list e solicita que ele pege o elemento list no HTML
    list.innerHTML = "";

    let url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    
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
                        idPokemon.textContent = "#" + data.id;
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

function apiBase() {
    const input = document.getElementById('buscaTxt');

    reset();

    input.addEventListener("input", function () {
        const list = document.getElementById('list')//Cria o elemento list e solicita que ele pege o elemento list no HTML
        const value = input.value;

        if (value === "") {
            reset();
            return;
        }

        let urlFilter = `https://pokeapi.co/api/v2/pokemon/${value}`
        fetch(urlFilter)//Faz o GET na API, o fetch tem o GET como metodo padrão
            .then((Response) => {
                if (Response.status === 200) {
                    return Response.json();
                }

                throw new Error('Erro na requisição')
            })
            .then((data) => {
                list.innerHTML = "";

                const img = data.sprites.front_default;
                const card = document.createElement('div')
                card.setAttribute("class", "card")
                const contentText = document.createElement('div')
                contentText.setAttribute("class", "contentText")
                const nomePokemon = document.createElement('span')
                nomePokemon.textContent = data.name
                const idPokemon = document.createElement('span')
                idPokemon.textContent = "#" + data.id;
                const imgPokemon = document.createElement('img');
                imgPokemon.src = img
                contentText.appendChild(nomePokemon)
                contentText.appendChild(idPokemon)
                card.appendChild(contentText)
                card.appendChild(imgPokemon)
                list.appendChild(card)
            })
            .catch(() => {
                return null;
            })
    })
}
apiBase();