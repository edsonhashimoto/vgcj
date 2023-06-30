import { HeaderFotter } from "./headerFooter.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {
            var language = JSON.parse(localStorage.getItem('language'));

            document.getElementById("tCompleteProjects").innerHTML = language.CompleteProjects;

            document.getElementById("tAssemblyLines").innerHTML = language.ProductObject.AssemblyLines;     
            document.getElementById("tMotorcycleAssemblyLine").innerHTML = language.ProductObject.MotorcycleAssemblyLine;
            document.getElementById("tMotorcycleAssemblyLineGF").innerHTML = language.ProductObject.MotorcycleAssemblyLineGF;
            document.getElementById("figMotorcycleAssemblyLine").innerHTML = language.ProductObject.MotorcycleAssemblyLine;
            document.getElementById("figMotorcycleAssemblyLine").setAttribute("alt", language.ProductObject.MotorcycleAssemblyLine);
            document.getElementById("tAutomotiveAssemblyLine").innerHTML = language.ProductObject.AutomotiveAssemblyLine;
            document.getElementById("tAutomotiveAssemblyLineGF").innerHTML = language.ProductObject.AutomotiveAssemblyLineGF;
            document.getElementById("figAutomotiveAssemblyLine").innerHTML = language.ProductObject.AutomotiveAssemblyLine;
            document.getElementById("figAutomotiveAssemblyLine").setAttribute("alt", language.ProductObject.AutomotiveAssemblyLine);
            
            
            document.getElementById("tGridConCastSystem").innerHTML = language.ProductObject.GridConCastSystem;            
            document.getElementById("tLeadStripProductionLine").innerHTML = language.ProductObject.LeadStripProductionLine;            
            document.getElementById("tExpandingProductionLine").innerHTML = language.ProductObject.ExpandingProductionLine;            
            document.getElementById("tConDoubleSidePastingLine").innerHTML = language.ProductObject.ConDoubleSidePastingLine;            
            document.getElementById("tPunchingLine").innerHTML = language.ProductObject.PunchingLine;            
            
        }

        HeaderFotter(funcaoExtraLocal);
    });