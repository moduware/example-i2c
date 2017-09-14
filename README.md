# Example I2C communication using SHT20 sensor for temperature and humidity measurement.
Example with SHT20 sensor module including firmware, module driver and tile.


## Hardware required
- 1 x Breadboard
- Male – female connectors and jumper wires
- 1 x SHT20 sensor module
- 1 x MSP430G2553 module
- 1 x Nexpaq developer’s board
- 1 x MSP-EXP430G2 launch Pad
- 1 x Android phone


## Software required

- [Code Composer Studio IDE][ccs] for firmware design and module flashing.
- Any code editor (like [Atom][atom], [Visual Studio Code][vscode], [Sublime Text][sublime], [Brackets][brackets], etc..) for tile.
- Nexpaq application
  - [Unstable developer's version][unstableapp] (more features)
  - [Stable user's version][stableapp] (more reliable)


## Breadboard configuration
![breadboard]


## Useful links:
- [SHT20 temperature and humidity sensor data sheet][SHT20]
- [I2C understanding the protocol and interface][I2C]
- [MSP430 firmware template and how module firmware works][MSP-TEMP]
- TODO: Flashing firmware to MSP430 developer's module
- TODO: MSP430 developer's module introduction
- [WebView tile template and TODO: How webview tile works][webview-template]
- TODO: Installing webview tile onto your smartphone in developer's mode  
  
  
  
[stableapp]: https://nexpaq.com/app
[unstableapp]: https://nexpaq.com/app-dev
[ccs]: http://www.ti.com/tool/CCSTUDIO
[atom]: https://atom.io/
[vscode]: https://code.visualstudio.com/
[sublime]: https://www.sublimetext.com/
[brackets]: http://brackets.io/

[breadboard]:https://github.com/nexpaq/example-i2c/blob/master/breadboard/SHT20-1.jpg
[SHT20]:https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Sensirion_Humidity_Sensors_SHT20_Datasheet_V4.pdf
[I2C]: https://www.nxp.com/docs/en/user-guide/UM10204.pdf
[webview-template]: https://github.com/nexpaq/webview-tile-template
[MSP-TEMP]: https://github.com/nexpaq/msp430-firmware-template
[module]: https://developers.nexpaq.com/
