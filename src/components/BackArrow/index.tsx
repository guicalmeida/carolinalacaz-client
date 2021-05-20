import Link from 'next/link'
import * as S from './styles'

type ArrowProps = {
  linkTo: string
}

const BackArrow = ({ linkTo }: ArrowProps) => {
  return (
    <Link href={linkTo}>
      <a>
        <S.Ico
          className="iconify"
          data-icon="dashicons:arrow-left-alt2"
          data-inline="false"
        />
      </a>
    </Link>
  )
}

export default BackArrow
