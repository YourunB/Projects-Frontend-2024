let totalСars = 0;

async function getCarsApi(page: number, total = 1000) {
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
  });
}

async function removeCarApi(id: number) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  });
}

async function selectCarApi(id: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/garage/${id}`, { method: 'GET' }).then((response) => {
    result = response.json();
  });
  return result;
}

async function updateCarApi(updateCar: object, id: number) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updateCar),
  });
}

async function startCarApi(id: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, { method: 'PATCH' }).then((response) => {
    result = response.json();
  });
  return result;
}

export { totalСars, getCarsApi, createCarApi, removeCarApi, selectCarApi, updateCarApi, startCarApi };
