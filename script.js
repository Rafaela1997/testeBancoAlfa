function apiBase() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            console.log(data.results.name);


            for (var i = 0; i <= 150; i++) {

                document.getElementById('nome').innerHTML = data.results[i]['name'];

                document.getElementById('numero').innerHTML = i + 1;
                
            }

        })


        .catch((erro) => {
            console.log("Erro" + erro)
        });
    }
apiBase();