'use strict';
import { HeaderFooter } from "./headerFooter.js";

export function UniqueEquipmentLanguage() {
    function funcaoExtraLocal() {
        const language = JSON.parse(localStorage.getItem('language'));

        document.getElementById("tUniqueEquipment").innerHTML = language.UniqueEquipment;

        document.getElementById("tAcidFiller").innerHTML = language.ProductObject.AcidFiller;
        document.getElementById("tAgmFillingMachine").innerHTML = language.ProductObject.AgmFillingMachine;
        document.getElementById("tAgmFillingMachineGF").innerHTML = language.ProductObject.AgmFillingMachineGF;
        document.getElementById("figAgmFillingMachine").innerHTML = language.ProductObject.AgmFillingMachine;
        document.getElementById("figAgmFillingMachine").setAttribute("alt", language.ProductObject.AgmFillingMachine);
        
        document.getElementById("tTigWelderPoles").innerHTML = language.ProductObject.TigWelderPoles;
        document.getElementById("tTigWeldingMachine").innerHTML = language.ProductObject.TigWeldingMachine;
        document.getElementById("tTigWeldingMachineGF").innerHTML = language.ProductObject.TigWeldingMachineGF;
        document.getElementById("figTigWeldingMachine").innerHTML = language.ProductObject.TigWeldingMachine;
        document.getElementById("figTigWeldingMachine").setAttribute("alt", language.ProductObject.TigWeldingMachine);

        document.getElementById("tLeadPartsMelter").innerHTML = language.ProductObject.LeadPartsMelter;
        document.getElementById("tLeadPartsCastingMachine").innerHTML = language.ProductObject.LeadPartsCastingMachine;
        document.getElementById("tLeadPartsCastingMachineGF").innerHTML = language.ProductObject.LeadPartsCastingMachineGF;
        document.getElementById("figLeadPartsCastingMachine").innerHTML = language.ProductObject.LeadPartsCastingMachine;
        document.getElementById("figLeadPartsCastingMachine").setAttribute("alt", language.ProductObject.LeadPartsCastingMachine);

        document.getElementById("tAcidFillerAndLeveler").innerHTML = language.ProductObject.AcidFillerAndLeveler;
        document.getElementById("tAcidFillerAndLevelingMachine").innerHTML = language.ProductObject.AcidFillerAndLevelingMachine;
        document.getElementById("tAcidFillerAndLevelingMachineGF").innerHTML = language.ProductObject.AcidFillerAndLevelingMachineGF;
        document.getElementById("figAcidFillerAndLevelingMachine").innerHTML = language.ProductObject.AcidFillerAndLevelingMachine;
        document.getElementById("figAcidFillerAndLevelingMachine").setAttribute("alt", language.ProductObject.AcidFillerAndLevelingMachine);

        document.getElementById("tBfSeriesPowerSupplySystemBatteries").innerHTML = language.ProductObject.BfSeriesPowerSupplySystemBatteries;
        document.getElementById("tBfSeriesBatteryPowerSupply").innerHTML = language.ProductObject.BfSeriesBatteryPowerSupply;
        document.getElementById("tBfSeriesBatteryPowerSupplyGF").innerHTML = language.ProductObject.BfSeriesBatteryPowerSupplyGF;
        document.getElementById("figBfSeriesBatteryPowerSupply").innerHTML = language.ProductObject.BfSeriesBatteryPowerSupply;
        document.getElementById("figBfSeriesBatteryPowerSupply").setAttribute("alt", language.ProductObject.BfSeriesBatteryPowerSupply);

        document.getElementById("tPackerAndStacker").innerHTML = language.ProductObject.PackerAndStacker;
        document.getElementById("tPackingStackingMachine").innerHTML = language.ProductObject.PackingStackingMachine;
        document.getElementById("tPackingStackingMachineGF").innerHTML = language.ProductObject.PackingStackingMachineGF;
        document.getElementById("figPackingStackingMachine").innerHTML = language.ProductObject.PackingStackingMachine;
        document.getElementById("figPackingStackingMachine").setAttribute("alt", language.ProductObject.PackingStackingMachine);

        document.getElementById("tDrillAndDumper").innerHTML = language.ProductObject.DrillAndDumper;
        document.getElementById("tHolePunchingDumping").innerHTML = language.ProductObject.HolePunchingDumping;
        document.getElementById("tHolePunchingDumpingGF").innerHTML = language.ProductObject.HolePunchingDumpingGF;
        document.getElementById("figHolePunchingDumping").innerHTML = language.ProductObject.HolePunchingDumping;
        document.getElementById("figHolePunchingDumping").setAttribute("alt", language.ProductObject.HolePunchingDumping);

        document.getElementById("tFoilSealer").innerHTML = language.ProductObject.FoilSealer;
        document.getElementById("tFoilSealingMachine").innerHTML = language.ProductObject.FoilSealingMachine;
        document.getElementById("tFoilSealingMachineGF").innerHTML = language.ProductObject.FoilSealingMachineGF;
        document.getElementById("figFoilSealingMachine").innerHTML = language.ProductObject.FoilSealingMachine;
        document.getElementById("figFoilSealingMachine").setAttribute("alt", language.ProductObject.FoilSealingMachine);

        document.getElementById("tAutomaticAluminumFoilSealingMachine").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachine;
        document.getElementById("tAutomaticAluminumFoilSealingMachineGF").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachineGF;
        document.getElementById("tAutomaticAluminumFoilSealingMachineMD").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachineMD;
        document.getElementById("figAutomaticAluminumFoilSealingMachine").innerHTML = language.ProductObject.AutomaticAluminumFoilSealingMachine;
        document.getElementById("figAutomaticAluminumFoilSealingMachine").setAttribute("alt", language.ProductObject.AutomaticAluminumFoilSealingMachine);
        
        document.getElementById("tALD300Machine").innerHTML = language.ProductObject.ALD300Machine;
        document.getElementById("tALD300MachineGF").innerHTML = language.ProductObject.ALD300MachineGF;
        document.getElementById("figALD300Machine").innerHTML = language.ProductObject.ALD300Machine;
        document.getElementById("figALD300Machine").setAttribute("alt", language.ProductObject.ALD300Machine);
    }

    HeaderFooter(funcaoExtraLocal);
};