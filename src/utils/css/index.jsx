export const colors = {
    colorPrimary: ' #2b489b',
    colorPrimaryLessOpacity: '#B1BBDA',
    grey: '#C2C2C2',
    darkerGrey: '#4F4F65',
    white: 'white',
    black: '#000000',
}
export const display = {
    none: 'none',
    block: 'block',
    flex: 'flex',
    center: 'center',
    column: 'column',
    relative: 'relative',
    spaceBetween: 'space-between',
    absolute: 'absolute',
}

export const font = {
    main: '0.8rem',
}

export const weight = {
    bold: 'bold',
}

export const numbers = {
    zero: '0',
    one: '1',
    ten: '10',
    twenty: '20',
    hundred: '100',
}

export const radius = {
    main: '3px',
    secondary: '8px',
}

export const MIN_WIDTH_PATTERN = `
min-width: -moz-available;
min-width: -webkit-fill-available;
min-width: fill-available; padding:5px;`

export const LINK_PATTERN = `
color: ${colors.darkerGrey};
font-weight: bold;
text-decoration: none;
font-size: 1rem;`

export const POSITION_PATTERN = `
position: fixed;
top: ${numbers.zero};
bottom: ${numbers.zero};
left: ${numbers.zero};
right: ${numbers.zero};
`
export const COLOR_PRIMARY = `
color: ${colors.colorPrimary};
`
export const POSITION_RELATIVE = `
position:${display.relative};
`
export const POSITION_ABSOLUTE = `
position:${display.absolute};
`
export const DISPLAY_BLOCK = `
display: ${display.block};
`
export const DISPLAY_FLEX = `
display: ${display.flex};
`
export const ALIGN_ITEMS_CENTER = `
align-items:${display.center};
`
export const FLEX_DIRECTION_COLUMN = `
flex-direction: ${display.column};
`
export const JUSTIFY_CONTENT_SPACE_BETWEEN = `
justify-content: ${display.spaceBetween};
`
export const JUSTIFY_CONTENT_CENTER = `
justify-content: ${display.center};
`
