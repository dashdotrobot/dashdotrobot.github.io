Chart.defaults.global.responsive = true;

var comm_labels = ["X-1", "X-2", "X-3", "X-4", "crows foot"];
var scale_start_at_zero = {yAxes: [{display: true, ticks: {beginAtZero: true}}]};


if ($('#chart_radial').length > 0) {
    var chart_radial = new Chart($('#chart_radial'), {
        type: 'bar',
        color: 'red',
        data: {
            labels: comm_labels,
            datasets: [{
                backgroundColor: 'rgba(255, 99, 132, 1)',
                label: 'Radial stiffness',
                data: [4500, 4400, 4200, 4200, 4600]
            }]
        },
        options: {scales: scale_start_at_zero}
    });
}

if ($('#chart_lateral').length > 0) {
    var chart_lateral = new Chart($('#chart_lateral'), {
        type: 'bar',
        data: {
            labels: comm_labels,
            datasets: [{
                backgroundColor: 'rgba(54, 162, 235, 1)',
                label: 'Lateral stiffness',
                data: [130, 125, 120, 115, 135]
            }]
        },
        options: {scales: scale_start_at_zero}
    });
}

if ($('#chart_rot').length > 0) {
    var chart_rot = new Chart($('#chart_rot'), {
        type: 'bar',
        data: {
            labels: comm_labels,
            datasets: [{
                backgroundColor: 'rgba(75, 192, 192, 1)',
                label: 'Rotational stiffness',
                data: [75, 250, 420, 510, 190]
            }]
        },
        options: {scales: scale_start_at_zero}
    });
}
