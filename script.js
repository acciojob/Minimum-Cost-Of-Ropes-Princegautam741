function calculateMinCost() {
  // Get the input rope lengths as a comma-separated string
  const ropeLengthsInput = document.getElementById('rope-lengths').value;

  // Parse the input into an array of rope lengths
  const ropeLengths = ropeLengthsInput.split(',').map(length => parseInt(length));

  // Sort the rope lengths in ascending order
  ropeLengths.sort((a, b) => a - b);

  let totalCost = 0;

  // Iterate through the sorted rope lengths and calculate the minimum cost
  while (ropeLengths.length > 1) {
    // Combine the two smallest ropes
    const combinedLength = ropeLengths[0] + ropeLengths[1];

    // Update the total cost
    totalCost += combinedLength;

    // Remove the two smallest ropes and add the combined rope
    ropeLengths.splice(0, 2, combinedLength);

    // Re-sort the rope lengths
    ropeLengths.sort((a, b) => a - b);
  }

  // Display the minimum cost in the result div
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Minimum cost of ropes: ${totalCost}`;
}
