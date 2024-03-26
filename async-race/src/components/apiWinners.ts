async function getWinnersApi() {
  let result = undefined;
  await fetch('http://127.0.0.1:3000/winners', { method: 'GET' }).then((response) => {
    result = response.json();
  });
  return result;
}

export { getWinnersApi };
