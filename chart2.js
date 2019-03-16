google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Tahun', 'Jumlah kedatangan'],
    ['2010-2011', 646787],
    ['2011-2012', 394731],
    ['2012-2013', 757667],
    ['2013-2014', 633282],
    ['2014-2015', 971348],
    ['2015-2016', 1112516],
    ['2016-2017', 2520524],
    ['2017-2018', 1766392]
  ]);

  var options = {
    bar: {groupWidth: "60%"},
    legend: { position: "none" },
    series: { 0: {color: 'red'} },
    hAxis: {
      textStyle: {fontName: 'Crimson Text'}
    },
    vAxis: {
      textStyle: {fontName: 'Crimson Texts'}
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart"));
  google.visualization.events.addListener(chart, 'ready', allReady); // ADD LISTENER
  chart.draw(data, options);
}

function allReady() {
    var e = document.getElementById('columnchart');
    console.log(e.getElementsByTagName('svg')[0].outerHTML);
}