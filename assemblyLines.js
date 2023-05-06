import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            var tGeneralFeatures = document.querySelectorAll(".tGeneralFeatures");
            for (var i = 0; i < tGeneralFeatures.length; i++) {
                tGeneralFeatures[i].innerHTML = language.ProductObject.GeneralFeatures;
            }

            var tMachineDetails = document.querySelectorAll(".tMachineDetails");
            for (var i = 0; i < tMachineDetails.length; i++) {
                tMachineDetails[i].innerHTML = language.ProductObject.MachineDetails;
            }

            document.getElementById("tAutomaticWeldingMachine").innerHTML = language.ProductObject.AutomaticWeldingMachine;
            document.getElementById("tAutomaticWeldingMachineGF").innerHTML = language.ProductObject.AutomaticWeldingMachineGF;
            document.getElementById("tAutomaticWeldingMachineMD").innerHTML = language.ProductObject.AutomaticWeldingMachineMD;

            document.getElementById("tAutomaticAirLeakTestingMachine").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachine;
            document.getElementById("tAutomaticAirLeakTestingMachineGF").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachineGF;
            document.getElementById("tAutomaticAirLeakTestingMachineMD").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachineMD;

            document.getElementById("tAutomaticAluminumFoilSealingMachine").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachine;
            document.getElementById("tAutomaticAluminumFoilSealingMachineGF").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachineGF;
            document.getElementById("tAutomaticAluminumFoilSealingMachineMD").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachineMD;

            document.getElementById("tAutomaticBatteryHeatSealingMachine").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachine;
            document.getElementById("tAutomaticBatteryHeatSealingMachineGF").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachineGF;
            document.getElementById("tAutomaticBatteryHeatSealingMachineMD").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachineMD;

            document.getElementById("tAutomaticCoverPlacingMachine").innerHTML = language.ProductObject.AutomaticCoverPlacingMachine;
            document.getElementById("tAutomaticCoverPlacingMachineGF").innerHTML = language.ProductObject.AutomaticCoverPlacingMachineGF;
            document.getElementById("tAutomaticCoverPlacingMachineMD").innerHTML = language.ProductObject.AutomaticCoverPlacingMachineMD;

            document.getElementById("tAutomaticMultifunctionalWeldingMachine").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachine;
            document.getElementById("tAutomaticMultifunctionalWeldingMachineGF").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachineGF;
            document.getElementById("tAutomaticMultifunctionalWeldingMachineMD").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachineMD;

            document.getElementById("tAutomaticPolarityTestingMachine").innerHTML = language.ProductObject.AutomaticPolarityTestingMachine;
            document.getElementById("tAutomaticPolarityTestingMachineGF").innerHTML = language.ProductObject.AutomaticPolarityTestingMachineGF;
            document.getElementById("tAutomaticPolarityTestingMachineMD").innerHTML = language.ProductObject.AutomaticPolarityTestingMachineMD;

            document.getElementById("tAutomaticServoHeatSealingMachine").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachine;
            document.getElementById("tAutomaticServoHeatSealingMachineGF").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachineGF;
            document.getElementById("tAutomaticServoHeatSealingMachineMD").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachineMD;

            document.getElementById("tAutomaticShearTestingMachine").innerHTML = language.ProductObject.AutomaticShearTestingMachine;
            document.getElementById("tAutomaticShearTestingMachineGF").innerHTML = language.ProductObject.AutomaticShearTestingMachineGF;
            document.getElementById("tAutomaticShearTestingMachineMD").innerHTML = language.ProductObject.AutomaticShearTestingMachineMD;

            document.getElementById("tAutomaticTIGWeldingMachine").innerHTML = language.ProductObject.AutomaticTIGWeldingMachine;
            document.getElementById("tAutomaticTIGWeldingMachineGF").innerHTML = language.ProductObject.AutomaticTIGWeldingMachineGF;
            document.getElementById("tAutomaticTIGWeldingMachineMD").innerHTML = language.ProductObject.AutomaticTIGWeldingMachineMD;

            document.getElementById("tAutomaticTerminalWeldingMachine").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachine;
            document.getElementById("tAutomaticTerminalWeldingMachineGF").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachineGF;
            document.getElementById("tAutomaticTerminalWeldingMachineMD").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachineMD;



        }

        HeaderFotter(funcaoExtraLocal);
    });