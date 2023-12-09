URL1 = 'http://localhost:3000/users'
URL2 = 'http://localhost:3000/games'


const container = document.querySelector('.profile');
const loginInfo = document.querySelector('.user-login');


var idUsuarioLogado = 0;

const validateUser = async (e) =>{
    e.preventDefault();

    console.log("teste");

    const res1 = await fetch(URL1);
    const profiles = await res1.json();

    let usuario = loginInfo.getElementsById(inputEmail);
    let senha = loginInfo.inputPassword.value;

    console.log(usuario);

    profiles.forEach(user => {

        if(usuario == user.email && senha == user.senha){
            alert("Login realizado com sucesso!");
            idUsuarioLogado = user.id;
            window.location = "index.html";

            return 0;
        } else {
            alert("Email ou senha incorretos!");
        }

    })
}

/*
const renderProfile = async () => {
    const container = document.querySelector('.profile');
    const res1 = await fetch(URL1);
    const res2 = await fetch(URL2);
    const profiles = await res1.json();
    const games = await res2.json();


    let perfil = '';

    profiles.forEach(user => {
        if(user.id == idUsuarioLogado){
            perfil += `
            <div class="container">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 text-center">
                        <h2>${user.nome}</h2>
                        <img src="${user.foto}" style="width: 30%;" alt="Foto de Perfil">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <h4>Bio do Jogador</h4>
                        <p>${user.bio}</p>
                        <a class="btn button-gamer" href="editprofile.html">Editar Perfil</a>
                    </div>
                </div> 

                <h4
                    style="margin: 50px;text-align: left; color:white; text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F, 0 0 0.2em #87F">
                    Jogos Jogados
                </h4>`;


                perfil += `<ul class="list-unstyled game-list row">`
                
            for (let i = 0; i < user.idJogos.length; i++){
                //console.log(user.idJogos[i]);
                let j = user.idJogos[i];

                perfil += `
                <li class="col-lg-6 col-md-12 col-sm-12">
                <img class="game-image" style="width: 25%;" src="${games[j].fotoCard}" alt="${games[j].nome}"">
                <h5 class="game-name">${games[j].nome}</h5>
                </li>
                `
            }

            perfil += `</ul>` 
        } 
    });


    container.innerHTML = perfil;

}*/





loginInfo.addEventListener('click', validateUser());
//window.addEventListener('DOMContentLoaded', (e)=> renderProfile());
