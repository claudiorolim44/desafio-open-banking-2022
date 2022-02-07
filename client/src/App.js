// client/src/App.js

import React from "react";
import logo from "./logo.png";
import MUIDataTable from "mui-datatables";

const colunas = [
  {
    name: "Logo",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        const style = {height: '100px', display: 'flex', alignItems: 'center'}
        return(
          <div style={style}>
            <img 
              src={value}
              alt = {value}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=logo;
              }}
              width="100"
            />
          </div>
        )
      }
    }
  },
  {
    name: "Participante"
  },
  {
    name: "Url de discovery",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => (
        <a href={value}>{value}</a>
      )
    }
  },
];

const opcoes = {
  elevation: 2,
  responsive: "standard",
  filterType: "multiselect",
  draggableColumns: {enabled:true},
  rowsPerPageOptions: [5, 10, 15, 25, 100], 
  rowsPerPage: 10,
  selectableRows: "none"
};

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
        authorisationServer.CustomerFriendlyLogoUri,
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
          title={"Open Banking Brasil"}
          data={obterDados()}
          columns={colunas}
          options={opcoes}
        />
      )}
    </div>
  );
}

export default App;