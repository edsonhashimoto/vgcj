'use strict';
import { HeaderFooter } from "./headerFooter.js";

export function CompleteProjectsLanguage() {
    function funcaoExtraLocal() {
        const language = JSON.parse(localStorage.getItem('language'));

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
        
        document.getElementById("tContinuousGridCastingSystem").innerHTML = language.ProductObject.ContinuousGridCastingSystem;            
        document.getElementById("tGridConCastSystem").innerHTML = language.ProductObject.GridConCastSystem;            
        document.getElementById("tGridConCastSystemGF").innerHTML = language.ProductObject.GridConCastSystemGF;
        document.getElementById("tGridConCastSystemMD").innerHTML = language.ProductObject.GridConCastSystemMD;
        document.getElementById("figGridConCastSystem").innerHTML = language.ProductObject.GridConCastSystem;
        document.getElementById("figGridConCastSystem").setAttribute("alt", language.ProductObject.GridConCastSystem);

        document.getElementById("tLeadStripBladeProductionLine").innerHTML = language.ProductObject.LeadStripBladeProductionLine;            
        document.getElementById("tLeadStripProductionLine").innerHTML = language.ProductObject.LeadStripProductionLine;            
        document.getElementById("tLeadStripProductionLineGF").innerHTML = language.ProductObject.LeadStripProductionLineGF;
        document.getElementById("figLeadStripProductionLine").innerHTML = language.ProductObject.LeadStripProductionLine;
        document.getElementById("figLeadStripProductionLine").setAttribute("alt", language.ProductObject.LeadStripProductionLine);

        document.getElementById("tExpandingProductionLine").innerHTML = language.ProductObject.ExpandingProductionLine;            
        document.getElementById("tExpandedBoardProductionLine").innerHTML = language.ProductObject.ExpandedBoardProductionLine;            
        document.getElementById("tExpandedBoardProductionLineGF").innerHTML = language.ProductObject.ExpandedBoardProductionLineGF;
        document.getElementById("figExpandedBoardProductionLine").innerHTML = language.ProductObject.ExpandedBoardProductionLine;
        document.getElementById("figExpandedBoardProductionLine").setAttribute("alt", language.ProductObject.ExpandedBoardProductionLine);

        document.getElementById("tConDoubleSidePastingLine").innerHTML = language.ProductObject.ConDoubleSidePastingLine;            
        document.getElementById("tContinuousDoubleImpastoLine").innerHTML = language.ProductObject.ContinuousDoubleImpastoLine;            
        document.getElementById("tContinuousDoubleImpastoLineGF").innerHTML = language.ProductObject.ContinuousDoubleImpastoLineGF;
        document.getElementById("figContinuousDoubleImpastoLine").innerHTML = language.ProductObject.ContinuousDoubleImpastoLine;
        document.getElementById("figContinuousDoubleImpastoLine").setAttribute("alt", language.ProductObject.ContinuousDoubleImpastoLine);

        document.getElementById("tPunchingLine").innerHTML = language.ProductObject.PunchingLine;            
        document.getElementById("tContinuousHighSpeedPunchingLine").innerHTML = language.ProductObject.ContinuousHighSpeedPunchingLine;            
        document.getElementById("tContinuousHighSpeedPunchingLineGF").innerHTML = language.ProductObject.ContinuousHighSpeedPunchingLineGF;
        document.getElementById("tContinuousWideStripCastingLine").innerHTML = language.ProductObject.ContinuousWideStripCastingLine;            
        document.getElementById("tContinuousWideStripCastingLineGF").innerHTML = language.ProductObject.ContinuousWideStripCastingLineGF;
        document.getElementById("tConpastingDividingAndStackingLine").innerHTML = language.ProductObject.ConpastingDividingAndStackingLine;            
        document.getElementById("tConpastingDividingAndStackingLineGF").innerHTML = language.ProductObject.ConpastingDividingAndStackingLineGF;
        
    }

    HeaderFooter(funcaoExtraLocal);
};