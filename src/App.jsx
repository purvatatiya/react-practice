import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import './App.css'

function App() {
  

  return (
    <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width:"100vh" }}>
        <Typography variant="h1"> To do list </Typography>

        <Box component="section" sx={{ p: 2 }}>
        <TextField sx={{width: "100%"}} id="outlined-basic" label="Type Text" variant="outlined" />
    </Box>
          </Box>
      </Container>
      
  );
}

export default App
