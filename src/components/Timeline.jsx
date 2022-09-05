import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            title: '',
            desc: '',
            time: ''
        }
    }
     
    componentDidMount() {
        this.setState({
            items: [
                {img: '/timeline/1.png', title: 'Pertemuan', time: 'Jogja, 2014', desc: 'Kami sebenarnya kakak adek ketemu gede. kakak adek tingkat maksudnya'},
                {img: '/timeline/2.png', title: 'PDKT', time: 'Kos masing-masing, 2020', desc: 'Kuliah lewat begitu saja, bibit-bibit cinta justru tumbuh di kala dunia digempur Corona.'},
                {img: '/timeline/3.png', title: 'Jadian', time: 'Kos masing-masing, 2020', desc: 'Kami ucapkan terima kasih kepada discord sebagai mak comblang pasangan LDR satu ini.'},
                {img: '/timeline/4.png', title: 'Debut', time: 'Purwokerto, Maret 2021', desc: 'Setelah lama online, kami akhirnya offline'},
                {img: '/timeline/5.png', title: 'Debut(2)', time: 'Buton Utara, Oktober 2021', desc: 'Damar ketemu camer sekaligus fit and proper test (alhamdulillah lulus)'},
                {img: '/timeline/6.jpg', title: 'Lamaran', time: 'Konawe Selatan, Februari 2022', desc: 'Perjalanan dari barat mencari janji suci'},
                {img: '/timeline/7.png', title: 'Hari H', time: 'Hari H', desc: 'Kami tunggu kehadirannya yaa'},
            ],
            title: 'Pertemuan',
            desc: 'Kami sebenarnya kakak adek ketemu gede. kakak adek tingkat maksudnya',
            time: 'Jogja, 2014'
        })
    }

    onChange = (event) => {
        this.setState({
            title: this.state.items[event].title,
            desc: this.state.items[event].desc,
            time: this.state.items[event].time
        })
    }

    render() { 
        const { theme } = this.props;
        return (
            <Fragment>
                <div className="w-9/12 container mx-auto p-12">
                    <div className={`text-center ${ theme.headerStyle } text-5xl pb-12 pt-12`}>
                        Our Love Story
                    </div>

                    <div className="flex flex-col justify-start items-center">
                    
                    <h1 className={`${theme.headerStyle} text-2xl mb-2`}>{ this.state.title }</h1>
                    <p className="text-white text-xs mb-3">{ this.state.time }</p>
                    <Carousel dynamicHeight={true} autoPlay={true} interval={4000}
                    width={window.screen.width >= 1000 ? 350 : window.screen.width * 14 / 15} 
                    showThumbs={false} onChange={this.onChange}>
                        {
                            this.state.items.map(data => {
                                return (
                                    <div key={data.img}>
                                        <img src={ data.img } alt={ data.title } srcset="" />
                                        
                                        {/* <p className="legend">{ data.desc }</p> */}
                                    </div>
                                )
                            }
                        )}
                    </Carousel>
                    <p className="text-white text-xs mt-3">{ this.state.desc }</p>
                        
                    </div>



                </div>
            </Fragment>
        );
    }
}
 
export default Timeline;