# httpie
# https://httpie.io/cli

# Players
https GET http://localhost:3000/player name=player class=Mage
https POST http://localhost:3000/player name=player class=Mage

# Items
https POST http://localhost:3000/item name=sword type=weapon level:=15 gold:=1000 attack:=15
https POST http://localhost:3000/item name=shield type=shield level:=15 gold:=1000 defense:=15
https GET http://localhost:3000/item name=sword
https GET http://localhost:3000/item name=shield
https GET http://localhost:3000/items

#Monsters
https POST http://localhost:3000/monster name=monster status:='{"attack":10,"defense":10,"level":10,"xp":20}'
https GET http://localhost:3000/monster name=monster