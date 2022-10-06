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
input.onButtonPressed(Button.AB, function () {
    if (isAwake == false) {
        isAwake = true
        stopScreenActionsAndClear()
        våkenhet = 5
        glede += 1
    } else {
        isAwake = false
        disableBars = 0
        stopScreenActionsAndClear()
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
function ikkeTenkSelv () {
	
}
function drawBar (bar: number, indexOfBar: number) {
    itteration = 0
    for (let index = 0; index < bar; index++) {
        led.plot(itteration, indexOfBar - 1)
        itteration += 1
    }
}
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
loops.everyInterval(10000, function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    meny = meny % 2
    if (meny == 0) {
        if (isAwake == true) {
            // burde vise noe forskjellig basert på glede
            if (true) {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            basic.showString("ZzZzZzZz")
        }
    } else if (meny == 1 && disableBars != 1) {
        isAwake = true
        drawBar(glede, 1)
        drawBar(våkenhet, 3)
        drawBar(matNivå, 5)
    } else {
    	
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
    if (("tenker selv" as any) == (true as any)) {
        ikkeTenkSelv()
    }
})
