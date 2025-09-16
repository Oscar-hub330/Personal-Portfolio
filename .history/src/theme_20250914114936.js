import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' }, // pick brand color
    secondary: { main: '#fea434' },
  },
  typography: {
    fontFamily: '"Roboto", "Inter", sans-serif',
  },
});

export default theme;
