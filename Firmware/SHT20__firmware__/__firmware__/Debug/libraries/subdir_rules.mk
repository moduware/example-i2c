################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Each subdirectory must supply rules for building sources it contributes
libraries/I2C.obj: ../libraries/I2C.cpp $(GEN_OPTS) $(GEN_HDRS)
	@echo 'Building file: $<'
	@echo 'Invoking: MSP430 Compiler'
	"c:/ti/ccsv6/tools/compiler/msp430_4.2.1/bin/cl430" -vmsp --abi=eabi --include_path="c:/ti/ccsv6/ccs_base/msp430/include" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/Firmware/SHT20__firmware__/__firmware__/mdk" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/Firmware/SHT20__firmware__/__firmware__/libraries" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/Firmware/SHT20__firmware__/__firmware__" --include_path="c:/ti/ccsv6/tools/compiler/msp430_4.2.1/include" --advice:power="all" -g --define=__MSP430G2553__ --diag_warning=225 --display_error_number --diag_wrap=off --printf_support=minimal --preproc_with_compile --preproc_dependency="libraries/I2C.pp" --obj_directory="libraries" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: $<'
	@echo ' '

libraries/NCN_GPIO.obj: ../libraries/NCN_GPIO.c $(GEN_OPTS) $(GEN_HDRS)
	@echo 'Building file: $<'
	@echo 'Invoking: MSP430 Compiler'
	"c:/ti/ccsv6/tools/compiler/msp430_4.2.1/bin/cl430" -vmsp --abi=eabi --include_path="c:/ti/ccsv6/ccs_base/msp430/include" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/Firmware/SHT20__firmware__/__firmware__/mdk" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/Firmware/SHT20__firmware__/__firmware__/libraries" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/Firmware/SHT20__firmware__/__firmware__" --include_path="c:/ti/ccsv6/tools/compiler/msp430_4.2.1/include" --advice:power="all" -g --define=__MSP430G2553__ --diag_warning=225 --display_error_number --diag_wrap=off --printf_support=minimal --preproc_with_compile --preproc_dependency="libraries/NCN_GPIO.pp" --obj_directory="libraries" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: $<'
	@echo ' '


