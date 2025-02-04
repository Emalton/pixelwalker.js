
export const API_ACCOUNT_LINK = 'https://lgso0g8.116.202.52.27.sslip.io'
export const API_ROOM_LINK = 'wss://po4swc4.116.202.52.27.sslip.io'

export const MessageType = {
    'init':             0,   // [0x6B, 0],
    'updateRights':     1,   // [0x6B, 1],
    'worldMetadata':    2,   // [0x6B, 2],
    'worldCleared':     3,   // [0x6B, 3],
    'chatMessage':      4,   // [0x6B, 4],
    'systemMessage':    5,   // [0x6B, 5],
    'playerJoined':     6,   // [0x6B, 6],
    'playerLeft':       7,   // [0x6B, 7],
    'playerMoved':      8,   // [0x6B, 8],
    'playerFace':       9,   // [0x6B, 9],
    'playerGodMode':    10,  // [0x6B, 10],
    'playerModMode':    11,  // [0x6B, 11],
    'playerCheckpoint': 12,  // [0x6B, 12],
    'playerRespawn':    13,  // [0x6B, 13],
    'placeBlock':       14,  // [0x6B, 14],
    'crownTouched':     15,  // [0x6B, 15],
    'keyPressed':       16,  // [0x6B, 16],
}
