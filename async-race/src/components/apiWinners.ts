async function getWinnersApi() {
  let result = undefined;
  await fetch('http://127.0.0.1:3000/winners', { method: 'GET' }).then((response) => {
    result = response.json();
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
  });
}

export { getWinnersApi, saveWinnerApi };
