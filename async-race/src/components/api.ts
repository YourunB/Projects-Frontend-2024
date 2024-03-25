async function getCarsApi() {
  let result = undefined;
  await fetch('http://127.0.0.1:3000/garage', { method: 'GET' }).then((response) => {
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
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function startCarApi(id: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, { method: 'PATCH' }).then((response) => {
    result = response.json();
  });
  return result;
}

async function stopCarApi(id: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, { method: 'PATCH' }).then((response) => {
    result = response.json();
  });
  return result;
}

function carEngineApi(id: number) {
  return fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' })
    .then((result) => {
      if (result.status !== 200) {
        return { success: false };
      } else {
        return result.json().then((json) => ({ ...json }));
      }
    })
    .catch(() => {});
}

export { getCarsApi, createCarApi, removeCarApi, selectCarApi, updateCarApi, startCarApi, stopCarApi, carEngineApi };
