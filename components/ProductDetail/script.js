function toggleDetail() {
    var element = document.getElementById("detail");
    if (element.classList.contains('collapse-hide')) {
        element.classList.remove('collapse-hide');
    } else {
        element.classList.add('collapse-hide');
    }
}

function toggleRelated() {
    var element = document.getElementById("related");
    if (element.classList.contains('collapse-hide')) {
        element.classList.remove('collapse-hide');
    } else {
        element.classList.add('collapse-hide');
    }
}