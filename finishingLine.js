import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            document.getElementById("tFinishingLines").innerHTML = language.FinishingLine;

            document.getElementById("tAcidFillingMachines").innerHTML = language.ProductObject.AcidFillingMachines;   
            document.getElementById("tWetFillingMachine").innerHTML = language.ProductObject.WetFillingMachine;
            document.getElementById("tWetFillingMachineGF").innerHTML = language.ProductObject.WetFillingMachineGF;
            document.getElementById("figWetFillingMachine").innerHTML = language.ProductObject.WetFillingMachine;
            document.getElementById("figWetFillingMachine").setAttribute("alt", language.ProductObject.WetFillingMachine);            
            document.getElementById("t2ndAcidFillingMachine").innerHTML = language.ProductObject._2ndAcidFillingMachine;
            document.getElementById("t2ndAcidFillingMachineGF").innerHTML = language.ProductObject._2ndAcidFillingMachineGF;
            document.getElementById("fig2ndAcidFillingMachine").innerHTML = language.ProductObject._2ndAcidFillingMachine;
            document.getElementById("fig2ndAcidFillingMachine").setAttribute("alt", language.ProductObject._2ndAcidFillingMachine);
            document.getElementById("tAcidFillingAndLevelingMachine").innerHTML = language.ProductObject.AcidFillingAndLevelingMachine;
            document.getElementById("tAcidFillingAndLevelingMachineGF").innerHTML = language.ProductObject.AcidFillingAndLevelingMachineGF;
            document.getElementById("figAcidFillingAndLevelingMachine").innerHTML = language.ProductObject.AcidFillingAndLevelingMachine;
            document.getElementById("figAcidFillingAndLevelingMachine").setAttribute("alt", language.ProductObject.AcidFillingAndLevelingMachine);
            document.getElementById("tAcidFillingMachine").innerHTML = language.ProductObject.AcidFillingMachine;
            document.getElementById("tAcidFillingMachineGF").innerHTML = language.ProductObject.AcidFillingMachineGF;
            document.getElementById("figAcidFillingMachine").innerHTML = language.ProductObject.AcidFillingMachine;
            document.getElementById("figAcidFillingMachine").setAttribute("alt", language.ProductObject.AcidFillingMachine);

            document.getElementById("tDumpingMachines").innerHTML = language.ProductObject.DumpingMachines;
            document.getElementById("tDumpingMachine").innerHTML = language.ProductObject.DumpingMachine;
            document.getElementById("tDumpingMachineGF").innerHTML = language.ProductObject.DumpingMachineGF;
            document.getElementById("figDumpingMachine").innerHTML = language.ProductObject.DumpingMachine;
            document.getElementById("figDumpingMachine").setAttribute("alt", language.ProductObject.DumpingMachine);
            document.getElementById("tAcidDumpingMachine").innerHTML = language.ProductObject.AcidDumpingMachine;
            document.getElementById("tAcidDumpingMachineGF").innerHTML = language.ProductObject.AcidDumpingMachineGF;
            document.getElementById("figAcidDumpingMachine").innerHTML = language.ProductObject.AcidDumpingMachine;
            document.getElementById("figAcidDumpingMachine").setAttribute("alt", language.ProductObject.AcidDumpingMachine);

            document.getElementById("tFormation").innerHTML = language.ProductObject.Formation;
            document.getElementById("tChargeAndDischargeMachine").innerHTML = language.ProductObject.ChargeAndDischargeMachine;
            document.getElementById("tChargeAndDischargeMachineGF").innerHTML = language.ProductObject.ChargeAndDischargeMachineGF;
            document.getElementById("figChargeAndDischargeMachine").innerHTML = language.ProductObject.ChargeAndDischargeMachine;
            document.getElementById("figChargeAndDischargeMachine").setAttribute("alt", language.ProductObject.ChargeAndDischargeMachine);
            document.getElementById("tBFSeriesBatteryPowerSupply").innerHTML = language.ProductObject.BFSeriesBatteryPowerSupply;
            document.getElementById("tBFSeriesBatteryPowerSupplyGF").innerHTML = language.ProductObject.BFSeriesBatteryPowerSupplyGF;
            document.getElementById("figBFSeriesBatteryPowerSupply").innerHTML = language.ProductObject.BFSeriesBatteryPowerSupply;
            document.getElementById("figBFSeriesBatteryPowerSupply").setAttribute("alt", language.ProductObject.BFSeriesBatteryPowerSupply);
            document.getElementById("tAutomaticAcidInjectionMachine").innerHTML = language.ProductObject.AutomaticAcidInjectionMachine;
            document.getElementById("tAutomaticAcidInjectionMachineGF").innerHTML = language.ProductObject.AutomaticAcidInjectionMachineGF;
            document.getElementById("figAutomaticAcidInjectionMachine").innerHTML = language.ProductObject.AutomaticAcidInjectionMachine;
            document.getElementById("figAutomaticAcidInjectionMachine").setAttribute("alt", language.ProductObject.AutomaticAcidInjectionMachine);
            document.getElementById("tAGMFillingMachine2000").innerHTML = language.ProductObject.AGMFillingMachine2000;
            document.getElementById("tAGMFillingMachine2000GF").innerHTML = language.ProductObject.AGMFillingMachine2000GF;
            document.getElementById("figAGMFillingMachine2000").innerHTML = language.ProductObject.AGMFillingMachine2000;
            document.getElementById("figAGMFillingMachine2000").setAttribute("alt", language.ProductObject.AGMFillingMachine2000);

            document.getElementById("tValveInserting").innerHTML = language.ProductObject.ValveInserting;
            
            document.getElementById("tWashingAndDryingMachines").innerHTML = language.ProductObject.WashingAndDryingMachines;
            document.getElementById("tWashingAndDryingMachine").innerHTML = language.ProductObject.WashingAndDryingMachine;
            document.getElementById("tWashingAndDryingMachineGF").innerHTML = language.ProductObject.WashingAndDryingMachineGF;
            document.getElementById("figWashingAndDryingMachine").innerHTML = language.ProductObject.WashingAndDryingMachine;
            document.getElementById("figWashingAndDryingMachine").setAttribute("alt", language.ProductObject.WashingAndDryingMachine);


            document.getElementById("tLabellingMachine").innerHTML = language.ProductObject.LabellingMachine;
            document.getElementById("tEngravingMachines").innerHTML = language.ProductObject.EngravingMachines;
            document.getElementById("tShrinkWrapMachine").innerHTML = language.ProductObject.ShrinkWrapMachine;
            document.getElementById("tStackers").innerHTML = language.ProductObject.Stackers
            document.getElementById("tStretchWrapper").innerHTML = language.ProductObject.StretchWrapper;
            
            
        }

        HeaderFotter(funcaoExtraLocal);
    });