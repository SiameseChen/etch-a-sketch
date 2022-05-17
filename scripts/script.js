function createSquareGrid(gridNumber = 16) {
  for(let i = 0; i < gridNumber; i++) { // Loop 16 times
    let divColumn = document.createElement('div'); // Create Div element
    let gridArea = document.querySelector('#grid-area'); // Select grid-area ID
    divColumn.setAttribute('class', 'grid-column'); // Give div column the class grid-column
    gridArea.appendChild(divColumn); // Append div column onto grid-area as a child
    for(let i = 0; i < gridNumber; i++) { // Loop 16 times inside previous for loop
      let divRow = document.createElement('div'); // Create Div element for rows
      divRow.setAttribute('class', 'grid-row'); // Give div class grid-row
      divColumn.appendChild(divRow); // Append grid-row onto grid-column as a child.
    }
  }
}

createSquareGrid(); // Run function

const buttonClick = document.querySelector('#grid-button'); // Get button ID
buttonClick.addEventListener('click', promptNumber); // When button is clicked run promptNumber

function promptNumber() {
  let gridNumber = prompt('Enter a number less than 100:', 'Grid size has been changed.' ); // Prompt user
  if(gridNumber > 100) { // If user input > 100, alert that it is too big and return false.
    alert('Number is too big!');
    return false;
  } else if(gridNumber <= 100) { // If user input <= 100, run loop 16 times and remove divs.

    for(let i = 0; i < 100; i++) {
      const gridArea = document.querySelector('#grid-area');
      const divColumn = document.querySelector('.grid-column');
      if(divColumn === null) {
        break;
      } else {
        gridArea.removeChild(divColumn);
      }
      }
  }
  console.log(gridNumber);
  createSquareGrid(gridNumber);
  }