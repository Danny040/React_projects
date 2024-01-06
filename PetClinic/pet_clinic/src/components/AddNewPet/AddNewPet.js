import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';
import dayjs from 'dayjs';

export default function AddNewPet() {
    const { auth } = useContext(AuthContext);
    const [petName, setPetName] = useState('');
    const [dob, setDob] = useState(''); // dod - date of birth
    const [petType, setPetType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const currentDate = new Date();

    // there is a problem with ownerId property. how to obtain it
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/pets', {
                name: petName,
                petType: petType,
                dob: dob,
                ownerId: auth.accessToken
            }, {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            })
            console.log(response.data);
        } catch (err) {
            if(!err.response) {
                setErrorMessage("No response from a server");
            } else if (err.response.status === 401) {
                setErrorMessage("Unauthorised");
            }
            else if (err.response.status === 400) {
                setErrorMessage("Please, fill all the fields");
            }
            else {
                setErrorMessage("Failed to send data");
            }
        }
    }

    useEffect(()=>{
        setErrorMessage('');
      }, [petName, petType, dob]);

    const handlePetName = (e) => {
        setPetName(e.target.value);
    }

    const handlePetType = (e) => {
        setPetType(e.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AddCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add a new pet
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                value={petName}
                onChange={handlePetName}
                margin="normal"
                required
                fullWidth
                id="petName"
                label="Pet's Name"
                name="name"
                autoComplete="off"
                autoFocus
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                    maxDate={dayjs(currentDate)}
                    label="Date of Birth"
                    value={dob}
                    onChange={(date) => setDob(date.$d.toISOString().slice(0, 9) + (Number(date.$d.toISOString()[9])+1))}
                    />
                </DemoContainer>
            </LocalizationProvider>
              <TextField
                value={petType}
                onChange={handlePetType}
                margin="normal"
                required
                fullWidth
                name="type"
                label="Pet's type"
                type="text"
                id="petType"
                autoComplete="off"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
            </Box>
            {errorMessage !== '' ? 
          <Box>
            <Alert severity="error">{errorMessage}</Alert>
          </Box> : <></>}
          </Box>
        </Container>
    );
}