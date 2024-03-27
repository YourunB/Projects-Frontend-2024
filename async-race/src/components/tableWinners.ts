import './tableWinners.css';

const table = document.createElement('table');
table.classList.add('table-winners');

const tableHead = document.createElement('thead');
tableHead.innerHTML =
  '<tr><th>Number</th><th>Car</th><th>Name</th><th class="btn-sort btn-sort-win" id="btn-sort-win">Wins</th><th class="btn-sort btn-sort-time" id="btn-sort-time">Best time(sec)</th><tr>';

const tableBody = document.createElement('tbody');

table.append(tableHead, tableBody);

function createTableRow(i: number, color: string, name: string, wins: number, time: number) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${i}</td>
    <td>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.849 420.849" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
          <g fill="${color}">
            <path d="m81.123,216.924c-17.161,0-31.125,13.959-31.125,31.12 0,17.166 13.959,31.131 31.125,31.131 17.155,0 31.12-13.959 31.12-31.131-1.42109e-14-17.156-13.965-31.12-31.12-31.12zm0,44.956c-7.631,0-13.831-6.205-13.831-13.837 0-7.62 6.199-13.825 13.831-13.825 7.626,0 13.825,6.205 13.825,13.825-1.42109e-14,7.626-6.199,13.837-13.825,13.837z"/>
            <path d="m339.65,222.541c-15.612,0-28.308,12.702-28.308,28.308s12.702,28.32 28.308,28.32c15.606,0 28.308-12.713 28.308-28.32s-12.696-28.308-28.308-28.308zm0,39.339c-6.083,0-11.019-4.948-11.019-11.031 0-6.071 4.936-11.019 11.019-11.019 6.071,0 11.019,4.948 11.019,11.019 0,6.083-4.948,11.031-11.019,11.031z"/>
            <rect width="177.544" x="120.497" y="257.375" height="17.295"/>
            <polygon points="415.202,206.405 407.012,198.226 391.371,190.746 285.421,180.705 231.121,141.674     185.461,141.674 127.465,151.541 59.835,182.794 43.699,177.637 0,177.637 0,191.712 13.441,211.877 0,220.981 0,251.67     12.079,263.743 24.303,251.524 17.283,244.504 17.283,230.161 37.354,216.574 22.918,194.926 41.004,194.926 60.976,201.317     132.634,168.201 186.922,158.969 225.55,158.969 279.134,197.475 386.685,207.662 396.883,212.546 399.945,215.596     403.275,226.406 402.012,237.728 391.953,252.84 406.331,262.439 418.736,243.823 420.849,224.736   "/>
          </g>
        </g>
      </svg></td>
    <td>${name}</td>
    <td>${wins}</td>
    <td>${time}</td>
  `;
  return tr;
}

export { table, tableBody, createTableRow };
