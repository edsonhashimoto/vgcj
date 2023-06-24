import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            document.getElementById("tAgmStackers").innerHTML = language.ProductObject.AgmStackers;
            document.getElementById("tSt100").innerHTML = language.ProductObject.St100;
            document.getElementById("tSt100Detail").innerHTML = language.ProductObject.St100Detail;

            document.getElementById("tEnvelopers").innerHTML = language.ProductObject.Envelopers;

            document.getElementById("tCOSCastonStrap").innerHTML = language.ProductObject.COSCastonStrap;
            document.getElementById("tCos300").innerHTML = language.ProductObject.Cos300;
            document.getElementById("tCos300Detail").innerHTML = language.ProductObject.Cos300Detail;
            document.getElementById("tGir06").innerHTML = language.ProductObject.Gir06;
            document.getElementById("tGir06Detail").innerHTML = language.ProductObject.Gir06Detail;


            document.getElementById("tShortCircuitTesters").innerHTML = language.ProductObject.ShortCircuitTesters;	
            document.getElementById("tHolePunchingMachines").innerHTML = language.ProductObject.HolePunchingMachines;	
            document.getElementById("tIntercellWeldingMachines").innerHTML = language.ProductObject.IntercellWeldingMachines;	
            document.getElementById("tShearTesters").innerHTML = language.ProductObject.ShearTesters;	
            document.getElementById("tPolarityTesters").innerHTML = language.ProductObject.PolarityTesters;
            document.getElementById("tWeldTesters").innerHTML = language.ProductObject.WeldTesters;
            document.getElementById("tGlueInserting").innerHTML = language.ProductObject.GlueInserting;	
            document.getElementById("tCoverPlacingMachines").innerHTML = language.ProductObject.CoverPlacingMachines;	
            document.getElementById("tHeatSealingMachines").innerHTML = language.ProductObject.HeatSealingMachines;
            document.getElementById("tPostBurning").innerHTML = language.ProductObject.PostBurning;
            document.getElementById("tTIGWelding").innerHTML = language.ProductObject.TIGWelding;	
            document.getElementById("tLeakTestingMachines").innerHTML = language.ProductObject.LeakTestingMachines;
            document.getElementById("tEngravers").innerHTML = language.ProductObject.Engravers;		
        }

        HeaderFotter(funcaoExtraLocal);
    });