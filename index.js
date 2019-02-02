import * as d3 from "d3";

d3.select("rect.rectColourFlow").style("fill", function () {
    return "hsl(" + Math.random() * 660 + ",70%,70%)"
})

d3.select("body").style("background-color", "#fffffa")

// From Shirley Wu's Data Visualization Introdction

var theData = [110, 230, 160, 180, 230]

function randomNumber() {
    return Math.floor(Math.random() * 200) + "px";
}
console.log(randomNumber())

d3.select('.dataChart').selectAll('rect')
    .data(theData)
    .attr('x', randomNumber)
    .attr('y', randomNumber)
    .attr('width', randomNumber)
    .attr('height', randomNumber)
    .attr('fill', 'lightblue');

// At this point all I've managed to do is decalre a random number and apply that to the attributes of the square. No idea how to get the data in a variable to map to the values of the square...

// Notes from Scrimba's D3 Course

var fudgeNumbers = [80, 111, 124, 189, 276]

d3.select(".chartOne")
    .selectAll('div')
    .data(fudgeNumbers)
        .enter()
        .append('div')
        .style('width', function(d) { return d+50 + "px"; })
        .text(function(d) { return "I'm " + d + ' pixels'; });

// Chart Two

var cakeNumbers = [1320, 400, 560, 1780]

// var scale = d3.scale.linear()
//     .domain([min, max])
//     .range([10, 300])

d3.select(".chartContainer").select(".scaledChart")
    .selectAll('div')
    .data(cakeNumbers)
        .enter()
        .append('div')
        .style('width', function(d) { return scale(d) + "px"; })