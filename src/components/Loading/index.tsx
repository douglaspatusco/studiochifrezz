import Image from 'next/image'
import { LoadingContainer } from './styles'

const Loading = () => (
  <LoadingContainer>
    <Image src="/images/logo-roxo.png" alt="Logotipo Studio Chifrezz" width={500} height={500} priority={true} />
  </LoadingContainer>
)

export default Loading
