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
let meny = 0
let våkenhet = 0
let isAwake = false
let laget_av = "- Christian E. Røren og Victor"
isAwake = false
let matNivå = 5
våkenhet = 5
let glede = 5
let barerARRAY = [glede, våkenhet, matNivå]
loops.everyInterval(10000, function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    for (let value of barerARRAY) {
        if (barerARRAY[value] > 5) {
            barerARRAY[value] = 0
        } else {
        	
        }
    }
    basic.showString("" + glede)
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
        basic.showIcon(IconNames.Heart)
    } else {
    	
    }
})
