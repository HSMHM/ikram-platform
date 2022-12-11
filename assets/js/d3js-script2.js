var dataset2 = [{
    name: 'ذكر',
    percent: 80,
    
}, {
    name: 'أنثى',
    percent: 60
}];


var pie2 = d3.layout.pie()
  .value(function (d) {
      return d.percent;
  })
  .sort(null)
  .padAngle(.03);

  var w = 300,
  h = 300;

var outerRadius = w / 3;
var innerRadius = 55;

var color2 = d3.scale.ordinal().range(["#17a2b8", "#a7a7a7","#0c464f"]);

var arc2 = d3.svg.arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);

var svg2 = d3.select("#chart2")
  .append("svg")
  .attr({
      width: w,
      height: h,
      class: ''
  }).append('g')
  .attr({
      transform: 'translate(' + w / 2 + ',' + h / 3 + ')'
  });
var path1 = svg2.selectAll('path')
  .data(pie2(dataset2))
  .enter()
  .append('path')
  .attr({
      d: arc2,
      fill: function (d, i) {
          return color2(d.data.name);
      }
  });

path1.transition()
  .duration(1000)
  .attrTween('d', function (d) {
      var interpolate = d3.interpolate({
          startAngle: 0,
          endAngle: 0
      }, d);
      return function (t) {
          return arc2(interpolate(t));
      };
  });

var restOfTheData = function () {
    var text = svg2.selectAll('text')
      .data(pie2(dataset2))
      .enter()
      .append("text")
      .transition()
      .duration(200)
      .attr("transform", function (d) {
          return "translate(" + arc2.centroid(d) + ")";
      })
      .attr("dy", ".4em")
      .attr("text-anchor", "middle")
      .text(function (d) {
          return d.data.percent + "%";
      })
      .style({
          fill: '#fff',
          'font-size': '12px'
      });

    var legendRectSize = 15;
    var legendSpacing = 3;
    var legendHeight = legendRectSize + legendSpacing;

    var legend2 = svg2.selectAll('.legend')
      .data(color2.domain())
      .enter()
      .append('g')
      .attr({
            class: 'legend',
          transform: function (d, i) {
              //Just a calculation for x & y position
              return 'translate(-35,' + ((i * legendHeight) - 20) + ')';
          }
      });
    legend2.append('rect')
      .attr({
          width: legendRectSize,
          height: legendRectSize,
          rx: 50,
          ry: 30
      })
      .style({
          fill: color2,
          stroke: color2
      });

    legend2.append('text')
      .attr({
          x: 80,
          y: 10
      })
      .text(function (d) {
          return d;
      }).style({
          fill: '#16140d',
          'font-size': '12px'
      });
};

setTimeout(restOfTheData, 1000);

