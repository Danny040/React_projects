import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AuthContext from '../../context/AuthProvider';
import { useContext, useState } from 'react';
import { MyContext } from '../UserPage/UserPage';
import axios from 'axios';

export default function PetCard({pet, doctorsAccess}) {
    const { auth } = useContext(AuthContext);
    const {flag, setFlag, morePetInfo, setMorePetInfo} = useContext(MyContext);


    const getMoreInfo = async () => {
        setFlag(3); 
        try {
            const response = await axios.get(`http://localhost:4000/pets/${pet.id}`, {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            });
            setMorePetInfo(response.data);
        } catch (err) {
            console.log(err);
        }
        
    }

    if (flag == 3) {
        return (
            <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Name: {morePetInfo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pet ID: {morePetInfo.id}
                    </Typography> 
                    <Typography variant="body2" color="text.secondary">
                        Owner ID: {morePetInfo.ownerId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pet Type: {morePetInfo.petType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Date of Birth: {morePetInfo.dob}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {morePetInfo.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    {auth.accessToken === doctorsAccess ? <Button size="small" sx={{color: "#81c784"}} >Edit</Button> : <></>}
                    <Button size="small" sx={{color: "#81c784"}} >Add visit</Button>
                </CardActions>
            </Card>
        </Grid>
        );
    }
    else {
        return (
            <Grid item xs={12} sm={6} md={4}>
        <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Name: {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Pet Type: {pet.petType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Date of Birth: {pet.dob}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Status: {pet.status}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" sx={{color: "#81c784"}} onClick={()=>getMoreInfo()}>Detailed Info</Button>
        </CardActions>
        </Card>
    </Grid>
        );
    }
    
}