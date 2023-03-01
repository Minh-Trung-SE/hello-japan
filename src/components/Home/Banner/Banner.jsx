import Banner1 from '@assets/images/banner/banner_home_1.jpg'
import Banner2 from '@assets/images/banner/banner_home_2.jpg'
import Banner3 from '@assets/images/banner/banner_home_3.jpg'
import { useEffect, useState } from 'react'

const IMAGES = [Banner1, Banner2, Banner3]

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide, IMAGES.length]);

    return (
        <div className="slider">
            {
                IMAGES.map(
                    (image, index) => (
                        <img
                            key={index}
                            className={index === currentSlide ? "block" : "hidden"}
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    )
                )
            }
        </div>
    )
}

export default Banner