const app = document.getElementById('cartao');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', "https://pokeapi.co/api/v2/pokemon/", true);

request.onload =  function(){
    const data = JSON.parse(this.response);

    console.log(data)
    console.log(data[0].title)

    if(request.status >= 200 && request.status < 400){
        console.log("SUCESSO!!!")
        data.forEach(pokemon => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
          
            const img = document.createElement('img');
            img.img = pokemon.sprites.front_default;
          
            const p = document.createElement('p');
            data = pokemon.name;
            p.textContent = pokemon.name;
          
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
          });
    }else{
        console.log("erro")
    }
}
request.send()
