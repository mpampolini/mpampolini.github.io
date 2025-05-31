const lista = [
  {
    local: "Diretoria",
    telefone: "3456-7852",
    email: "diretoria@email.com",
    endereco: "Rua São Francisco, nº 12, São Paulo/SP",
  },
  {
    local: "Contabilidade",
    telefone: "3254-0081",
    email: "contabilidade@email.com",
    endereco: "Rua São Francisco, nº 12, São Paulo/SP",
  },
  {
    local: "Informática",
    telefone: "3894-7256",
    email: "informatica@email.com",
    endereco: "Avenida Brasil, nº 785, Belo Horizonte/MG",
  },
  {
    local: "Controladoria",
    telefone: "3894-2847",
    email: "controladoria@email.com",
    endereco: "Avenida Brasil, nº 785, Belo Horizonte/MG",
  },
  {
    local: "Almoxarifado",
    telefone: "3587-1468",
    email: "almoxarifado@email.com",
    endereco: "R. São josé, nº 1.580, Belo Horizonte / MG",
  },
  {
    local: "Compras",
    telefone: "1234-5678",
    email: "compras@email.com",
    endereco: "Avenida Brasil, nº 19, São Paulo / SP",
  },
  {
    local: "Tesouraria",
    telefone: "6543-9210",
    email: "tesouraria@email.com",
    endereco: "Avenida Brasil, nº 19, São Paulo / SP",
  },
];

const elementosLista = document.querySelector(".elementosLista");
const pesquisa = document.querySelector(".pesquisa");

pesquisa.addEventListener("input", () => {
  elementosLista.innerHTML = "";
  lista.map((obj) => {
    if (
      obj.local.toLowerCase().includes(pesquisa.value.toLowerCase()) ||
      obj.telefone.toLowerCase().includes(pesquisa.value.toLowerCase()) ||
      obj.email.toLowerCase().includes(pesquisa.value.toLowerCase()) ||
      obj.endereco.toLowerCase().includes(pesquisa.value.toLowerCase())
    ) {
      elementosLista.appendChild(criaLinha(obj));
    }
  });
});

(function exibeLista() {
  lista.map((l) => {
    elementosLista.appendChild(criaLinha(l));
  });
})();

function criaLinha(l) {
  const linha = document.createElement("tr");
  linha.classList = "linha";

  linha.appendChild(criaColuna("local", l.local));
  linha.appendChild(criaColuna("telefone", l.telefone));
  linha.appendChild(criaColuna("email", l.email));
  linha.appendChild(criaColuna("endereco", l.endereco));

  return linha;
}

function criaColuna(cssClass, conteudo) {
  const coluna = document.createElement("td");
  coluna.classList = cssClass;
  coluna.innerHTML = conteudo;
  return coluna;
}
