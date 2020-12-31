function timeLeft(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

$(document).ready(function () {
    let today = new Date();
    let deadline = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00";
    if (today.getMonth() == 0 && today.getDate() == 1) {
        deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";
    };
    deadline = 'December 31 ' + (today.getFullYear()) + " 09:39:00";
    let setClock = function (newyear) {
        let timeinterval = setInterval(function () {
            let t = timeLeft(newyear);
            $('#day').text(t.days);
            $('#hour').text(t.hours);
            $('#minute').text(('0' + t.minutes).slice(-2));
            $('#second').text(('0' + t.seconds).slice(-2));
            if (t.total <= 0) {
                clearInterval(timeinterval);
                $('.main').fireworks({
                    opacity: 0.9,
                    width: '100%',
                    height: '100%'
                });
            }
        }, 1000);
    };
    setClock(deadline);
});
