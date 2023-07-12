'use strict';
import { AssemblyLinesLanguage } from "./assemblyLinesLanguage.js";

$(document).ready(function () {
    AssemblyLinesLanguage();
    
    setTimeout(function(){
        const filterInput = document.getElementById('filter');

        let listModels = document.querySelectorAll('.product-model');
        let listProductName = document.querySelectorAll('.product-name');
        let listFilter = [];

        listModels.forEach(model => {
            const textId = document.getElementById(model.getAttribute('id')).textContent.toLowerCase();
            const textGF = document.getElementById(model.getAttribute('id')+"GF").textContent.toLowerCase();
            const groupName = document.getElementById(model.getAttribute('id')).getAttribute("class").split(" ").filter(x => x.startsWith('g'))[0];

            const obj = {
                id : model.getAttribute('id'),
                description: textId +" " + textGF,
                groupName
            }
            listFilter.push(obj);
        });


        filterInput.addEventListener('input', function(){
            const filterValue = filterInput.value.toLowerCase();

            const listModelsFilter = listFilter.filter(x => x.description.includes(filterValue));

            listProductName.forEach(obj => {
                document.getElementById(obj.getAttribute('id')).style.display = 'none';                
            });

            listModels.forEach(obj => {
                document.getElementById("r"+obj.id).style.display = 'none';                
            });

            listModelsFilter.forEach(obj => {
                document.getElementById("r"+obj.id).style.display = 'flex';
                document.getElementsByClassName(obj.groupName)[0].style.display = 'block';

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