(function ($) {
    var name = localStorage.name;

    while (!name) {
        name = prompt('Enter your name, please');
    }

    localStorage.name = name;

    $('#welcome').html('<span>Hello, ' + name + '</span>');
}($));
