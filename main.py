def on_button_pressed_a():
    global isAwake, meny
    if isAwake == False:
        isAwake = True
        stopScreenActionsAndClear()
    else:
        meny += 1
        stopScreenActionsAndClear()
input.on_button_pressed(Button.A, on_button_pressed_a)

def stopScreenActionsAndClear():
    led.stop_animation()
    basic.clear_screen()
isAwake = False
laget_av = "- Christian E. Røren"
isAwake = False
meny = 0

def on_every_interval():
    pass
loops.every_interval(10000, on_every_interval)

def on_forever():
    global meny, isAwake
    meny = meny % 2
    if meny == 0:
        if isAwake == True:
            if True:
                basic.show_icon(IconNames.HAPPY)
        else:
            basic.show_string("ZzZzZzZz")
    elif meny == 1:
        isAwake = True
        basic.show_icon(IconNames.HEART)
    else:
        pass
basic.forever(on_forever)
