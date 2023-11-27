import { Grid, Typography, Box } from "@mui/material";
import logo from '../../assets/logo_descrição 2.png'
import CardProjeto from "../../components/card-projeto";
import { useEffect, useState } from "react";
import { api } from "../../service/Api";

export default function Home() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        api.get("projeto")
            .then(result => {
                setCards(result.data.slice(0, 4))
            })
    }, [])
    return (
        <section>
            <Grid container spacing={8} alignItems='center' direction='column'>
                <Grid item>
                    <Typography>
                        <img src={logo} alt="logo" />
                    </Typography>
                </Grid>
                <Grid item container direction='row' justifyContent='center' spacing={4}>
                    {cards.map(c => (
                        <Grid item key={c.id}>
                            <CardProjeto card={c}/>
                        </Grid>
                    ))}
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        Quem Somos
                    </Typography>
                </Grid>
                <Grid item width='50%'>
                    <Typography padding={4} sx={{ border: 1, borderColor: 'gray' }} justifySelf="center">
                        Bem-vindo à SIVO, sua parceira dedicada à excelência na gestão de projetos acadêmicos.
                        Somos uma equipe apaixonada e comprometida em proporcionar suporte abrangente a estudantes,
                        pesquisadores e instituições educacionais, garantindo que seus projetos acadêmicos atinjam todo o seu potencial.
                    </Typography>
                </Grid>
            </Grid>
        </section>
    )
}