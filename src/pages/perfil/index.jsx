import { Button, Grid, Typography } from "@mui/material";
import CardProjeto from '../../components/card-projeto'
import { useNavigate } from "react-router-dom";

const cards = [1, 2, 4, 5, 6]
export default function Perfil() {

    const navigate = useNavigate()

    return (
        <section>
            <Grid container spacing={8} marginX={20}>
                <Grid item sm={12}>
                    <Typography variant="h4">Projeto em Andamento</Typography>
                </Grid>
                <Grid item sm={12} container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <CardProjeto />
                    </Grid>
                    <Grid item sm={3}>
                        <Button variant="contained" color="primary" size="large" onClick={_ => navigate('/criar-projeto')}>
                            Novo Projeto
                        </Button>
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h4">Projetos Concluídos</Typography>
                </Grid>
                {cards.map(c => (
                    <Grid item>
                        <CardProjeto />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}