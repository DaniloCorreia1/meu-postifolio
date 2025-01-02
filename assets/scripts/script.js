function closeAllDescriptions() {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });
}

function toggleDescription(id) {
    var description = document.getElementById(id);
    if (description.style.display === 'none' || description.style.display === '') {
        closeAllDescriptions();
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}

document.getElementById('toggleItem1').addEventListener('click', function() {
    toggleDescription('description1');
});

document.getElementById('toggleItem2').addEventListener('click', function() {
    toggleDescription('description2');
});

document.getElementById('toggleItem3').addEventListener('click', function() {
    toggleDescription('description3');
});

document.getElementById('toggleItem4').addEventListener('click', function() {
    toggleDescription('description4');
});

document.getElementById('toggleItem5').addEventListener('click', function() {
    toggleDescription('description5');
});
document.getElementById('toggleItem6').addEventListener('click', function() {
    toggleDescription('description6');
});

