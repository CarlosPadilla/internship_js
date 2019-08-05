
/**
 * battleship
 */
function isBoardReady(boats) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Check if any boat error
  boats.forEach(boat => {
    // Map boat's coordinates
    boat = boat.map(coordinates => coordinates.split('').sort().join(''));
    // Check if boat is placed diagonally
    console.log(boat[0][0] !== boat[1][0]);
    if (boat[0][0] !== boat[1][0] && boat[0][1] !== boat[1][1]) {
      return false;
    }
  });


  // let board = [];

  // for (let i = 0; i < rows.length; i++) {
  //   for (let j = 0; j < columns.length; j++) {
  //     board.push(rows[i] + columns[j]);
  //   }
  // }

  // for (let i = 0; i < boats.length; i++) {
  //   boats[i] = boats[i].map(coordinate => {
  //     coordinate = coordinate.split('');
  //     coordinate.sort((a, b) => a < b);
  //     return coordinate.join('');
  //   });

  //   let firstLetter = boats[i][0].split('')[0];
  //   let firstNumber = boats[i][0].split('')[1];

  //   const inSameRow = boats[i].every(coordinate => {
  //     coordinate = coordinate.split('');
  //     return coordinate[0] === firstLetter;
  //   });

  //   const inSameColumn = boats[i].every(coordinate => {
  //     coordinate = coordinate.split('');
  //     return coordinate[1] === firstNumber;
  //   });

  //   if (!inSameColumn && !inSameRow) {
  //     return false;
  //   }
  // }

  // return true;
}

isBoardReady([
  ['B8', 'D9'],
  ['C4', '4F'],
  ['2B', 'D2'],
  ['H5', 'H1'],
  ['J8', 'J6'],
])

module.exports = isBoardReady;
