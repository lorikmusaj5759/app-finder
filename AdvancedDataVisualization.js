// Filename: AdvancedDataVisualization.js
// Description: This code demonstrates advanced data visualization techniques using JavaScript.

// Generate random data
function generateRandomData(numPoints) {
  var data = [];
  for (var i = 0; i < numPoints; i++) {
    data.push(Math.random() * 100);
  }
  return data;
}

// Create a graph using D3.js library
function createGraph(data) {
  var svg = d3.select("body")
    .append("svg")
    .attr("width", 800)
    .attr("height", 500);

  var xScale = d3.scaleLinear()
    .domain([0, data.length])
    .range([0, 700]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([400, 50]);

  var line = d3.line()
    .x(function(d, i) { return xScale(i); })
    .y(function(d) { return yScale(d); });

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("d", line);

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);

  svg.append("g")
    .attr("transform", "translate(50, 400)")
    .call(xAxis);

  svg.append("g")
    .attr("transform", "translate(50, 50)")
    .call(yAxis);
}

// Manipulate data before visualization
function processData(data) {
  var filteredData = data.filter(function(d) {
    return d > 50;
  });

  var sortedData = filteredData.sort(function(a, b) {
    return a - b;
  });

  var aggregatedData = d3.nest()
    .key(function(d) { return Math.floor(d / 10); })
    .rollup(function(values) { return values.length; })
    .entries(sortedData);

  return aggregatedData;
}

// Main function
function main() {
  var rawData = generateRandomData(1000);
  var processedData = processData(rawData);
  createGraph(processedData);
}

// Execute main function
main();