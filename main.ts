let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . 3 3 . . . 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 5 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 . 7 . 3 3 . . . . . 
    . . . . . 3 . 7 . 3 . . . . . . 
    . . . . 7 7 . 7 . 7 7 . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let mySprite: Sprite = null
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b . . . . . 
        . . . . . . . b b b d d . . . . 
        . . . . . . b b b d d d . . . . 
        . . . . . . b d d d d . . . . . 
        . . 1 f 1 5 e d d d d . . . . . 
        . . f f f 5 e 5 e 5 e f . . . . 
        . . f 1 f 5 e 5 e 5 e . . . . . 
        . . . . . 5 e 5 e 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
