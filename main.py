def on_button_pressed_a():
    global isAwake, våkenhet, glede, meny
    if isAwake == False:
        isAwake = True
        stopScreenActionsAndClear()
        våkenhet = 5
        glede += 1
    else:
        meny += 1
        stopScreenActionsAndClear()
input.on_button_pressed(Button.A, on_button_pressed_a)

def stopScreenActionsAndClear():
    led.stop_animation()
    basic.clear_screen()
meny = 0
våkenhet = 0
isAwake = False
laget_av = "- Christian E. Røren og Victor"
isAwake = False
matNivå = 5
våkenhet = 5
glede = 5
barerARRAY = [glede, våkenhet, matNivå]

def on_every_interval():
    if True:
        pass
loops.every_interval(10000, on_every_interval)

def on_forever():
    global meny, isAwake, barerARRAY
    for value in barerARRAY:
        basic.show_string(str(barerARRAY.index(value)))
        barerARRAY[barerARRAY.index(value)-1]
    #basic.show_string("" + str((glede)))
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
