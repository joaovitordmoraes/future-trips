import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>Future Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia
        expedita itaque. Ratione dolores sit eum quisquam facilis molestiae
        placeat, eaque velit ipsam maxime non similique temporibus harum cumque
        porro.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
