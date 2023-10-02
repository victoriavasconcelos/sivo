import { Grid } from "@mui/material";
import LogoDescricao from '../../assets/logo_descrição 2.png'

export default function LogoLateral(){
    return(
        <Grid container item xs={3} id="logoLateral" alignContent="center">
                <Grid item>
                    <img src={LogoDescricao} ></img>

                </Grid>
        </Grid>
    )
}