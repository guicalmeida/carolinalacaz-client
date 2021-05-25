import * as S from './styles'
import Slider from 'react-slick'

type SliderProps = {
  slides: {
    imgSrc: string
    title: string
  }[]
  dark: boolean
}

const ImageSlider = ({ slides, dark }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <S.Container dark={dark}>
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div key={slide.title}>
              <S.Image src={slide.imgSrc} />
            </div>
          )
        })}
      </Slider>
    </S.Container>
  )
}

export default ImageSlider
