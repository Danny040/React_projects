import { useContext, createContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';
import VisitCard from '../VisitCard/VisitCard';
import PetInfo from '../PetInfo/PetInfo';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddNewPet from '../AddNewPet/AddNewPet';

export const MyContext = createContext();
const doctorsAccess = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwicm9sZSI6ImRvY3RvciIsImlhdCI6MTUxNjIzOTAyMn0.0_MKcjJoHX-Vsjb4vVlWZLZMY-45nMQ22MTXUCAQgng";

export default function UserPage({defaultTheme}) {
    const {isLoggedIn, auth} = useContext(AuthContext);
    const [pets, setPets] = useState([]);
    const [status, setStatus] = useState('');
    const [visits, setVisits] = useState([]);
    const [flag, setFlag] = useState(0);
    const [morePetInfo, setMorePetInfo] = useState({});

    const getPets = async () => {   
            try{
                const response = await axios.get('http://localhost:4000/pets', {
                    headers: {
                        "Authorization": "Bearer " + auth.accessToken
                    }
                });
                setPets(response.data);
                setStatus('');
                setFlag(1);
            } catch(error) {
                console.log(error)
            } 
    }    

    const handleStatus = (event) => {
        if (status === 'alive') {
            return setStatus('');
        }
        return setStatus(event.target.value);
    }

    const sortUpcomingVisits = (upcomingVisits) => {
        const sortedVisits = upcomingVisits;
        sortedVisits.sort((a, b)=>{
            const dateA = Date.parse(a.date);
            const dateB = Date.parse(b.date);
            if (dateA > dateB) {
                return 1;
            }
            if (dateA < dateB) {
                return -1;
            }
            return 0;
        })
    }

    const getVisits = async () => {
        try{
            const response = await axios.get('http://localhost:4000/visits', {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            });
            sortUpcomingVisits(response.data);
            setVisits(response.data);
            setFlag(2);
        } catch(error) {
            console.log(error)
        } 
    }

    const display = () => {
        switch(flag) {
            case 1: return (pets.map((pet, index)=>{
                if(pet.status === status) {
                    return <PetCard key={index} pet={pet} />
                } 
                else if (status === '') {
                    return <PetCard key={index} pet={pet} />
                }
            }) );
            case 2: return (visits.map((visit, index) => {return <VisitCard key={index} visit={visit} />}));
            case 3: return (<PetInfo doctorsAccess={doctorsAccess} />);
            case 4: return (<AddNewPet getPets={getPets}/>)
        }
    }

    if(isLoggedIn) {
        return (
            <MyContext.Provider value={{flag, setFlag, morePetInfo, setMorePetInfo}}>
                <ThemeProvider theme={defaultTheme}>
                <Container>
                    <Box>
                        <Box sx={{
                            marginBottom: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            {
                                auth.accessToken === doctorsAccess ? 
                                <FormGroup>
                                    <FormControlLabel
                                    label="Status: alive" 
                                    control={<Checkbox value="alive" onChange={handleStatus} name="alive" />}
                                    />
                                </FormGroup> : <></>
                            }
                            <Button variant="outlined" onClick={getPets}>Get Pets</Button>
                            {auth.accessToken === doctorsAccess ? <Button variant="outlined" onClick={getVisits}>Upcoming visits</Button>
                            : <Button variant="outlined" onClick={()=>setFlag(4)} >Add a new Pet</Button>}
                        </Box>
                        <Grid container rowSpacing={3} columnSpacing={3}>
                            {
                                display()
                            }
                        </Grid>
                    </Box>
                </Container>
                </ThemeProvider>
            </MyContext.Provider>
        );
        
    }else {
        return (
            <Navigate to="/" />
        );
    }
}