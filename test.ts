// tests go here; this will not be compiled when this package is used as a library


/*
let volt = 0

let adc = 0

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

Liquid.setPin(AnalogPin.P0)

basic.forever(() => {

    adc = Liquid.getADCValue()

    serial.writeValue("adc", adc)

    volt = Liquid.getVoltValue()

    serial.writeValue("mV", volt)

    basic.pause(500)
})
*/





/*
let noise = 0

let volt = 0

let adc = 0

Sound.setApin(AnalogPin.P0)

Sound.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Sound.getADCValue()

    serial.writeValue("adc", adc)

    volt = Sound.getVoltValue()

    serial.writeValue("mV", volt)

    noise = Sound.getNoise()

    serial.writeValue("noise", noise)

    basic.pause(100)
})
*/



/*
let close = 0

let volt = 0

let adc = 0

Infrared.setApin(AnalogPin.P0)

Infrared.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Infrared.getADCValue()

    serial.writeValue("adc", adc)

    volt = Infrared.getVoltValue()

    serial.writeValue("mV", volt)

    close = Infrared.getClose()

    serial.writeValue("close", close)

    basic.pause(100)
})
*/


/*
let polluted = 0

let volt = 0

let adc = 0

Gas.setApin(AnalogPin.P0)

Gas.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Gas.getADCValue()

    serial.writeValue("adc", adc)

    volt = Gas.getVoltValue()

    serial.writeValue("mV", volt)

    polluted = Gas.getPolluted()

    serial.writeValue("polluted", polluted)

    basic.pause(100)
})
*/

let far = 0

let volt = 0

let adc = 0

Flame.setApin(AnalogPin.P0)

Flame.setDpin(DigitalPin.P1)

basic.showIcon(IconNames.Heart)

serial.redirectToUSB()

basic.forever(() => {

    adc = Flame.getADCValue()

    serial.writeValue("adc", adc)

    volt = Flame.getVoltValue()

    serial.writeValue("mV", volt)

    far = Flame.getFar()

    serial.writeValue("far", far)

    basic.pause(100)
})
