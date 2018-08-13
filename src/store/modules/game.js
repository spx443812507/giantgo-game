const urlPrefix = 'https://uugame-1256491688.file.myqcloud.com'

const state = {
  hotGames: [{
    name: 'Halloween Memory',
    url: urlPrefix + '/games/HalloweenMemory',
    logo: urlPrefix + '/games/HalloweenMemory/icon-256.png',
    category: 'Action & Risk',
    start: 100
  }, {
    name: 'Sticky Monkey',
    url: urlPrefix + '/games/StickyMonkey',
    logo: urlPrefix + '/games/StickyMonkey/icon-256.png',
    category: 'Action & Risk',
    start: 101
  }, {
    name: 'Plumber',
    url: urlPrefix + '/games/Plumber',
    logo: urlPrefix + '/games/Plumber/icon-256.png',
    category: 'Action & Risk',
    start: 102
  }, {
    name: 'Golden Miner',
    url: urlPrefix + '/games/GoldenMiner',
    logo: urlPrefix + '/games/GoldenMiner/icon-256.png',
    category: 'Action & Risk',
    start: 103
  }, {
    name: 'Escape',
    url: urlPrefix + '/games/Escape',
    logo: urlPrefix + '/games/Escape/icon-256.png',
    category: 'Action & Risk',
    start: 104
  }, {
    name: 'Tart',
    url: urlPrefix + '/games/Tart',
    logo: urlPrefix + '/games/Tart/icon-256.png',
    category: 'Action & Risk',
    start: 105
  }, {
    name: 'Brickwork',
    url: urlPrefix + '/games/Brickwork',
    logo: urlPrefix + '/games/Brickwork/icon-256.png',
    category: 'Action & Risk',
    start: 106
  }, {
    name: 'Candle Super Line',
    url: urlPrefix + '/games/CandleSuperLine',
    logo: urlPrefix + '/games/CandleSuperLine/icon-256.png',
    category: 'Action & Risk',
    start: 107
  }, {
    name: 'Casino Card Memory',
    url: urlPrefix + '/games/CasinoCardMemory',
    logo: urlPrefix + '/games/CasinoCardMemory/icon-256.png',
    category: 'Action & Risk',
    start: 108
  }, {
    name: 'Crazy Runner',
    url: urlPrefix + '/games/CrazyRunner',
    logo: urlPrefix + '/games/CrazyRunner/icon-256.png',
    category: 'Action & Risk',
    start: 109
  }, {
    name: 'Duck Hunter',
    url: urlPrefix + '/games/DuckHunter',
    logo: urlPrefix + '/games/DuckHunter/icon-256.png',
    category: 'Action & Risk',
    start: 110
  }, {
    name: 'Fisherman',
    url: urlPrefix + '/games/Fisherman',
    logo: urlPrefix + '/games/Fisherman/icon-256.png',
    category: 'Action & Risk',
    start: 111
  }, {
    name: 'Fruit Snake',
    url: urlPrefix + '/games/FruitSnake',
    logo: urlPrefix + '/games/FruitSnake/icon-256.png',
    category: 'Action & Risk',
    start: 112
  }, {
    name: 'Girl Dress Up',
    url: urlPrefix + '/games/GirlDressUp',
    logo: urlPrefix + '/games/GirlDressUp/icon-256.png',
    category: 'Action & Risk',
    start: 113
  }, {
    name: 'Halloween Bubble Gunners',
    url: urlPrefix + '/games/HalloweenBubbleGunners',
    logo: urlPrefix + '/games/HalloweenBubbleGunners/icon-256.png',
    category: 'Action & Risk',
    start: 114
  }, {
    name: 'Jelly',
    url: urlPrefix + '/games/Jelly',
    logo: urlPrefix + '/games/Jelly/icon-256.png',
    category: 'Action & Risk',
    start: 115
  }],
  goodGames: [{
    name: 'Zombie Buster',
    url: urlPrefix + '/games/ZombieBuster',
    logo: urlPrefix + '/games/ZombieBuster/icon-256.png',
    category: 'Action & Risk',
    start: 116
  }, {
    name: 'Ninja Adventure',
    url: urlPrefix + '/games/NinjaAdventure',
    logo: urlPrefix + '/games/NinjaAdventure/icon-256.png',
    category: 'Action & Risk',
    start: 117
  }, {
    name: 'Racing Car',
    url: urlPrefix + '/games/RacingCar',
    logo: urlPrefix + '/games/RacingCar/icon-256.png',
    category: 'Action & Risk',
    start: 118
  }, {
    name: 'Space Shuttle',
    url: urlPrefix + '/games/SpaceShuttle',
    logo: urlPrefix + '/games/SpaceShuttle/icon-256.png',
    category: 'Action & Risk',
    start: 119
  }, {
    name: 'Super Cowboy Run',
    url: urlPrefix + '/games/SuperCowboyRun',
    logo: urlPrefix + '/games/SuperCowboyRun/icon-256.png',
    category: 'Action & Risk',
    start: 121
  }, {
    name: 'Tank Defender',
    url: urlPrefix + '/games/TankDefender',
    logo: urlPrefix + '/games/TankDefender/icon-256.png',
    category: 'Action & Risk',
    start: 122
  }, {
    name: 'Vagrants VS Zombies',
    url: urlPrefix + '/games/VagrantsVSZombies',
    logo: urlPrefix + '/games/VagrantsVSZombies/icon-256.png',
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
