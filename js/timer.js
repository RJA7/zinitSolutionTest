(function ($) {
    var $timer = $('#timer');
    var date;
    var hours;
    var mins;
    var secs;
    var time;

    var timer = function() {
        date = new Date();
        hours = date.getHours();
        mins = date.getMinutes();
        secs = date.getSeconds();
        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;
        time = hours + ':' + mins + ':' + secs;
        $timer.html(time);
    };

    timer();
    setInterval(timer, 1000);
}($));
