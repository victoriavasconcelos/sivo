import { Button, Grid, TextField, Typography } from "@mui/material";
import LogoLateral from "../../components/logo-lateral";
import { useNavigate } from "react-router-dom";
 

export default function Login() {
    const navigate = useNavigate()
    return(
        <Grid container maxWidth sx={{height: "100vh"}} direction="row">
            <LogoLateral/>
            <Grid container item xs={9} justifyContent="center" alignContent="center">
                <Grid item id="formLogin">
                    <form>
                        <Typography variant="h4">Login</Typography>
                        <TextField 
                            sx={{marginTop: "20px"}}
                            label="E-mail"
                            fullWidth
                            multiline
                        />
                        <TextField 
                            sx={{marginTop: "20px"}}
                            label="Senha"
                            fullWidth
                            multiline
                        />
                        <Button
                            onClick={_ => navigate("/")}
                        >Entrar</Button>


                    </form>
                </Grid>
            </Grid>

        </Grid>
    )
}