import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            title: ''
        }
    }
     
    componentDidMount() {
        this.setState({
            items: [
                {img: '/timeline/1.png', title: 'Pertemuan', desc: 'Jogja, 2014 --- Kami sebenarnya kakak adek ketemu gede. kakak adek tingkat maksudnya'},
                {img: '/timeline/2.png', title: 'PDKT', desc: 'Kos masing-masing, 2020 --- Di saat dunia terserang virus Corona, kami terkena virus cinta'},
                {img: '/timeline/3.png', title: 'Jadian', desc: 'Kos masing-masing, 2020 --- Di saat orang-orang putus karena LDR, kami jadian karena LDR'},
                {img: '/timeline/4.png', title: 'Debut', desc: 'Purwokerto, Maret 2021 --- Setelah lama online, kami akhirnya offline'},
                {img: '/timeline/5.png', title: 'Debut(2)', desc: 'Buton Utara, Oktober 2021 --- Damar grogi ketemu calon mertua'},
                {img: '/timeline/6.jpg', title: 'Lamaran', desc: 'Konawe Selatan, Februari 2022 --- Perjalanan dari barat mencari janji suci'},
                {img: '/timeline/7.png', title: 'Hari H', desc: 'Hari H --- Kami tunggu yaa'},
            ],
            title: 'Pertemuan'
        })
    }

    onChange = (event) => {
        this.setState({
            title: this.state.items[event].title
        })
    }

    render() { 
        const { theme } = this.props;
        return (
            <Fragment>
                <div className="w-9/12 container mx-auto h-screen">
                    <div className={`text-center ${ theme.headerStyle } text-5xl pb-12 pt-12`}>
                        Our Love Story
                    </div>

                    <div className="flex flex-col justify-start items-center h-52">
                    <h1 className={`${theme.headerStyle} text-2xl mb-2`}>{ this.state.title }</h1>
                    <Carousel dynamicHeight={true} autoPlay={true} interval={4000} infiniteLoop={true}
                    width={window.screen.width >= 1000 ? 350 : window.screen.width * 14 / 15} 
                    showThumbs={false} onChange={this.onChange}>
                        {
                            this.state.items.map(data => {
                                return (
                                    <div key={data.img}>
                                        <img src={ data.img } alt={ data.title } srcset="" />
                                        
                                        <p className="legend">{ data.desc }</p>
                                    </div>
                                )
                            }
                        )}
                    </Carousel>
                        
                    </div>



                </div>
            </Fragment>
        );
    }
}
 
export default Timeline;