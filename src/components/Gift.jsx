import { Fragment, Component } from "react";
import GiftMain from "./parts/GiftMain";

class Gift extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        const { theme } = this.props;
        return ( 
            <Fragment>
                <div className="bg-body">
                <div className="w-11/12 md:w-9/12 container mx-auto mt-6">
                    <div className={`text-center ${ theme.headerStyle2 } text-5xl pb-12 pt-12`}>Kirim Kado Pernikahan</div>
                    <GiftMain 
                        theme={ theme }
                    />
                </div>
                </div>
            </Fragment> 
        );
    }
}
 
export default Gift;