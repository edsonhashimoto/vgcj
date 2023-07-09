'use strict';
import { HeaderFotter } from "./headerFooter.js";
import { IndexLanguage } from "./indexLanguage.js";

$(document).ready(
    function () {
        function funcaoExtraLocal() {        
            IndexLanguage();
        }        
        HeaderFotter(funcaoExtraLocal);

    }
    
);