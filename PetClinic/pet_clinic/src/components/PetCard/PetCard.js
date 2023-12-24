import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AuthContext from '../../context/AuthProvider';
import { useContext } from 'react';
import { MyContext } from '../UserPage/UserPage';

export default function PetCard({pet}) {
    const { auth } = useContext(AuthContext);
    const {flag, setFlag, setPetId} = useContext(MyContext)
    
    if (flag == 3) {
        return (
            <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Name: {pet.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pet ID: {pet.id}
                    </Typography> 
                    <Typography variant="body2" color="text.secondary">
                        Owner ID: {pet.ownerId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pet Type: {pet.petType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Last Visit: {pet.dob}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {pet.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{color: "#81c784"}} >Edit</Button>
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
                Last Visit: {pet.dob}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Status: {pet.status}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" sx={{color: "#81c784"}} onClick={()=>{setFlag(3); setPetId(pet.id)}}>Detailed Info</Button>
        </CardActions>
        </Card>
    </Grid>
        );
    }
    
}