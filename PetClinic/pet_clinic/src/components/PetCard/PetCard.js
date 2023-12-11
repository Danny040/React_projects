import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PetCard({pet}) {
    return (
    <Grid item xs={12} sm={6} md={4}>
        <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Pet ID: {pet.petId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Pet Type: {pet.petType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Owner ID {pet.ownerId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Registered: {pet.dob}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" sx={{color: "#81c784"}}>Learn More</Button>
        </CardActions>
        </Card>
    </Grid>    
    );
}