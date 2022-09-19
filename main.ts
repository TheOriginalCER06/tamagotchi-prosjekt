input.onButtonPressed(Button.A, function () {
    if (isAwake == false) {
        isAwake = true
        stopScreenActionsAndClear()
    } else {
        meny += 1
        stopScreenActionsAndClear()
    }
})
function stopScreenActionsAndClear () {
    led.stopAnimation()
    basic.clearScreen()
}
let isAwake = false
let laget_av = "- Christian E. Røren"
isAwake = false
let meny = 0
loops.everyInterval(10000, function () {
	
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
        basic.showIcon(IconNames.Heart)
    } else {
    	
    }
})
