import { createMuiTheme } from '@material-ui/core/styles';
// import { green, blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: blue[700],
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      // main: green[500],
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
