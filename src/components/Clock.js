import React, { Component } from 'react'

export class Clock extends Component {

    componentDidMount() {

        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = document.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');

            function updateClock() {
                var t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        var deadline = new Date(Date.parse('12/20/2019 20:00:00'));
        initializeClock('clockdiv', deadline);
    }
    render() {
        return (
            <div id="clockdiv">
                <div>
                    <span className="days">0</span>
                    <div className="smalltext" style={{ color: "#D2691E" }}>Days</div>
                </div>
                <div>
                    <span className="hours">0</span>
                    <div className="smalltext" style={{ color: "#D2691E" }}>Hours</div>
                </div>
                <div>
                    <span className="minutes">0</span>
                    <div className="smalltext" style={{ color: "#D2691E" }}>Minutes</div>
                </div>
                <div>
                    <span className="seconds">0</span>
                    <div className="smalltext" style={{ color: "#D2691E" }}>Seconds</div>
                </div>
            </div>
        )
    }
}

export default Clock
