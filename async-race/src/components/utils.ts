function clearFields(page: HTMLElement) {
  const inputs = page.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) inputs[i].value = '';
}

export { clearFields };
