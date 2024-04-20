
<center><h1>PixelWalker API</h1></center>

```js

import Client from 'pixelwalker.js'

const client = new Client({ token: 'YOUR TOKEN HERE' })

client.on('start', () => world.say('🤖 Connected!'))
client.on('error', ([error]) => {throw error})

client.on('cmd:ping', ([user, message]) => {
    // Force the event to wait this the player is loaded (dependency information)
    client.wait(() => client.players.get(user))
    // Retrieve information
    const { username } = client.players.get(user)
    // Say Hi!
    client.say(`🤖 Hello, ${username}! `)
})

client.connect('WORLD ID')

```

## Events: Receive

| Event | Data | Description |
|:-:|-|-|
| `init` | `id`, `cuid`, `username`, `face`, `isAdmin`, `x`<sup>1</sup>, `y`<sup>1</sup>, `can_edit`, `can_god`, `title`, `plays`, `owner`, `width`, `height` | Client joined the room. **Do not use. Instead use `start`!** |
| `start`<sup>2</sup> | `id` | Client joined the room after init. |
| `error`<sup>2</sup> | `err` | Called on API errors |
| `updateRights` |  | |
| `worldMetadata` |  | |
| `worldCleared` |  | |
| `chatMessage` |  | |
| `cmd:*`<sup>2</sup> | `id`, ...`args` | Retrieve specific commands from messages. Replace `*` with command to listen to. For `!ping`, the event is `cmd:ping`. Arguments are provided by the player in chat. You can access `client.cmdPrefix` to set a list of allowed command prefices. |
| `systemMessage` |  | |
| `playerJoined` |  | |
| `playerLeft` |  | |
| `playerMoved` |  | |
| `coinCollected`<sup>2</sup> | `id`, `coins` | Fires when a user collects a coin. Note: Delayed Fire. If a player falls or glides by momentum through a coin, the coin event will only fire once the player moves again. Not good event for checking when a player touched a coin. |
| `blueCoinCollected`<sup>2</sup> | `id`, `blue_coins` |  |
| `playerFace` |  | |
| `playerGodMode` |  | |
| `playerModMode` |  | |
| `playerCheckpoint` |  | |
| `playerRespawn` |  | |
| `placeBlock` |  | |
| `crownTouched` |  | |
| `keyPressed` |  | |

- <sup>1</sup> This integer needs to be divided by 16 for downscale
- <sup>2</sup> This is a pseudo event (Created by the API for quality-of-life and not emitted by the game)

## Events: Send

| Event | Description |
|:-:|-|
| `.say(string)` | Write into chat |
| `.block(x, y, layer, id)` | Place a block |
| `.wait(time)` | Wait for a specific amount of time in miliseconds |
| `.wait(callback)` | Wait till `callback` is a value. If awaited, this function will block the current function and busy wait for callback to be true. Use only for events that will eventually come true, or you create memory leaks. |