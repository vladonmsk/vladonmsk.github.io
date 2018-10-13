document.body.onload = function () {

    var hour = 0;
    var minute = 0;
    var second = 0;
	/*setTimeout(function () {
		var timer = document.getElementById('timer');
		second += 1;
		if (second == 60){
			minute += 1;
			second = 0;
		}
		if(minute == 60){
			hour += 1;
			minute = 0;
		}
		timer.innerHTML = hour + " часов " + minute + " минут " + second + " секунд";
    }, 1000);*/


	function TimerClock() {
        var timer = document.getElementById('timer');
        second ++;
        if (second == 60){
            minute ++;
            second = 0;
        }
        if(minute == 60){
            hour ++;
            minute = 0;
        }
        timer.innerHTML = "0" + hour + " часов " + "0" + minute + " минут " + "0" + second + " секунд";
    }
    setInterval(TimerClock, 1000);


    $('#rezume').on('click', function (e) {
        e.preventDefault();
        $('#content_rezume').show();
        $('#content_map').hide();
        $('#content_timer').hide();
    });
    $('#mapa').on('click', function (e) {
        e.preventDefault();
        $('#content_rezume').hide();
        $('#content_map').show();
        $('#content_timer').hide();
        setTimeout(function() {
            var preloader = document.getElementById('preload');
            var map = document.getElementById('maps');
            preloader.className = 'done';
            map.className = 'maps';
        }, 1000);
    });
    $('#timer1').on('click', function (e) {
        e.preventDefault();
        $('#content_rezume').hide();
        $('#content_map').hide();
        $('#content_timer').show();
    })
};