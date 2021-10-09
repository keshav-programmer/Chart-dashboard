var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebooc', 'Youtube', 'amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
           
            borderWidth: 1
        }]
    },
    options: {
       responsive: true,
    }
});

var earning = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'],
        datasets: [{
            label: 'Earning',
            data: [1290, 1339, 3236, 345, 2624, 324,453, 3457, 84, 3455, 942, 234],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});