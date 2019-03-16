google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function allReady() {
  var e = document.getElementById('chart_div');
  console.log(e.getElementsByTagName('svg')[0].outerHTML);
}

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Tahun', 'Indonesia', 'Malaysia', 'Thailand', 'Singapura', 'Vietnam', 'Filipina', 'Laos',   'Kamboja', 'Myanmar', 'Brunei Darussalam'],
    ['2010',   7002944,     24577196,   15936400,   11641700,    5049855,   3520471,    2513028,  2508289,   791505,    214290],
    ['2011',   7649731,     24714324,   19230470,   13171303,    6014032,   3917454,    2723564,  2881862,   816369,    242061],
    ['2012',   8044462,     25032708,   22353903,   14496091,    6847678,   4272811,    3330072,  3584307,   1058995,   209108],
    ['2013',   8802129,     25715460,   26546725,   15567923,    7572352,   4681307,    3779490,  4210165,   2044307,   224904],
    ['2014',   9435411,     27437315,   24809683,   15095152,    7874312,   4833368,    4158719,  4502775,   3081412,   200989],
    ['2015',   10406759,    25721251,   29881091,   15231469,    7943651,   5360682,    4684429,  4775231,   4681020,   218213],
    ['2016',   11519275,    26757392,   32588303,   16402593,    10012735,  5967005,    4239047,  5011712,   2907207,   218809],
    ['2017',   14039799,    25948459,   35381210,   17422826,    12922151,  6620908,    3860000,  5602157,   3443133,   258955]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" 
                       },
                       2, 3, 4, 5, 6, 7, 8, 9, 10]);

  var options = {
    width: 1100,
    height: 600,
    pointSize: 10,
    annotations: {
      textStyle: {
        fontName: 'Crimson Text',
        fontSize: 18,
        bold: true,
        color: '#000000'
      }
    },
    hAxis: {
      textStyle: {
        fontSize: 20,
        fontName: 'Crimson Text'
      }
    },
    vAxis: {
      textStyle: {
        fontSize: 20,
        fontName: 'Crimson Text'
      }
    },
    legend: {
      textStyle: {
        fontSize: 20,
        fontName: 'Crimson Text'
      }
    },
    series: {
      0: { lineWidth: 3, color: '#ff0000' },
      1: { lineWidth: 2, dataOpacity: 0, color: '#ed9c61' },
      2: { lineWidth: 2, dataOpacity: 0, color: '#f4d45d' },
      3: { lineWidth: 2, dataOpacity: 0, color: '#a2ce84' },
      4: { lineWidth: 2, dataOpacity: 0, color: '#9acee2' },
      5: { lineWidth: 2, dataOpacity: 0, color: '#9ea0ef' },
      6: { lineWidth: 2, dataOpacity: 0, color: '#f4a6da' },
      7: { lineWidth: 2, dataOpacity: 0, color: '#a6f4be' },
      8: { lineWidth: 2, dataOpacity: 0, color: '#ddc290' },
      9: { lineWidth: 2, dataOpacity: 0, color: '#c9e25f' }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  google.visualization.events.addListener(chart, 'ready', allReady);
  chart.draw(view, options);
}