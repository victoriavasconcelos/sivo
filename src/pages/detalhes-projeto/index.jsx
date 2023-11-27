import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../service/Api";

// const card = {
//     titulo: "Plataforma Interativa de Aprendizado para Ciências Ambientais",
//     definicao: "O projeto visa desenvolver uma plataforma online interativa e educacional voltada para o ensino e aprendizado das " +
//         "ciências ambientais. A plataforma será uma ferramenta abrangente que oferecerá recursos educativos, como vídeos, animações, " +
//         "quizzes e fóruns de discussão, com o objetivo de aumentar a compreensão e conscientização sobre questões ambientais.",
//     professor: {
//         nome: "Rafaella Chrystiane de Moura Matos",
//         id: 1,
//     },
//     vagas: 20,
//     disciplinas: ["Front", "Web", "Back"],
//     duracao: 12
// }
export default function DetalhesProjeto() {
    const location = useLocation()
    const [card, setCard] = useState()
    useEffect(() => {
        api.get(`projeto/${location.state}`)
            .then(result => {
                setCard(result.data)
            })
    })
    
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
        </Grid>
    )
}