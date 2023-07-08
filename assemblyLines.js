'use strict';
import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            const language = JSON.parse(localStorage.getItem('language'));

            const tGeneralFeatures = document.querySelectorAll(".tGeneralFeatures");
            for (let i = 0; i < tGeneralFeatures.length; i++) {
                tGeneralFeatures[i].innerHTML = language.ProductObject.GeneralFeatures;
            }

            const tMachineDetails = document.querySelectorAll(".tMachineDetails");
            for (let i = 0; i < tMachineDetails.length; i++) {
                tMachineDetails[i].innerHTML = language.ProductObject.MachineDetails;
            }

            document.getElementById("tAssemblyLine").innerHTML = language.AssemblyLine;

            document.getElementById("tAgmStackers").innerHTML = language.ProductObject.AgmStackers;
            document.getElementById("tSt100").innerHTML = language.ProductObject.St100;
            document.getElementById("tSt100GF").innerHTML = language.ProductObject.St100GF;
            document.getElementById("figSt100").innerHTML = language.ProductObject.St100;
            document.getElementById("figSt100").setAttribute("alt", language.ProductObject.St100);

            document.getElementById("tEnvelopers").innerHTML = language.ProductObject.Envelopers;
            document.getElementById("tEnvelopingAndStackingMachine").innerHTML = language.ProductObject.EnvelopingAndStackingMachine;
            document.getElementById("tEnvelopingAndStackingMachineGF").innerHTML = language.ProductObject.EnvelopingAndStackingMachineGF;
            document.getElementById("figEnvelopingAndStackingMachine").innerHTML = language.ProductObject.EnvelopingAndStackingMachine;
            document.getElementById("figEnvelopingAndStackingMachine").setAttribute("alt", language.ProductObject.EnvelopingAndStackingMachine);
            document.getElementById("tStackingMachine").innerHTML = language.ProductObject.StackingMachine;
            document.getElementById("tStackingMachineGF").innerHTML = language.ProductObject.StackingMachineGF;
            document.getElementById("figStackingMachine").innerHTML = language.ProductObject.StackingMachine;
            document.getElementById("figStackingMachine").setAttribute("alt", language.ProductObject.StackingMachine);

            document.getElementById("tCOSCastonStrap").innerHTML = language.ProductObject.COSCastonStrap;
            document.getElementById("tCos300").innerHTML = language.ProductObject.Cos300;
            document.getElementById("tCos300GF").innerHTML = language.ProductObject.Cos300GF;
            document.getElementById("figCos300").innerHTML = language.ProductObject.Cos300;
            document.getElementById("figCos300").setAttribute("alt", language.ProductObject.Cos300);
            document.getElementById("tGir06").innerHTML = language.ProductObject.Gir06;
            document.getElementById("tGir06GF").innerHTML = language.ProductObject.Gir06GF;
            document.getElementById("figGir06").innerHTML = language.ProductObject.Gir06;
            document.getElementById("figGir06").setAttribute("alt", language.ProductObject.Gir06);

            document.getElementById("tShortCircuitTesters").innerHTML = language.ProductObject.ShortCircuitTesters;	
            document.getElementById("tShortCircuitTestersMachine").innerHTML = language.ProductObject.ShortCircuitTestersMachine;
            document.getElementById("tShortCircuitTestersMachineGF").innerHTML = language.ProductObject.ShortCircuitTestersMachineGF;
            document.getElementById("figShortCircuitTestersMachine").innerHTML = language.ProductObject.ShortCircuitTestersMachine;
            document.getElementById("figShortCircuitTestersMachine").setAttribute("alt", language.ProductObject.ShortCircuitTestersMachine);
            document.getElementById("tShortCircuitTestersMachine_b").innerHTML = language.ProductObject.ShortCircuitTestersMachine_b;
            document.getElementById("tShortCircuitTestersMachine_bGF").innerHTML = language.ProductObject.ShortCircuitTestersMachine_bGF;
            document.getElementById("figShortCircuitTestersMachine_b").innerHTML = language.ProductObject.ShortCircuitTestersMachine_b;
            document.getElementById("figShortCircuitTestersMachine_b").setAttribute("alt", language.ProductObject.ShortCircuitTestersMachine_b);

            document.getElementById("tHolePunchingMachines").innerHTML = language.ProductObject.HolePunchingMachines;	
            
            document.getElementById("tIntercellWeldingMachines").innerHTML = language.ProductObject.IntercellWeldingMachines;	
            document.getElementById("tAutomaticWeldingMachine").innerHTML = language.ProductObject.AutomaticWeldingMachine;
            document.getElementById("tAutomaticWeldingMachineGF").innerHTML = language.ProductObject.AutomaticWeldingMachineGF;
            document.getElementById("tAutomaticWeldingMachineMD").innerHTML = language.ProductObject.AutomaticWeldingMachineMD;
            document.getElementById("figAutomaticWeldingMachine").innerHTML = language.ProductObject.AutomaticWeldingMachine;
            document.getElementById("figAutomaticWeldingMachine").setAttribute("alt", language.ProductObject.AutomaticWeldingMachine);
            document.getElementById("tAutomaticMultifunctionalWeldingMachine").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachine;
            document.getElementById("tAutomaticMultifunctionalWeldingMachineGF").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachineGF;
            document.getElementById("tAutomaticMultifunctionalWeldingMachineMD").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachineMD;
            document.getElementById("figAutomaticMultifunctionalWeldingMachine").innerHTML = language.ProductObject.AutomaticMultifunctionalWeldingMachine;
            document.getElementById("figAutomaticMultifunctionalWeldingMachine").setAttribute("alt", language.ProductObject.AutomaticMultifunctionalWeldingMachine);
            document.getElementById("tIcw300").innerHTML = language.ProductObject.Icw300;
            document.getElementById("tIcw300GF").innerHTML = language.ProductObject.Icw300GF;
            document.getElementById("figIcw300").innerHTML = language.ProductObject.Icw300;
            document.getElementById("figIcw300").setAttribute("alt", language.ProductObject.Icw300);

            document.getElementById("tShearTesters").innerHTML = language.ProductObject.ShearTesters;	
            document.getElementById("tAutomaticShearTestingMachine").innerHTML = language.ProductObject.AutomaticShearTestingMachine;
            document.getElementById("tAutomaticShearTestingMachineGF").innerHTML = language.ProductObject.AutomaticShearTestingMachineGF;
            document.getElementById("tAutomaticShearTestingMachineMD").innerHTML = language.ProductObject.AutomaticShearTestingMachineMD;
            document.getElementById("figAutomaticShearTestingMachine").innerHTML = language.ProductObject.AutomaticShearTestingMachine;
            document.getElementById("figAutomaticShearTestingMachine").setAttribute("alt", language.ProductObject.AutomaticShearTestingMachine);

            document.getElementById("tPolarityTesters").innerHTML = language.ProductObject.PolarityTesters;
            document.getElementById("tAutomaticPolarityTestingMachine").innerHTML = language.ProductObject.AutomaticPolarityTestingMachine;
            document.getElementById("tAutomaticPolarityTestingMachineGF").innerHTML = language.ProductObject.AutomaticPolarityTestingMachineGF;
            document.getElementById("tAutomaticPolarityTestingMachineMD").innerHTML = language.ProductObject.AutomaticPolarityTestingMachineMD;
            document.getElementById("figAutomaticPolarityTestingMachine").innerHTML = language.ProductObject.AutomaticPolarityTestingMachine;
            document.getElementById("figAutomaticPolarityTestingMachine").setAttribute("alt", language.ProductObject.AutomaticPolarityTestingMachine);

            document.getElementById("tWeldTesters").innerHTML = language.ProductObject.WeldTesters;
            document.getElementById("tGlueInserting").innerHTML = language.ProductObject.GlueInserting;	

            document.getElementById("tCoverPlacingMachines").innerHTML = language.ProductObject.CoverPlacingMachines;	
            document.getElementById("tAutomaticCoverPlacingMachine").innerHTML = language.ProductObject.AutomaticCoverPlacingMachine;
            document.getElementById("tAutomaticCoverPlacingMachineGF").innerHTML = language.ProductObject.AutomaticCoverPlacingMachineGF;
            document.getElementById("tAutomaticCoverPlacingMachineMD").innerHTML = language.ProductObject.AutomaticCoverPlacingMachineMD;
            document.getElementById("figAutomaticCoverPlacingMachine").innerHTML = language.ProductObject.AutomaticCoverPlacingMachine;
            document.getElementById("figAutomaticCoverPlacingMachine").setAttribute("alt", language.ProductObject.AutomaticCoverPlacingMachine);

            document.getElementById("tHeatSealingMachines").innerHTML = language.ProductObject.HeatSealingMachines;
            document.getElementById("tAutomaticServoHeatSealingMachine").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachine;
            document.getElementById("tAutomaticServoHeatSealingMachineGF").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachineGF;
            document.getElementById("tAutomaticServoHeatSealingMachineMD").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachineMD;
            document.getElementById("figAutomaticServoHeatSealingMachine").innerHTML = language.ProductObject.AutomaticServoHeatSealingMachine;
            document.getElementById("figAutomaticServoHeatSealingMachine").setAttribute("alt", language.ProductObject.AutomaticServoHeatSealingMachine);
            document.getElementById("tAutomaticBatteryHeatSealingMachine").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachine;
            document.getElementById("tAutomaticBatteryHeatSealingMachineGF").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachineGF;
            document.getElementById("tAutomaticBatteryHeatSealingMachineMD").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachineMD;
            document.getElementById("figAutomaticBatteryHeatSealingMachine").innerHTML = language.ProductObject.AutomaticBatteryHeatSealingMachine;
            document.getElementById("figAutomaticBatteryHeatSealingMachine").setAttribute("alt", language.ProductObject.AutomaticBatteryHeatSealingMachine);

            document.getElementById("tPostBurning").innerHTML = language.ProductObject.PostBurning;
            //document.getElementById("tTIGWelding").innerHTML = language.ProductObject.TIGWelding;	
            document.getElementById("tAutomaticTIGWeldingMachine").innerHTML = language.ProductObject.AutomaticTIGWeldingMachine;
            document.getElementById("tAutomaticTIGWeldingMachineGF").innerHTML = language.ProductObject.AutomaticTIGWeldingMachineGF;
            document.getElementById("tAutomaticTIGWeldingMachineMD").innerHTML = language.ProductObject.AutomaticTIGWeldingMachineMD;
            document.getElementById("figAutomaticTIGWeldingMachine").innerHTML = language.ProductObject.AutomaticTIGWeldingMachine;
            document.getElementById("figAutomaticTIGWeldingMachine").setAttribute("alt", language.ProductObject.AutomaticTIGWeldingMachine);
            document.getElementById("tTws300").innerHTML = language.ProductObject.Tws300;
            document.getElementById("tTws300GF").innerHTML = language.ProductObject.Tws300GF;
            document.getElementById("figTws300").innerHTML = language.ProductObject.Tws300;
            document.getElementById("figTws300").setAttribute("alt", language.ProductObject.Tws300);
            document.getElementById("tAutomaticTerminalWeldingMachine").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachine;
            document.getElementById("tAutomaticTerminalWeldingMachineGF").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachineGF;
            document.getElementById("tAutomaticTerminalWeldingMachineMD").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachineMD;
            document.getElementById("figAutomaticTerminalWeldingMachine").innerHTML = language.ProductObject.AutomaticTerminalWeldingMachine;
            document.getElementById("figAutomaticTerminalWeldingMachine").setAttribute("alt", language.ProductObject.AutomaticTerminalWeldingMachine);

            document.getElementById("tLeakTestingMachines").innerHTML = language.ProductObject.LeakTestingMachines;
            document.getElementById("tAutomaticAirLeakTestingMachine").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachine;
            document.getElementById("tAutomaticAirLeakTestingMachineGF").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachineGF;
            document.getElementById("tAutomaticAirLeakTestingMachineMD").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachineMD;
            document.getElementById("figAutomaticAirLeakTestingMachine").innerHTML = language.ProductObject.AutomaticAirLeakTestingMachine;
            document.getElementById("figAutomaticAirLeakTestingMachine").setAttribute("alt", language.ProductObject.AutomaticAirLeakTestingMachine);

            document.getElementById("tEngravers").innerHTML = language.ProductObject.Engravers;		
        }

        HeaderFotter(funcaoExtraLocal);
    });