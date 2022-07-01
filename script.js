function apiBase() {
    const list = document.getElementById('list')

    let url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
           

           const pokemons = data.results;
           pokemons.map((pokemon,index)=>{
               fetch(pokemon.url)
                   .then((Response)=>{
                       return Response.json();   
                   }
                   )
                   .then((data) => {
                       const img = data.sprites.front_default;
                       const card = document.createElement('div')
                       card.setAttribute("class","card")
                       
                       const contentText = document.createElement('div')
                       contentText.setAttribute("class","contentText")
                       const nomePokemon = document.createElement('span')
                       nomePokemon.textContent = pokemon.name
                       const idPokemon = document.createElement('span')
                       idPokemon.textContent = "#"+ index + 1;
                       
                      const imgPokemon = document.createElement('img');
                      imgPokemon.src = img
                       console.log(imgPokemon)
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