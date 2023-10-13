function calculateMinCost() {
  const ropeLengthsInput = document.getElementById('rope-lengths').value;

  const ropeLengths = ropeLengthsInput.split(',').map(length => parseInt(length));

  if (ropeLengths.length < 2) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Minimum cost of ropes: 0';
    return;
  }

  let totalCost = 0;

  while (ropeLengths.length > 1) {
    ropeLengths.sort((a, b) => a - b);

    const combinedLength = ropeLengths[0] + ropeLengths[1];

    totalCost += combinedLength;

    ropeLengths.splice(0, 2, combinedLength);
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Minimum cost of ropes: ${totalCost}`;
}
