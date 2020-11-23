import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  champions = [
    {
      "name": "Aatrox",
      "championId": "TFT4_Aatrox",
      "cost": 4,
      "traits": [
        "Cultist",
        "Set4_Vanguard"
      ]
    },
    {
      "name": "Ahri",
      "championId": "TFT4_Ahri",
      "cost": 4,
      "traits": [
        "Set4_Spirit",
        "Set4_Mage"
      ]
    },
    {
      "name": "Akali",
      "championId": "TFT4_Akali",
      "cost": 3,
      "traits": [
        "Set4_Ninja",
        "Set4_Assassin"
      ]
    },
    {
      "name": "Annie",
      "championId": "TFT4_Annie",
      "cost": 2,
      "traits": [
        "Fortune",
        "Set4_Mage"
      ]
    },
    {
      "name": "Aphelios",
      "championId": "TFT4_Aphelios",
      "cost": 2,
      "traits": [
        "Moonlight",
        "Hunter"
      ]
    },
    {
      "name": "Ashe",
      "championId": "TFT4_Ashe",
      "cost": 4,
      "traits": [
        "Set4_Elderwood",
        "Hunter"
      ]
    },
    {
      "name": "Azir",
      "championId": "TFT4_Azir",
      "cost": 5,
      "traits": [
        "Warlord",
        "Keeper",
        "Emperor"
      ]
    },
    {
      "name": "Cassiopeia",
      "championId": "TFT4_Cassiopeia",
      "cost": 4,
      "traits": [
        "Dusk",
        "Set4_Mystic"
      ]
    },
    {
      "name": "Diana",
      "championId": "TFT4_Diana",
      "cost": 1,
      "traits": [
        "Moonlight",
        "Set4_Assassin"
      ]
    },
    {
      "name": "Elise",
      "championId": "TFT4_Elise",
      "cost": 1,
      "traits": [
        "Cultist",
        "Keeper"
      ]
    },
    {
      "name": "Evelynn",
      "championId": "TFT4_Evelynn",
      "cost": 3,
      "traits": [
        "Cultist",
        "Set4_Shade"
      ]
    },
    {
      "name": "Ezreal",
      "championId": "TFT4_Ezreal",
      "cost": 5,
      "traits": [
        "Set4_Elderwood",
        "Set4_Dazzler"
      ]
    },
    {
      "name": "Fiora",
      "championId": "TFT4_Fiora",
      "cost": 1,
      "traits": [
        "Set4_Enlightened",
        "Duelist"
      ]
    },
    {
      "name": "Garen",
      "championId": "TFT4_Garen",
      "cost": 1,
      "traits": [
        "Warlord",
        "Set4_Vanguard"
      ]
    },
    {
      "name": "Hecarim",
      "championId": "TFT4_Hecarim",
      "cost": 2,
      "traits": [
        "Set4_Elderwood",
        "Set4_Vanguard"
      ]
    },
    {
      "name": "Irelia",
      "championId": "TFT4_Irelia",
      "cost": 3,
      "traits": [
        "Set4_Enlightened",
        "Divine",
        "Set4_Adept"
      ]
    },
    {
      "name": "Janna",
      "championId": "TFT4_Janna",
      "cost": 2,
      "traits": [
        "Set4_Enlightened",
        "Set4_Mystic"
      ]
    },
    {
      "name": "Jarvan IV",
      "championId": "TFT4_JarvanIV",
      "cost": 2,
      "traits": [
        "Warlord",
        "Keeper"
      ]
    },
    {
      "name": "Jax",
      "championId": "TFT4_Jax",
      "cost": 2,
      "traits": [
        "Divine",
        "Duelist"
      ]
    },
    {
      "name": "Jhin",
      "championId": "TFT4_Jhin",
      "cost": 4,
      "traits": [
        "Cultist",
        "Sharpshooter"
      ]
    },
    {
      "name": "Jinx",
      "championId": "TFT4_Jinx",
      "cost": 3,
      "traits": [
        "Fortune",
        "Sharpshooter"
      ]
    },
    {
      "name": "Kalista",
      "championId": "TFT4_Kalista",
      "cost": 3,
      "traits": [
        "Cultist",
        "Duelist"
      ]
    },
    {
      "name": "Katarina",
      "championId": "TFT4_Katarina",
      "cost": 3,
      "traits": [
        "Warlord",
        "Fortune",
        "Set4_Assassin"
      ]
    },
    {
      "name": "Kayn",
      "championId": "TFT4_Kayn",
      "cost": 5,
      "traits": [
        "Set4_Tormented",
        "Set4_Shade"
      ]
    },
    {
      "name": "Kennen",
      "championId": "TFT4_Kennen",
      "cost": 3,
      "traits": [
        "Set4_Ninja",
        "Keeper"
      ]
    },
    {
      "name": "Kindred",
      "championId": "TFT4_Kindred",
      "cost": 3,
      "traits": [
        "Set4_Spirit",
        "Hunter"
      ]
    },
    {
      "name": "Lee Sin",
      "championId": "TFT4_LeeSin",
      "cost": 5,
      "traits": [
        "Divine",
        "Duelist"
      ]
    },
    {
      "name": "Lillia",
      "championId": "TFT4_Lillia",
      "cost": 5,
      "traits": [
        "Dusk",
        "Set4_Mage"
      ]
    },
    {
      "name": "Lissandra",
      "championId": "TFT4_Lissandra",
      "cost": 1,
      "traits": [
        "Moonlight",
        "Set4_Dazzler"
      ]
    },
    {
      "name": "Lulu",
      "championId": "TFT4_Lulu",
      "cost": 2,
      "traits": [
        "Set4_Elderwood",
        "Set4_Mage"
      ]
    },
    {
      "name": "Lux",
      "championId": "TFT4_Lux",
      "cost": 3,
      "traits": [
        "Divine",
        "Set4_Dazzler"
      ]
    },
    {
      "name": "Maokai",
      "championId": "TFT4_Maokai",
      "cost": 1,
      "traits": [
        "Set4_Elderwood",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Morgana",
      "championId": "TFT4_Morgana",
      "cost": 4,
      "traits": [
        "Set4_Enlightened",
        "Set4_Dazzler"
      ]
    },
    {
      "name": "Nami",
      "championId": "TFT4_Nami",
      "cost": 1,
      "traits": [
        "Set4_Enlightened",
        "Set4_Mage"
      ]
    },
    {
      "name": "Nidalee",
      "championId": "TFT4_Nidalee",
      "cost": 1,
      "traits": [
        "Warlord",
        "Sharpshooter"
      ]
    },
    {
      "name": "Nunu & Willump",
      "championId": "TFT4_Nunu",
      "cost": 3,
      "traits": [
        "Set4_Elderwood",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Pyke",
      "championId": "TFT4_Pyke",
      "cost": 2,
      "traits": [
        "Cultist",
        "Set4_Assassin"
      ]
    },
    {
      "name": "Riven",
      "championId": "TFT4_Riven",
      "cost": 4,
      "traits": [
        "Dusk",
        "Keeper"
      ]
    },
    {
      "name": "Sejuani",
      "championId": "TFT4_Sejuani",
      "cost": 4,
      "traits": [
        "Fortune",
        "Set4_Vanguard"
      ]
    },
    {
      "name": "Sett",
      "championId": "TFT4_Sett",
      "cost": 5,
      "traits": [
        "Boss",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Shen",
      "championId": "TFT4_Shen",
      "cost": 4,
      "traits": [
        "Set4_Ninja",
        "Set4_Adept",
        "Set4_Mystic"
      ]
    },
    {
      "name": "Sylas",
      "championId": "TFT4_Sylas",
      "cost": 2,
      "traits": [
        "Moonlight",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Tahm Kench",
      "championId": "TFT4_TahmKench",
      "cost": 1,
      "traits": [
        "Fortune",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Talon",
      "championId": "TFT4_Talon",
      "cost": 4,
      "traits": [
        "Set4_Enlightened",
        "Set4_Assassin"
      ]
    },
    {
      "name": "Teemo",
      "championId": "TFT4_Teemo",
      "cost": 2,
      "traits": [
        "Set4_Spirit",
        "Sharpshooter"
      ]
    },
    {
      "name": "Thresh",
      "championId": "TFT4_Thresh",
      "cost": 2,
      "traits": [
        "Dusk",
        "Set4_Vanguard"
      ]
    },
    {
      "name": "Twisted Fate",
      "championId": "TFT4_TwistedFate",
      "cost": 1,
      "traits": [
        "Cultist",
        "Set4_Mage"
      ]
    },
    {
      "name": "Vayne",
      "championId": "TFT4_Vayne",
      "cost": 1,
      "traits": [
        "Dusk",
        "Sharpshooter"
      ]
    },
    {
      "name": "Veigar",
      "championId": "TFT4_Veigar",
      "cost": 3,
      "traits": [
        "Set4_Elderwood",
        "Set4_Mage"
      ]
    },
    {
      "name": "Vi",
      "championId": "TFT4_Vi",
      "cost": 2,
      "traits": [
        "Warlord",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Warwick",
      "championId": "TFT4_Warwick",
      "cost": 4,
      "traits": [
        "Divine",
        "Hunter",
        "Set4_Brawler"
      ]
    },
    {
      "name": "Wukong",
      "championId": "TFT4_Wukong",
      "cost": 1,
      "traits": [
        "Divine",
        "Set4_Vanguard"
      ]
    },
    {
      "name": "Xin Zhao",
      "championId": "TFT4_XinZhao",
      "cost": 3,
      "traits": [
        "Warlord",
        "Duelist"
      ]
    },
    {
      "name": "Yasuo",
      "championId": "TFT4_Yasuo",
      "cost": 1,
      "traits": [
        "Set4_Exile",
        "Duelist"
      ]
    },
    {
      "name": "Yone",
      "championId": "TFT4_Yone",
      "cost": 5,
      "traits": [
        "Set4_Exile",
        "Set4_Adept"
      ]
    },
    {
      "name": "Yuumi",
      "championId": "TFT4_Yuumi",
      "cost": 3,
      "traits": [
        "Set4_Spirit",
        "Set4_Mystic"
      ]
    },
    {
      "name": "Zed",
      "championId": "TFT4_Zed",
      "cost": 2,
      "traits": [
        "Set4_Ninja",
        "Set4_Shade"
      ]
    },
    {
      "name": "Zilean",
      "championId": "TFT4_Zilean",
      "cost": 5,
      "traits": [
        "Cultist",
        "Set4_Mystic"
      ]
    }
  ]
  constructor() { }
  championNames() {
    return this.champions
  }
}
