function apiBase() {
    const list = document.getElementById('list')//Cria o elemento list e solicita que ele pege o elemento list no HTML
    const buscaTxt = document.getElementById('buscaTxt')
    const btnBusca = document.getElementById('btnBusca')

    let url = 'https://pokeapi.co/api/v2/pokemon/';
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
                    }
                    )
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


                        var input = document.getElementById('buscaTxt');
                        var filter = input.ariaValueMax.toUpperCase();
                        var ul = document.getElementById('list')
                        var li = ul.setAttribute.nomePokemon;

                        for (i = 0; i < li.length; i++) {
                           var a = li[i].getElementsByTagName("a")[0];
                           var txtValue = a.textContent || a.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                              li[i].style.display = "";
                            } else {
                              li[i].style.display = "none";
                            }
                          }
                        

                       
                        })
            })
        })
        .catch((erro) => {
            console.log("Erro", erro)
        });
}
apiBase();