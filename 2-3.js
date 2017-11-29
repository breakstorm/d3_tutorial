var d3 = require('d3.v4.min');

console.log(d3);

d3.json("./csv/tweets.json",function(error,data) {dataViz(data.tweets)});

function dataViz(incomingData) {

    incomingData.forEach(function (el) {
    el.impact = el.favorites.length + el.retweets.length
    el.tweetTime = new Date(el.timestamp);
    })

    var maxImpact = d3.max(incomingData, function(el) {return el.impact});
    var startEnd = d3.extent(incomingData, function(el) {return el.tweetTime});
    var timeRamp = d3.time.scale().domain(startEnd).range([20,480]);
    var yScale = d3.scale.linear().domain([0,maxImpact]).range([0,460]);
    var radiusScale = d3.scale.linear().domain([0,maxImpact]).range([1,20]);
    var colorScale = d3.scale.linear().domain([0,maxImpact]).range(["white","#990000"]);
}