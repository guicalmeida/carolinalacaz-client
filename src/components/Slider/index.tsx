import * as S from './styles'
import Slider from 'react-slick'

type SliderProps = {
  slides: {
    url: string
    fileName: string
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
            <div key={slide?.fileName}>
              <S.Image src={slide.url} />
            </div>
          )
        })}
      </Slider>
    </S.Container>
  )
}

export default ImageSlider
