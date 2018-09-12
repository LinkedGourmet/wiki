<!-- TITLE: Instalação Atenda 1.0-->
<!-- SUBTITLE: Guia de instalação ATENDA 1.0 -->

 # Instalação
## **Pré Requisitos**
### Hardwares Homologados
Abaixo seguem os hardwares homologados para o ATENDA 1.0

**SAT**
**ECF ou Impressora Fiscal**
**Impressora Térmica**
**Balança**
**Microterminal**
**TEF**
**Aparelhos Celulares**

 

### Requisitos mínimos

Para executar o Atenda 1.0 com a certeza de uma boa experiência de usabilidade, é necessário um computador central (Servidor) com as configurações abaixo
* Processador Dual Core ou superior
* 4GB de memória ram
* 20 gb de espaço livre no HD
* Windows 7 ou superior com todas as atualizações instaladas
* Conexão Banda Larga
* Portas USB - para conexão de periféricos como mouse, teclado, impressoras e SAT.
* Monitor 
* Rede wifi em todo o ambiente - Caso utilize os pockets
* Perfil de Usuário do Windows com nível administrador
* Impressoras e equipamentos previamente instalados pelo técnico de Ti do restaurante


### Programas exigidos
* SQL Server 2014 Express
* Winrar ou algum descompactdor
* Drivers das impressoras térmicas e/ou fiscais. De preferência baixados diretamente do site do fabricante
* Teamviewer 12 ou inferior ou Any Desk instalado

## **Instalação da Aplicação**

### Cuidados antes da instalação

Antes da instalação é necessário seguir alguns passos antes de iniciar o processo de instalação. Além de prevenir problemas, estes passos tornarão a instalação mais fácil e mais rápida garantindo uma instalação limpa e estável do programa.  

