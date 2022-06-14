import { Dimensions } from "react-native"
const { width, height } = Dimensions.get('window')

const SIZES = {
  height,
  width,
  h1: 30,
  h2: 27,
  h3: 20,
  h4: 19,
  p: 13,
  sm: 12,
  base: 16
}

const COLORS = {
  background: '#fff',
  grey: '#DBDBDB',
  greyText: '#6A6F7D',
  primary: '#2DDA93'
}

export { SIZES, COLORS }