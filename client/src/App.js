// client/src/App.js

import React from "react";
import logo from "./logo.png";
import MUIDataTable from "mui-datatables";
import Navbar from "./Navbar"
import './App.css'

const colunas = [
  {
    name: "Logo",
    options: {
      filter: false,
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
    name: "Participante",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => (
        <div style={{textAlign: "center"}}>
          <b style={{color: "#147D96"}}>{value}</b>
        </div>
      )
    }
  },
  {
    name: "Descrição",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => (
        <div style={{textAlign: "center"}}>
          <span style={{color: "dimgray"}}>{value}</span>  
        </div>
      )
    }
  },
  {
    name: "Url de discovery",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <a class="hyperlinks" href={value}>{value}</a>
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
  rowsPerPage: 25,
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
        authorisationServer.CustomerFriendlyDescription,
        authorisationServer.OpenIDDiscoveryDocument
      ]);
      return false;
    })
    return dados;
  }

  return (    
    <div id="layout">
      <Navbar/>
      <div class="mainContainer">
        <div className={"maxPageWidth"}>
          {!servidoresDeAutorizacao ? (
            <h1 className="pageTitle">Carregando...</h1>
          ) : ( 
            <>
              <h1 className="pageTitle">
                Instituições participantes no Brasil
              </h1>
              <p className="textoDescritivo">
                Esta página é a solução de um desafio do desenvolvimento de uma pequena aplicação fullstack que 
                apresente uma lista de todos os participantes do Open Banking no Brasil (desenvolvido com base em uma API 
                fornecida pelo <a class="hyperlinks" href={"https://openbankingbrasil.org.br/"}>openbankingbrasil.org.br</a>, 
                a página oficial do Open Banking no Brasil). A aplicação foi inteiramente desenvolvida via código, 
                usando HTML, CSS e JavaScript. O front-end foi implementado em React.js e o back-end foi
                implementado em Node.js, ambos os módulos são desacoplados e se comunicam por APIs internas. O código fonte da aplicação (e todo 
                o processo de desenvolvimento e commits) pode ser conferido em&nbsp;
                <a class="hyperlinks" href={"https://github.com/claudiorolim44/desafio-open-banking-2022"}> 
                 https://github.com/claudiorolim44/desafio-open-banking-2022</a>.
            </p>              
            <br/>                  
              <MUIDataTable
                title={""}
                data={obterDados()}
                columns={colunas}
                options={opcoes}
              />
            </>
            
          )}       
        </div>   
      </div>
    </div>
  );
}

export default App;