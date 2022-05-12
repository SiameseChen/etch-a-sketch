function createSquareGrid() {
  for(let i = 0; i < 16; i++) {
    let divRow = document.createElement('div');
    let gridArea = document.querySelector('#grid-area');
    divRow.setAttribute('class', 'grid-row')
    gridArea.appendChild(divRow);
    for(let i = 0; i < 16; i++) {
      let divColumn = document.createElement('div');
      divColumn.setAttribute('class', 'grid-column');
      divRow.appendChild(divColumn);
    }
  }
}

createSquareGrid();