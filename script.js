// Function to calculate Paper Cost
function calculatePaperCost() {
  var lengthInches = parseFloat(document.getElementById("length").value);
  var widthInches = parseFloat(document.getElementById("width").value);
  var grams = parseFloat(document.getElementById("grams").value);
  var paperRate = parseFloat(document.getElementById("paperRate").value);

  if (isNaN(lengthInches) || isNaN(widthInches) || isNaN(grams) || isNaN(paperRate)) {
    document.getElementById("paperCostResult").innerText = "Please enter valid Paper Cost inputs.";
    return NaN;
  }

  var length = lengthInches * 0.0254;
  var width = widthInches * 0.0254;

  var area = length * width;
  var paperCostPKR = area * (grams / 1000) * paperRate;

  document.getElementById("paperCostResult").innerText = "Paper Cost: Rs. " + paperCostPKR.toFixed(2);
  document.getElementById("paperCost").value = paperCostPKR.toFixed(2);

  return paperCostPKR;
}

// Function to calculate Carton Cost
function calculateCartonCost() {
  var ply = parseInt(document.getElementById("ply").value);
  var cutSheetWidth = parseFloat(document.getElementById("cutSheetWidth").value);
  var cutSheetLength = parseFloat(document.getElementById("cutSheetLength").value);
  var naliRate = parseFloat(document.getElementById("naliRate").value);
  var rollLength = parseFloat(document.getElementById("rollLength").value);
  var leg = parseFloat(document.getElementById("leg").value);

  if (isNaN(ply) || isNaN(cutSheetWidth) || isNaN(cutSheetLength) || isNaN(naliRate) || isNaN(rollLength) || isNaN(leg)) {
    document.getElementById("cartonCostResult").innerText = "Please enter valid Carton Cost inputs.";
    return NaN;
  }

  var cartonCost = (((cutSheetWidth * naliRate)/ rollLength)*cutSheetLength *ply) +leg;

  document.getElementById("cartonCostResult").innerText = "Carton Cost: Rs. " + cartonCost.toFixed(2);
  document.getElementById("cartonCost").value = cartonCost.toFixed(2);

  return cartonCost;
}

// Function to calculate Total Cost directly
function calculateTotalDirectly() {
  var paperCost = calculatePaperCost();
  var cartonCost = calculateCartonCost();

  if (!isNaN(paperCost) && !isNaN(cartonCost)) {
    var totalCost = (paperCost * 2) + cartonCost;
    document.getElementById("totalCostResult").innerText = "Total Cost: Rs. " + totalCost.toFixed(2);
  } else {
    document.getElementById("totalCostResult").innerText = "Please provide valid inputs for both Paper Cost and Carton Cost.";
  }
}

// Function to check inputs and toggle total cost button
function checkInputs() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var grams = document.getElementById("grams").value;
  var paperRate = document.getElementById("paperRate").value;

  var ply = document.getElementById("ply").value;
  var cutSheetWidth = document.getElementById("cutSheetWidth").value;
  var cutSheetLength = document.getElementById("cutSheetLength").value;
  var naliRate = document.getElementById("naliRate").value;
  var rollLength = document.getElementById("rollLength").value;
  var leg = document.getElementById("leg").value;

  var paperCostFilled = length && width && grams && paperRate;
  var cartonCostFilled = ply && cutSheetWidth && cutSheetLength && naliRate && rollLength && leg;

  if (paperCostFilled && cartonCostFilled) {
    document.getElementById("calculateTotalButton").style.display = 'block';
  } else {
    document.getElementById("calculateTotalButton").style.display = 'none';
  }
}
