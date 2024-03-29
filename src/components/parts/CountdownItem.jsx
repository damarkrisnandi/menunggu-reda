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


    const calendar_url = "https://calendar.google.com/event?action=TEMPLATE&tmeid=Mjlqb2lvMnFic3FhbzJ1ZW04dDU3ajJldWogZGFtYXJrcmlzbmFuZGkxMjAyQG0&tmsrc=damarkrisnandi1202%40gmail.com";

    const { theme } = props;
    const stage = [
        {name: time.days, unit: 'Days'},
        {name: time.hours, unit: 'Hours'},
        {name: time.minutes, unit: 'Minutes'},
        {name: time.seconds, unit: 'Seconds'}, 
    ];
    return (
        <Fragment>
            <div className='w-11/12 md:w-6/12 mx-auto
                    h-96 py-10'>
                        <div className="bg-sky-900 p-10 md:p-10 rounded-xl shadow-countdown
                        flex flex-col justify-center items-center py-10 h-52 md:h-auto
                        ">
                            <div className="columns-4 mb-10">
                                {stage.map(data => (
                                    <div className={`flex flex-col justify-start items-center ${ theme.borderStyle } bg-blue-4 px-1 py-3 md:p-2`}>
                                        <div className={`${ theme.headerColor2 } text-3xl md:text-5xl`}>{data.name <= 9 ? '0' : '' }{data.name}</div>
                                        <p className={`text-sm ${ theme.textColor2 }`}>{data.unit}</p>
                                    </div>
                                ))}
                                
{/*                                 
                                <div className={`flex flex-col justify-start items-center ${ theme.borderStyle } p-2`}>
                                    <div className={`${ theme.headerColor } text-5xl`}>{time.hours <= 9 ? '0' : '' }{time.hours}</div>
                                    <p className={`text-sm ${ theme.textColor }`}>Hours</p>
                                </div>

                                <div className={`flex flex-col justify-start items-center ${ theme.borderStyle } p-2`}>
                                    <div className={`${ theme.headerColor } text-5xl`}>{time.minutes <= 9 ? '0' : '' }{time.minutes}</div>
                                    <p className={`text-sm ${ theme.textColor }`}>Minutes</p>
                                </div>

                                <div className={`flex flex-col justify-start items-center ${ theme.borderStyle } p-2`}>
                                    <div className={`${ theme.headerColor } text-5xl`}>{time.seconds <= 9 ? '0' : '' }{time.seconds}</div>
                                    <p className={`text-sm ${ theme.textColor }`}>Seconds</p>
                                </div> */}
                            </div>
                            <a href={calendar_url} target="_blank" rel="noopener noreferrer">
                                <button className={ theme.buttonStyle2 } onClick={() => { }}>
                                    Tambah Pengingat
                                </button>
                            </a>
                        </div>
                        
            </div>
            
            

        </Fragment>
    )
}

export default CountDownItem;