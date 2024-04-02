async function getWinnersApi() {
  let result = undefined;
  await fetch('http://127.0.0.1:3000/winners', { method: 'GET' })
    .then((response) => {
      result = response.json();
    })
    .catch(() => {
      console.log('No connection to winners in API');
    });
  return result;
}

async function saveWinnerApi(newWinner: object) {
  await fetch('http://127.0.0.1:3000/winners', {
    method: 'POST',
    body: JSON.stringify(newWinner),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => {
    console.log('No connection to save winner in API');
  });
}

async function updateWinnerApi(updateWinner: object, id: number) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updateWinner),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => {
    console.log('No connection to update winner in API');
  });
}

async function removeWinnerApi(id: number) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'DELETE',
  }).catch(() => {
    console.log('No connection to remove winner in API');
  });
}

export { getWinnersApi, saveWinnerApi, updateWinnerApi, removeWinnerApi };
