################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Each subdirectory must supply rules for building sources it contributes
tmain.obj: ../tmain.cpp $(GEN_OPTS) $(GEN_HDRS)
	@echo 'Building file: $<'
	@echo 'Invoking: MSP430 Compiler'
	"c:/ti/ccsv6/tools/compiler/msp430_4.2.1/bin/cl430" -vmsp --abi=eabi --include_path="c:/ti/ccsv6/ccs_base/msp430/include" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/__firmware__/mdk" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/__firmware__/libraries" --include_path="C:/D DRIVE/NEXPAQ/nexpaq/Example-i2c/__firmware__" --include_path="c:/ti/ccsv6/tools/compiler/msp430_4.2.1/include" --advice:power="all" -g --define=__MSP430G2553__ --diag_warning=225 --display_error_number --diag_wrap=off --printf_support=minimal --preproc_with_compile --preproc_dependency="tmain.pp" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: $<'
	@echo ' '


