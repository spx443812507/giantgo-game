const state = {
  hotGames: [{
    name: 'Halloween Memory',
    url: './games/HalloweenMemory',
    logo: './games/HalloweenMemory/icon-256.png',
    category: 'Action & Risk',
    start: 100
  }, {
    name: 'Sticky Monkey',
    url: './games/StickyMonkey',
    logo: './games/StickyMonkey/icon-256.png',
    category: 'Action & Risk',
    start: 101
  }, {
    name: 'Plumber',
    url: './games/Plumber',
    logo: './games/Plumber/icon-256.png',
    category: 'Action & Risk',
    start: 102
  }, {
    name: 'Golden Miner',
    url: './games/GoldenMiner',
    logo: './games/GoldenMiner/icon-256.png',
    category: 'Action & Risk',
    start: 103
  }, {
    name: 'Escape',
    url: './games/Escape',
    logo: './games/Escape/icon-256.png',
    category: 'Action & Risk',
    start: 104
  }, {
    name: 'Tart',
    url: './games/Tart',
    logo: './games/Tart/icon-256.png',
    category: 'Action & Risk',
    start: 105
  }, {
    name: 'Brickwork',
    url: './games/Brickwork',
    logo: './games/Brickwork/icon-256.png',
    category: 'Action & Risk',
    start: 106
  }, {
    name: 'Candle Super Line',
    url: './games/CandleSuperLine',
    logo: './games/CandleSuperLine/icon-256.png',
    category: 'Action & Risk',
    start: 107
  }, {
    name: 'Casino Card Memory',
    url: './games/CasinoCardMemory',
    logo: './games/CasinoCardMemory/icon-256.png',
    category: 'Action & Risk',
    start: 108
  }, {
    name: 'Crazy Runner',
    url: './games/CrazyRunner',
    logo: './games/CrazyRunner/icon-256.png',
    category: 'Action & Risk',
    start: 109
  }, {
    name: 'Duck Hunter',
    url: './games/DuckHunter',
    logo: './games/DuckHunter/icon-256.png',
    category: 'Action & Risk',
    start: 110
  }, {
    name: 'Fisherman',
    url: './games/Fisherman',
    logo: './games/Fisherman/icon-256.png',
    category: 'Action & Risk',
    start: 111
  }, {
    name: 'Fruit Snake',
    url: './games/FruitSnake',
    logo: './games/FruitSnake/icon-256.png',
    category: 'Action & Risk',
    start: 112
  }, {
    name: 'Girl Dress Up',
    url: './games/GirlDressUp',
    logo: './games/GirlDressUp/icon-256.png',
    category: 'Action & Risk',
    start: 113
  }, {
    name: 'Halloween Bubble Gunners',
    url: './games/HalloweenBubbleGunners',
    logo: './games/HalloweenBubbleGunners/icon-256.png',
    category: 'Action & Risk',
    start: 114
  }, {
    name: 'Jelly',
    url: './games/Jelly',
    logo: './games/Jelly/icon-256.png',
    category: 'Action & Risk',
    start: 115
  }],
  goodGames: [{
    name: 'Zombie Buster',
    url: './games/ZombieBuster',
    logo: './games/ZombieBuster/icon-256.png',
    category: 'Action & Risk',
    start: 116
  }, {
    name: 'Ninja Adventure',
    url: './games/NinjaAdventure',
    logo: './games/NinjaAdventure/icon-256.png',
    category: 'Action & Risk',
    start: 117
  }, {
    name: 'Racing Car',
    url: './games/RacingCar',
    logo: './games/RacingCar/icon-256.png',
    category: 'Action & Risk',
    start: 118
  }, {
    name: 'Space Shuttle',
    url: './games/SpaceShuttle',
    logo: './games/SpaceShuttle/icon-256.png',
    category: 'Action & Risk',
    start: 119
  }, {
    name: 'Zombie Buster',
    url: './games/ZombieBuster',
    logo: './games/ZombieBuster/icon-256.png',
    category: 'Action & Risk',
    start: 120
  }, {
    name: 'Super Cowboy Run',
    url: './games/SuperCowboyRun',
    logo: './games/SuperCowboyRun/icon-256.png',
    category: 'Action & Risk',
    start: 121
  }, {
    name: 'Tank Defender',
    url: './games/TankDefender',
    logo: './games/TankDefender/icon-256.png',
    category: 'Action & Risk',
    start: 122
  }, {
    name: 'Vagrants VS Zombies',
    url: './games/VagrantsVSZombies',
    logo: './games/VagrantsVSZombies/icon-256.png',
    category: 'Action & Risk',
    start: 123
  }]
}

const getters = {
  hotGames: state => state.hotGames,
  goodGames: state => state.goodGames
}

const actions = {}

const mutations = {
  setHotGames (state, hotGames) {
    state.hotGames = hotGames
  },
  setGoodGames (state, goodGames) {
    state.goodGames = goodGames
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
