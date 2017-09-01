exDisciplinas = [
  {
    id: 'mata56',
    nome: 'Paradigmas de Linguagens de Programação',
    semestre: 5
  },
  {
    id: 'mata62',
    nome: 'Engenharia de Software I',
    semestre: 4
  },
];
console.log('Carregou disciplinas');

exTurmas = [
  {
    disciplina: 'mata56',
    turma: 't01',
    dias: ['qua', 'sex'],
    horario: '16:40'
  },
  {
    disciplina: 'mata56',
    turma: 't02',
    dias: ['qua', 'sex'],
    horario: '20:20'
  },
  {
    disciplina: 'mata62',
    turma: 't02',
    dias: ['seg', 'qua'],
    horario: '18:30'
  }
];
console.log('Carregou turmas');

// ---crossJoin = R.pipe(
// ---    (arr1, arr2) => R.map(e1 => R.map(e2 => R.merge(e1,e2), arr2), arr1), R.flatten);
// ---console.table(crossJoin(exDisciplinas, exTurmas));


var cj = crossJoin(exDisciplinas, exTurmas);
var filtrado = R.filter(
// --- Complete o código

// ---
);
console.table(filtrado(cj));


var cj = crossJoin(exDisciplinas, exTurmas);
var antes = cj[0];
console.log('Antes:');
console.table([antes]);

var reordena = linha => R.pick(['semestre', 'id', 'nome', 'turma', 'dias', 'horario'], linha);
var depois = reordena(antes);
console.log('Depois:');
console.table([depois]);


combinaDados = R.pipe(
// --- Complete o código
  
// ---
);

teste([{"semestre":5,"id":"mata56","nome":"Paradigmas de Linguagens de Programação","turma":"t01","dias":["qua","sex"],"horario":"16:40"},{"semestre":5,"id":"mata56","nome":"Paradigmas de Linguagens de Programação","turma":"t02","dias":["qua","sex"],"horario":"20:20"},{"semestre":4,"id":"mata62","nome":"Engenharia de Software I","turma":"t02","dias":["seg","qua"],"horario":"18:30"}], combinaDados(exDisciplinas, exTurmas));


<table>
  <tr>
    <td>mata56</td><td>Paradigmas de Linguagens de Programação</td>
  </tr>
  <tr>
    <td>mata62</td><td>Engenharia de Software I</td>
  </tr>
</table>



// Dados originais:

[
  {id: 'mata56', nome: 'Paradigmas de Linguagens de Programação'},
  {id: 'mata62', nome: 'Engenharia de Software I'}
]

// Para cada objeto, vamos extrair seus valores:

[
  ['mata56', 'Paradigmas de Linguagens de Programação'],
  ['mata62', 'Engenharia de Software I']
]

// Para cada valor, vamos criar a representação da célula na tabela HTML:

[
  ['<td>mata56</td>', '<td>Paradigmas de Linguagens de Programação</td>'],
  ['<td>mata62</td>', '<td>Engenharia de Software I</td>']
]

// A seguir vamos juntar as células e uma única string:

[
  '<td>mata56</td><td>Paradigmas de Linguagens de Programação</td>',
  '<td>mata62</td><td>Engenharia de Software I</td>'
]

// E então envolver as strings na tag <tr>:

[
  '<tr><td>mata56</td><td>Paradigmas de Linguagens de Programação</td></tr>',
  '<tr><td>mata62</td><td>Engenharia de Software I</td></tr>'
]

// E então juntar tudo isso em uma única string:


'<tr><td>mata56</td><td>Paradigmas de Linguagens de Programação</td></tr>
<tr><td>mata62</td><td>Engenharia de Software I</td></tr>'

// E por fim envolver tudo isso na tag <table>

'<table><tr><td>mata56</td><td>Paradigmas de Linguagens de Programação</td></tr>
<tr><td>mata62</td><td>Engenharia de Software I</td></tr></table>'


converteObjetoParaLinhaHTML = R.pipe(
  obtemValoresDoObjeto,
  R.map(envolveNaTag('td')),
  combinaStrings,
  envolveNaTag('tr')
);

converteArrayParaTabelaHTML = R.pipe(
  R.map(converteObjetoParaLinhaHTML),
  combinaStrings,
  envolveNaTag('table')
);


envolveNaTag = R.curry(
  // --- Complete o código

  // ---
);

teste('<b>Alo mundo!</b>', envolveNaTag('b', 'Alo mundo!'));
teste('<b>Alo mundo!</b>', envolveNaTag('b')('Alo mundo!'));

combinaStrings = R.reduce(
  // --- Complete o código

  // ---
);

teste('abc', combinaStrings(['a', 'b', 'c']));
teste('Alo mundo!', combinaStrings(['Alo', ' ', 'mundo', '!']));


substituiHTML = (htmlTabela) => {
  var div = document.getElementById('tabela');
  div.innerHTML = htmlTabela;
};


substituiHTML('<table><tr><td>Alo</td><td>,</td></tr><tr><td>Mundo</td><td>!</td></tr></table>');

atualiza = R.pipe(
  // --- Complete o código

  // ---
);

substituiHTML('1, 2, 3, testando');
atualiza(exDisciplinas, exTurmas);


// Nesta função, altere somente a assinatura e a última linha
function carregaDisciplinas(callback) {
  var x = [
    {
      id: 'mata56',
      nome: 'Paradigmas de Linguagens de Programação',
      semestre: 5
    },
    {
      id: 'mata62',
      nome: 'Engenharia de Software I',
      semestre: 4
    },
  ];

  setTimeout(() => callback(x), Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY);
}

// Nesta função, altere somente a assinatura e a última linha
function carregaTurmas(codigoDisciplina, callback) {
  console.log('carregaTurmas', codigoDisciplina);
  var x = [
    {
      disciplina: 'mata56',
      turma: 't01',
      dias: ['qua', 'sex'],
      horario: '16:40'
    },
    {
      disciplina: 'mata56',
      turma: 't02',
      dias: ['qua', 'sex'],
      horario: '20:20'
    },
    {
      disciplina: 'mata62',
      turma: 't02',
      dias: ['seg', 'qua'],
      horario: '18:30'
    }
  ];

  var ret = R.filter(obj => obj.disciplina == codigoDisciplina, x);

  setTimeout(() => callback(ret), Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY);
}

reiniciaAplicacao = () => {
  exDisciplinas = [];
  exTurmas = [];
  substituiHTML('Ola, Mundo!');
};

recarregaDados = () => {
  reiniciaAplicacao();

  // --- Implemente usando a sua versão das funções, com promises
  carregaDisciplinas....
  carregaTurmas...
  atualiza(exDisciplinas, exTurmas);
  // ---
};


reiniciaAplicacao = () => {
  exDisciplinas = [];
  exTurmas = [];
  substituiHTML('Ola, Mundo!');
};




recarregaDados();

