const pokeContainer = document.getElementById('poke_container')
const toggleButton = document.querySelector('.toggle-button')
const navbarbuttons = document.querySelector('.topnav')
const loading = document.getElementById('loading')
const body = document.body

const typeColor = {
  bug: '#7fab6c',
  dragon: '#25398f',
  electric: '#fed330',
  fairy: '#ff0069',
  fighting: '#30336b',
  fire: '#f0932b',
  flying: '#7ccdea',
  grass: '#00b894',
  ground: '#efb549',
  ghost: '#a55eea',
  ice: '#aac8e6',
  normal: '#95afc0',
  poison: '#6c5ce7',
  psychic: '#a29bfe',
  rock: '#b09e6b',
  water: '#0190ff',
  dark: '#525151',
  steel: '#aba9a1'
}

// 取得資料
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  return await res.json()
}

// 建立pokemon卡片
const createPokemonCard = (pokemon) => {
  const { id, stats, name, sprites, types } = pokemon
  const pokemonEl = document.createElement('div')
  const hp = stats[0].base_stat
  const statAttack = stats[1].base_stat
  const statDefense = stats[2].base_stat
  const statSpeed = stats[5].base_stat
  const typesHTML = types
    .map(
      (type) =>
        `<span style="background:${typeColor[type.type.name]}">${
          type.type.name
        }</span>`
    )
    .join('')

  // 依屬性設定背景色
  const themeColor = typeColor[types[0].type.name]

  const pokeInnerHTML = `
  <div class="container">
  <div class='card' style= "background: radial-gradient(circle at 50% 0%,${themeColor} 36%, #f0efe9 36%)">
  <span class="number">${id}</span>
  <p class='hp'><span>HP</span> ${hp}</p>
  <img src="${sprites.front_default}" alt="${name}" />
  <h2 class='name'>${name}</h2>
  <div class='types'>
    ${typesHTML}
  </div>
  <div class="stats">
  <div>
  <h3>${statAttack}</h3>
  <p>Attack</p>
  </div>
  <div>
  <h3>${statDefense}</h3>
  <p>Defense</p>
  </div>
  <div>
  <h3>${statSpeed}</h3>
  <p>Speed</p>
  </div>
  </div>
  </div>
  `

  pokemonEl.innerHTML = pokeInnerHTML
  loading.innerHTML = ''
  pokeContainer.appendChild(pokemonEl)
}

const fetchPokemons = async (startId, endId) => {
  const range = []
  for (let i = startId; i <= endId; i++) {
    range.push(getPokemon(i))
  }
  // promise all 寫法
  // 把Promise.all得到的陣列用()包起來，做為forEach的參數
  // ;(await Promise.all(range)).forEach((pokemon) => {
  //   createPokemonCard(pokemon)
  // })

  // for...await寫法
  // 可以等待當前元素的Promise物件解析後再進行下一個元素的處理
  for await (const pokemon of range) {
    createPokemonCard(pokemon)
  }
}

// 根據id取得各地區的pokemon資料集
navbarbuttons.addEventListener('click', (e) => {
  e.target.disabled = true
  setTimeout(() => {
    e.target.disabled = false
  }, 1000)

  if (!e.target.classList.contains('btn')) {
    return
  }
  pokeContainer.innerHTML = ''
  loading.innerHTML =
    "<div class ='loading'><div class='circle'></div><div class='circle'></div><div class='circle'></div>"
  navbarbuttons.classList.remove('active')

  const pokenumStart = parseInt(e.target.dataset.pokenumStart, 10)
  const pokenumEnd = parseInt(e.target.dataset.pokenumEnd, 10)
  fetchPokemons(pokenumStart, pokenumEnd)
})

// hamburger menu
toggleButton.addEventListener('click', (e) => {
  navbarbuttons.classList.toggle('active')
})

// navbar scroll
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
    body.classList.remove('scroll-up')
  }
  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  }
  if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down')
    body.classList.add('scroll-up')
  }

  lastScroll = currentScroll
})
