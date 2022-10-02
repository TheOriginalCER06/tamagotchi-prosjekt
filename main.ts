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
function stopScreenActionsAndClear () {
    led.stopAnimation()
    basic.clearScreen()
}
function drawBar (bar: number, indexOfBar: number) {
    itteration = 0
    for (let index = 0; index < bar; index++) {
        led.plot(itteration, indexOfBar - 1)
        itteration += 1
    }
}
let itteration = 0
let meny = 0
let våkenhet = 0
let isAwake = false
let laget_av = "- Christian E. Røren og Victor"
isAwake = false
let glede = 3
våkenhet = 4
let matNivå = 5
// foreløpig unødvendig
let barerARRAY = [glede, våkenhet, matNivå]
loops.everyInterval(10000, function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    meny = meny % 2
    if (meny == 0) {
        if (isAwake == true) {
            if (true) {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            basic.showString("ZzZzZzZz")
        }
    } else if (meny == 1) {
        isAwake = true
        drawBar(glede, 1)
        drawBar(våkenhet, 3)
        drawBar(matNivå, 5)
    } else {
    	
    }
    // ditta hadde vært unødvendig om ting hadde fungert, men det gjør det ikke haha
    if (glede > 5) {
        glede = 5
    }
    if (matNivå > 5) {
        glede = 5
    }
    if (glede > 5) {
        våkenhet = 5
    }
})
