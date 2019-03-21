google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function allReady() {
  var e = document.getElementById('chart_div');
  console.log(e.getElementsByTagName('svg')[0].outerHTML);
}

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Tahun', 'Thailand', 'Malaysia', 'Singapura', 'Indonesia', 'Vietnam', 'Filipina', 'Kamboja',   'Laos', 'Myanmar', 'Brunei Darussalam'],
    ['2010',   15936400,   24577196,   11641700,    7002944,     5049855,   3520471,    2508289,  2513028,   791505,    214290],
    ['2011',   19230470,   24714324,   13171303,    7649731,     6014032,   3917454,    2881862,  2723564,   816369,    242061],
    ['2012',   22353903,   25032708,   14496091,    8044462,     6847678,   4272811,    3584307,  3330072,   1058995,   209108],
    ['2013',   26546725,   25715460,   15567923,    8802129,     7572352,   4681307,    4210165,  3779490,   2044307,   224904],
    ['2014',   24809683,   27437315,   15095152,    9435411,     7874312,   4833368,    4502775,  4158719,   3081412,   200989],
    ['2015',   29881091,   25721251,   15231469,    10406759,    7943651,   5360682,    4775231,  4684429,   4681020,   218213],
    ['2016',   32588303,   26757392,   16402593,    11519275,    10012735,  5967005,    5011712,  4239047,   2907207,   218809],
    ['2017',   35381210,   25948459,   17422826,    14039799,    12922151,  6620908,    5602157,  3860000,   3443133,   258955]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, 2, 3, 4, 
                  { calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                  },
                  5, 6, 7, 8, 9, 10]);

  var options = {
    width: 3100,
    height: 2800,
    pointSize: 50,
    annotations: {
      textStyle: {
        fontName: 'Crimson Text',
        fontSize: 50,
        bold: true,
        color: '#000000'
      }
    },
    hAxis: {
      textStyle: {
        fontSize: 50,
        fontName: 'Crimson Text'
      }
    },
    vAxis: {
      textStyle: {
        fontSize: 50,
        fontName: 'Crimson Text'
      },
      gridlines: {
        color: 'transparent'
      }
    },
    legend: {
      textStyle: {
        fontSize: 50,
        fontName: 'Crimson Text'
      }
    },
    series: {
      0: { lineWidth: 15, dataOpacity: 0, color: '#BDBDBD' },
      1: { lineWidth: 15, dataOpacity: 0, color: '#CFD8DD' },
      2: { lineWidth: 15, dataOpacity: 0, color: '#BDBDBD' },
      3: { lineWidth: 25, color: '#FF0000' },
      4: { lineWidth: 15, dataOpacity: 0, color: '#CFD8DD' },
      5: { lineWidth: 15, dataOpacity: 0, color: '#BDBDBD' },
      6: { lineWidth: 15, dataOpacity: 0, color: '#CFD8DD' },
      7: { lineWidth: 15, dataOpacity: 0, color: '#BDBDBD' },
      8: { lineWidth: 15, dataOpacity: 0, color: '#CFD8DD' },
      9: { lineWidth: 15, dataOpacity: 0, color: '#BDBDBD' }
      // 0: { lineWidth: 10, dataOpacity: 0, color: '#1DA9E4' },
      // 1: { lineWidth: 10, dataOpacity: 0, color: '#F1DA02' },
      // 2: { lineWidth: 10, dataOpacity: 0, color: '#F98650' },
      // 3: { lineWidth: 20, color: '#FF0000' },
      // 4: { lineWidth: 10, dataOpacity: 0, color: '#89D78B' },
      // 5: { lineWidth: 10, dataOpacity: 0, color: '#F8B243' },
      // 6: { lineWidth: 10, dataOpacity: 0, color: '#9CC8C9' },
      // 7: { lineWidth: 10, dataOpacity: 0, color: '#342924' },
      // 8: { lineWidth: 10, dataOpacity: 0, color: '#A593E5' },
      // 9: { lineWidth: 10, dataOpacity: 0, color: '#E9425F' }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  google.visualization.events.addListener(chart, 'ready', allReady);
  chart.draw(view, options);
}