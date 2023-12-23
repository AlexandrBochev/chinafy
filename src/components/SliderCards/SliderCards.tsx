import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

interface SliderCardsProps {
  children: React.ReactNode
}

const SliderCards = ({ children }: SliderCardsProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    variableHeight: true,
  }

  return (
    <div className="">
      <Slider { ...settings }>
        { children }
      </Slider>
    </div>
  )
}

export default SliderCards