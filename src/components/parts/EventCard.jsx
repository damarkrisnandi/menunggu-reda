import { Fragment } from "react";

const EventCard = ({theme, event, date, time, place1, place2}) => {
    return (
        <Fragment>
            <div className='
                flex flex-col justify-center items-center 
                h-52'>
                <p className={`text-2xl md:text-3xl ${ theme.headerStyle } text-center`}>{event}</p>
                <p className={`${ theme.textColor } text-center font-semibold text-md md:text-lg`}>{date}</p>
                <p className={`${ theme.textColor } text-center text-lg`}>{time}</p>
                <p className={`${ theme.textColor } text-sm text-center`}>{place1}</p>
                <p className={`${ theme.textColor } text-sm text-center`}>{place2}</p>
            </div>
        </Fragment>
    );
}
 
export default EventCard;