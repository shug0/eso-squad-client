import { COLORS } from '../constants/theme'

export const getImgById = (id: string) => {
  const path =
    `${process.env.PUBLIC_URL}/assets/illustrations/low/${id}.jpg`
      .replace('-veteran', '')
      .replace(/(-i.jpg)|(-ii.jpg)/, '.jpg')

  return path
}

export const getHeaderStyles = (url: string) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundColor: COLORS.backgroundDark
})
