isAwake = False

def on_every_interval():
    global isAwake
    isAwake = False
loops.every_interval(1000, on_every_interval)

def on_forever():
    global isAwake
    isAwake = True
    basic.show_string("" + str((isAwake)))
basic.forever(on_forever)
