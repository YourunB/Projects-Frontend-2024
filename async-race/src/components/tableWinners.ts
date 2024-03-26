import './tableWinners.css';

const table = document.createElement('table');
table.classList.add('table-winners');

const tableHead = document.createElement('thead');
tableHead.innerHTML = '<tr><th>Number</th><th>Car</th><th>Name</th><th>Wins</th><th>Time(sec)</th><tr>';

table.append(tableHead);

export { table };
