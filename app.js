const poke_container = document.getElementById("poke_container");
const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".Johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");
const toggleButton = document.querySelector(".toggle-button");
const navbarbuttons = document.querySelector(".topnav");

// 取得資料
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return await res.json();
};

// 建立pokemon卡片
const createPokemonCard = (pokemon) => {
  const { id, name, sprites, types } = pokemon;

  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
    </div>
    <div class="info>
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
`;
  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
};

// 根據id取得各地區的pokemon資料集
navbarbuttons.addEventListener("click", (e) => {
  e.target.disabled = true;
  setTimeout(() => {
    e.target.disabled = false;
  }, 1000);

  if (!e.target.classList.contains("btn")) {
    return;
  }
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";

  let pokemons_number_start = parseInt(e.target.dataset["pokenumStart"], 10);
  let pokemons_number_end = parseInt(e.target.dataset["pokenumEnd"], 10);
  const fetchPokemons = async () => {
    const range = [];

    for (let i = pokemons_number_start; i <= pokemons_number_end; i++) {
      range.push(getPokemon(i));
    }
    //promise all 寫法
    (await Promise.all(range)).map((pokemon) => {
      createPokemonCard(pokemon);
    });
    console.log(range);
  };
  fetchPokemons();
});

// 選擇地
toggleButton.addEventListener("click", (e) => {
  navbarbuttons.classList.toggle("active");
});
