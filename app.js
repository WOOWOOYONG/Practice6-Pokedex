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
toggleButton.addEventListener("click", () => {
  navbarbuttons.classList.toggle("active");
});

kanto.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 1; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 1; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

johto.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 152; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 152; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

hoenn.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 252; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 252; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

sinnoh.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 387; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 387; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

unova.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 494; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 494; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

kalos.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 650; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 650; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

alola.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 722; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 722; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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

galar.addEventListener("click", (e) => {
  navbarbuttons.classList.remove("active");
  poke_container.innerHTML = "";
  let pokemons_number = e.target.attributes[2].value;
  const fetchPokemons = async () => {
    const pokemons = [];
    for (let i = 810; i <= pokemons_number; i++) {
      const pokemon = await getPokemon(i);
      pokemons[i] = pokemon;
    }

    for (let i = 810; i <= pokemons_number; i++) {
      createPokemonCard(pokemons[i]);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    return await res.json();
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
