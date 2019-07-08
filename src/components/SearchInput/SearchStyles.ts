import { COLORS } from '../../constants/theme'

const styleSurcharger = (base: any, styles: any) => ({
  ...base,
  ...styles
})

export const SearchBarStyles = {
  control: (b: any) =>
    styleSurcharger(b, {
      padding: '0.5rem',
      borderRadius: 50
    }),
  indicatorSeparator: (b: any) =>
    styleSurcharger(b, {
      width: 0
    }),
  multiValue: (b: any) =>
    styleSurcharger(b, {
      padding: '0.3rem',
      borderRadius: 50
    }),
  multiValueLabel: (b: any) =>
    styleSurcharger(b, {
      fontSize: '0.8rem'
    }),
  multiValueRemove: (b: any) =>
    styleSurcharger(b, {
      borderRadius: 50
    }),
  option: (base: any, state: any) => ({
    ...base,
    background: state.isFocused
      ? COLORS.backgroundMedium
      : COLORS.backgroundDark
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: 10,
    paddding: 0,
    background: COLORS.backgroundDark
  }),
  menuList: (base: any) => ({
    ...base,
    paddding: 0
  }),
  placeholder: (base: any) => ({
    ...base,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '95%',
    padding: '3px 0 3px 0.3rem',
    textOverflow: 'ellipsis'
  })
}

export const getClassicSelectStyles = (error: boolean) => ({
  control: (b: any, s: any) =>
    styleSurcharger(b, {
      borderRadius: 12,
      height: 40,
      borderWidth: '2.5px',
      boxShadow: 'none',
      borderColor: s.isFocused ? (
        COLORS.primary
      ) : error ? COLORS.error : 'transparent'
    }),
  indicatorSeparator: (b: any) =>
    styleSurcharger(b, {
      width: 0
    }),
  option: (base: any, state: any) => ({
    ...base,
    color: state.isFocused ? COLORS.textLight : COLORS.textDark,
    background: state.isFocused ? COLORS.primary : COLORS.textLight
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: 10,
    paddding: 0,
    background: COLORS.textLight
  })
})

export const ClassicSelectTheme = (theme: any) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: COLORS.primary
  }
})
