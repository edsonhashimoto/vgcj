$(document).ready(function(){

    $('#flagUsa').on("click",
        function(){
            localStorage.setItem('lang','us');
            
            $('.tGeneralFeatures').text('General Features');
            $('.tMachineDetails').text('Machine Details');

            $('#tAutomaticWeldingMachine').text('Automatic Welding Machine');
            $('#tAutomaticPolarityTestingMachine').text('Automatic Polarity Testing');
            $('#tAutomaticServoHeatSealingMachine').text('Automatic Servo Heat Sealing Machine');
            $('#tAutomaticTIGWeldingMachine').text('Automatic TIG Welding Machine');
            $('#tAutomaticMultifunctionalWeldingMachine').text('Automatic Multifunctional Welding Machine');
            $('#tAutomaticShearTestingMachine').text('Automatic Shear Testing Machine');
            $('#tAutomaticCoverPlacingMachine').text('Automatic Cover Placing Machine');
            $('#tAutomaticBatteryHeatSealingMachine').text('Automatic Battery Heat Sealing Machine');
            $('#tAutomaticTerminalWeldingMachine').text('Automatic Terminal Welding Machine');
            $('#tAutomaticAirLeakTestingMachine').text('Automatic Air Leak Testing Machine');
            $('#tAutomaticAluminumFoilSealingMachine').text('Automatic Aluminum Foil Sealing Machine');

            $('#divAutomaticWeldingMachineGF').html('<ul> '+
                    '<li>Applicable battery size : L 113-175, W 70-87, H 85-155 (in mm)</li>' +
                    '<li>Cycle time : 6 batteries/min.</li> '+
                    '<li>Multifunctional machine.</li> '+
                    '<li>Patented intelligent welding technology, greatly improving welding quality andoperation</li>'+
                    '<li>stability.</li> ' +
                    '<li>According to customer\'s production capacity needs, it can be matched with suitable</li> '+
                    '<li>workstations.</li> '+
                    '<li>Other functional stations can be selected for matching, such as : Short circuit test,</li> '+
                    '<li>Polarity test, Shear test and</li> '+
                    '<li>Internal resistance test.</li> '+
                    '<li>Graphical machine interface, easy to understand</li> '+
                    '<li>Equipped with cooling water equipment and temperature detection system, which cancontrol</li> '+
                    '<li>the temp. state of welding</li> '+
                '</ul>');

                $('#divAutomaticWeldingMachineMD').html('<ul> '+
                    '<li>Approx. size and weight : W 4300 x D 1300 x H2000 (in mm), 2500kg</li> '+
                    '<li>PLC : MITSUBISHI, Touch panel : PROFACE, Controller : MIYACHI</li> '+
                    '<li>Compressed air : 5~6kg/cm2</li> '+
                '</ul>');
                    
        }
    );
    $('#flagBrazil').on("click",
        function(){
            localStorage.setItem('lang','br');

            $('.tGeneralFeatures').text('Características Gerais');
            $('.tMachineDetails').text('Detalhes da máquina');

            $('#tAutomaticWeldingMachine').text('Máquina de Solda Automática');
            $('#tAutomaticPolarityTestingMachine').text('Teste Automático de Polaridade');
            $('#tAutomaticServoHeatSealingMachine').text('Máquina servo automática de selagem térmica');
            $('#tAutomaticTIGWeldingMachine').text('Máquina automática de solda TIG');
            $('#tAutomaticMultifunctionalWeldingMachine').text('Máquina de solda automática multifuncional');
            $('#tAutomaticShearTestingMachine').text('Máquina Automática de Teste de Cisalhamento');
            $('#tAutomaticCoverPlacingMachine').text('Máquina Automática de Colocação de Cobertura');
            $('#tAutomaticBatteryHeatSealingMachine').text('Máquina Automática de Selagem Térmica de Bateria');
            $('#tAutomaticTerminalWeldingMachine').text('Máquina automática de solda terminal');
            $('#tAutomaticAirLeakTestingMachine').text('Máquina Automática de Teste de Vazamento de Ar');
            $('#tAutomaticAluminumFoilSealingMachine').text('Máquina Automática de Selagem de Folha de Alumínio');

            $('#divAutomaticWeldingMachineGF').html('<ul> '+
                     '<li>Tamanho da bateria aplicável: : L 113-175, W 70-87, H 85-155 (in mm)</li>' +
                     '<li>Tempo de ciclo: 6 baterias/min.</li> '+
                     '<li>Máquina multifuncional.</li> '+
                     '<li>Tecnologia de soldagem inteligente patenteada, melhorando consideravelmente a qualidade e operação da soldagem</li>'+
                     '<li>estabilidade.</li> ' +
                     '<li>De acordo com as necessidades de capacidade de produção do cliente, pode ser combinado com adequado</li> '+
                     '<li>estações de trabalho.</li> '+
                     '<li>Outras estações funcionais podem ser selecionadas para correspondência, como: teste de curto-circuito,</li> '+
                     '<li>Teste de polaridade, teste de cisalhamento e</li> '+
                     '<li>Teste de resistência interna.</li> '+
                     '<li>Interface gráfica da máquina, fácil de entender</li> '+
                     '<li>Equipado com equipamento de resfriamento de água e sistema de detecção de temperatura, que pode controlar</li> '+
                     '<li>a temperatura. estado de soldagem</li> '+
                 '</ul>');

                $('#divAutomaticWeldingMachineMD').html('<ul> '+
                     '<li>Aprox. tamanho e peso: W 4300 x D 1300 x H2000 (em mm), 2500kg</li> '+
                     '<li>PLC: MITSUBISHI, Painel de toque: PROFACE, Controlador: MIYACHI</li> '+
                     '<li>Ar comprimido: 5~6kg/cm2</li> '+
                 '</ul>');
        }
    );

     $('#flagTaiwan').on("click",
        function(){
            localStorage.setItem('lang','tw');
            
            $('.tGeneralFeatures').text('一般功能');
            $('.tMachineDetails').text('機器詳細資訊');

            $('#tAutomaticWeldingMachine').text('自動焊接機');
            $('#tAutomaticPolarityTestingMachine').text('自動極性測試');
            $('#tAutomaticServoHeatSealingMachine').text('全自動伺服熱封機');
            $('#tAutomaticTIGWeldingMachine').text('自動TIG焊機');
            $('#tAutomaticMultifunctionalWeldingMachine').text('自動多功能焊接機');
            $('#tAutomaticShearTestingMachine').text('全自動剪切試驗機');
            $('#tAutomaticCoverPlacingMachine').text('自動上蓋機');
            $('#tAutomaticBatteryHeatSealingMachine').text('全自動電池熱封機');
            $('#tAutomaticTerminalWeldingMachine').text('自動端子焊接機');
            $('#tAutomaticAirLeakTestingMachine').text('全自動氣密性測試機');
            $('#tAutomaticAluminumFoilSealingMachine').text('自動鋁箔封口機');      
            
             $('#divAutomaticWeldingMachineGF').html('<ul> '+
                     '<li>適用電池尺寸：L 113-175, W 70-87, H 85-155 (in mm)</li>' +
                     '<li>循環時間：6 節電池/分鐘。</li> '+
                     '<li>多功能一體機.</li> '+
                     '<li>專利智能焊接技術，大幅提升焊接質量和操作</li>'+
                     '<li>穩定性。</li> ' +
                     '<li>可根據客戶的產能需求，搭配合適的</li> '+
                     '<li>工作站。</li> '+
                     '<li>可選擇其他功能工位進行匹配，如：短路測試，</li> '+
                     '<li>極性測試、剪切測試和</li> '+
                     '<li>內阻測試.</li> '+
                     '<li>圖形化機器界面，簡單易懂</li> '+
                     '<li>配備冷卻水設備和溫度檢測系統，可控制</li> '+
                     '<li>溫度。 焊接狀態</li> '+
                 '</ul>');

                $('#divAutomaticWeldingMachineMD').html('<ul> '+
                     '<li>大約。 尺寸和重量 : W 4300 x D 1300 x H2000 (in mm), 2500kg</li> '+
                     '<li>PLC : MITSUBISHI, Touch panel : PROFACE, Controller : MIYACHI</li> '+
                     '<li>壓縮空氣：5~6kg/cm2</li> '+
                 '</ul>');
        }
    );

    if(!localStorage.getItem('lang') || localStorage.getItem('lang') == 'us'){
        $("#flagUsa").trigger('click');
    }
    else if(localStorage.getItem('lang') == 'br'){
        $("#flagBrazil").trigger('click');
    }
    else if(localStorage.getItem('lang') == 'tw'){
        $("#flagTaiwan").trigger('click');
    }



});