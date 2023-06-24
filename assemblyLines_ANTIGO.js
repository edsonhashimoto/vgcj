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

            document.getElementById("tSt100").innerHTML = language.ProductObject.tSt100;
            document.getElementById("tSt100Serie").innerHTML = language.ProductObject.tSt100Serie;
            document.getElementById("tSt100Detail").innerHTML = language.ProductObject.tSt100Detail;

            document.getElementById("tCos300").innerHTML = language.ProductObject.tCos300;
            document.getElementById("tCos300Serie").innerHTML = language.ProductObject.tCos300Serie;
            document.getElementById("tCos300Detail").innerHTML = language.ProductObject.tCos300Detail;

            document.getElementById("tIcw300").innerHTML = language.ProductObject.tIcw300;
            document.getElementById("tIcw300Serie").innerHTML = language.ProductObject.tIcw300Serie;
            document.getElementById("tIcw300Detail").innerHTML = language.ProductObject.tIcw300Detail;

            document.getElementById("tTws300").innerHTML = language.ProductObject.tTws300;
            document.getElementById("tTws300Serie").innerHTML = language.ProductObject.tTws300Serie;
            document.getElementById("tTws300Detail").innerHTML = language.ProductObject.tTws300Detail;

            document.getElementById("tGir06").innerHTML = language.ProductObject.tGir06;
            document.getElementById("tGir06Serie").innerHTML = language.ProductObject.tGir06Serie;
            document.getElementById("tGir06Detail").innerHTML = language.ProductObject.tGir06Detail;

            document.getElementById("tAld300").innerHTML = language.ProductObject.tAld300;
            document.getElementById("tAld300Serie").innerHTML = language.ProductObject.tAld300Serie;
            document.getElementById("tAld300Detail").innerHTML = language.ProductObject.tAld300Detail;

            document.getElementById("tFully").innerHTML = language.ProductObject.tFully;
            document.getElementById("tFullySerie").innerHTML = language.ProductObject.tFullySerie;
            document.getElementById("tFullyDetail").innerHTML = language.ProductObject.tFullyDetail;

        }

        HeaderFotter(funcaoExtraLocal);
    });