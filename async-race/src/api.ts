async function getCars(page: number) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/garage?_page=${page}`, { method: 'GET' }).then((response) => {
    result = response.json();
  });
  return result;
}

export { getCars };
