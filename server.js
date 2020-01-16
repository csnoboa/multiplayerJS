import express from 'express'
import http from 'http'
import createGame from './public/game.js'

const app = express()
const server = http.createServer(app)

app.use(express.static('public')) 

const game = createGame()
game.addFruit({ fruitId: 'fruit1', fruitX: 4, fruitY: 0})
game.addFruit({ fruitId: 'fruit2', fruitX: 4, fruitY: 6})
game.addFruit({ fruitId: 'fruit3', fruitX: 2, fruitY: 8})
game.addPlayer({ playerId: 'player1', playerX: 0, playerY: 0})

console.log(game.state)

server.listen(3000, () => {
    console.log(`> Server lintening on port: 3000`)
})