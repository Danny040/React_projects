import axios from 'axios';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import PetCard from '../PetCard/PetCard';
import Grid from '@mui/material/Grid';

export default function PetInfo({petId}) {
    const {auth} = useContext(AuthContext);
    const [petMoreInfo, setPetMoreInfo] = useState({});
    const getMoreInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/pets/${petId}`, {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            });
            setPetMoreInfo(response.data);
        } catch (err) {
            console.log(err);
        }
        
    }

    getMoreInfo();

    return (
        <Grid container>
            <PetCard pet={petMoreInfo} />
        </Grid>
    );
}