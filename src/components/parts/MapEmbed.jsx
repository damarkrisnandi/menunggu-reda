/* eslint-disable jsx-a11y/iframe-has-title */
import { Fragment } from "react";

const MapEmbed = ({src, width, height}) => {
    return (
        <Fragment>
            <div className='
                flex flex-col justify-center items-center 
                mb-5'>
                <div className='w-full gmap-canvas'>
                    <iframe width={width} height={height} id="gmap_canvas" src={src} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
                </div>
            </div>
        </Fragment>
    );
}
 
export default MapEmbed;