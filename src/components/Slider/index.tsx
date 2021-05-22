import * as S from './styles'
import Slider from 'react-slick'

type SlideProps = {
  imgSrc: string
  title: string
}

type SliderProps = {
  slides: SlideProps[]
}

const ReactSlider = ({ slides }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <S.Container>
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

export default ReactSlider
