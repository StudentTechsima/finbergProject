

const ctx1 = document.getElementById('vegaChart1').getContext('2d');

const data1 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options1 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx1, {
  type: 'line',
  data: data1,
  options: options1
});


const ctx2 = document.getElementById('vegaChart2').getContext('2d');

const data2 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options2 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx2, {
  type: 'line',
  data: data2,
  options: options2
});


const ctx3 = document.getElementById('vegaChart3').getContext('2d');

const data3 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options3 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx3, {
  type: 'line',
  data: data3,
  options: options3
});


const ctx4 = document.getElementById('vegaChart4').getContext('2d');

const data4 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options4 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx4, {
  type: 'line',
  data: data4,
  options: options4
});


const ctx5 = document.getElementById('vegaChart5').getContext('2d');

const data5 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options5 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx5, {
  type: 'line',
  data: data5,
  options: options5
});


const ctx6 = document.getElementById('vegaChart6').getContext('2d');

const data6 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options6 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx6, {
  type: 'line',
  data: data6,
  options: options6
});


const ctx7 = document.getElementById('vegaChart7').getContext('2d');

const data7 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options7 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx7, {
  type: 'line',
  data: data7,
  options: options7
});


const ctx8 = document.getElementById('vegaChart8').getContext('2d');

const data8 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options8 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx8, {
  type: 'line',
  data: data8,
  options: options8
});


const ctx9 = document.getElementById('vegaChart9').getContext('2d');

const data9 = {
  labels: ['','10:00', '11:00', '12:00', '01:00', '02:00', '03:00'],
  datasets: [
    {
      label: 'Vega Nifty Opt Strength',
      data: [25,5,37,17,19,27, 30, 50, 70, 90, 100],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'Vega Nifty Opt CE Strength',
      data: [0,-4, -10, -20, -30, -40, -50,-89,-100,],
      borderColor: 'red',
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options9 = {
  responsive: true,
  maintainAspectRatio:false,
  elements: {
        point:{
            radius: 0
        }
    },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxHeight:1,
        boxWidth:20
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
        font: {
          size: 14,
          weight: 'bold',
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Strength',
        font: {
          size: 14,
          weight: 'bold',
        }
      },
      beginAtZero: false,
      min: -50,
      max: 100,
      ticks: {
        stepSize: 50
      }
    }
  }
};

new Chart(ctx9, {
  type: 'line',
  data: data9,
  options: options9
});


