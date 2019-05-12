import { shape, string } from 'prop-types'

const playerPropsType = shape({
  cp: string.isRequired,
  id: string.isRequired,
  lvl: string.isRequired,
  platform: string.isRequired,
  pseudo: string.isRequired,
  region: string.isRequired,
  role: string.isRequired
})

export default playerPropsType
