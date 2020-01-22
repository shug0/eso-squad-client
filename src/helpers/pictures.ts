import { COLORS } from '../constants/theme'

export const getImgById = (id: string, quality = 'low') => {
  return (
    `${process.env.PUBLIC_URL}/assets/illustrations/${quality}/${id}.jpg`
      .replace('-veteran', '')
      .replace(/(-i.jpg)|(-ii.jpg)/, '.jpg')
  )
};

export const getHeaderStyles = (url: string) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundColor: COLORS.backgroundDark
});
