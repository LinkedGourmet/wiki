<!-- TITLE: Suporte Atenda 1.0 -->
<!-- SUBTITLE: Mapa de incidentes para Help Desk-->



# Suporte ao Atenda 1.0
## Principais incidentes

### Erro com SAT
#### **Não impressão de documentos**

#### **SAT não comunicando com o sistema**

#### **Erro ao emitir cupom fiscal**

#### **Cancelamento de cupom fiscal**


### Erro com ECF
#### **Não impressão de documentos**
#### **ECF não comunicando com o sistema**
#### **Erro ao emitir cupom fisca**l
##### **CF Aberto**
##### **Relógio Inconsistente**
##### **Redução Z emitida**
#### **Cancelamento de cupom fiscal**

### Erro com NFC-e
#### **Não impressão de documentos**
#### **Erro ao emitir cupom fiscal**
#### **Cancelamento de cupom fiscal**

### Erro no fechamento de conta
##### **Erro de pagamento**
##### **Erro SEFAZ**
##### **Não impressão de cupom fiscal**
##### **Cupom emitindo com excesso de papel**
##### **Cupom emitindo com valor diferente do sistema**

### Erro de SYNC
#### **Caixas não disponíveis no Retaguarda**
**Sintoma** - Caixa não disponiveis no retaguarda ( visão do cliente) - Arquivos não disponiveis na pasta SYNC/LOG

**Causa** - Algum pedido aberto a muito tempo, informações de produtos (categoria, departamento, departamento de impressão, ect) editados no frente de caixa. Cadastro de produtos pelo frente de caixa. 

**Solução** - Corrigir essas infomaçoes abaixo:

Verificar tabela pedidos no Banco de dados - Obeservar se a data do pedido é muito antiga. Caso sim, alterar a data do pedido para uma data mais atual ou solicitar que o cliente dê baixa nos pedidos. 

update tb_Pedido
set data_entrada = '------Data do dia-----------'
where data_saida is null

Veriricar se há algum item cadastrado ou editado no frente de caixa através da tabela historico.
Corrigir campo ProdRefId quando null;
Corrigir campos editados no FC para o mesmo valor do retagaurda.

Verificar se na tabelas pedidos há algum campo na coluna IDGarçom com *0* ou *null*








#### **Funcionários cadastrados não disponíveis no FC**
#### **Produtos cadastrados não disponíveis no FC**
#### **Departamento de impressão não disponível no FC**
#### **Erro ao iniciar serviço de SYNC no Windows**
#### **Erro ao reiniciar serviço do SYNC**
#### Reinstalação do serviço

### Erro ao na impressão de pedidos
#### **Pedidos não imprimem**
#### **Pedidos travam o sistema quando impressos**

### Erro ao abrir programa
#### **Erro SQL**
#### **Erro SQL Usuário 'sa'**

### Conta Presa
#### **Conta presa após ter emitido cupom fiscal**
#### **Conta presa por não emitir cupom Fiscal**


### Looping de impressão de pedidos
#### **Pedidos impressos sem parar na impressora de pedidos**


### Pocket 
#### **Comunicação**
#### **Configuração**
#### **Erro com cardápio**
#### **Pedidos lançados não registram no FC**
#### **Erro de ID ao realizar ao enviar pedido**
#### **Erro ao iniciar serviço no Windows**
#### **Reinstalação do serviço**

### Client 
#### **Erro de Comunicação**
#### **Erro de Configuração**
#### **Erro na Abertura do programa**
#### **Erro de Impressão**

### Microterminal
#### **Erro Comunicação**
#### **Erro Configuração**

### Integração iFood
#### **Pedidos divergentes entre Atenda e iFood**
#### **Pedidos do iFood não lançam no Atenda**

### Pendência 
#### **Pendência não apresenta valores consistentes**
#### **Erro ao selecionar cliente**

## Relatórios FC
### Relatório de fechamento de caixa
#### **Erro de coluna ao emitir fechamento**


### Relatórios do sistema
#### **Erro ao emirir relatórios**

## Abertutra e fechamento de Caixa
#### **Diversos caixas abertos na mesma senha**
#### **Erro no fechamento de caixa**