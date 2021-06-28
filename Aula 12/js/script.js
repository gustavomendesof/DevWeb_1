function executarTodos(){
  window.alert("Alô Mundo fim!");
  document.fgColor="blue";
  document.bgColor="red";
  document.title="Teste de Título2";    
  var x = window.confirm("Deseja continuar?");
  window.alert(x);
  var nome = window.prompt("Informe seu nome: ");
  window.alert("O nome digitado foi: " + nome);
  window.alert(document.lastModified);
  window.print();
  exibirMsg();
}

function exibirMsg(){
  alert("Tudo certo gurizada? \n" + "Pagou o curso");
}