import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LogoDescricao from '../../assets/logo_descrição 2.png' 
import { Grid, Typography } from '@mui/material';

export default function Footer(){
    return(
        <div id="foot">
            <Grid container justifyContent='space-between' direction='row' >
                
                <Grid container item direction='column' spacing={1} alignItems='center' xs={4}>
                    <Grid  item>
                        <Typography>Inicio</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Projetos</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Quem somos?</Typography>
                    </Grid>
                    <Grid item>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                        <EmailIcon/>
                    </Grid>
                </Grid>
                
                <Grid container item xs={4} justifyContent='flex-end'>
                    <Grid item>
                    <img src={LogoDescricao} ></img>
                    </Grid>
                </Grid>
                
                
            </Grid>
        </div>
    )
}