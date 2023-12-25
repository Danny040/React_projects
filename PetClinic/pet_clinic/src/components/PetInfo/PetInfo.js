import axios from 'axios';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import PetCard from '../PetCard/PetCard';
import Grid from '@mui/material/Grid';

export default function PetInfo({doctorsAccess}) {
    const {auth} = useContext(AuthContext);
    

    return (
        <Grid container>
            <PetCard doctorsAccess={doctorsAccess} />
        </Grid>
    );
}