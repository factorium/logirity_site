
function cliquei1() {

  // Start chart
  var chart = document.getElementById('myChart');
  Chart.defaults.global.animation.duration = 2000; // Animation duration
  Chart.defaults.global.title.display = false; // Remove title
  Chart.defaults.global.title.text = "Chart"; // Title
  Chart.defaults.global.title.position = 'bottom'; // Title position
  Chart.defaults.global.defaultFontColor = '#999'; // Font color
  Chart.defaults.global.defaultFontSize = 10; // Font size for every label

  // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
  Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
  Chart.defaults.global.legend.labels.padding = 15;
  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
  Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
  Chart.defaults.global.legend.display = true;

  var myChart = new Chart(chart, {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", 'Jul'],
      datasets: [{
        label: "Lost",
        fill: false,
        lineTension: 0,
        data: [45, 25, 40, 20, 45, 20],
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }, {
        label: "Succes",
        fill: false,
        lineTension: 0,
        startAngle: 2,
        data: [20, 40, 20, 45, 25, 60],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#ff6384",
        borderColor: '#ff6384',
        borderWidth: 2,
        showLine: true,
      }]
    },
  });

  //  Chart ( 2 )
  var Chart2 = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(Chart2, {
    type: 'line',
    data: {
      labels: ["9h", "10h", "11h", "12h", '13h', '14h', '15h', '16h', '17h', '18h'],
      datasets: [{
        label: "Caminhões hoje",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 79, 116)',
        borderWidth: 3,
        pointBorderColor: false,
        data: [1, 2, 3, 1, 1, 2, 2, 1, 0, 1],
        fill: true,
        lineTension: .4,
      }, {
        label: "Caminhões mês passado",
        lineTension: .4,
        startAngle: 2,
        data: [2, 1, 0, 2, 1, 1, 2, 0, 3, 1],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "#4bc0c0",
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 3,
        showLine: true,
        text: 'Caminhões hoje',
        fill: false
      }, {
        label: "caminhões ontem",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: [4, 2, 1, 2, 3, 1, 1, 0, 2, 3],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "#ffcd56",
        pointBorderColor: "#ffcd56",
        borderColor: '#ffcd56',
        borderWidth: 3,
        showLine: true,
      }]
    },

    // Configuration options
    options: {
      title: {
        display: false
      },
      legend:{
        display:true,
        padding:205,
        boxWidth: 225
      },
    }
  });

  var chart = document.getElementById('chart3');
  var myChart = new Chart(chart, {
    type: 'line',
    data: {
      labels: ["One", "Two", "Three", "Four", "Five", 'Six', "Seven", "Eight"],
      datasets: [{
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointBorderColor: "transparent",
        pointColor: "white",
        borderColor: '#d9534f',
        borderWidth: 0,
        showLine: true,
        data: [0, 40, 10, 30, 10, 20, 15, 20],
        pointBackgroundColor: 'transparent',
      },{
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointColor: "white",
        borderColor: '#5cb85c',
        borderWidth: 0,
        showLine: true,
        data: [40, 0, 20, 10, 25, 15, 30, 0],
        pointBackgroundColor: 'transparent',
      },
                 {
                   label: "Lost",
                   fill: false,
                   lineTension: .5,
                   pointColor: "white",
                   borderColor: '#f0ad4e',
                   borderWidth: 0,
                   showLine: true,
                   data: [10, 40, 20, 5, 35, 15, 35, 0],
                   pointBackgroundColor: 'transparent',
                 },
                 {
                   label: "Lost",
                   fill: false,
                   lineTension: .5,
                   pointColor: "white",
                   borderColor: '#337ab7',
                   borderWidth: 0,
                   showLine: true,
                   data: [0, 30, 10, 25, 10, 40, 20, 0],
                   pointBackgroundColor: 'transparent',
                 }]
    },
  });

}