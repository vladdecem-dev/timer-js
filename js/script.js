window.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementsByTagName('button')[0],
        deadline = document.getElementsByTagName('input'); 
    
    
    btn.addEventListener('click', function() {
            end = deadline[0].value;
        
        
        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()), 
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / (1000 * 60)) % 60), 
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total' : t, 
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds 
            };
        }

        function setDeadline(id, endtime) { 
            let timer = document.getElementById(id), 
                days = timer.querySelector('.days'), 
                hours = timer.querySelector('.hours'), 
                minutes = timer.querySelector('.minutes'), 
                seconds = timer.querySelector('.seconds'),
                interval = setInterval(updateDeadline, 500);
        
            function updateDeadline() { 
                let t = getTimeRemaining(endtime);
                days.textContent = t.days; 
                hours.textContent = t.hours; 
                minutes.textContent = t.minutes; 
                seconds.textContent = t.seconds; 
    
                if (t.total <= 0) {
                    clearInterval(interval);
                }
            }
    
        }
        setDeadline('timer', end);
        document.getElementsByTagName('input')[0].value = "";
    });   
});