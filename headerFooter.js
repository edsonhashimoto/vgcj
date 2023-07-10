'use strict';
import { IndexLanguage } from "./indexLanguage.js";
import { PlateMakingLanguage } from "./plateMakingLanguage.js";
import { AssemblyLinesLanguage } from "./assemblyLinesLanguage.js";
import { FinishingLineLanguage } from "./finishingLineLanguage.js";
import { CompleteProjectsLanguage } from "./completeProjectsLanguage.js";
import { UniqueEquipmentLanguage } from "./uniqueEquipmentLanguage.js";
import { MaterialSupplyLanguage } from "./materialSupplyLanguage.js";

export async function HeaderFooter(funcaoExtra) {
    const responseHeader = await fetch('./header.html');
    const dadosHeader = await responseHeader.text();
    const divHeader = document.getElementById("header");
    divHeader.innerHTML = dadosHeader;

    const responseFooter = await fetch('./footer.html');
    const dadosFooter = await responseFooter.text();
    const divFooter = document.getElementById("footer");
    divFooter.innerHTML = dadosFooter;

    async function loadLanguage() {
        
        const responseLanguage = await fetch('language.json');
        const dados = await responseLanguage.json();
        let language;
        if (!localStorage.getItem('lang') || localStorage.getItem('lang') == 'us') {
            language = dados.us;
        }
        else if (localStorage.getItem('lang') == 'br') {
            language = dados.br;
        }
        else if (localStorage.getItem('lang') == 'tw') {
            language = dados.tw;
        }

        localStorage.setItem('language', JSON.stringify(language));

        document.getElementById("mHome").innerHTML = language.Home.toUpperCase();;
        document.getElementById("mAbout").innerHTML = language.About.toUpperCase();;
        document.getElementById("mProducts").innerHTML = language.Products.toUpperCase();;
        document.getElementById("mServices").innerHTML = language.Services.toUpperCase();;
        document.getElementById("mContact").innerHTML = language.Contact.toUpperCase();;

        document.getElementById("mAssemblyLine").innerHTML = language.AssemblyLine;
        document.getElementById("mPlateMaking").innerHTML = language.PlateMaking;
        document.getElementById("mFinishingLine").innerHTML = language.FinishingLine;
        document.getElementById("mCompleteProjects").innerHTML = language.CompleteProjects;
        document.getElementById("mUniqueEquipment").innerHTML = language.UniqueEquipment;
        document.getElementById("mSpareParts").innerHTML = language.SpareParts;
        document.getElementById("mMaterialSupply").innerHTML = language.MaterialSupply;

        funcaoExtra();

    }

    loadLanguage();

    $('#flagUsa').on("click",
        function () {
            localStorage.setItem('lang', 'us');
            loadLanguage();
        }
    );
    $('#flagBrazil').on("click",
        function () {
            localStorage.setItem('lang', 'br');
            loadLanguage();
        }
    );

    $('#flagTaiwan').on("click",
        function () {
            localStorage.setItem('lang', 'tw');
            loadLanguage();
        }
    );

    const linksSmoothScroll = document.querySelectorAll('.mSmoothScroll');

    async function scroolToSection(event){
        event.preventDefault();
        const href =  event.currentTarget.getAttribute('href');

        if(window.location.pathname.replace('/vgcj','') !== '/' ){ //index
            const pageResponse = await fetch('index.html');
            window.history.pushState(null,null,'./');
            const pageText = await pageResponse.text();

            const newHtml = document.createElement('div');
            newHtml.innerHTML = pageText;
        
            const oldContent = document.querySelector('main');
            const newContent = newHtml.querySelector('main');
            oldContent.innerHTML = newContent.innerHTML;
            IndexLanguage();

            setTimeout(function(){
                const section = document.querySelector(href);
                section.scrollIntoView({
                    behavior: 'smooth',
                    block:'start'
                });
            }, 150); 
           
        }
        else{
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block:'start'
            });
        }
    }

    linksSmoothScroll.forEach(link => {
        link.addEventListener('click', scroolToSection);
    });
    
    const linksMenus = document.querySelectorAll('.mMenu');

    function handleClick(event){
        event.preventDefault();

        fetchPage(event.target.href, event.currentTarget.id);
        window.history.pushState(null,null, event.target.href);        
    };

    async function fetchPage(url, currentTargetId){
        const pageResponse = await fetch(url);
        const pageText = await pageResponse.text();
        replaceContent(pageText, currentTargetId);
    }

    function replaceContent(newText, currentTargetId){
        const newHtml = document.createElement('div');
        newHtml.innerHTML = newText;

        const oldContent = document.querySelector('main');
        const newContent = newHtml.querySelector('main');

        oldContent.innerHTML = newContent.innerHTML;        
       
        if(currentTargetId === 'mHome'){
            IndexLanguage();
        }
        else if(currentTargetId === 'mPlateMaking'){
            PlateMakingLanguage();
        }
        else if(currentTargetId === 'mAssemblyLine'){
            AssemblyLinesLanguage();
        }
        else if(currentTargetId === 'mFinishingLine'){
            FinishingLineLanguage();
        }
        else if(currentTargetId === 'mCompleteProjects'){
            CompleteProjectsLanguage();
        }
        else if(currentTargetId === 'mUniqueEquipment'){
            UniqueEquipmentLanguage();
        }
        else if(currentTargetId === 'mMaterialSupply'){
            MaterialSupplyLanguage();
        }
    };

    linksMenus.forEach(link => {
        link.addEventListener('click', handleClick);
    });
}