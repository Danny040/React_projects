import pets from '../../assets/dog-face.jpg';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import './Home.css';

export default function Home() {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <Stack direction="column" justifyContent="center"
            alignItems="center">
                <Box>
                    <img src={pets} alt="pets" className='pets'/>
                </Box>
                <Box sx={{textAlign: "center", textTransform: "uppercase"}}>
                    <Typography variant="h1" component="h1" sx={{fontSize: "3rem"}}>
                        Make Your Pet Happy, Let It Be Free!
                    </Typography>
                    <Typography variant='h2' component='h1' sx={{fontSize: "2.5rem",  textDecoration: "underline"}}>
                        Or
                        Fix It In Our Pet Clinic :D
                    </Typography>
                </Box>
            </Stack>
        </Box> 
    );
}