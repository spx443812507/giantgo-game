import _ from 'lodash'

const urlPrefix = 'https://uugame-1256491688.file.myqcloud.com'
const games = [{
  id: 1,
  name: 'Halloween Memory',
  url: urlPrefix + '/games/HalloweenMemory',
  logo: urlPrefix + '/games/HalloweenMemory/icon-256.png',
  category: 'Action & Risk',
  start: 100,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 2,
  name: 'Sticky Monkey',
  url: urlPrefix + '/games/StickyMonkey',
  logo: urlPrefix + '/games/StickyMonkey/icon-256.png',
  category: 'Action & Risk',
  start: 101,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 3,
  name: 'Plumber',
  url: urlPrefix + '/games/Plumber',
  logo: urlPrefix + '/games/Plumber/icon-256.png',
  category: 'Action & Risk',
  start: 102,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 4,
  name: 'Golden Miner',
  url: urlPrefix + '/games/GoldenMiner',
  logo: urlPrefix + '/games/GoldenMiner/icon-256.png',
  category: 'Action & Risk',
  start: 103,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 5,
  name: 'Escape',
  url: urlPrefix + '/games/Escape',
  logo: urlPrefix + '/games/Escape/icon-256.png',
  category: 'Action & Risk',
  start: 104,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 7,
  name: 'Tart',
  url: urlPrefix + '/games/Tart',
  logo: urlPrefix + '/games/Tart/icon-256.png',
  category: 'Action & Risk',
  start: 105,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 8,
  name: 'Brickwork',
  url: urlPrefix + '/games/Brickwork',
  logo: urlPrefix + '/games/Brickwork/icon-256.png',
  category: 'Action & Risk',
  start: 106,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 9,
  name: 'Candle Super Line',
  url: urlPrefix + '/games/CandleSuperLine',
  logo: urlPrefix + '/games/CandleSuperLine/icon-256.png',
  category: 'Action & Risk',
  start: 107,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 10,
  name: 'Casino Card Memory',
  url: urlPrefix + '/games/CasinoCardMemory',
  logo: urlPrefix + '/games/CasinoCardMemory/icon-256.png',
  category: 'Action & Risk',
  start: 108,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 11,
  name: 'Crazy Runner',
  url: urlPrefix + '/games/CrazyRunner',
  logo: urlPrefix + '/games/CrazyRunner/icon-256.png',
  category: 'Action & Risk',
  start: 109,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 12,
  name: 'Duck Hunter',
  url: urlPrefix + '/games/DuckHunter',
  logo: urlPrefix + '/games/DuckHunter/icon-256.png',
  category: 'Action & Risk',
  start: 110,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 13,
  name: 'Fisherman',
  url: urlPrefix + '/games/Fisherman',
  logo: urlPrefix + '/games/Fisherman/icon-256.png',
  category: 'Action & Risk',
  start: 111,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 14,
  name: 'Fruit Snake',
  url: urlPrefix + '/games/FruitSnake',
  logo: urlPrefix + '/games/FruitSnake/icon-256.png',
  category: 'Action & Risk',
  start: 112,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 15,
  name: 'Girl Dress Up',
  url: urlPrefix + '/games/GirlDressUp',
  logo: urlPrefix + '/games/GirlDressUp/icon-256.png',
  category: 'Action & Risk',
  start: 113,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 16,
  name: 'Halloween Bubble Gunners',
  url: urlPrefix + '/games/HalloweenBubbleGunners',
  logo: urlPrefix + '/games/HalloweenBubbleGunners/icon-256.png',
  category: 'Action & Risk',
  start: 114,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 17,
  name: 'Jelly',
  url: urlPrefix + '/games/Jelly',
  logo: urlPrefix + '/games/Jelly/icon-256.png',
  category: 'Action & Risk',
  start: 115
}, {
  id: 18,
  name: 'Zombie Buster',
  url: urlPrefix + '/games/ZombieBuster',
  logo: urlPrefix + '/games/ZombieBuster/icon-256.png',
  category: 'Action & Risk',
  start: 116,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 19,
  name: 'Ninja Adventure',
  url: urlPrefix + '/games/NinjaAdventure',
  logo: urlPrefix + '/games/NinjaAdventure/icon-256.png',
  category: 'Action & Risk',
  start: 117,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 20,
  name: 'Racing Car',
  url: urlPrefix + '/games/RacingCar',
  logo: urlPrefix + '/games/RacingCar/icon-256.png',
  category: 'Action & Risk',
  start: 118,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 21,
  name: 'Space Shuttle',
  url: urlPrefix + '/games/SpaceShuttle',
  logo: urlPrefix + '/games/SpaceShuttle/icon-256.png',
  category: 'Action & Risk',
  start: 119,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 22,
  name: 'Super Cowboy Run',
  url: urlPrefix + '/games/SuperCowboyRun',
  logo: urlPrefix + '/games/SuperCowboyRun/icon-256.png',
  category: 'Action & Risk',
  start: 121,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 23,
  name: 'Tank Defender',
  url: urlPrefix + '/games/TankDefender',
  logo: urlPrefix + '/games/TankDefender/icon-256.png',
  category: 'Action & Risk',
  start: 122,
  desc: '好玩 好玩 真好玩！'
}, {
  id: 24,
  name: 'Vagrants VS Zombies',
  url: urlPrefix + '/games/VagrantsVSZombies',
  logo: urlPrefix + '/games/VagrantsVSZombies/icon-256.png',
  category: 'Action & Risk',
  start: 123,
  desc: '好玩 好玩 真好玩！'
}]

export function getGame (id) {
  return new Promise(resolve => {
    resolve({
      data: _.find(games, (game) => {
        return String(game.id) === String(id)
      })
    })
  })
}

export function getHotGames () {
  return new Promise(resolve => {
    resolve({
      data: _.filter(games, (game) => {
        return game.id < 10
      })
    })
  })
}

export function getBestGames () {
  return new Promise(resolve => {
    resolve({
      data: _.filter(games, (game) => {
        return game.id > 10
      })
    })
  })
}
