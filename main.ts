namespace SpriteKind {
    export const Death = SpriteKind.create()
    export const Gateway = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Spear = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    DoubleJump += 1
    if (DoubleJump < 3) {
        Kuro.vy = -200
    }
    animation.runImageAnimation(
    Kuro,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 f . f . . . 
        . . f 7 7 7 7 7 7 7 7 f 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 f 7 7 7 7 7 7 7 f 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . . f 7 7 7 f 7 f f f f . . . 
        . . . f 7 7 7 7 f . . . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . . f 7 7 f 7 7 7 f . . . . . 
        . . . f 7 7 7 f 7 7 f . . . . . 
        . . . . f f f 7 7 7 f . . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . . f 7 7 7 7 f 6 . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        `],
    200,
    true
    )
})
function Sprite2 () {
    Kuro = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 f 7 7 7 7 7 7 f 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 f 7 7 f . . . . . 
        . . . f 7 7 7 7 f 7 7 f . . . . 
        `, SpriteKind.Player)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value, assets.tile`myTile11`)
    }
    controller.moveSprite(Kuro, 100, 0)
    scene.cameraFollowSprite(Kuro)
    Kuro.ay = 500
    tiles.placeOnRandomTile(Kuro, assets.tile`myTile11`)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 2) {
        if (Kuro.x < Benkey.x) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . c 6 7 7 6 c . . . . . 
                . . . . c 6 7 5 7 7 6 c . . . . 
                . . 6 6 c c 6 5 5 6 c c 6 6 . . 
                6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
                6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
                . c c c 6 6 7 6 6 5 7 6 c c 6 . 
                6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
                6 6 7 7 7 c c c c c c 7 7 7 6 6 
                6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
                c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
                . c c 5 5 7 6 7 7 6 7 5 5 c c . 
                . c 6 7 5 5 6 7 7 6 5 5 7 6 c . 
                . 6 6 7 7 6 6 5 5 6 6 7 7 6 6 . 
                . . 6 6 6 6 c 6 7 6 c 6 6 6 . . 
                . . . 6 6 c . 6 6 6 . c 6 . . . 
                `, Kuro, 80, 0)
        } else if (Kuro.x > Benkey.x) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . c 6 7 7 6 c . . . . . 
                . . . . c 6 7 5 7 7 6 c . . . . 
                . . 6 6 c c 6 5 5 6 c c 6 6 . . 
                6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
                6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
                . c c c 6 6 7 6 6 5 7 6 c c 6 . 
                6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
                6 6 7 7 7 c c c c c c 7 7 7 6 6 
                6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
                c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
                . c c 5 5 7 6 7 7 6 7 5 5 c c . 
                . c 6 7 5 5 6 7 7 6 5 5 7 6 c . 
                . 6 6 7 7 6 6 5 5 6 6 7 7 6 6 . 
                . . 6 6 6 6 c 6 7 6 c 6 6 6 . . 
                . . . 6 6 c . 6 6 6 . c 6 . . . 
                `, Kuro, -80, 0)
        }
    }
})
function Riddle () {
    story.printCharacterText("Tengu says", "Tengu")
    story.printCharacterText("Tengu asks", "Tengu")
    story.showPlayerChoices("Option 1", "Option 2", "Option 3")
    if (story.checkLastAnswer("Option 1")) {
        story.printCharacterText("Right", "Tengu")
    } else if (story.checkLastAnswer("Option 2")) {
        story.printCharacterText("Wrong", "Tengu")
    } else if (story.checkLastAnswer("Option 3")) {
        story.printCharacterText("Very wrong", "Tengu")
    }
    Kuro.destroy()
    Level_2()
}
function Level_1 () {
    tiles.setTilemap(tilemap`level1`)
    Gates = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........fffffffffff...........
        .........fbbbbbbbbbbbf..........
        .......ffbbbbbbbbbbbbbff........
        ......fbbbbdbbbbbbbbbdbbf.......
        .....fbbbbdbbbbbbbbbbbdbbf......
        .....fbbddbbbbbbbbbbbbbdbf......
        ....fbbdbbbbbbbbbbbbbbbbdbf.....
        ...fbbdbbbbbfffffffbbbbbdbbf....
        ..fbbbdbbbffcccccccffbbbdbbbf...
        .fbbbdbbbfcccccccccccfbbbdbbbf..
        .fbbbbbbbf1ccccccccc1fbbbbdbbf..
        .fbbdbbbfcc111111111ccfbbbbdbf..
        .fbbdbbbfccc1cc1cc1cccfbbbbbbf..
        .fbdbbbbfcc1cccc1cc1ccfbbbbbbf..
        .fbbbbbbfc1cccccc1cc1cfbbbdbbf..
        .fbbbbbbfcccc2ccc2ccccfbbbdbbf..
        .fbbbbbbfccc2ccccc2cccfbbbdbbf..
        .fbbbbbbfcc2cc444cc2ccfbbbbdbf..
        fbbbbbbbbfccc44544cccfbbbbbdbbf.
        fbbbbbbbbfccc45554cccfbbbbbbdbf.
        `, SpriteKind.Gateway)
    tiles.placeOnTile(Gates, tiles.getTileLocation(119, 10))
    for (let value9 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setTileAt(value9, assets.tile`myTile7`)
    }
    for (let value10 of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value10, assets.tile`myTile10`)
    }
    for (let value11 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value11, assets.tile`myTile11`)
    }
    for (let value12 of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setTileAt(value12, assets.tile`myTile10`)
    }
    for (let value13 of tiles.getTilesByType(assets.tile`myTile5`)) {
        Kaki = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . 6 6 6 7 7 6 6 6 . . . . 
            . . . 4 2 2 2 7 7 4 4 4 . . . . 
            . . 4 4 4 4 2 7 7 4 4 4 4 . . . 
            . 4 4 4 4 4 4 2 2 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 5 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 5 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 2 2 2 4 2 4 4 4 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Kaki, value13)
        tiles.setTileAt(value13, assets.tile`transparency16`)
    }
    for (let value14 of tiles.getTilesByType(assets.tile`myTile6`)) {
        Coin = sprites.create(img`
            . . 5 5 5 5 . . 
            . 5 5 5 4 5 5 . 
            5 5 5 5 5 4 5 5 
            5 5 5 f f 5 4 5 
            5 5 5 f f 5 5 5 
            5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 . 
            . . 5 5 5 5 . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Coin, value14)
        tiles.setTileAt(value14, assets.tile`transparency16`)
    }
    for (let value15 of tiles.getTilesByType(assets.tile`myTile8`)) {
        Tengu = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 1 1 . f f f f f . . . . 1 
            . . . 1 1 f c c c c c f . . 1 1 
            . . . 1 f c c c c c c c f 1 1 1 
            . f f f 2 2 2 2 2 2 c c c f 1 1 
            f 2 2 2 2 f 2 2 f 2 2 c c c f 1 
            . f f f 2 2 2 2 2 2 2 c c c c f 
            . . . f 2 2 2 2 2 2 2 c c c c f 
            . . f 8 b 2 2 2 2 b b c c c f . 
            . f 8 8 8 b 2 b b 8 8 b b f 8 f 
            . 2 2 8 8 8 b 8 2 2 8 8 8 8 8 f 
            . 2 2 8 8 8 8 8 2 2 8 8 8 8 8 f 
            . . f 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f a a a a a a a a a a a a f . 
            . . f f a a a a a a a a a f . . 
            . . . . 2 2 2 f f 2 2 2 f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Tengu, value15)
        tiles.setTileAt(value15, assets.tile`transparency16`)
        animation.runImageAnimation(
        Tengu,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . 1 1 . f f f f f . . . . 1 
            . . . 1 1 f c c c c c f . . 1 1 
            . . . 1 f c c c c c c c f 1 1 1 
            . f f f 2 2 2 2 2 2 c c c f 1 1 
            f 2 2 2 2 f 2 2 f 2 2 c c c f 1 
            . f f f 2 2 2 2 2 2 2 c c c c f 
            . . . f 2 2 2 2 2 2 2 c c c c f 
            . . f 8 b 2 2 2 2 b b c c c f . 
            . f 8 8 8 b 2 b b 8 8 b b f 8 f 
            . 2 2 8 8 8 b 8 2 2 8 8 8 8 8 f 
            . 2 2 8 8 8 8 8 2 2 8 8 8 8 8 f 
            . . f 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f a a a a a a a a a a a a f . 
            . . f f a a a a a a a a a f . . 
            . . . . 2 2 2 f f 2 2 2 f . . . 
            `],
        200,
        true
        )
    }
    for (let value16 of tiles.getTilesByType(assets.tile`myTile0`)) {
        Waves = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . c c c . . . . . . . . 
            . . . . c 1 9 1 c . . . . . 1 . 
            . . . c 8 9 1 9 c . . . 1 . . . 
            . . c 8 9 8 8 c . 1 . . . . . . 
            . c 8 9 8 8 c c . . . . . . . . 
            . c 8 8 8 c . . . . c c . . 1 . 
            . c 8 8 8 c . . . c 1 9 c . . . 
            c 9 8 8 8 8 c c c 8 9 c . . . . 
            8 1 1 9 8 8 8 8 8 8 c . . c . . 
            8 9 9 8 8 8 8 8 8 8 c . c 1 c . 
            8 8 8 8 8 9 1 8 8 1 8 c 9 9 9 c 
            8 8 8 8 8 1 9 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.Death)
        tiles.placeOnTile(Waves, value16)
        tiles.setTileAt(value16, assets.tile`transparency16`)
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameOn == true) {
    	
    }
})
function Start () {
    game.setDialogFrame(img`
        ...cc......................cc....
        ..cffc..bbbb...bbbbb......cffc...
        .cbffbcbdddbbbbbdddbbbbbbcbffbc..
        bffffffbbdddb111bdddb11dbffffffb.
        bbffffbbdbdb11111bdb1111bbffffbb.
        cbffffbcddd11111ddd11111cbffffbc.
        .cfbbfc1111d111d111d111ddcfbbfc..
        .cbbbbc111111111111111111cbbbbc..
        ..b11111111111111111111111d111bb.
        ..b111111111111111111111111d1bdb.
        ..bb11111111111111111111111dbddb.
        .bbdb1d11111111111111111111ddddb.
        .bdddd11111111111111111111d1bdbb.
        .bddbd11111111111111111111111bb..
        .bdb1d111111111111111111111111b..
        .bb111d11111111111111111111111b..
        ..b11111111111111111111111d111bb.
        ..b111111111111111111111111d1bdb.
        ..bb11111111111111111111111dbddb.
        .bbdb1d11111111111111111111ddddb.
        .bdddd11111111111111111111d1bdbb.
        .bddbd11111111111111111111111bb..
        .bdbb1111111111111111111111111b..
        .bbbd1111111111111111111111111b..
        ..bcc111111111111111111111dccdb..
        ..cffc111d111d111d111d1111cffcb..
        .cbffbcdd11111ddd11111dddcbffbc..
        bffffffb11111bdb11111bdbbffffffb.
        bbffffbbb111bdddb111bdddbbffffbb.
        cbffffbcdbbbbbdddbbbbbddcbffffbc.
        .cfbbfc.bb...bbbbb...bbbbcfbbfc..
        .cbbbbc..................cbbbbc..
        .................................
        `)
    game.setDialogTextColor(8)
    game.showLongText("The most wanted superhero in the beach forests of fawkes had her powers involutarily thrust upon her. she must learn to control it to survive.", DialogLayout.Full)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2ddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2dddddddddd22ddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddd2dddddddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2ddddddddd2ddddddddddddddddddddd2dddddddddddddddddd2ddddddddddddddddddd2ddddddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2dddddd222dddddddddddddddddddddd2dddddddddd2dddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2ddddd2ddddddddddddddddddddddddd2dddddddd22ddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2ddd22dddddddddddddddddddddddddd2dddddd22ddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2dd22dddddddddddddddd222dddddddd2dddd22dddddddddddd2dddddddddddddddddd2ddddddddddddddddddddddddd22ddddddd2dddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd222d2ddddddddddddddd2ddd2ddddddd2dd22dddddddddddddd2dddddddddddddddddd2d2222ddddddd222ddddddddd2ddddddddd2ddddddddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2dddd2ddddddddddddd2ddddd2dddddd222dddddddddddddddd2dddddddddddddddddd22dddd2ddddd2ddd2ddddddd2dddddddddd2d222ddddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2ddddd2ddddddddddd2dddddd2dddddd2dd2ddddddddddddddd2dddddddddddddddddd2ddddd2dddd2dddd2dddddd2ddddddddddd22ddd2dddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2dddddd2ddddddddd2ddddddd2dddddd2ddd2dddddddddddddd2dddddddddddddddddd2ddddd2dddd2dddd2dddddd2ddddddddddd2dddd2dddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2dddddd2ddddddddd2dddddd22dddddd2dddd22dddddddddddd2dddddddddddddddddd2ddddd2ddddddddd2dddddd2dddddd2dddd2dddd2d2dddddddd2dddddddddddddddddddddddddddddd
        dddddddd2ddddddd2ddddddddd2dddd2d22ddddd2dddddd2ddddddddddd2dddddddddddddddddd2ddddd2dddd2ddd22dddddd2dddd22ddddd2ddddd2ddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2dddddddd2ddddddddd2222dddd2dddd2ddddddd22ddddddddd2dddddddddddddddddd2ddddd2ddddd222dd2dddddd2222ddddddddddddddddddddddd2dddddddddddddddddddddddddddddd
        dddddddd2ddddddddd2ddddddddddddddddddddd2ddddddddd22ddddddd2ddddddd2222222dddddddddd2ddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddd2dddddddddd2dddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddfffff11111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddff1111111111111111fdfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddfff1111111111111111111f4fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddf11111111111111111111111f1fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddff111111111111111111111111111fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddff111111111111111111111111111111fddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddff111111111111111111111111111111111ff11fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddff1111111111111111111111111111111111111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddf1111111111111111111111111111111111111111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddf1111111111111111111111111111111111111111fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddf11111111111111111111111111ff11111f11111111fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddf11111111111111ff11111ff111f88f111f8f111f1111fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddf1111111111111ff88ff11f88f11f888f11f88f1f8f11ffffdddddddddddddddddddddddddddddddddddddddddddd9dddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddf111111111111111f8888ff8888ff88888ff8888f888ff1111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddf1111111111111111ff8888f88888f88888888888888888f11111fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddf1111111111111111111f888888888888889888888888888f1111f1fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddf1111111111111111111f1f88888888888888888888888888f11f11f111fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddf11111111111111fffff8f8888888888888988888888888998ff8f11f11111ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddf11111111111111f88888888888888888888988888888889888888f1f11111f11fddddddddddd9ddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddf111111111111111f8888888888888888888988888888889888888f8f1111111ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddd9dddddddddddddddf111111111111111f8888888888888888889888888888898888888f8f1111f11fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddf11111111111111fff888888888888888889888888888898888888fdfff11fdffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddf11111111111111f888888888888888888988888888889888888fffddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddd9ddddf111111111111111ff888888888888888898888888888988888ffdddddddddddddddddddddddddddddddddddd9dddddddddddddddddddddddddddddddddddddd9ddd
        dddddddddddddddddddddddddddf11111111111111111ff8888888888888889888888888988888fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddf1111111111111111111f8888fff88888888988888888988888fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddf11111111111111111111ffff111ff88888898888888988888fddddddddddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddf111111111111111111111111111111f888889888888898888fdddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddd9ddddddf1111111111111111111111111111111f888898888888988888fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddf11111111111111111111111111111111f8889888888898888fddddddddddddddddddddddddddd9dddddddddddddddddddddddddddddddddddddddddd9dddddddddddddd
        dddddddddddddddddddddddf1111111111111111111111111111111ff88889888888988888fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddf1111111111111111111111111111111f888888988888898888fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddf1111111111111111111111111fff111f888888988888898888fdddddddddddddddddddddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddf11111111111111111111111111f88ff1f888888898888898888fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddf1111111111111111111111111ff88888f8888888898888898888fdddddddddddddddddd1dddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddfff1111111111111111111111111f888888888888888898888898888fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9ddddddddddddddddd
        ddddddddddddfffff88f111111111111111111ffff1111f88888888888888898888889888fdddddddddddddddddddddddddddddddddddddddddddddddddddd9ddddddddddddddddddddddddddddddddd
        dddddddddfff888888f11111111111111111ff8888ff111f8888888888888898888889888fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddfff888888888f1111111111111111f88888888ff11f888888888888889888888988fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddff88888888888f11111111111111111f8888888888ff88888888888888889888889888fdddddddddddddddddddddddddddddddddddddddddddd9dddddddddddddddddddddddddddddddddddddddd
        ffff8888888888888f11111111111111f11f88888888888888888888888888889888888988fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9ddddddddddddddddddddddd
        8888888888888888f1111111111111111ff8888888888888888888888888888898888889888fdddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        888888888888888f1111111111111111111f8888888888888888888888888888988888898888fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        88888888888888f111111111111111111111f8888888888888888888888888888988888898888fddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        88888888888888f1111111111111111111111f8888888888888188888888888888988888898888fdddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddf
        8888888888888f11111111111111fffffffff888888888888888888888888888889888888898888ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1
        888888888888f11111111111111111111f88888888888888888888888888888888988888888988888fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff11
        888888888888f111111111111111111111f88888888188888888888888888888888988888888988888ffdddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf1111
        88888888888f11111111111111111111111f888888888888888888888888888888889888888889888888fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9ddddddff11111
        8888888888f1111111111111111111111111f888888888888888888fffffffff888898888888889888888fdddddddddddddddddddddddddddddddddddddddddddddd9dddddddddddddddddddf1111111
        888888888f111111111111111111111111111f888888888888888ff111111111f888988888888889888888ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff11111111
        8888888ff1111111111111111111111111111f88888888888888f111111111111fff89888888888898888888ffddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddff1111111111
        88888ff1111111111111111111111ffff1111f8888888888888f1111111111111111f988888888888988888888fffdddddddddd11ddddd1dddddddddddddddddddddddddddddddddddff111111111111
        88fff1111111fffffffffffffffff8888f11f8888888888888f111111111111111111ff8888888888898888888888fffdddddddddddddddddddddddddddddddddddddddddddddddddf1111111111111f
        ff111111111f8888888888888888888888ff8888888888888f111111111111111111111f888888888889888888888888fdddddddddddddddddddfffffdddddddddddddddddddddfff1111111111111f8
        1111111111f8888888888888888888888888888888888888f11111111111111111111111f888888888889888888888888ffddddddddddddddddf11111fddddddddddddddddddff111111111111111f88
        11111fffff8888888888888888888888888888888888888f1111111111111111111111111f8888888888898888888888888fddddddddddddddf1111cbfddddddddddddddddff1111111111111111f888
        11fff88888888888888888888888888888888888888888f11111111111111111111111111f88888888888898888888888888ffddddddddddddf11d1cbbfdddddddddddddff11111111111111fff1f888
        ff8888888888888888888888888888888888888888888f1111111111111111111111111111f888888888888988888888888888ffddddddddddfccccccbfdddddddddddff11111111111111ff888f8888
        8888888888888888888888888888888888888888888ff111111111111111111111111111111f8888888888889888888888888888ffdddddddfccccccccbfddddddddff111111111111111f8888888888
        888888818888888888881188888888881888888888f111111111111111111111111111111111f88888888888899888888888888888fddddddfcccccccccbfddddddf1111111111fff1111f8888888888
        8888888888888888188811888888888888888888ff11111111111111111111111111111111111f88888888888889888888888888888ffdddfcccccccccccbfdddff1111111111f888ff1f88888888888
        88888888888888888888888888888888888888ff11111111111111111111111111111111111111f888888888888898888888888888888fdfcccccccccccccbfff11111111111f888888f888888888888
        888888888888888881888888888888888888ff11111111111111111111111111111111111111111f888888888888899888888888888888ffccccccccccccfff111111111111f88888888888888888888
        8888888888888888888888888888888888ff1111111111111111111111fff1111111111111111111f8888888888888898888888888888888ffffffffffff111111111111fff888888888888888888888
        888888888888888888888888888888ffff11111111111111111111111f888ff111111111111111111f88888888888888998888888888ffff111111111111ff111111111f888888888888888888888888
        8888888888888888888888888fffff11111111111111111111111111f888888f111111111111111111f8888888888888889988888fff111111111111111111ffff11111f888888888888888888888888
        88888888888888888ffffffff111111111111111111111111111111f88888888f111111111111111111ff888888888888889988ff1111111111111111111111111ffffffffffffffffff888888888888
        88888888888ffffff111111111111111111111111111fffff11111f8888888888ff11111111f111111111ff88888888888888ff111111111111111111111111111111111111111111111fffffff88888
        8888888ffff11111111111111111111111111111111f98888f1111f888888888888f111111f8ff111111111ff88888888888f111111111111111111111111111111111111111111111111111111fffff
        8ffffff11111111111111111111111111111111111f8898888ff1f88888888888888f11111f888f1111111111f888888888f111111111111111111111111111111111111111111111111111111111111
        f1111111111111111111111111111111111111111f8889888888f8888888888888888f111f88888ff111111111ff88888ff1111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111f88889888888888888888888888898fff88888888f1111111111fffff111111111111111111111111111f11111111111111111111111111111111111
        1111111111111111111111111111111111111111f88889888888888888888888888898888888888888ff111111111111111111111111111111111111111f8f1111111111111111111111111fff111111
        11111111111111111111111111111111ffff111f88888898888888888888888888888988888888888888f1111111111111111111111111111ff11111111f88ff1111111111111111111111f888fff111
        1111111111111111111111111fff111f8888fff8888888988888888888888888888889888888888888888f11111111111111111111111111f88f11111111f888f111111111111111111111f888888fff
        111111111111111111111ffff888fff8888888888888888988888888888888888888889888888888888888ff111111111111ff1111111111f888f1111111ff888fff1111111fff111111111f88888888
        11111111111111111111f8888889888888888888888888898888888888888888888888898888888888888888f1111111111f88ff11111111f8888ff111111f888888f11111f888ffff11111f88888888
        11111111111111111111f88888898888888888888888888988888888888888888888888988888888888888888f111111111f8888ff1111111f88888f111111f888888fff111ff88888fffff888888888
        11111111111111111111f888888898888888888888888889888888888888888888888888988888888888888888fff111111f888888f1111111f88888fff111ff88888888f1111ff88888888888888888
        111111ffffffffffff1f8888888898888888888888888889888888888811888888888888898888888888888888888f111111f888888f1111111f8888888ff11f888888888ff1111f8888888888888888
        11111f888888888888f888888888898888888888888888889888888888118888888888888898888888888888888888fff1111f888888ff111111f88888888ff888888888889fff11f888888888888888
        11111f8888888898888888888888898888888888888888889888888888888888888888888889888888888888888888888ff11f88888888f111111f888888888888888888888998ff8888888888888888
        11fff8888888889888888888888888988888888888888888898888888888888888888888888898888888888888888888988ff8888888888ffff111ff8888888888888888888889888888888888888888
        1f88888888888898888888888888889888888888888888888988888888888888888888888888988888888888888888888988888888888888888ff111f888888888888888888888988888888888888888
        f88888888888888988888888888888898888888888888888898888888888888888888888888898888888888888888888889888888888888888888fff8888888888888888888888899888888888888888
        8888888888888889888888888888888898888888888888888898888888888888888888888888898888888888888888888889888888888888888888988888888888888888888888888988888888888888
        8888888888888888988888888888888889888888888888888898888888888888888888888888889888888888888888888888988888888888888888899888888888888888888888888899888888888888
        8888888888888888988888888888888889888888888888888889888888888888888888888888888988888888888888888888898888888888888888888998888888888888888888888888998888888888
        8888888888888888898888888888888889888888888888888889888888888888888888888888888898888888888888888888889888888888888888888889988888888888888888888888889888888888
        8888888888888888889888888888888888988888888888888888988888888888888888888888888889888888888888888888888988888888888888888888899888888888888888888888888988888888
        8888888888888888889888888888888888898888888888888888898888888888888888888888888888988888888888888888888898888888888888888888888998888888888888888888888898888888
        8888888888888888888988888888888888898888888888888888898888888888888888888888888888898888888888888888888889988888888888888888888889988888888888888888888889998888
        8888888888888888888988888888888888889988888888888888898888888888888888888888888888889988888888888888888888898888888888888888888888898888888888888888888888889888
        8888888888888888888898888888888888888998888888888888889888888888888888888888888888888898888888888888888888889998888888888888888888889988888888888888888888888999
        `)
    pause(2000)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    if (GameOn == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Kuro)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Kuro,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . . f 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . f . f 7 7 7 7 7 7 f . . . 
        . . f 7 f 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . . f 7 7 7 f 7 7 7 7 7 7 f . 
        . . . . f 7 f 7 f f 7 7 f 7 f . 
        . . . . f 7 f 7 7 7 7 7 7 f . . 
        . . . . f 7 f 7 7 7 7 7 f . . . 
        . . . f 7 7 7 f f f f f . . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . . f 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . . f 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 f 7 f . . 
        . . . f 7 7 7 7 7 7 7 f 7 f . . 
        . . f 7 f 7 7 7 7 7 f 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 f f . . . 
        . . . f f f f 7 f 7 7 7 f . . . 
        . . . . . . . f 7 7 7 7 f . . . 
        `],
    200,
    true
    )
})
function StatusBars () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gateway, function (sprite, otherSprite) {
    otherSprite.destroy(effects.blizzard, 5000)
    Riddle()
})
function SpriteLevel2 () {
    Kuro = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . f f f c c c c c c c c f . . . 
        f c c f c c 4 4 4 4 4 4 f . . . 
        f c f f c 4 d d 1 f d f f . . . 
        . f . f 4 d d d 1 1 d 1 f . . . 
        . . . f 4 d d d d d 4 d f . . . 
        . . . . f 4 d d d d d d f . . . 
        . . . f 2 3 d d d d d d f . . . 
        . . f 2 3 3 2 d 2 3 2 f . . . . 
        . f 2 3 3 3 3 2 3 3 3 2 f f . . 
        f 2 3 3 3 3 3 3 3 3 3 3 d d f . 
        f 2 d d 3 2 3 3 3 2 3 3 d d f . 
        . f d d 2 1 1 1 1 1 2 3 3 f . . 
        . . f 3 3 3 3 3 3 3 3 f f . . . 
        . . f 8 6 6 f 8 6 6 f . . . . . 
        . . f b d d d f b d d f . . . . 
        `, SpriteKind.Player)
    Kuro.ay = 500
    for (let value8 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value8, assets.tile`myTile11`)
    }
    tiles.placeOnRandomTile(Kuro, assets.tile`myTile11`)
    controller.moveSprite(Kuro, 100, 0)
    scene.cameraFollowSprite(Kuro)
}
function SpareAssets () {
	
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    story.startCutscene(function () {
        story.printCharacterText("Brave Kuro, let's join forces", "Benkey")
        story.printCharacterText("OK, but yo mama's still fat", "Kuro")
    })
    Benkey.destroy(effects.blizzard, 2000)
    Kuro.destroy(effects.disintegrate, 2000)
    game.setDialogFrame(img`
        88888..8888888888888888....88888.
        87768888777877787778777888867778.
        87777686767876767678767688777778.
        87767767667676676676766786776768.
        8677676767767767677677678676778..
        .877768777686767776867678667768..
        .886668888888888888888888886688..
        .888888866666666666666668877768..
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        .867778866666666666666668888888..
        .886688888888888888888888866688..
        .867766876768677767686777867778..
        .8776768767767767677677676767768.
        86767768766767667667676676776778.
        87777788676787676767876768677778.
        87776888877787778777877788886778.
        88888..88888888888888888....8888.
        .................................
        `)
    game.showLongText("Congratulations, you have beaten the game!", DialogLayout.Top)
    game.over(true, effects.splatter)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Kuro,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 f . f . . . 
        . . f 7 7 7 7 7 7 7 7 f 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 f 7 7 7 f . . . 
        . f 7 f 7 7 f f 7 f 7 f . . . . 
        . . f 7 7 7 7 7 7 f 7 f . . . . 
        . . . f 7 7 7 7 7 f 7 f . . . . 
        . . . . f f f f f 7 7 7 f . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 f . . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 f 7 7 7 7 7 7 f . . . . 
        . . f 7 f 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 f 7 7 7 7 7 f 7 f . . 
        . . . f f 7 7 7 7 7 7 7 7 f . . 
        . . . f 7 7 7 f 7 f f f f . . . 
        . . . f 7 7 7 7 f . . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
function Level_2 () {
    for (let value2 of sprites.allOfKind(SpriteKind.Projectile)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Food)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Enemy)) {
        value4.destroy()
    }
    for (let value5 of sprites.allOfKind(SpriteKind.Death)) {
        value5.destroy()
    }
    tiles.setTilemap(tilemap`level2`)
    SpriteLevel2()
    Benkey = sprites.create(img`
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......ceeeeeeeeeecf.....
        ......ceeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67eeee....
        ......ee6eeeeee6cef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......beeeeeeeeeeb......
        .......beeeeeeeeb.......
        ........beeeeeeb........
        ........................
        `, SpriteKind.Boss)
    tiles.placeOnTile(Benkey, tiles.getTileLocation(5, 4))
    story.startCutscene(function () {
        story.printCharacterText("Flyting 1", "Benkey")
        story.printCharacterText("Flyting 2", "Kuro")
    })
    tiles.placeOnTile(Benkey, tiles.getTileLocation(27, 4))
    Benkey.follow(Kuro, 30)
    Benkey.ay += 500
    StatusBars()
    Level = 2
    for (let value6 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setTileAt(value6, assets.tile`myTile7`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile5`)) {
        Kaki = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . 6 6 6 7 7 6 6 6 . . . . 
            . . . 4 2 2 2 7 7 4 4 4 . . . . 
            . . 4 4 4 4 2 7 7 4 4 4 4 . . . 
            . 4 4 4 4 4 4 2 2 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 5 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 5 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . 2 2 2 4 2 4 4 4 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Kaki, value7)
        tiles.setTileAt(value7, assets.tile`transparency16`)
        animation.runMovementAnimation(
        Kaki,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
function OpeningDialogue () {
    story.printCharacterText("Im here", "Pink riffle")
    story.printCharacterText("ready, are you?", "yoda")
    story.showPlayerChoices("Yes", "no", "maybe")
    if (story.checkLastAnswer("yes")) {
        GameOn = true
    } else if (story.checkLastAnswer("no")) {
        Kaki.setFlag(SpriteFlag.Invisible, true)
        tiles.setTilemap(tilemap`level4`)
        pause(1000)
        game.over(false, effects.splatter)
    } else if (story.checkLastAnswer("maybe")) {
        game.reset()
    }
}
sprites.onOverlap(SpriteKind.Spear, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Kuro.y < otherSprite.y) {
        otherSprite.destroy(effects.fire, 200)
        Kuro.vy = -100
        info.changeScoreBy(5)
    } else {
        otherSprite.destroy(effects.fire, 200)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    Kuro.vx = -200
    if (Kuro.x < Benkey.x) {
        Kuro.x += -30
    } else if (Kuro.x > Benkey.x) {
        Kuro.x += 30
    }
})
let BenkeySpear: Sprite = null
let Waves: Sprite = null
let Tengu: Sprite = null
let Coin: Sprite = null
let Kaki: Sprite = null
let Gates: Sprite = null
let projectile: Sprite = null
let Benkey: Sprite = null
let Kuro: Sprite = null
let GameOn = false
let DoubleJump = 0
let Level = 0
Level = 0
let DamageRate = 1
DoubleJump = 0
GameOn = false
Start()
Level_1()
Sprite2()
OpeningDialogue()
game.onUpdate(function () {
    if (Kuro.isHittingTile(CollisionDirection.Bottom)) {
        DoubleJump = 0
    }
})
game.onUpdateInterval(1000, function () {
    if (Level == 2) {
        if (Kuro.x < Benkey.x) {
            BenkeySpear = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . c a f b c . . . . . . . 
                . . . . b f f b c c . . . . . . 
                . . . a a f b a b a c . . . . . 
                . . . c a c b b f f b . . . . . 
                . . . . b f f b f a b . . . . . 
                . . . . a f f b b b a . . . . . 
                . . . . . a b b c c . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Benkey, -80, 0)
            BenkeySpear.setKind(SpriteKind.Spear)
            BenkeySpear.y += randint(-20, 20)
        } else if (Kuro.x > Benkey.x) {
            BenkeySpear = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . c a f b c . . . . . . . 
                . . . . b f f b c c . . . . . . 
                . . . a a f b a b a c . . . . . 
                . . . c a c b b f f b . . . . . 
                . . . . b f f b f a b . . . . . 
                . . . . a f f b b b a . . . . . 
                . . . . . a b b c c . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Benkey, 80, 0)
            BenkeySpear.setKind(SpriteKind.Spear)
            BenkeySpear.y += randint(-20, 20)
        }
    }
})
forever(function () {
	
})
