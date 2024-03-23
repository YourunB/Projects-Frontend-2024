function clearFields(page: HTMLElement) {
  const inputs = page.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text') inputs[i].value = '';
    if (inputs[i].type === 'color') inputs[i].value = '#000000';
  }
}

export { clearFields };
