import { Button, Grid, Switch, TextField, Typography } from "@mui/material";
import LogoLateral from "../../components/logo-lateral";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/Api";

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [checked, setChecked] = useState(false);

    function handleSubmit() {
        const login = {
            email: email,
            senha: senha
        }
        const url = checked ? "professor/login" : "aluno/login"
        api.post(url, login)
            .then(result => {
                const user = {
                    id : result.data.id,
                    nome : result.data.nome,
                    isProfessor : checked
                }
                localStorage.setItem("user", JSON.stringify(user))
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Grid container maxWidth sx={{ height: "100vh" }} direction="row">
            <LogoLateral />
            <Grid container item xs={9} justifyContent="center" alignContent="center">
                <Grid item id="form">
                    <form>
                        <Typography variant="h4">Login</Typography>
                        <TextField
                            sx={{ marginTop: "20px" }}
                            label="E-mail"
                            fullWidth
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            sx={{ marginTop: "20px" }}
                            label="Senha"
                            fullWidth
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            type="password"
                        />
                        <Grid container direction='row' alignItems='center' marginTop={1}>
                            <Typography>Aluno</Typography>
                            <Switch color="default" checked={checked} onChange={e => setChecked(e.target.checked)}/>
                            <Typography>Professor</Typography>
                        </Grid>
                        <Grid container justifyContent="center" alignContent="center">
                            <Grid item>
                                <Button
                                    onClick={_ => handleSubmit()}
                                >Entrar</Button>
                            </Grid>
                            <Grid item marginLeft={15}>
                                <Button
                                    onClick={_ => navigate("/cadastro")}
                                >Cadastre-se</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}