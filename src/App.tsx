import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './theme/theme';
import MainScreen from '../src/components/main-screen/main-screen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainScreen />
    </ThemeProvider>
    
  );
}

export default App;
