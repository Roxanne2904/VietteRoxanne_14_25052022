export const colors = {
    colorPrimary: ' #2b489b',
    colorPrimaryLessOpacity: '#B1BBDA',
    grey: '#C2C2C2',
    darkerGrey: '#4F4F65',
    white: 'white',
}
export const display = {
    none: 'none',
    block: 'block',
    flex: 'flex',
    center: 'center',
    column: 'column',
    relative: 'relative',
}

export const font = {
    main: '0.8rem',
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

export const MIN_WIDTH_PATTERN = `min-width: -moz-available;
    min-width: -webkit-fill-available;
    min-width: fill-available; padding:5px;`

export const LINK_PATTERN = `color: ${colors.darkerGrey};
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
