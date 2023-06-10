import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../components/Product';
export default function ProductCarousel({ category }){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          paritialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          paritialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          paritialVisibilityGutter: 30
        }
      };
    return (
        <>
            <Carousel partialVisbile = {true} autoPlay = {true} autoPlaySpeed = {3000} infinite = {true} paritialVisibile='right' className='m-3' responsive={responsive} draggable = {true} swipeable = {true}>
                <Product imageLink = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7m?ver=7b59" title = "Title" price={10} ratings={2}/>
                <Product imageLink = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7m?ver=7b59" title = "Title" price={10} ratings={5}/>
                <Product imageLink = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7m?ver=7b59" title = "Title" price={10} ratings={5}/>
                <Product imageLink = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7m?ver=7b59" title = "Title" price={10} ratings={3}/>
                <Product imageLink = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7m?ver=7b59" title = "Title" price={10} ratings={5}/>
                <Product imageLink = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7m?ver=7b59" title = "Title" price={10} ratings={5}/>
            </Carousel>
        </>
    );
}