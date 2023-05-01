$(document).ready(function () {

    $('#flagUsa').on("click",
        function () {
            localStorage.setItem('lang', 'us');

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

            $('#divAutomaticWeldingMachineGF').html('<ul> ' +
                '<li>Applicable battery size : L 113-175, W 70-87, H 85-155 (in mm)</li>' +
                '<li>Cycle time : 6 batteries/min.</li> ' +
                '<li>Multifunctional machine.</li> ' +
                '<li>Patented intelligent welding technology, greatly improving welding quality andoperation</li>' +
                '<li>stability.</li> ' +
                '<li>According to customer\'s production capacity needs, it can be matched with suitable</li> ' +
                '<li>workstations.</li> ' +
                '<li>Other functional stations can be selected for matching, such as : Short circuit test,</li> ' +
                '<li>Polarity test, Shear test and</li> ' +
                '<li>Internal resistance test.</li> ' +
                '<li>Graphical machine interface, easy to understand</li> ' +
                '<li>Equipped with cooling water equipment and temperature detection system, which cancontrol</li> ' +
                '<li>the temp. state of welding</li> ' +
                '</ul>');
            $('#divAutomaticWeldingMachineMD').html('<ul> ' +
                '<li>Approx. size and weight : W 4300 x D 1300 x H2000 (in mm), 2500kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE, Controller : MIYACHI</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticPolarityTestingMachineGF').html('<ul> ' +
                '<li>Applicable battery size : L 113-175, W 70-87, H 85-155 (in mm)</li> ' +
                '<li>Cycle time : 6~8 batteries/min.</li> ' +
                '<li>For test polarity of the green plates battery.</li> ' +
                '<li>Easy to know which cell is incorrect and displayed on the touch panel</li> ' +
                '</ul>');
            $('#tAutomaticPolarityTestingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 800 x D 650 x H 1770 (in mm), 200kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticServoHeatSealingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 113-175, W 70-87, H 85-155 (in mm)</li> ' +
                '<li>Cycle time : 6 batteries/min.</li> ' +
                '<li>Linear motion guide rail design, precise and smooth movement of mold and heating plate. </li> ' +
                '<li>Heating tube abnormality detection</li> ' +
                '<li>Patented new mold design for quick mold change.</li> ' +
                '<li>Graphical machine interface, easy to understand</li> ' +
                '<li>Pre-heating function and auto changeover system (option)</li> ' +
                '</ul>');
            $('#tAutomaticServoHeatSealingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 1320 x D 1660 x H 2050 (in mm), 950kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticTIGWeldingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 113-175, W 70-87, H 85-155 (in mm)</li> ' +
                '<li>Cycle time : 7~8 batteries/min.</li> ' +
                '<li>Gas use : Argon</li> ' +
                '<li>Linear slide structure, move the workstation quickly and accurately.</li> ' +
                '<li>All machine parameters can be memorized, quick change to different models.</li> ' +
                '<li>New TIG mold design, more comprehensive safety.</li> ' +
                '</ul>');
            $('#tAutomaticTIGWeldingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 1350 x D 1300 x H 2000 (in mm), 300kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticMultifunctionalWeldingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~5 batteries/min.</li> ' +
                '<li>Patented intelligent welding technology, greatly improving welding quality and operation stability.</li> ' +
                '<li>Other functional stations can be selected for matching, such as : Short circuit test, Polarity test, Shear test and</li> ' +
                '<li>Internal resistance test.</li> ' +
                '<li>Graphical machine interface, easy to understand</li> ' +
                '<li>Equipped with cooling water equipment and temp. detection system, which can control the temp state of welding.</li> ' +
                '</ul>');
            $('#tAutomaticMultifunctionalWeldingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 3650 x D 2000x H 2250 (in mm), 2200kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE, Controller : MIYACHI</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticShearTestingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~4 batteries/min.</li> ' +
                '<li>The quality of battery welding strength is checked by shear test.</li> ' +
                '<li>Microcomputer numerical control output shear force accurately</li> ' +
                '<li>Graphical machine interface, easy to understand</li> ' +
                '</ul>');
            $('#tAutomaticShearTestingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 2000 x D 1450x H 2300 (in mm), 820kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticCoverPlacingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~5 batteries/min.</li> ' +
                '<li>Automatically correct the position of lead terminal and place the cover on the batteryaccurately.</li> ' +
                '<li>Battery cover auto feeding area, can store about 100 pieces covers.</li> ' +
                '<li>Graphical machine interface, easy to understand</li> ' +
                '</ul>');
            $('#tAutomaticCoverPlacingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 2200 x D 2130x H 2450 (in mm), 750kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticBatteryHeatSealingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~5 batteries/min.</li> ' +
                '<li>Two systems are available : Servo type / Pneumatic type (user option)</li> ' +
                '<li>Linear motion guide rail design, precise and smooth movement of mold and heating plate.</li> ' +
                '<li>Heating tube abnormality detection</li> ' +
                '<li>Patented new mold design for quick mold change.</li> ' +
                '<li>Graphical machine interface, easy to understand</li> ' +
                '<li>Pre-heating function and auto changeover system (option)</li> ' +
                '</ul>');
            $('#tAutomaticBatteryHeatSealingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 1600 x D 1720x H 2100 (in mm), 900kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticTerminalWeldingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-410, W 120-250, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~5 batteries/min.</li> ' +
                '<li>Two systems are available : Servo type / Pneumatic type (user option)</li> ' +
                '<li>The burners using a mixture of fuel gas (or LPG) and oxygen.</li> ' +
                '<li>With gas (or LPG) explosion-proof safety device.</li> ' +
                '<li>Graphic machine interface, easy to understand</li> ' +
                '<li>Cooler system controls the mold temperature.</li> ' +
                '<li>Terminal height checking workstation with reject conveyor (option)</li> ' +
                '<li>Terminal brushing clean workstation (option)</li> ' +
                '</ul>');
            $('#tAutomaticTerminalWeldingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 1600 x D 1420x H 2100 (in mm), 350kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticAirLeakTestingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~4 batteries/min.</li> ' +
                '<li>Using FUKUDA testing unit or IU numerical testing unit (user option)</li> ' +
                '<li>Graphic machine interface, easy to understand</li> ' +
                '<li>Two systems are available : Servo type / Pneumatic type (user option)</li> ' +
                '<li>Other functional stations can be selected, such as : Laser engraving, Pneumaticengraving, electric engraving.</li> ' +
                '</ul>');
            $('#tAutomaticAirLeakTestingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 1520 x D 1400x H 2100 (in mm), 250kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticAluminumFoilSealingMachineGF').html('<ul>' +
                '<li>Applicable battery size : L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>Cycle time : 3~5 batteries/min.</li> ' +
                '<li>New Aluminum foil sealing design, precise cutting length without wasting materials.</li> ' +
                '<li>Graphic machine interface, easy to understand</li> ' +
                '<li>Precise numerical control of cutting length</li> ' +
                '</ul>');
            $('#tAutomaticAluminumFoilSealingMachineMD').html('<ul>' +
                '<li>Approx. size and weight : W 1240 x D 1365 x H 2100 (in mm), 300kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>Compressed air : 5~6kg/cm2</li> ' +
                '</ul>');

        }
    );
    $('#flagBrazil').on("click",
        function () {
            localStorage.setItem('lang', 'br');

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

            $('#divAutomaticWeldingMachineGF').html('<ul> ' +
                '<li>Tamanho da bateria aplicável: : L 113-175, W 70-87, H 85-155 (in mm)</li>' +
                '<li>Tempo de ciclo: 6 baterias/min.</li> ' +
                '<li>Máquina multifuncional.</li> ' +
                '<li>Tecnologia de soldagem inteligente patenteada, melhorando consideravelmente a qualidade e operação da soldagem</li>' +
                '<li>estabilidade.</li> ' +
                '<li>De acordo com as necessidades de capacidade de produção do cliente, pode ser combinado com adequado</li> ' +
                '<li>estações de trabalho.</li> ' +
                '<li>Outras estações funcionais podem ser selecionadas para correspondência, como: teste de curto-circuito,</li> ' +
                '<li>Teste de polaridade, teste de cisalhamento e</li> ' +
                '<li>Teste de resistência interna.</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Equipado com equipamento de resfriamento de água e sistema de detecção de temperatura, que pode controlar</li> ' +
                '<li>a temperatura. estado de soldagem</li> ' +
                '</ul>');

            $('#divAutomaticWeldingMachineMD').html('<ul> ' +
                '<li>Aprox. tamanho e peso: W 4300 x D 1300 x H2000 (em mm), 2500kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE, Controlador: MIYACHI</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticPolarityTestingMachineGF').html('<ul> ' +
                '<li>Tamanho da bateria aplicável: L 113-175, W 70-87, H 85-155 (em mm)</li> ' +
                '<li>Tempo de ciclo: 6~8 baterias/min.</li> ' +
                '<li>Para testar a polaridade da bateria de placas verdes.</li> ' +
                '<li>Fácil de saber qual célula está incorreta e exibida no painel de toque</li> ' +
                '</ul>');
            $('#tAutomaticPolarityTestingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: L 800 x P 650 x A 1770 (em mm), 200kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticServoHeatSealingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 113-175, W 70-87, H 85-155 (em mm)</li> ' +
                '<li>Tempo de ciclo: 6 baterias/min.</li> ' +
                '<li>Design de trilho de guia de movimento linear, movimento preciso e suave do molde e da placa de aquecimento. </li> ' +
                '<li>Detecção de anormalidade do tubo de aquecimento</li> ' +
                '<li>Novo design de molde patenteado para troca rápida de molde.</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Função de pré-aquecimento e sistema de troca automática (opcional)</li> ' +
                '</ul>');
            $('#tAutomaticServoHeatSealingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 1320 x D 1660 x H 2050 (em mm), 950kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticTIGWeldingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 113-175, W 70-87, H 85-155 (em mm)</li> ' +
                '<li>Tempo de ciclo: 7~8 baterias/min.</li> ' +
                '<li>Uso de gás: argônio</li> ' +
                '<li>Estrutura deslizante linear, mova a estação de trabalho com rapidez e precisão.</li> ' +
                '<li>Todos os parâmetros da máquina podem ser memorizados, mudança rápida para diferentes modelos.</li> ' +
                '<li>Novo design de molde TIG, segurança mais abrangente.</li> ' +
                '</ul>');
            $('#tAutomaticTIGWeldingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 1350 x D 1300 x H 2000 (em mm), 300kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticMultifunctionalWeldingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-525, W 120-285, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~5 baterias/min.</li> ' +
                '<li>Tecnologia de soldagem inteligente patenteada, melhorando consideravelmente a qualidade da soldagem e a estabilidade da operação.</li> ' +
                '<li>Outras estações funcionais podem ser selecionadas para correspondência, como: teste de curto-circuito, teste de polaridade, teste de cisalhamento e</li> ' +
                '<li>Teste de resistência interna.</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Equipado com equipamentos de refrigeração de água e temp. sistema de detecção, que pode controlar o estado de temperatura da soldagem.</li> ' +
                '</ul>');
            $('#tAutomaticMultifunctionalWeldingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 3650 x D 2000 x H 2250 (em mm), 2200kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE, Controlador: MIYACHI</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticShearTestingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-525, W 120-285, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~4 baterias/min.</li> ' +
                '<li>A qualidade da resistência da solda da bateria é verificada pelo teste de cisalhamento.</li> ' +
                '<li>Força de cisalhamento de saída de controle numérico de microcomputador com precisão</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '</ul>');
            $('#tAutomaticShearTestingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 2000 x D 1450 x H 2300 (em mm), 820kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticCoverPlacingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-525, W 120-285, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~5 baterias/min.</li> ' +
                '<li>Corrija automaticamente a posição do terminal de chumbo e coloque a tampa na bateria com precisão.</li> ' +
                '<li>Área de alimentação automática da tampa da bateria, pode armazenar cerca de 100 peças de tampas.</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '</ul>');
            $('#tAutomaticCoverPlacingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 2200 x D 2130 x H 2450 (em mm), 750kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticBatteryHeatSealingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-525, W 120-285, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~5 baterias/min.</li> ' +
                '<li>Dois sistemas estão disponíveis: tipo servo / tipo pneumático (opção do usuário)</li> ' +
                '<li>Design de trilho de guia de movimento linear, movimento preciso e suave do molde e da placa de aquecimento.</li> ' +
                '<li>Detecção de anormalidade do tubo de aquecimento</li> ' +
                '<li>Novo design de molde patenteado para troca rápida de molde.</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Função de pré-aquecimento e sistema de troca automática (opcional)</li> ' +
                '</ul>');
            $('#tAutomaticBatteryHeatSealingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 1600 x D 1720 x H 2100 (em mm), 900kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticTerminalWeldingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-410, W 120-250, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~5 baterias/min.</li> ' +
                '<li>Dois sistemas estão disponíveis: tipo servo / tipo pneumático (opção do usuário)</li> ' +
                '<li>Os queimadores usam uma mistura de gás combustível (ou GLP) e oxigênio.</li> ' +
                '<li>Com dispositivo de segurança à prova de explosão de gás (ou GLP).</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Sistema de resfriamento controla a temperatura do molde.</li> ' +
                '<li>Estação de trabalho de verificação de altura do terminal com transportador de rejeição (opcional)</li> ' +
                '<li>Escova de terminal estação de trabalho limpa (opção)</li> ' +
                '</ul>');
            $('#tAutomaticTerminalWeldingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 1600 x D 1420 x H 2100 (em mm), 350kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticAirLeakTestingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-525, W 120-285, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~4 baterias/min.</li> ' +
                '<li>Usando unidade de teste FUKUDA ou unidade de teste numérico IU (opção do usuário)</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Dois sistemas estão disponíveis: tipo servo / tipo pneumático (opção do usuário)</li> ' +
                '<li>Outras estações funcionais podem ser selecionadas, tais como: gravação a laser, gravação pneumática, gravação elétrica.</li> ' +
                '</ul>');
            $('#tAutomaticAirLeakTestingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 1520 x D 1400 x H 2100 (em mm), 250kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticAluminumFoilSealingMachineGF').html('<ul>' +
                '<li>Tamanho da bateria aplicável: L 180-525, W 120-285, H 150-220 (em mm)</li> ' +
                '<li>Tempo de ciclo: 3~5 baterias/min.</li> ' +
                '<li>Novo design de vedação de folha de alumínio, comprimento de corte preciso sem desperdício de materiais.</li> ' +
                '<li>Interface gráfica da máquina, fácil de entender</li> ' +
                '<li>Controle numérico preciso do comprimento de corte</li> ' +
                '</ul>');
            $('#tAutomaticAluminumFoilSealingMachineMD').html('<ul>' +
                '<li>Aprox. tamanho e peso: W 1240 x D 1365 x H 2100 (em mm), 300kg</li> ' +
                '<li>PLC: MITSUBISHI, Painel de toque: PROFACE</li> ' +
                '<li>Ar comprimido: 5~6kg/cm2</li> ' +
                '</ul>');
        }
    );

    $('#flagTaiwan').on("click",
        function () {
            localStorage.setItem('lang', 'tw');

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

            $('#divAutomaticWeldingMachineGF').html('<ul> ' +
                '<li>適用電池尺寸：L 113-175, W 70-87, H 85-155 (in mm)</li>' +
                '<li>循環時間：6 節電池/分鐘。</li> ' +
                '<li>多功能一體機.</li> ' +
                '<li>專利智能焊接技術，大幅提升焊接質量和操作</li>' +
                '<li>穩定性。</li> ' +
                '<li>可根據客戶的產能需求，搭配合適的</li> ' +
                '<li>工作站。</li> ' +
                '<li>可選擇其他功能工位進行匹配，如：短路測試，</li> ' +
                '<li>極性測試、剪切測試和</li> ' +
                '<li>內阻測試.</li> ' +
                '<li>圖形化機器界面，簡單易懂</li> ' +
                '<li>配備冷卻水設備和溫度檢測系統，可控制</li> ' +
                '<li>溫度。 焊接狀態</li> ' +
                '</ul>');

            $('#divAutomaticWeldingMachineMD').html('<ul> ' +
                '<li>大約。 尺寸和重量 : W 4300 x D 1300 x H2000 (in mm), 2500kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE, Controller : MIYACHI</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticPolarityTestingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 113-175, W 70-87, H 85-155 (in mm)</li> ' +
                '<li>循環時間：6~8 節電池/分鐘。</li> ' +
                '<li>用於測試綠板電池的極性。</li> ' +
                '<li>容易知道哪個單元格不正確並顯示在觸摸屏上</li> ' +
                '</ul>');
            $('#tAutomaticPolarityTestingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 800 x D 650 x H 1770 (mm), 200kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticServoHeatSealingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 113-175, W 70-87, H 85-155 (in mm)</li> ' +
                '<li>循環時間：6 節電池/分鐘。</li> ' +
                '<li>直線運動導軌設計，模具、加熱板運動精準順暢。 </li> ' +
                '<li>加熱管異常檢測</li> ' +
                '<li>獲得專利的新模具設計可快速更換模具。</li> ' +
                '<li>圖形化機器界面，簡單易懂</li> ' +
                '<li>預熱功能和自動轉換系統（選項）</li> ' +
                '</ul>');
            $('#tAutomaticServoHeatSealingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 1320 x D 1660 x H 2050 (in mm), 950kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticTIGWeldingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 113-175, W 70-87, H 85-155 (in mm)</li> ' +
                '<li>循環時間：7~8 節電池/分鐘。</li> ' +
                '<li>氣體使用：氬氣</li> ' +
                '<li>直線滑軌結構，移動工位快速準確。</li> ' +
                '<li>所有機器參數可記憶，快速切換不同機型。</li> ' +
                '<li>全新TIG模具設計，安全性更全面。</li> ' +
                '</ul>');
            $('#tAutomaticTIGWeldingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 1350 x D 1300 x H 2000 (in mm), 300kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticMultifunctionalWeldingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~5 節電池/分鐘。</li> ' +
                '<li>專利智能焊接技術，大大提高焊接質量和運行穩定性。</li> ' +
                '<li>可選擇其他功能工位進行匹配，如：短路測試、極性測試、剪切測試和</li> ' +
                '<li>內阻測試.</li> ' +
                '<li>圖形化機器界面，簡單易懂</li> ' +
                '<li>配備冷卻水設備和溫度。 檢測系統，可控制焊接溫度狀態。</li> ' +
                '</ul>');
            $('#tAutomaticMultifunctionalWeldingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 3650 x D 2000x H 2250 (in mm), 2200kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE, Controller : MIYACHI</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticShearTestingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~4節電池/分鐘。</li> ' +
                '<li>通過剪切試驗檢驗電池焊接強度的好壞。</li> ' +
                '<li>微電腦數控精確輸出剪切力</li> ' +
                '<li>圖形化機器界面，簡單易懂</li> ' +
                '</ul>');
            $('#tAutomaticShearTestingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 2000 x D 1450x H 2300 (in mm), 820kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticCoverPlacingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~5 節電池/分鐘。</li> ' +
                '<li>自動校正引線端子位置，準確放置電池蓋。</li> ' +
                '<li>電池蓋自動送料區，可存放約100個電池蓋。</li> ' +
                '<li>圖形化機器界面，簡單易懂</li> ' +
                '</ul>');
            $('#tAutomaticCoverPlacingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 2200 x D 2130x H 2450 (in mm), 750kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticBatteryHeatSealingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~5 節電池/分鐘。</li> ' +
                '<li>兩種系統可供選擇：伺服式/氣動式（用戶選擇）</li> ' +
                '<li>直線運動導軌設計，模具、加熱板運動精準順暢。</li> ' +
                '<li>加熱管異常檢測</li> ' +
                '<li>獲得專利的新模具設計可快速更換模具。</li> ' +
                '<li>圖形化機器界面，簡單易懂</li> ' +
                '<li>預熱功能和自動轉換系統（選項）</li> ' +
                '</ul>');
            $('#tAutomaticBatteryHeatSealingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 1600 x D 1720x H 2100 (in mm), 900kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticTerminalWeldingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-410, W 120-250, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~5 節電池/分鐘。</li> ' +
                '<li>兩種系統可供選擇：伺服式/氣動式（用戶選擇）</li> ' +
                '<li>燃燒器使用燃氣（或液化石油氣）和氧氣的混合物。</li> ' +
                '<li>帶有燃氣（或液化石油氣）防爆安全裝置。</li> ' +
                '<li>圖形機界面，通俗易懂</li> ' +
                '<li>冷卻系統控制模具溫度。</li> ' +
                '<li>帶剔除傳送帶的終端高度檢查工作站（可選）</li> ' +
                '<li>終端刷洗清潔工作站（可選）</li> ' +
                '</ul>');
            $('#tAutomaticTerminalWeldingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 1600 x D 1420x H 2100 (in mm), 350kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticAirLeakTestingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~4節電池/分鐘。</li> ' +
                '<li>使用 FUKUDA 測試單元或 IU 數值測試單元（用戶選項）</li> ' +
                '<li>圖形機界面，通俗易懂</li> ' +
                '<li>兩種系統可供選擇：伺服式/氣動式（用戶選擇）</li> ' +
                '<li>可選擇其他功能工位，如：激光雕刻、氣動雕刻、電雕刻。</li> ' +
                '</ul>');
            $('#tAutomaticAirLeakTestingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 1520 x D 1400x H 2100 (in mm), 250kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');

            $('#tAutomaticAluminumFoilSealingMachineGF').html('<ul>' +
                '<li>適用電池尺寸：L 180-525, W 120-285, H 150-220 (in mm)</li> ' +
                '<li>循環時間：3~5 節電池/分鐘。</li> ' +
                '<li>全新鋁箔封口設計，裁切長度精準，不浪費材料。</li> ' +
                '<li>圖形機界面，通俗易懂</li> ' +
                '<li>切割長度精準數控</li> ' +
                '</ul>');
            $('#tAutomaticAluminumFoilSealingMachineMD').html('<ul>' +
                '<li>大約。 尺寸和重量 : W 1240 x D 1365 x H 2100 (in mm), 300kg</li> ' +
                '<li>PLC : MITSUBISHI, Touch panel : PROFACE</li> ' +
                '<li>壓縮空氣：5~6kg/cm2</li> ' +
                '</ul>');
        }
    );

    if (!localStorage.getItem('lang') || localStorage.getItem('lang') == 'us') {
        $("#flagUsa").trigger('click');
    }
    else if (localStorage.getItem('lang') == 'br') {
        $("#flagBrazil").trigger('click');
    }
    else if (localStorage.getItem('lang') == 'tw') {
        $("#flagTaiwan").trigger('click');
    }



});