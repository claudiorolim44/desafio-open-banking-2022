/*Este módulo traduz para Português o texto do Mui Data Tables*/

const muiTextLabels = {
    body: {
      noMatch: "Nenhum registro correspondente foi encontrado",
      toolTip: "Ordenar",
      columnHeaderTooltip: column => `Ordenar por ${column.label}`
    },
    pagination: {
      next: "Próxima Página",
      previous: "Página anterior",
      rowsPerPage: "Exibir:",
      displayRows: "de",
    },
    toolbar: {
      search: "Pesquisar nesta Tabela",
      downloadCsv: "Exportar Dados",
      print: "Imprimir Dados",
      viewColumns: "Visualizar Colunas",
      filterTable: "Filtrar Tabela",
    },
    filter: {
      all: "Todos",
      title: "FILTROS",
      reset: "RESETAR",
    },
    viewColumns: {
      title: "Exibir Colunas",
      titleAria: "Exibir/Ocultar Colunas da Tabela",
    },
    selectedRows: {
      text: "selecionado(s)",
      delete: "Deletar",
      deleteAria: "Deletar Selecionados",
    }
}

export default muiTextLabels