/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

/**
 * 自定义图形块
 */

/*
liquid block
*/
//% weight=80 color=#66FFFF icon="\uf043" block="liquid"
namespace Liquid {
    let pin = AnalogPin.P0
    let volt = 0;
    let adc = 0;


    /**
     * Set pin at which the Liquid Level Senor AOUT line is connected;
     * @param pin_arg pin at which the Liquid Level Senor AOUT line is connected;
     */
    //% blockId=Liquid_setPin
    //% block="set liquid pin |%pinarg|"
    //% weight = 85
    export function setPin(pin_arg: AnalogPin): void {
        pin = pin_arg;
    }


    /**
     * Return the adc value from the AnalogPin;
     */
    //% blockId=Liquid_getADCValue
    //% block="get liquid adc value"
    //% weight = 75
    export function getADCValue(): number {
        adc = pins.analogReadPin(pin);
        return adc;
    }

    /**
     * Return the volt value from the AnalogPin;
     */
    //% blockId=Liquid_getVoltValue
    //% block="get liquid volt value"
    //% weight = 65
    export function getVoltValue(): number {
        adc = pins.analogReadPin(pin);
        volt = adc * 3300 / 1024;
        return volt;
    }
}



/*
sound block
*/
//% weight=60 color=#CC6633 icon="\uf001" block="sound"
namespace Sound {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let noise = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Sound Sensor;
     * @param a_pin_arg Sound Sensor analog connected pin;
     */
    //% blockId=Sound_setApin
    //% block="sound sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Sound Sensor;
     * @param d_pin_arg Sound Sensor digital connected pin;
     */
    //% blockId=Sound_setDpin
    //% block="sound sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin,PinPullMode.PullUp);
    }


    /**
     * Return the sound sensor adc value from the AnalogPin;
     */
    //% blockId=Sound_getADCValue
    //% block="get sound adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the sound sensor volt value from the AnalogPin;
     */
    //% blockId=Sound_getVoltValue
    //% block="get sound volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the sound sensor volt value from the DigitalPin;
     */
    //% blockId=Sound_getNoise
    //% block="get whether noise is loud"
    //% weight = 45
    export function getNoise(): number {
        noise = pins.digitalReadPin(Dpin);
        if (noise) {
            return 0;
        } else {
            return 1;
        }
    }
}






/*
infrared  block
*/
//% weight=40 color=#FF0000 icon="\uf0eb" block="infrared"
namespace Infrared {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let close = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Infrared Sensor;
     * @param a_pin_arg Infrared Sensor analog connected pin;
     */
    //% blockId=Infrared_setApin
    //% block="infrared sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Infrared Sensor;
     * @param d_pin_arg Infrared Sensor digital connected pin;
     */
    //% blockId=Infrared_setDpin
    //% block="infrared sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin,PinPullMode.PullUp);
    }


    /**
     * Return the infrared sensor adc value from the AnalogPin;
     */
    //% blockId=Infrared_getADCValue
    //% block="get infrared adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the infrared sensor volt value from the AnalogPin;
     */
    //% blockId=Infrared_getVoltValue
    //% block="get infrared volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the infrared sensor level value from the DigitalPin;
     */
    //% blockId=Infrared_getClose
    //% block="get whether infrared near obstacles"
    //% weight = 45
    export function getClose(): number {
        close = pins.digitalReadPin(Dpin);
        if (close) {
            return 0;
        } else {
            return 1;
        }
    }
}




/*
Gas block
*/
//% weight=20 color=#CCFFFF icon="\uf5d0" block="gas"
namespace Gas {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let polluted = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Gas Sensor;
     * @param a_pin_arg Gas Sensor analog connected pin;
     */
    //% blockId=Gas_setApin
    //% block="gas sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Gas Sensor;
     * @param d_pin_arg Gas Sensor digital connected pin;
     */
    //% blockId=Gas_setDpin
    //% block="gas sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin,PinPullMode.PullUp);
    }


    /**
     * Return the gas sensor adc value from the AnalogPin;
     */
    //% blockId=Gas_getADCValue
    //% block="get gas adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the gas sensor volt value from the AnalogPin;
     */
    //% blockId=Gas_getVoltValue
    //% block="get gas volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the gas sensor level value from the DigitalPin;
     */
    //% blockId=Gas_getPolute
    //% block="get whether air polluted"
    //% weight = 45
    export function getPolluted(): number {
        polluted = pins.digitalReadPin(Dpin);
        if (polluted) {
            return 0;
        } else {
            return 1;
        }
    }
}






/*
flame block
*/
//% weight=10 color=#FF6633 icon="\uf06d" block="flame"
namespace Flame {
    let Apin = AnalogPin.P0;
    let Dpin = DigitalPin.P1;

    let far = 0;
    let volt = 0;
    let adc = 0;


    /**
     * Set the Apin connected to Flame Sensor;
     * @param a_pin_arg Flame Sensor analog connected pin;
     */
    //% blockId=Flame_setApin
    //% block="flame sensor analog pin connect to |%a_pin_arg|"
    //% weight = 85
    export function setApin(a_pin_arg: AnalogPin): void {
        Apin = a_pin_arg;
    }


    /**
     * Set the Dpin connected to Flame Sensor;
     * @param d_pin_arg Flame Sensor digital connected pin;
     */
    //% blockId=Flame_setDpin
    //% block="flame sensor digital pin connect to |%d_pin_arg|"
    //% weight = 75
    export function setDpin(d_pin_arg: DigitalPin): void {
        Dpin = d_pin_arg;
        pins.setPull(Dpin,PinPullMode.PullUp);
    }


    /**
     * Return the Flame sensor adc value from the AnalogPin;
     */
    //% blockId=Flame_getADCValue
    //% block="get flame adc value"
    //% weight = 65
    export function getADCValue(): number {
        adc = pins.analogReadPin(Apin);
        return adc;
    }

    /**
     * Return the flame sensor volt value from the AnalogPin;
     */
    //% blockId=Flame_getVoltValue
    //% block="get flame volt value"
    //% weight = 55
    export function getVoltValue(): number {
        adc = pins.analogReadPin(Apin);
        volt = adc * 3300 / 1024;
        return volt;
    }

    /**
     * Return the flame sensor level value from the DigitalPin;
     */
    //% blockId=Flame_getPolute
    //% block="get whether far from fire"
    //% weight = 45
    export function getFar(): number {
        far = pins.digitalReadPin(Dpin);
        return far;
    }
}


