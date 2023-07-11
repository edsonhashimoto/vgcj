'use strict';
import { AssemblyLinesLanguage } from "./assemblyLinesLanguage.js";

$(document).ready(function () {
    AssemblyLinesLanguage();
    
    setTimeout(function(){
        const filterInput = document.getElementById('filter');

        let listModels = document.querySelectorAll('.product-model');
        let listFilter = [];

        listModels.forEach(model => {
            const textId = document.getElementById(model.getAttribute('id')).textContent.toLowerCase();
            const textGF = document.getElementById(model.getAttribute('id')+"GF").textContent.toLowerCase();

            const obj = {
                id : model.getAttribute('id'),
                description: textId +" " + textGF
            }
            listFilter.push(obj);
        });


        filterInput.addEventListener('input', function(){
            const filterValue = filterInput.value.toLowerCase();

            const listModelsFilter = listFilter.filter(x => x.description.includes(filterValue));

            listModels.forEach(obj => {
                document.getElementById("r"+obj.id).style.display = 'none';
            });

            listModelsFilter.forEach(obj => {
                document.getElementById("r"+obj.id).style.display = 'flex';
            });

            //const listModelsFilter = listModels.filter(x => x.textContent.toLowerCase().includes(filterValue));

            /*
            listModels.forEach(model => {
                const text = model.textContent.toLowerCase();
                item.style.display = text.includes(filterValue) ? 'block' : 'none';
            });
            */
        });
    }, 200); 
    
    
});