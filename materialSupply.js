import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            document.getElementById("tMaterialSupply").innerHTML = language.MaterialSupply;

            document.getElementById("tSafetyvalveAndOring").innerHTML = language.ProductObject.SafetyvalveAndOring;
            document.getElementById("tFoilSealingMachine").innerHTML = language.ProductObject.FoilSealingMachine;
            document.getElementById("tFoilSealingMachineGF").innerHTML = language.ProductObject.FoilSealingMachineGF;
            document.getElementById("figFoilSealingMachine").innerHTML = language.ProductObject.FoilSealingMachine;
            document.getElementById("figFoilSealingMachine").setAttribute("alt", language.ProductObject.FoilSealingMachine);
            
            document.getElementById("tDrippingTubes").innerHTML = language.ProductObject.DrippingTubes;
            document.getElementById("tDrippingTube").innerHTML = language.ProductObject.DrippingTube;
            document.getElementById("tDrippingTubeGF").innerHTML = language.ProductObject.DrippingTubeGF;
            document.getElementById("figDrippingTube").innerHTML = language.ProductObject.DrippingTube;
            document.getElementById("figDrippingTube").setAttribute("alt", language.ProductObject.DrippingTube);

            document.getElementById("tContainersAndCovers").innerHTML = language.ProductObject.ContainersAndCovers;
            document.getElementById("tContainerAndCover").innerHTML = language.ProductObject.ContainerAndCover;
            document.getElementById("tContainerAndCoverGF").innerHTML = language.ProductObject.ContainerAndCoverGF;
            document.getElementById("figContainerAndCover").innerHTML = language.ProductObject.ContainerAndCover;
            document.getElementById("figContainerAndCover").setAttribute("alt", language.ProductObject.ContainerAndCover);

            document.getElementById("tFiberglass").innerHTML = language.ProductObject.Fiberglass;
            document.getElementById("tShortFiber").innerHTML = language.ProductObject.ShortFiber;
            document.getElementById("tShortFiberGF").innerHTML = language.ProductObject.ShortFiberGF;
            document.getElementById("figShortFiber").innerHTML = language.ProductObject.ShortFiber;
            document.getElementById("figShortFiber").setAttribute("alt", language.ProductObject.ShortFiber);

            document.getElementById("txxxCura").innerHTML = language.ProductObject.xxxCura;
            document.getElementById("tCuringBon4bs").innerHTML = language.ProductObject.CuringBon4bs;
            document.getElementById("tCuringBon4bsGF").innerHTML = language.ProductObject.CuringBon4bsGF;
            document.getElementById("figCuringBon4bs").innerHTML = language.ProductObject.CuringBon4bs;
            document.getElementById("figCuringBon4bs").setAttribute("alt", language.ProductObject.CuringBon4bs);

            document.getElementById("tConveyors").innerHTML = language.ProductObject.Conveyors;
            document.getElementById("tPastingBelt").innerHTML = language.ProductObject.PastingBelt;
            document.getElementById("tPastingBeltGF").innerHTML = language.ProductObject.PastingBeltGF;
            document.getElementById("figPastingBelt").innerHTML = language.ProductObject.PastingBelt;
            document.getElementById("figPastingBelt").setAttribute("alt", language.ProductObject.PastingBelt);

            document.getElementById("tSeparatorAgmAndPe").innerHTML = language.ProductObject.SeparatorAgmAndPe;
            document.getElementById("tSeparator").innerHTML = language.ProductObject.Separator;
            document.getElementById("tSeparatorGF").innerHTML = language.ProductObject.SeparatorGF;
            document.getElementById("figSeparator").innerHTML = language.ProductObject.Separator;
            document.getElementById("figSeparator").setAttribute("alt", language.ProductObject.Separator);

            document.getElementById("tNanoSilicaSolution").innerHTML = language.ProductObject.NanoSilicaSolution;
            document.getElementById("tNanoSilicaSol").innerHTML = language.ProductObject.NanoSilicaSol;
            document.getElementById("tNanoSilicaSolGF").innerHTML = language.ProductObject.NanoSilicaSolGF;
            document.getElementById("figNanoSilicaSol").innerHTML = language.ProductObject.NanoSilicaSol;
            document.getElementById("figNanoSilicaSol").setAttribute("alt", language.ProductObject.NanoSilicaSol);

            document.getElementById("tMoldReleaseAgents").innerHTML = language.ProductObject.MoldReleaseAgents;
            document.getElementById("tMoldReleaseAgent").innerHTML = language.ProductObject.MoldReleaseAgent;
            document.getElementById("tMoldReleaseAgentGF").innerHTML = language.ProductObject.MoldReleaseAgentGF;
            document.getElementById("figMoldReleaseAgent").innerHTML = language.ProductObject.MoldReleaseAgent;
            document.getElementById("figMoldReleaseAgent").setAttribute("alt", language.ProductObject.MoldReleaseAgent);

        }

        HeaderFotter(funcaoExtraLocal);
    });