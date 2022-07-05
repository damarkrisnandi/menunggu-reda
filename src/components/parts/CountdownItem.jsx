import React, { Fragment } from "react"

function CountDownItem(props) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const count = (timeEnd) => {
        
        var x = setInterval(() => {
            if (isChange) clearInterval(x);
            const now = new Date().getTime();
            const distance = timeEnd - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(x);
            }
            else {
                setChange(false);
                setTime({days, hours, minutes, seconds})
                
            }
        }, 1000);
    }

    const defaultTime = {days: 0, hours: 0, minutes: 0, seconds: 0};
    const [time, setTime] = React.useState(defaultTime);
    let [isChange, setChange] = React.useState(false);

    React.useEffect(() => {
        setChange(true);
        if (isChange) {
            const day = props.date;
            const time = props.time;
            const [D, M, Y] = day.split('-').map(o => parseInt(o));
            const [h, m] = time.split(':');
            let date = new Date(Y, M - 1, D);
            date.setHours(parseInt(h), parseInt(m), 0, 0);
            count(date);
        } 
        return () => {}
    }, [count, isChange, props.date, props.time])

    return (
        <Fragment>
            <div className='
                    flex flex-col justify-center items-center 
                    h-96'>
                        <div className="columns-4">
                            <div className="flex flex-col justify-start items-center border-amber-300 rounded-lg border p-2">
                                <div className="text-amber-300 text-5xl">{time.days <= 9 ? '0' : '' }{time.days}</div>
                                <p className="text-sm text-white">Days</p>
                            </div>
                            
                            <div className="flex flex-col justify-start items-center border-amber-300 rounded-lg border p-2">
                                <div className="text-amber-300 text-5xl">{time.hours <= 9 ? '0' : '' }{time.hours}</div>
                                <p className="text-sm text-white">Hours</p>
                            </div>

                            <div className="flex flex-col justify-start items-center border-amber-300 rounded-lg border p-2">
                                <div className="text-amber-300 text-5xl">{time.minutes <= 9 ? '0' : '' }{time.minutes}</div>
                                <p className="text-sm text-white">Minutes</p>
                            </div>

                            <div className="flex flex-col justify-start items-center border-amber-300 rounded-lg border p-2">
                                <div className="text-amber-300 text-5xl">{time.seconds <= 9 ? '0' : '' }{time.seconds}</div>
                                <p className="text-sm text-white">Seconds</p>
                            </div>
                        </div>
                {/* <p className="text-amber-300 text-3xl">Days {time.hours <= 9 ? '0' : '' }{time.hours}Hours {time.minutes <= 9 ? '0' : '' }{time.minutes}Minutes {time.seconds <= 9 ? '0' : '' }{time.seconds}Seconds</p> */}
            </div>
            
            

        </Fragment>
    )
}

export default CountDownItem;