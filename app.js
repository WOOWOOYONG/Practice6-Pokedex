const poke_container = document.getElementById("poke_container");
const k = document.querySelector(".kanto");
const j = document.querySelector(".Johto");
const h = document.querySelector(".hoenn");
const s = document.querySelector(".sinnoh");
const u = document.querySelector(".unova");
const ka = document.querySelector(".kalos");
const a = document.querySelector(".alola");
const g = document.querySelector(".galar");
const toggleButton = document.querySelector(".toggle-button");
const navbarbuttons = document.querySelector(".topnav");
toggleButton.addEventListener("click", () => {
  navbarbuttons.classList.toggle("active");
});

k.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

j.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 152; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

h.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 252; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

s.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 387; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

u.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 494; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

ka.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 650; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

a.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 722; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});

g.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    for (let i = 810; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  };
  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const { id, name, sprites, types } = pokemon;

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

  fetchPokemons();
});
