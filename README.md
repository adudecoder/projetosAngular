# Projetos Angular

Repositório para projetos praticos do curso de Angular e explicações sobre as funções do Angular.

# Introdução aos conceitos sobre **Components**

## O que são **Components** ?
* _Components_ são **DIV's Containers** onde seram criados partes da aplicação como por exemplo, **HEADER**, **NAVBAR**, **Slider Cards** entre outros
1. Exemplo
![Exemplo de Component](img-exemplo-markdown/componenetsangular.png)
A arquitetura de **Components** baseia-se na construção de **Components** que sejam independentes, reutilizaveis e modulares. Seus benefícios incluem:
* Escalabilidade
* Manutenção
* Perfomance

## Ciclo de vida de um **Component**
* Todo **Component** vai ter seu ciclo de vida(**Lifecycle Hooks**) que são os estagios(**Stations**) dele dentro da aplicação. A ideia é que tenhamos controle sobre fazer uma alteração ou executar algum código sempre que algum desses **Stations** forem acionados no **Component**.
1. Exemplo.
![Exemplo de Component](img-exemplo-markdown/vidacomponent.png)
No exemplo acima vemos que quando temos alguma alteração no **Component**, os **Lifecycle Hooks** são disparados. É algo que usamos com sabedoria pq pode deixar a aplicação anti-performatica, sempre que chamarmos um método sempre que acontece alguma alteração no **Push** vai acabar dado alguns problemas de performace
Alguns desses **Lifecycle Hooks** são:
* NgOnInit() - Assim que o **Component** é inicializado
* NgOnDestroy() - Quando o **Component** é destruido da aplicação
2. Exemplo.
![Exemplo de Component](img-exemplo-markdown/exemplo2.png)
No exeplo 2 vemos a sequência de inicialização dos Lifecyclo hooks ou para melhor entendimento só chamamos de **Hooks**. O padão do Angular é chamar o **NgOnInit()** primeiro, porém existe alguns **Component** que vão receber dados deoutros **Component** e quando isso acontece o **NgOnInit()** precisa primeiro pssar pelo **NgOnChanges()** porque ele vai ser acionado assim que tiver uma mudança de dados de entrada ou saída.
3. Exemplo de **BONÚS**.
![Exemplo de Component](img-exemplo-markdown/exemplobonus.png)
Só devemos citar valores ou chamar métodos e etc.. no ngOnInit().

## O que são **Services** ??
* Conforme a Arquitetura do Angular a utilização de **Serviços(SERVICES)** tem o propósito de organizar a aplicação, isolando **lógica de negócio** e separando-a dos **Controllers**. Fazendo então a tratativa dos **Components**, chamando programas externos(**API**). Não é possível afirmar que seja obrigatório utilizar **serviços(SERVICES)**, mas é muito desejável para ter uma **arquitetura modular**.
1. Exemplo.
![Exemplo1 de Service](img-exemplo-markdown/servicesangular.png)
No exeplo 1 temos dois **Components** ligados ao um **Service** fazendo uma requisição **GET** ao um programa externo(**API**) retornando uma resposta(**Response**) ao **Service** fazendo uma **Promise** ou **Contrato** utilizando um recurso do **Angular** chamado **Observable**.
2. Exemplo.
![Exemplo2 de Service](img-exemplo-markdown/serviceexemplo.png)
No exemplo 2 vemos um formulário ligado ao **Service** fazendo a tratativa da validação desse formulário

## O que é **Injeção de Dependência** ??
Se resumo a como você vai usar um **Service** no seu **Component**, e para fazer isso usamos a **Injeção de Dependência** do **Angular**, e para o **Angular** todo **Service** é uma **Dependência**, e a gente nunca cria um **Service** dentro de um **Component** nós instânciamos ele. Pegamos a instância desse **Service** que já existe na aplicação e falamos o que queremos usar, e através do **Constructor** falamos para o **Angular** o que queremos usar e apartir disso o **Service** está **INJETADO** no **Component** assim como no exemplo abaixo. E depois é só chamar os métodos que você precisa e ser feliz!
1. Exemplo
![Exemplo de Service](img-exemplo-markdown/injecaodependencia.png)

## O que é **Data-Binding** ?
1. Exemplo.
![Exemplo de Service](img-exemplo-markdown/databinding.png)
No exemplo acima o meu **Component** é a parte lógica e o meu **Template** a  parte visual, tudo o que o usuário irá ver, e para passar valores de um **Template** pra o outro usamos um desses 4 diferentes **Data-Binding**.
* 1° - **String Interpolation**, quando queremos mostrar algum valor do tipo **String** ou um tipo mais **Primitivo**, que é para pegar um dado do **Component** e mostrar ele no **Template HTML**.
* 2° - **Property Binding**, vai pegar um dado do **Component** e controlar uma **Propriedade** do **Template HTML**, por exemplo a **Source** de uma imagem através do próprio **Component**.
* 3° - **Event Binding**, vai disparar eventos esperando uma resposta do **Component**.
* 4° - **Two-Way Data-Binding**, os dados vão ser atualizados ambos os lados, tanto do **Component** como do **Template**.

