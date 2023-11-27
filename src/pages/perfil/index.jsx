import { Button, Grid, Typography } from "@mui/material";
import CardProjeto from '../../components/card-projeto'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/Api";

export default function Perfil() {

    const navigate = useNavigate()
    const [user, setUser] = useState({ isProfessor: false })
    const [cards, setCards] = useState([])
    const [activeCard, setActiveCard] = useState(null)

    useEffect(() => {
        const getUser = (JSON.parse(localStorage.getItem("user")))
        setUser(getUser)
        api.get(`projeto/${getUser.isProfessor ? "professor" : "aluno"}/${getUser.id}`)
            .then(result => {
                const cardsResult = []
                result.data.map(card => {
                    if (card.situacao == 1 || card.situacao == 2) {
                        setActiveCard(card)
                    } else {
                        cardsResult.push(card)
                    }
                })
                setCards(cardsResult)
            })
    }, [])

    return (
        <section>
            <Grid container spacing={8} marginX={20}>
                <Grid item sm={12}>
                    <Typography variant="h4">Projeto em Andamento</Typography>
                </Grid>
                <Grid item sm={12} container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        {activeCard && <CardProjeto card={activeCard} />}
                    </Grid>
                    <Grid item sm={3}>
                        {user && user?.isProfessor ?
                            <Button variant="contained" color="primary" size="large" onClick={_ => navigate('/criar-projeto')}>
                                Novo Projeto
                            </Button> :
                            <Button variant="contained" color="primary" size="large" onClick={_ => navigate('/projetos')}>
                                Novo Projeto
                            </Button>
                        }
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h4">Projetos Concluídos</Typography>
                </Grid>
                {cards.map(card => (
                    <Grid item key={card.id}>
                        <CardProjeto card={card} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}