import { Box, Stack } from '@mui/material';
import React from 'react'
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Righbar from './components/Righbar';
import Sidebar from './components/Sidebar';
import { useTheme, ThemeProvider } from '@mui/material/styles';



function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme = {theme}>
      <Box className="App">
        <Navbar />
        <Stack direction = 'row' spacing={2} justifyContent='space-evenly' >
          <Sidebar />
          <Feed />
          <Righbar />
        </Stack>
      </Box>
    </ThemeProvider>
      
    
  );
}

export default App;
