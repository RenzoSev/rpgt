# About the project
It is currently a monolite project with SERVER and FRONT.
## Front
### Technologies
#### Prod
- React
- Next
- Radix
- Axios
- Classnames
- Jotai
- Tailwind CSS
- TypeScript

#### Dev
- Eslint
- Prettier

### How to run
```
npm run dev
```

### How to test
For now, just open the localhost with the server running =).
_Please, you should remember to run server first._

# Server
### Technologies
#### Prod
- Nest
- TypeScript
- MongoDB
#### Dev
- Supertest
- Jest
- Eslint
- Prettier

### How to run
```
npm start
```

# httpie
https://httpie.io/cli

# Players
```
https POST http://localhost:3000/player name=player class=Mage
https GET http://localhost:3000/player/player
```

# Items
```
https POST http://localhost:3000/item name=sword type=weapon level:=15 gold:=1000 attack:=15
https POST http://localhost:3000/item name=shield type=shield level:=15 gold:=1000 defense:=15
https GET http://localhost:3000/item/sword
https GET http://localhost:3000/item/shield
https GET http://localhost:3000/items
```

# Monsters
```
https POST http://localhost:3000/monster name=monster status:='{"attack":10,"defense":10,"level":10,"xp":20, "gold":20}'
https GET http://localhost:3000/monster/monster
```

# Actions
## Before testing Actions, you should do these requests below.
### Player must have necessary conditions to buy these items. Feel free to change the properties values. =)
#### You should be able to also test the actions thorough the front.
```
https POST http://localhost:3000/item name=main_sword type=weapon level:=15 gold:=1000 attack:=15
https POST http://localhost:3000/item name=main_shield type=shield level:=15 gold:=1000 defense:=15
```

## Actions
### Buy Item
```
https PATCH http://localhost:3000/actions/buy-item playerName=player itemName='main_sword'
https PATCH http://localhost:3000/actions/buy-item playerName=player itemName='main_shield'
```

### Equip Item
```
https PATCH http://localhost:3000/actions/equip-item playerName=player itemName='main_sword'
https PATCH http://localhost:3000/actions/equip-item playerName=player itemName='main_shield'
```

### Fight Monster
```
https PATCH http://localhost:3000/actions/fight-monster playerName=player monsterName='monster'
```
