import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          '&:hover': {
            textShadow: '0.5px 0 0, -0.5px 0 0'
          },
          '&:focus': {
            textShadow: '0.5px 0 0, -0.5px 0 0'
          }
        }
      },
      variants: [{
        props: { variant: 'caption' },
        style: {
          color: '#fff',
          backgroundColor: '#4481c3',
        }
      }],
    }
  },
  palette: {
    primary: {
      main: '#383838',
    },
    secondary: {
      main: '#4481c3',
    }
  }
});

export default theme;