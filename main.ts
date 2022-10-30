input.onButtonPressed(Button.A, function () {
    if (isAwake == false) {
        isAwake = true
        stopScreenActionsAndClear()
        våkenhet = 5
        glede += 1
    } else {
        meny += 1
        stopScreenActionsAndClear()
    }
})
function søvning_animasjon () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(100)
}
function stopScreenActionsAndClear () {
    led.stopAnimation()
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    // else brukes foreløpig til debug
    if (isAwake == false) {
        isAwake = true
        stopScreenActionsAndClear()
        våkenhet = 5
        glede += 1
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (isAwake == true && matNivå < 5) {
        matNivå += 1
        disableBars = 1
        stopScreenActionsAndClear()
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        stopScreenActionsAndClear()
        disableBars = 0
    } else {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (isAwake == false) {
        isAwake = true
        stopScreenActionsAndClear()
        våkenhet = 4
    } else {
        if (glede < 5) {
            glede += 1
            disableBars = 1
            stopScreenActionsAndClear()
            // burde lage lyd også
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
            stopScreenActionsAndClear()
            disableBars = 0
        }
    }
})
function drawBar (bar: number, indexOfBar: number) {
    itteration = 0
    for (let index = 0; index < bar; index++) {
        led.plot(itteration, indexOfBar - 1)
        itteration += 1
    }
}
let matRedusert15min = 0
let gledeRedusert1min = 0
let itteration = 0
let disableBars = 0
let meny = 0
let matNivå = 0
let våkenhet = 0
let glede = 0
let isAwake = false
let laget_av = "- Christian E. Røren og Victor"
isAwake = false
glede = 3
våkenhet = 4
matNivå = 5
// foreløpig unødvendig
let barerARRAY = [glede, våkenhet, matNivå]
loops.everyInterval(600000, function () {
    våkenhet += -1
    if (gledeRedusert1min != 1) {
        gledeRedusert1min = 1
        glede += -1
    } else {
        gledeRedusert1min = 0
    }
})
loops.everyInterval(10000, function () {
    if (isAwake == true) {
        // 10-60% sannsynlighet at man reduserer matnivå
        if (6 - matNivå <= randint(1, 10)) {
            matRedusert15min = 1
            matNivå += -1
        }
    }
    if (gledeRedusert1min != 1) {
        // fat % at glede reduseres, men det vil skje i hvert fall 1 gang i minuttet
        if (10 <= randint(1, 100)) {
            gledeRedusert1min = 1
            glede += -1
        }
    } else {
        gledeRedusert1min = 0
    }
})
basic.forever(function () {
    meny = meny % 2
    if (meny == 0) {
        if (isAwake == true) {
            if (våkenhet > 2) {
                if (glede >= 4) {
                    basic.showIcon(IconNames.Happy)
                } else if (glede >= 2) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        . . . . .
                        `)
                } else if (glede >= 1) {
                    basic.showIcon(IconNames.Sad)
                }
            } else {
                stopScreenActionsAndClear()
                søvning_animasjon()
            }
        } else {
            basic.showString("ZzZzZzZz")
        }
    } else if (meny == 1 && disableBars != 1) {
        isAwake = true
        drawBar(glede, 1)
        drawBar(våkenhet, 3)
        drawBar(matNivå, 5)
    }
    // ditta hadde vært unødvendig om ting hadde fungert, men det gjør det ikke haha
    if (glede > 5) {
        glede = 5
    } else if (glede < 0) {
        glede = 0
    }
    if (matNivå > 5) {
        matNivå = 5
    } else if (matNivå < 0) {
        matNivå = 0
    }
    if (våkenhet > 5) {
        våkenhet = 5
    } else if (våkenhet < 0) {
        våkenhet = 0
    }
})
loops.everyInterval(900000, function () {
    if (matRedusert15min != 1) {
        matRedusert15min = 1
        matNivå += -1
    } else {
        matRedusert15min = 0
    }
})
