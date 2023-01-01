var xValues = ["1يناير","1يناير","1يناير","1يناير","1يناير","1يناير","1يناير","1يناير","1يناير"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [ 
      { 
      data: [300,20,180,170,30,40,150,250,300,200],
      borderColor: "#38B7A9",
      fill: false
    }, { 
      data: [300,120,80,70,130,140,100,250,200,150],
      borderColor: "#38B7A9",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }, title: {
    display: true,
    text: "الاسعار"
  }
});
 
var xValues = ["1يناير","1يناير","1يناير","1يناير","1يناير","1يناير","1يناير","1يناير","1يناير"];
var yValues = [55, 49, 44, 24, 15,55, 49, 44, 24, 15];
var barColors = ["#38B7A9"];

new Chart("myCharts", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "الاسعار"
    }
  }
});


