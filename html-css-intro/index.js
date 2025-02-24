let brazilFlag = document.querySelector("#ptBr");
let usaFlag = document.querySelector("#enUs");
let moonIcon = document.querySelector("#darkMode");
let sunIcon = document.querySelector("#lightMode");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let page = document.querySelector("#page");


// toggle language
brazilFlag.onclick = () => {
  brazilFlag.classList.add("hidden");
  usaFlag.classList.remove("hidden");
  toggleLanguage(brazilFlag.id);
}

usaFlag.onclick = () => {
  usaFlag.classList.add("hidden");
  brazilFlag.classList.remove("hidden");
  toggleLanguage(usaFlag.id);
}

moonIcon.onclick = () => {
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
  toggleMode(moonIcon.id);
}

sunIcon.onclick = () => {
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
  toggleMode(sunIcon.id);
}

function toggleLanguage(id)
{
  const pageTexts = {
    ptBr: {
      main: 
        `
          <section id="about">
            <h1>Cupcake de café com chantilly</h1>
            <p>
              O cupcake perfeito para acompanhar seu café do dia a dia. É muito
              fácil e, além disso, fica maravilhoso, com certeza vai impressionar.
              Faça e depois me conte o que achou!
            </p>
            <p>
              Tempo: 1h10 <br />
              Rendimento: 12 porções <br />
              Dificuldade: fácil
            </p>
          </section>
          <section id="ingredients">
            <h2>Ingredientes</h2>
            <ul>
              <li>1 e 1/2 xícara (chá) de água morna</li>
              <li>1 colher de sopa de café solúvel</li>
              <li>3 ovos</li>
              <li>1/2 xícara (chá) de óleo</li>
              <li>2 xícaras (chá) de açúcar</li>
              <li>2/3 xícara (chá) de chocolate em pó</li>
              <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
              <li>1 colher de sopa de fermento químico em pó</li>
              <li>2 xícaras de chantilly pronto</li>
              <li>Grãos de café para decorar</li>
              <li>1 lata de leite condensado</li>
              <li>1 colher de sopa de café solúvel</li>
              <li>1 colher de sopa de chocolate em pó</li>
              <li>2 colheres de sopa de manteiga</li>
            </ul>
          </section>
          <section id="preparation">
            <h2>Modo de preparo</h2>
            <p>
              No liquidificador, bata a água, o café solúvel, os ovos, o óleo, o açúcar e
              o chocolate em pó até obter uma mistura homogênea. Transfira para uma tigela,
              adicione a farinha e o fermento e misture com uma colher. Despeje em forminhas
              de cupcake forradas com forminhas de papel e coloque em uma assadeira grande,
              uma ao lado da outra. Asse em forno médio preaquecido por 25 minutos ou até que
              estejam assados e dourados. Retire e deixe esfriar.
              <br />
              <br />
              Para o recheio, leve todos os ingredientes ao fogo médio, mexendo bem até engrossar.
              Desligue, deixe esfriar e coloque dentro de um saco de confeitar com bico perlê. Reserve.
              Coloque o chantilly dentro de outro saco de confeitar com bico de sua escolha e reserve.
              <br />
              <br />
              Para a montagem, faça um furo no centro dos cupcakes e recheie com o brigadeiro de café reservado.
              Decore a superfície dos cupcakes com o chantilly reservado, fazendo círculos. Decore com grãos de café
              e leve à geladeira até o momento de servir.
            </p>
          </section>
        `,
      footer: 
        `
          Receita da Vovó
          <img src="assets/heart.svg" alt="coração branco" />
        `
    },
    enUs: {
      main: 
        `
          <section id="about">
            <h1>Coffee cupcake with whipped cream</h1>
            <p>
              The perfect cupcake to accompany your everyday coffee. It's very
              easy and on top of that it looks wonderful, it's sure to impress. Do
              it and then tell me what you think!
            </p>
            <p>
              Time: 1h10 <br />
              Yield: 12 servings <br />
              Difficulty: easy
            </p>
          </section>
          <section id="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>1 and 1/2 cup (tea) of warm water</li>
              <li>1 tablespoon of instant coffee</li>
              <li>3 eggs</li>
              <li>1/2 cup (tea) of oil</li>
              <li>2 cups of sugar (tea)</li>
              <li>2/3 cup (tea) chocolate powder</li>
              <li>2 and 1/2 cups (tea) of wheat flour</li>
              <li>1 tablespoon of chemical baking powder</li>
              <li>2 cups of ready-made whipped cream</li>
              <li>Coffee beans to decorate</li>
              <li>1 can of condensed milk</li>
              <li>1 tablespoon of instant coffee</li>
              <li>1 tablespoon of chocolate powder</li>
              <li>2 tablespoons of butter</li>
            </ul>
          </section>
          <section id="preparation">
            <h2>Method of preparation</h2>
            <p>
              In a blender, beat the water, instant coffee, eggs, oil, sugar and
              chocolate powder until smooth. Transfer to a bowl, add the flour and
              yeast and mix with a spoon. Pour into cupcake molds lined with paper
              liners and place in a large pan, one next to the other. Bake in a
              preheated medium oven for 25 minutes or until baked and golden.
              Remove and let cool.
              <br />
              <br />
              For the filling, heat all the ingredients over medium heat, stirring
              well until it thickens. Turn it off, let it cool and place it inside
              a piping bag with a pearl nozzle. Reserve. Place the whipped cream
              inside a piping bag fitted with a piping tip and set aside.
              <br />
              <br />
              To assemble, make a hole in the center of the cupcakes and fill with
              the reserved coffee brigadeiro. Decorate the surfaces of the
              cupcakes with the reserved whipped cream, making circles. Decorate
              with coffee beans and refrigerate until ready to serve.
            </p>
          </section>
        `,
      footer: 
        `
          Grandma's
          <img src="assets/heart.svg" alt="white heart" />
          recipe
        `
    }
  }

  main.innerHTML = pageTexts[id]["main"];
  footer.innerHTML = pageTexts[id]["footer"];
}

// toggle mode
function toggleMode(id){
  if(id == "darkMode") {
    page.classList.add("darkMode");
  } else if(id == "lightMode") {
    page.classList.remove("darkMode");
  }
}