import { Button, Chip, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../service/Api";

export default function DetalhesProjeto() {

    const location = useLocation()
    const [card, setCard] = useState(null)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))

        api.get(`projeto/${location.state}`)
            .then(result => {
                setCard(result.data)
            })
    }, [])

    function handleClick() {
        api.put(`projeto/${card.id}/aluno/${user.id}`)
            .then(result => {
                navigate("/perfil")
            })
    }

    function handleUpdateSituation(situacao) {
        api.put(`projeto/${card.id}/${situacao}`)
            .then(result => {
                setCard(result.data)
            })
    }

    function Buttons() {
        if (user && card) {
            if (user.isProfessor) {
                switch (card.situacao) {
                    case 1:
                        return (
                            <Grid item container xs={6} width='60%' mt={10}>
                                < Grid item xs={6} width='60%' mt={10} >
                                    <Button variant="contained" color="primary" size="large" onClick={_ => handleUpdateSituation(2)}>
                                        Iniciar
                                    </Button>
                                </Grid >
                                < Grid item xs={6} width='60%' mt={10} >
                                    <Button variant="contained" color="error" size="large" onClick={_ => handleUpdateSituation(4)}>
                                        Cancelar
                                    </Button>
                                </Grid >
                            </Grid>
                        )

                    case 2:
                        return (
                            <Grid item container xs={6} width='60%' mt={10}>
                                < Grid item xs={6} width='60%' mt={10} >
                                    <Button variant="contained" color="primary" size="large" onClick={_ => handleUpdateSituation(3)}>
                                        Encerrar
                                    </Button>
                                </Grid >
                                < Grid item xs={6} width='60%' mt={10} >
                                    <Button variant="contained" color="error" size="large" onClick={_ => handleUpdateSituation(4)}>
                                        Cancelar
                                    </Button>
                                </Grid >
                            </Grid>
                        )

                    default:
                        break;
                }
            } else {
                return (
                    <Grid item xs={6} width='60%' mt={10}>
                        <Button variant="contained" color="primary" size="large" onClick={_ => handleClick()}>
                            Inscrever-se
                        </Button>
                    </Grid>)
            }
        }
    }

    return (
        <Grid container spacing={2} padding={8} direction='column'>
            <Grid item>
                <Typography >Título do Projeto: {card ? card.nome : ""}</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Definição do Projeto: {card ? card.descricao : ""}</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Cronograma: {card ? card.cronograma : ""}</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Duração: {card ? card.duracao : ""} meses</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Vagas: {card ? card.vagas : ""}</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Docente: {card ? card.professor.nome : ""}</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Disciplinas: {card ? card.disciplinas.map(d => (
                    <Chip label={d.nome} key={d.id} />
                )) : ""}</Typography>
            </Grid>
            <Grid item xs={6} width='60%'>
                <Typography >Alunos: {card ? card.alunos.map(a => (
                    <Chip label={a.nome} key={a.id} />
                )) : ""}</Typography>
            </Grid>
            <Buttons />
        </Grid>
    )
}