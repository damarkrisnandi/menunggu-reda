import { Fragment } from "react";

const EventCard = ({event, date, time, place1, place2}) => {
    return ( 
        <Fragment>
            <div className='
                flex flex-col justify-center items-center 
                h-72'>
                <p className='text-3xl header-text text-amber-300 text-center'>{event}</p>
                <p className="text-white text-center font-semibold text-lg">{date}</p>
                <p className="text-white text-center text-lg">{time}</p>
                <p className="text-white text-sm text-center">{place1}</p>
                <p className="text-white text-sm text-center">{place2}</p>
            </div>
        </Fragment>
    );
}
 
export default EventCard;