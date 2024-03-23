let totalСars = 0;

async function getCarsApi(page: number, total = 7) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${total}`, { method: 'GET' }).then((response) => {
    totalСars = Number(response.headers.get('X-Total-count'));
    result = response.json();
  });
  return result;
}

async function createCarApi(newCar: object) {
  await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    body: JSON.stringify(newCar),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export { totalСars, getCarsApi, createCarApi };
