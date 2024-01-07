import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AuthContext from '../../context/AuthProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../UserPage/UserPage';
import axios from 'axios';
import dayjs from 'dayjs';

export default function PetCard({pet, doctorsAccess}) {
    const { auth } = useContext(AuthContext);
    const currentDate = new Date();
    const {flag, setFlag, morePetInfo, setMorePetInfo} = useContext(MyContext);
    const [petStatus, setPetStatus] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [isNewVisit, setIsNewVisit] = useState(false);
    const [visitDate, setVisitDate] = useState('');
    const [visitComment, setVisitComment] = useState('');


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

    const handleEdit = () => {
        setIsEdit(true);
    }

    const handleApply = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/pets/${morePetInfo.id}`, {...morePetInfo, ...{status: petStatus}}, {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            })
        } catch (err) {
            console.log(err);
        }
        setIsEdit(false);
        
    }

    const handleAddVisit = () => {
        setIsNewVisit(true);
    }

    const sendNewVisit = async () => {
        if (doctorsAccess === auth.accessToken && visitDate !== '') {
        try {
            const response = await axios.post(`http://localhost:4000/visits`, {
                date: visitDate,
                comment: visitComment,
                petId: morePetInfo.id
            }, {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            })
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    } else if (visitDate !== '' && visitComment !== '') {
        try {
            const response = await axios.post(`http://localhost:4000/visits`, {
                date: visitDate,
                comment: visitComment,
                petId: morePetInfo.id
            }, {
                headers: {
                    "Authorization": "Bearer " + auth.accessToken
                }
            })
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    else {
        alert('Please, fill all the necessary fields.');
        return;
    }
        setIsNewVisit(false);
        setVisitComment('');
        setVisitDate('');
    }

    const getVisitDate = (date) => {
        try { 
            setVisitDate(date.$d.toISOString().slice(0, 9) + (Number(date.$d.toISOString()[9])+1));
        } catch (err) {
            return;
        }
    }

    const handleVisitComment = (e) => {
        setVisitComment(e.target.value);
    }

    const handlePetStatus = (e) => {
        setPetStatus(e.target.value);
    }

    useEffect(()=> {
        setPetStatus(morePetInfo.status);
    }, [morePetInfo]);

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
                    {isEdit ? 
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={petStatus}
                            label="Status"
                            onChange={handlePetStatus}
                            >
                            <MenuItem value='alive'>Alive</MenuItem>
                            <MenuItem value='deceased'>Deceased</MenuItem>
                            <MenuItem value='missing'>Missing</MenuItem>
                            <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    : 
                    <Typography variant="body2" color="text.secondary">
                        Status: {petStatus}
                    </Typography>}
                    {isNewVisit ? 
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker
                            minDate={dayjs(currentDate)}
                            label="Visit Date"
                            onChange={(date)=> getVisitDate(date)}
                            />
                        </DemoContainer>
                        </LocalizationProvider> 
                        <Box>
                        <TextField
                            value={visitComment}
                            onChange={handleVisitComment}
                            margin="normal"
                            fullWidth
                            id="v-comment"
                            label="Visit Comment"
                            name="comment"
                            autoComplete="off"
                            autoFocus
                        />
                        </Box>
                    </Box>
                    : <></>}
                </CardContent>
                <CardActions>
                    {(auth.accessToken === doctorsAccess && isEdit) ? <Button size="small" sx={{color: "#81c784"}} onClick={handleApply}>Apply</Button> : <Button size="small" sx={{color: "#81c784"}} onClick={handleEdit}>Edit</Button>}
                    {isNewVisit ? <Button size="small" sx={{color: "#81c784"}} onClick={sendNewVisit}>Send visit</Button> : <Button size="small" sx={{color: "#81c784"}} onClick={handleAddVisit}>Make visit</Button>}
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
            <Button size="small" sx={{color: "#81c784"}} onClick={getMoreInfo}>Detailed Info</Button>
        </CardActions>
        </Card>
    </Grid>
        );
    }
    
}