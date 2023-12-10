import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import notFound from '../../assets/notFound.png';

export default function ErrorPage() {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <Stack direction="column" justifyContent="center"
            alignItems="center">
                <Typography variant="h1" component="h1" sx={{fontSize: "5rem", color: "#ab47bc"}}>
                    404
                </Typography>
                <Typography variant="h2" component="h2" sx={{fontSize: "3rem"}}>
                    This page doesn't exist...
                </Typography>
                <img src={notFound} alt="page not found" style={{
                    width: '200px'
                }}/>
            </Stack>
        </Box>
    );
}