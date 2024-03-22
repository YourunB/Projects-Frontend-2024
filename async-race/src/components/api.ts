let totalСars = 0;

async function getCars(page: number, total = 7) {
  let result = undefined;
  await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${total}`, { method: 'GET' }).then((response) => {
    totalСars = Number(response.headers.get('X-Total-count'));
    result = response.json();
  });
  return result;
}

export { totalСars, getCars };
