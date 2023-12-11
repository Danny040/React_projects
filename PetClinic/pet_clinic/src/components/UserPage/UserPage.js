import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserPage({defaultTheme}) {
    const {isLoggedIn, auth} = useContext(AuthContext);
    const [pets, setPets] = useState([]);

    const getPets = async () => {   
            try{
                const response = await axios.get('http://localhost:4000/pets', {
                    headers: {
                        "Authorization": "Bearer " + auth.accessToken
                    }
                });
                setPets(response.data);
            } catch(error) {
                console.log(error)
            } 
    }    

    if(isLoggedIn) {
        return (
            <ThemeProvider theme={defaultTheme}>
            <Container>
                <Box>
                    <Box sx={{
                        marginBottom: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Button variant="outlined" onClick={getPets}>Get Pets</Button>
                    </Box>
                    <Grid container rowSpacing={3} columnSpacing={3}>
                        {
                            pets.map((pet, index)=>{
                                console.log(pet);
                                return <PetCard key={index} pet={pet}/>
                            })
                        }
                    </Grid>
                </Box>
            </Container>
            </ThemeProvider>
        );
        
    }else {
        return (
            <Navigate to="/" />
        );
    }
}