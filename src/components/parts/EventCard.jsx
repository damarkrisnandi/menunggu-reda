import { Fragment } from "react";
// import MapEmbed from "./MapEmbed";
// import utils from '../../utils/utils.json';

const EventCard = ({theme, event, date, time, place1, place2, gmapsEmbedUrl}) => {
    // const dataLength = utils.events.filter(({hidden}) => !hidden).length;

    return (
        <Fragment>
            <div className='
                flex flex-col justify-center items-center 
                h-auto'>
                <div className="h-44">
                    <p className={`text-2xl md:text-3xl ${ theme.headerStyle } text-center mb-2`}>{event}</p>
                    <p className={`${ theme.textColor } text-center font-semibold text-md md:text-lg`}>{date}</p>
                    <p className={`${ theme.textColor } text-center text-lg`}>{time}</p>
                    <p className={`${ theme.textColor } text-sm text-center`}>{place1}</p>
                    <p className={`${ theme.textColor } text-sm text-center`}>{place2}</p>
                </div>
                {/* <MapEmbed 
                    width={window.screen.width >= 1000 ? window.screen.width * 10 / (12 * (dataLength === 2 ? 2 : 1.5)) : window.screen.width * 14 / (15 * 1.1)} 
                    height={window.screen.height / 2.5}
                    src={gmapsEmbedUrl} />   */}
            </div>
        </Fragment>
    );
}
 
export default EventCard;