import * as S from './styles'

type PicProps = {
  src: string
}

const ProjectPic = ({ src }: PicProps) => {
  return <S.Pic src={src} loading="lazy" />
}

const ProjectMasonry = () => {
  return (
    <S.Container>
      <S.MasonryGrid
        breakpointCols={2}
        className="masonryGrid"
        columnClassName="MasonryColumn"
      >
        <ProjectPic src="img/ensaioAna/1.jpg" />
        <ProjectPic src="img/ensaioAna/2.jpg" />
        <ProjectPic src="img/ensaioAna/3.jpg" />
        <ProjectPic src="img/ensaioAna/4.jpg" />
        <ProjectPic src="img/ensaioAna/5.jpg" />
        <ProjectPic src="img/ensaioAna/6.jpg" />
        <ProjectPic src="img/ensaioAna/7.jpg" />
        <ProjectPic src="img/ensaioAna/8.jpg" />
        <ProjectPic src="img/ensaioAna/9.jpg" />
        <ProjectPic src="img/ensaioAna/10.jpg" />
        <ProjectPic src="img/ensaioAna/11.jpg" />
        <ProjectPic src="img/ensaioAna/12.jpg" />
      </S.MasonryGrid>
    </S.Container>
  )
}

export default ProjectMasonry