1. Verificar se todos os equipamentos estão instalados no servidor e se fazem parte dos equipamentos homologados
2. Verificar se a instalação do Windows está estável e atualizada
3. desativar antivírus (Principalmente o AVAST)
4. Baixar todos os arquivos de instalação. (SQL Server, Ferramentas do SAT ou ECF, Drivers e Spoolers de impressão das impressoras. 
5. Definir acesso fácil no Team Viewer ou Any Desk
6. Testar conexão com periféricos utilizados - Impressoras, SAT e ECF
7. Ter em mãos os dados do cliente - CNPJ, Insc. Estadual, Endereço, Regime Fiscal, Cardápio Atualizado, Rede do Retaguarda, Código de ativação do SAT
8. Janela de tempo de 2 ou 3 horas antes do cliente iniciar o atendimento

### Como realizar a instalação
Passo a passo para realizar uma instalação completa e estável do Atenda 1.0

#### Nova instalação 
A instalação possui 4 etapas distintas que devem ser feitas exatamente nesta ordem para uma melhor otimização do tempo e esforço.

1. instalação e configuração do SQL SERVER
2. Instalação do Atenda 1.0
3. Instalação e/ou identificação dos periféricos - impressoras, SAT, balanças e microterminais
4. Configuração do ATENDA 1.0

##### Instalação do SQL Server 2014 Express
1. Baixar o SQL Server a partir deste endereço - https://www.microsoft.com/pt-br/download/details.aspx?id=42299
2. Após baixar, realizar a instalação seguindo o passo a abaixo

![Slide 1](/uploads/slide-1.jpg "Slide 1")![Slide 2](/uploads/slide-2.jpg "Slide 2")![Slide 3](/uploads/slide-3.jpg "Slide 3")![Slide 4](/uploads/slide-4.jpg "Slide 4")

3. Acessar o SQL CONFIGURATION CENTER 2014 e habilitar as PIPES e Portas TCP/IP 
![Sql Config Manager](/uploads/sql-config-manager.jpg "Sql Config Manager")

Habilitar as PIPES e Portas TCP/IP 
![Sql Config Manager 3](/uploads/sql-config-manager-3.jpg "Sql Config Manager 3")

Alterar portas para 1433
![Sql Config Manager 4](/uploads/sql-config-manager-4.jpg "Sql Config Manager 4")

4. Restaurar o Banco de Dados Linked Gourmet

5. Inserir o Nosso Número do Cliente - Informação disponível na retaguarda
![Slide 1](/uploads/slide-1.jpg "Slide 1")

![Slide 2](/uploads/slide-2.jpg "Slide 2")

![Slide 3](/uploads/slide-3.jpg "Slide 3")

![Slide 4](/uploads/slide-4.jpg "Slide 4")

![Slide 5](/uploads/slide-5.jpg "Slide 5")

![Slide 6](/uploads/slide-6.jpg "Slide 6")

![Slide 7](/uploads/slide-7.jpg "Slide 7")

![Slide 8](/uploads/slide-8.jpg "Slide 8")

![Slide 9](/uploads/slide-9.jpg "Slide 9")

![Slide 10](/uploads/slide-10.jpg "Slide 10")

![Slide 11](/uploads/slide-11.jpg "Slide 11")



6. Reiniciar o Serviço SQL

##### Instalação Linked Gourmet
1. Executar o programa como administrador
2. Avançar o Wizard de instalação até iniciar a instalação
3. Após instalado, gerar uma string de conexão através do GERADOR DE SENHA - ver imagem
4. Iniciar o programa
5. Verificar se o cardápio instalado é o mesmo do cliente

##### Instalação dos Periféricos
1. Instalar no servidor as impressoras de produção e realizar um teste através do painel de controle
2. Instalar o SAT ou EFC e testar através do programa proprietário do dispositivo

##### Configuração Atenda 1.0
1. Configurar impressoras
2. Configurar Relatórios de impressão
3. Configurar SAT ou ECF

## **Configuração de impressoras**
### Guia de instalação de impressoras
#### **Bematech**
##### 2100 TH
##### 4200 TH Rede e USB
#### **Epson**
#### **Daruma**
Seguir passo a passo abaixo
http://www.desenvolvedoresdaruma.com.br/sddn/ebits/ddc_ebits_21.html
#### **Sweda**
#### **Elgin**

### Configurado as impressoras no Atenda 1.0
Acesse o Atenda 1.0 e vá em configurações e Impressoras

## **Configuração do SAT**

### Instalação de SAT no Windows
#### **Bematech**
Seguir passo a passo abaixo
https://www.automaclick.com.br/blog/como-instalar-o-sat-bematech

#### **Epson**
Seguir passo a passo abaixo
https://files.support.epson.com/pdf/pos/bulk/manual_usuario_sat_a10.pdf

#### **Daruma**
Seguir passo a passo abaixo
https://www.automaclick.com.br/blog/instalar-driver-do-sat-daruma

#### **Sweda**
Seguir passo a passo abaixo - A partir da página 7
http://sistemas.sweda.com.br/downloads/Manual_de_instala%C3%A7ao__SAT.pdf

#### **Elgin**

Seguir passo a passo - Windows 7
https://www.essystem.com.br/downloads/elginIIwindows7.pdf

Seguir passo a passo - Windows 10
https://www.essystem.com.br/downloads/elginIIwindows10.pdf

### Gerando assinatura
> > (Mudar fluxo de geração de assinatura - além do cardápio, deve-se gerar uma assinatura e disponibilizar o TXT para o instalador)
Verifique se o arquivo com a Assinatura gerada está no pacote de instalação.

### Configurando o SAT no Atenda 1.0
Acesse configurações - Aba NFC-e/SAT/Outras
Aperte na área destacada
![Sat](/uploads/sat.png "Sat")

Escolha o Caixa 1 (caso seja o primeiro caixa)
Insira as informações do cliente, código de ativação e assinatura gerada anteriormente

## **Configuração dos relatórios de impressão**
Acesse configurações - Aba Relatórios de Impressão e escolha qual relatório deve sair em cada impressora. 
ATENÇÃO - O sistema só vai mostrar as impressoras configuradas no ATENDA 1.0

## **Configurando Balanças**

## **Configurando Microterminal**

## **Configurando Pocket**

## **Configurando outros terminais** *(Clients)*


