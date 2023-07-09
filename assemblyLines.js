'use strict';
import { HeaderFotter } from "./headerFooter.js";
import { AssemblyLinesLanguage } from "./assemblyLinesLanguage.js";

$(document).ready(function () {
    function funcaoExtraLocal() {
        AssemblyLinesLanguage();
    }
    HeaderFotter(funcaoExtraLocal);
});