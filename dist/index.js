// Array de objetos contendo nome e nota dos alunos
const alunos = [{
  nome: "João",
  nota: 7
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Pedro",
  nota: 6
}, {
  nome: "Ana",
  nota: 8
}, {
  nome: "Carla",
  nota: 4
}];

// Função que retorna apenas os alunos com nota maior ou igual a 6
const aprovados = alunos => {
  return alunos.filter(aluno => aluno.nota >= 6);
};

// Testando a função
const alunosAprovados = aprovados(alunos);
console.log(alunosAprovados);