// client/src/App.js

import React from "react";
import logo from "./logo.png";
import MUIDataTable from "mui-datatables";

const colunas = ["Nome", "Url de discovery"];
const opcoes = {};

function App() {
  const [servidoresDeAutorizacao, setServidoresDeAutorizacao]  = React.useState(null);

  React.useEffect(() => {
    fetch("/api/servidores-de-autorizacao")
      .then((res) => res.json())
      .then((data) => setServidoresDeAutorizacao(data));
  }, []);

  function obterDados(){
    const dados = [];
    servidoresDeAutorizacao.map(authorisationServer => {
      dados.push([
        authorisationServer.CustomerFriendlyName,
        authorisationServer.OpenIDDiscoveryDocument
      ]);
      return false;
    })
    return dados;
  }

  return (
    <div className="App">
      {!servidoresDeAutorizacao ? (
        <h1>Carregando...</h1>
      ) : ( 
        <MUIDataTable
          title={"Participantes do Open Banking no Brasil"}
          data={obterDados()}
          columns={colunas}
          options={opcoes}
        />
      )}
    </div>
  );
}

export default App;