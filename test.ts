// tests go here; this will not be compiled when this package is used as a library

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
