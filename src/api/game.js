import request from '@/utils/request'
import _ from 'lodash'

const urlPrefix = 'https://uugame-1256491688.file.myqcloud.com'
const games = [{
  id: 1,
  name: 'Halloween Memory',
  url: urlPrefix + '/games/HalloweenMemory',
  logo: urlPrefix + '/games/HalloweenMemory/icon-256.png',
  category: 'Action & Risk',
  start: 100
}, {
  id: 2,
  name: 'Sticky Monkey',
  url: urlPrefix + '/games/StickyMonkey',
  logo: urlPrefix + '/games/StickyMonkey/icon-256.png',
  category: 'Action & Risk',
  start: 101
}, {
  id: 3,
  name: 'Plumber',
  url: urlPrefix + '/games/Plumber',
  logo: urlPrefix + '/games/Plumber/icon-256.png',
  category: 'Action & Risk',
  start: 102
}, {
  id: 4,
  name: 'Golden Miner',
  url: urlPrefix + '/games/GoldenMiner',
  logo: urlPrefix + '/games/GoldenMiner/icon-256.png',
  category: 'Action & Risk',
  start: 103
}, {
  id: 5,
  name: 'Escape',
  url: urlPrefix + '/games/Escape',
  logo: urlPrefix + '/games/Escape/icon-256.png',
  category: 'Action & Risk',
  start: 104
}, {
  id: 7,
  name: 'Tart',
  url: urlPrefix + '/games/Tart',
  logo: urlPrefix + '/games/Tart/icon-256.png',
  category: 'Action & Risk',
  start: 105
}, {
  id: 8,
  name: 'Brickwork',
  url: urlPrefix + '/games/Brickwork',
  logo: urlPrefix + '/games/Brickwork/icon-256.png',
  category: 'Action & Risk',
  start: 106
}, {
  id: 9,
  name: 'Candle Super Line',
  url: urlPrefix + '/games/CandleSuperLine',
  logo: urlPrefix + '/games/CandleSuperLine/icon-256.png',
  category: 'Action & Risk',
  start: 107
}, {
  id: 10,
  name: 'Casino Card Memory',
  url: urlPrefix + '/games/CasinoCardMemory',
  logo: urlPrefix + '/games/CasinoCardMemory/icon-256.png',
  category: 'Action & Risk',
  start: 108
}, {
  id: 11,
  name: 'Crazy Runner',
  url: urlPrefix + '/games/CrazyRunner',
  logo: urlPrefix + '/games/CrazyRunner/icon-256.png',
  category: 'Action & Risk',
  start: 109
}, {
  id: 12,
  name: 'Duck Hunter',
  url: urlPrefix + '/games/DuckHunter',
  logo: urlPrefix + '/games/DuckHunter/icon-256.png',
  category: 'Action & Risk',
  start: 110
}, {
  id: 13,
  name: 'Fisherman',
  url: urlPrefix + '/games/Fisherman',
  logo: urlPrefix + '/games/Fisherman/icon-256.png',
  category: 'Action & Risk',
  start: 111
}, {
  id: 14,
  name: 'Fruit Snake',
  url: urlPrefix + '/games/FruitSnake',
  logo: urlPrefix + '/games/FruitSnake/icon-256.png',
  category: 'Action & Risk',
  start: 112
}, {
  id: 15,
  name: 'Girl Dress Up',
  url: urlPrefix + '/games/GirlDressUp',
  logo: urlPrefix + '/games/GirlDressUp/icon-256.png',
  category: 'Action & Risk',
  start: 113
}, {
  id: 16,
  name: 'Halloween Bubble Gunners',
  url: urlPrefix + '/games/HalloweenBubbleGunners',
  logo: urlPrefix + '/games/HalloweenBubbleGunners/icon-256.png',
  category: 'Action & Risk',
  start: 114
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
  start: 116
}, {
  id: 19,
  name: 'Ninja Adventure',
  url: urlPrefix + '/games/NinjaAdventure',
  logo: urlPrefix + '/games/NinjaAdventure/icon-256.png',
  category: 'Action & Risk',
  start: 117
}, {
  id: 20,
  name: 'Racing Car',
  url: urlPrefix + '/games/RacingCar',
  logo: urlPrefix + '/games/RacingCar/icon-256.png',
  category: 'Action & Risk',
  start: 118
}, {
  id: 21,
  name: 'Space Shuttle',
  url: urlPrefix + '/games/SpaceShuttle',
  logo: urlPrefix + '/games/SpaceShuttle/icon-256.png',
  category: 'Action & Risk',
  start: 119
}, {
  id: 22,
  name: 'Super Cowboy Run',
  url: urlPrefix + '/games/SuperCowboyRun',
  logo: urlPrefix + '/games/SuperCowboyRun/icon-256.png',
  category: 'Action & Risk',
  start: 121
}, {
  id: 23,
  name: 'Tank Defender',
  url: urlPrefix + '/games/TankDefender',
  logo: urlPrefix + '/games/TankDefender/icon-256.png',
  category: 'Action & Risk',
  start: 122
}, {
  id: 24,
  name: 'Vagrants VS Zombies',
  url: urlPrefix + '/games/VagrantsVSZombies',
  logo: urlPrefix + '/games/VagrantsVSZombies/icon-256.png',
  category: 'Action & Risk',
  start: 123
}]

export function getGame (id) {
  return new Promise(resolve => {
    resolve({
      data: _.find(games, (game) => {
        return game.id === id
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
