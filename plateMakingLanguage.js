'use strict';
import { HeaderFooter } from "./headerFooter.js";

export function PlateMakingLanguage() {
    function funcaoExtraLocal() {
        const language = JSON.parse(localStorage.getItem('language'));

        document.getElementById("tPlateMaking").innerHTML = language.PlateMaking;

        document.getElementById("tGridCasting").innerHTML = language.ProductObject.GridCasting;
        document.getElementById("tGridCastingMachine").innerHTML = language.ProductObject.GridCastingMachine;
        document.getElementById("tGridCastingMachineGF").innerHTML = language.ProductObject.GridCastingMachineGF;
        document.getElementById("figGridCastingMachine").innerHTML = language.ProductObject.GridCastingMachine;
        document.getElementById("figGridCastingMachine").setAttribute("alt", language.ProductObject.GridCastingMachine);
        document.getElementById("tSpineGridCaster").innerHTML = language.ProductObject.SpineGridCaster;
        document.getElementById("tSpineGridCasterGF").innerHTML = language.ProductObject.SpineGridCasterGF;
        document.getElementById("figSpineGridCaster").innerHTML = language.ProductObject.SpineGridCaster;
        document.getElementById("figSpineGridCaster").setAttribute("alt", language.ProductObject.SpineGridCaster);
        document.getElementById("tPunchingMachine").innerHTML = language.ProductObject.PunchingMachine;
        document.getElementById("tPunchingMachineGF").innerHTML = language.ProductObject.PunchingMachineGF;
        document.getElementById("figPunchingMachine").innerHTML = language.ProductObject.PunchingMachine;
        document.getElementById("figPunchingMachine").setAttribute("alt", language.ProductObject.PunchingMachine);
        
        document.getElementById("tOxideMills").innerHTML = language.ProductObject.OxideMills;
        document.getElementById("tBartonOxideMill").innerHTML = language.ProductObject.BartonOxideMill;
        document.getElementById("tBartonOxideMillGF").innerHTML = language.ProductObject.BartonOxideMillGF;
        document.getElementById("figBartonOxideMill").innerHTML = language.ProductObject.BartonOxideMill;
        document.getElementById("figBartonOxideMill").setAttribute("alt", language.ProductObject.BartonOxideMill);
        document.getElementById("tLSSeriesAutomaticOxideMill").innerHTML = language.ProductObject.LSSeriesAutomaticOxideMill;
        document.getElementById("tLSSeriesAutomaticOxideMillGF").innerHTML = language.ProductObject.LSSeriesAutomaticOxideMillGF;
        document.getElementById("figLSSeriesAutomaticOxideMill").innerHTML = language.ProductObject.LSSeriesAutomaticOxideMill;
        document.getElementById("figLSSeriesAutomaticOxideMill").setAttribute("alt", language.ProductObject.LSSeriesAutomaticOxideMill);

        document.getElementById("tPasteMixers").innerHTML = language.ProductObject.PasteMixers;
        document.getElementById("tSHSeriesAutomaticMixer").innerHTML = language.ProductObject.SHSeriesAutomaticMixer;
        document.getElementById("tSHSeriesAutomaticMixerGF").innerHTML = language.ProductObject.SHSeriesAutomaticMixerGF;
        document.getElementById("figSHSeriesAutomaticMixer").innerHTML = language.ProductObject.SHSeriesAutomaticMixer;
        document.getElementById("figSHSeriesAutomaticMixer").setAttribute("alt", language.ProductObject.SHSeriesAutomaticMixer);

        document.getElementById("tPastingMachines").innerHTML = language.ProductObject.PastingMachines;
        document.getElementById("tDoubleSidePaster").innerHTML = language.ProductObject.DoubleSidePaster;
        document.getElementById("tDoubleSidePasterGF").innerHTML = language.ProductObject.DoubleSidePasterGF;
        document.getElementById("figDoubleSidePaster").innerHTML = language.ProductObject.DoubleSidePaster;
        document.getElementById("figDoubleSidePaster").setAttribute("alt", language.ProductObject.DoubleSidePaster);            

        document.getElementById("tFlashDryOvens").innerHTML = language.ProductObject.FlashDryOvens;
        document.getElementById("tFlashDryOven").innerHTML = language.ProductObject.FlashDryOven;
        document.getElementById("tFlashDryOvenGF").innerHTML = language.ProductObject.FlashDryOvenGF;
        document.getElementById("figFlashDryOven").innerHTML = language.ProductObject.FlashDryOven;
        document.getElementById("figFlashDryOven").setAttribute("alt", language.ProductObject.FlashDryOven);

        document.getElementById("tPlateCuttingMachines").innerHTML = language.ProductObject.PlateCuttingMachines;
        document.getElementById("tPlateCuttingMachine").innerHTML = language.ProductObject.PlateCuttingMachine;
        document.getElementById("tPlateCuttingMachineGF").innerHTML = language.ProductObject.PlateCuttingMachineGF;
        document.getElementById("figPlateCuttingMachine").innerHTML = language.ProductObject.PlateCuttingMachine;
        document.getElementById("figPlateCuttingMachine").setAttribute("alt", language.ProductObject.PlateCuttingMachine);            
        document.getElementById("tPlateCutAndBrushMachine").innerHTML = language.ProductObject.PlateCutAndBrushMachine;
        document.getElementById("tPlateCutAndBrushMachineGF").innerHTML = language.ProductObject.PlateCutAndBrushMachineGF;
        document.getElementById("figPlateCutAndBrushMachine").innerHTML = language.ProductObject.PlateCutAndBrushMachine;
        document.getElementById("figPlateCutAndBrushMachine").setAttribute("alt", language.ProductObject.PlateCutAndBrushMachine);   

        document.getElementById("tCuringDryingChambers").innerHTML = language.ProductObject.CuringDryingChambers;
        document.getElementById("tCuringDryingChamber").innerHTML = language.ProductObject.CuringDryingChamber;
        document.getElementById("tCuringDryingChamberGF").innerHTML = language.ProductObject.CuringDryingChamberGF;
        document.getElementById("figCuringDryingChamber").innerHTML = language.ProductObject.CuringDryingChamber;
        document.getElementById("figCuringDryingChamber").setAttribute("alt", language.ProductObject.CuringDryingChamber);
    }

    HeaderFooter(funcaoExtraLocal);
};