## Compartilhar dados com as propriedades **@Input()** **@Output()** dos components
1. Exemplo.
![Exemplo de Service](img-exemplo-markdown/propriedadescomponenets.png)
No exemplo acima, vamos imaginar que o **Component Pai** precisa dar dinheiro para o **Component Filho**, e no **Component Pai** iniciamos o dinheiro no **Constructor** porque é apenas uma variavel e não depende do **Component** em sí, no **Component Filho** entre conchetes passamos o nome da propriedade que o **Component Filho** está esperando, passando a propriedade no **Template HTML** no **Selector** e passando igual a variavel que o pai tem que é o **money** ``` <app-filho [earnedMoney]="money"></app-filho> ```.
2. Exemplo.
![Exemplo de Service](img-exemplo-markdown/exemplopai.png)
No exemplo 2 vemos o inverso, o **Component Filho** devolvendo dinheiro para o **Component Pai**. Para isso utilizamos o **@Output()** e o **EventEmitter**, que é a maneira de como o **Component Filho** compitilha dados com o **Component Pai**.
* Criamos o **@Output()** no **Component Filho** que é o dinheiro que o **Component Filho** quer devolver para o **Component Pai**, para isso utilizamos o **EventEmitter** que serve para criarmos nossos próprios eventos, da mesma forma que podemos escutar um **Click** podemos escutar o evento **remainingMoney** atribuindo um valor do evento a uma função passando o evento que o **Component Filho** esta mandando ``` <app-pai [remainingMoney]="receiveMoney($event)"></app-pai> ```. e chamamos o método retornando o dinheiro de uma compra do **Component Filho** ao **Component Pai**
**OBS:** ``` this.remainingMoney.EventEmitter().(change); ```

# Gestão de complexidade no **Front-End**

## Os **Components apresentacionais** e os **Components inteligentes**
* Chamado de **Dumb-Component**, **Component puro** ou **Components apresentacionais**, qual a finalidade desses **métodos** ?, apenas mostrar a **Interface** ao usuário final ou seja, ficam responsavéis pela parte visual. As vezes temos logicas de negócio dentro de um **Component**, então para minimizar isso trabalhamos com esse padrão de **Components inteligentes** e **Components apresentacionais**, e eles não devem causar um efeito colateral na aplicação
1. Exemplo.
![Exemplo de Service](img-exemplo-markdown/apresentacionais.png)
* Os **Components inteligentes** são parecidos com **funções impuras** que acabam causando algum efeito colateral na aplicação e não sabemos o resultado que ela irá produzir, são funções um pouco mais complexas. Um **Components inteligentes** vai ser vários **Components apresentacionais** onde a lógica vai ficar toda nesse **Components inteligentes** e os **Components apresentacionais** só servem para enviar dados que você precisa que eles apresentem. O **Component inteligente** é aonde vão estar as dependências externas. **Components apresentacionais** a gente nõ instancia nenhum tipo de **Service**, não delegamos nada, apenas usamos o @Input para mandar algo e o @Output para imitir ele para algum **Component inteligente** fazer esa lógica.
2. Exemplo.
![Exemplo de Service](img-exemplo-markdown/iteligentes.png)

* Component smart(**Component inteligente**) funcionando, no **Component pai** temos um lista, alguns serviços sendo chamados, e no NgOnInit() ele vai popular essa lista com esses dados do ```todoService```, e apartir disso ele vai enviar essa lista para o **Component apresentacional**(_Dumb-Component_) ```<app-todos-list [list]="list | async"></app-todos-list>```, e utilizando **Component apresentacional** mantemos nossa organização do código e a manutenção.
3. Exemplo.
![Exemplo de Service](img-exemplo-markdown/exemplo3componenet.png)

## O que é **Design Modular** ?
* Como dito no exemplo abaixo, divisão da aplicação em módulos, que ajuda na organização do projeto dependendo do tamanho dele, e das funcionalidades que ele tem como um todo. Geralmente trabalhamos com 3 tipos de módulos, sendo eles:
* _Core Module_, onde colocamos tudo aquilo que precisa ter em uma única instância na aplicação inteira, serviços de terceiros, dando como exemplo o **HTTP Client**, que intercepita uma chamada e conseguimos aplicar uma lógica ou até mesmo adicionar um load para o usuário. Se tiver mais de um módulochamando o **HTTP Client**, o interceptor pode se confundir, porque ele vai estar atuando como instância e a outra instância não vai ser atingida pelo interceptor. Ou seja, existendindo mais de uma chamado no módulo **HTTP Client** teremos um erro.
* _Shared Module_, onde vamos adicionar todos os nossos **components**, **diretivas**, **pipes** até mesmo **services** que utilizamos com frequenia em outros módulos da comunicação, como exemplo podemos colocar o **CommonsModule** no **Shared Module** e importar só no módulo que acabamos de criar e já vamos poder utilizar esses **components**, **pipes** que a gente criou para ser reutilizado entre a aplicação
* _Feature Module_, quando a gente tem uma funcionalidade muito grande em uma aplicação, é interessante que criemos um módulo para aquela funcionalidade especifica e vai tornar a aplicação mais organizada
1. Exemplo.
![Exemplo de Service](img-exemplo-markdown/designmodular.png)
* Para lidar com projetos de arquitetura, que precisamos criar definições para varias projetos, é importante usamos o **Library** e o **Angular element**, são um tipo de projeto que o Angular também gerar além do SPA comum.
* _Library_, é como se fosse um módulo que pode ser reutilizado em várias aplicações diferentes, não fica apenas no scopo do projeto local, ele é tipo o **Materials Library**, onde conseguimos instalar ela pelo NPM e utilizar seus components e diretivas.
* _Angular Element_, entra na parte de **Web Components**, padrão para definir novos elementos **HTML**, novos **components** como os que criamos no Angular só que de forma nativa e aguinostica de qualquer **FrameWork**, então conseguimos criar um **Angular Element** utilizando o angular e empacotar esse projeto com o **Angular Element** e conseguimos chamar ele em qualquer página só usando o seletor dele.
2. Exemplo.
![Exemplo de Service](img-exemplo-markdown/alert.png)
