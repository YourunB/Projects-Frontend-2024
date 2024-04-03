async function getCarsApi() {
  let result = undefined;
  await fetch('http://127.0.0.1:3000/garage', { method: 'GET' })
    .then((response) => {
      result = response.json();
    })
    .catch(() => {
      console.log('No connection to garage in API');
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
  }).catch(() => {
    console.log('No connection to create car in API');
  });
}

async function removeCarApi(id: number) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  }).catch(() => {
    console.log('No connection to remove car in API');
  });
}

async function selectCarApi(id: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/garage/${id}`, { method: 'GET' })
    .then((response) => {
      result = response.json();
    })
    .catch(() => {
      console.log('No connection to car in API');
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
  }).catch(() => {
    console.log('No connection to update car in API');
  });
}

async function startCarApi(id: number): Promise<{ velocity: number; distance: number }> {
  try {
    const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, { method: 'PATCH' });
    return response.json();
  } catch {
    console.log('No connection to start car in API');
    return { velocity: 0, distance: 0 };
  }
}

async function stopCarApi(id: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, { method: 'PATCH' })
    .then((response) => {
      result = response.json();
    })
    .catch(() => {
      console.log('No connection to stop car in API');
    });
  return result;
}

async function carEngineApi(id: number) {
  return fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' })
    .then((result) => {
      if (result.status !== 200) {
        return { success: false };
      } else {
        return result.json().then((json) => ({ ...json }));
      }
    })
    .catch(() => {
      console.log('No connection to car engine in API');
    });
}

export { getCarsApi, createCarApi, removeCarApi, selectCarApi, updateCarApi, startCarApi, stopCarApi, carEngineApi };
