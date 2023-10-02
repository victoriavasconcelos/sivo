import { Button, Card, CardActions, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const card = {
    titulo: "Plataforma Interativa de Aprendizado para Ciências Ambientais",
    definicao: "O projeto visa desenvolver uma plataforma online interativa e educacional voltada para o ensino e aprendizado das " +
    "ciências ambientais. A plataforma será uma ferramenta abrangente que oferecerá recursos educativos, como vídeos, animações, " +
    "quizzes e fóruns de discussão, com o objetivo de aumentar a compreensão e conscientização sobre questões ambientais.",
    professor: {
      nome: "Rafaella Chrystiane de Moura Matos",
      id: 1,
    },
    vagas: 20,
    disciplinas: ["Front", "Web", "Back"]
}
export default function CardProjeto() {
  const navigate = useNavigate()
  return (
    <Card sx={{ width: 350, background: '#151334' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography fontWeight={600} gutterBottom>
            {card.titulo}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}>
              {card.definicao}
            </Typography>
          </Grid>
          <Grid item container spacing={1} direction='row' xs={12}>
            <Grid item>
              <Typography fontWeight={600}>
                Docente:
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="text.primaru">
                {card.professor.nome}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={1} direction='row' xs={12}>
            <Grid item>
              <Typography fontWeight={600}>
                Número de vagas:
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="text.primaru">
                {card.vagas}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={600} gutterBottom>
              Disiplinas:
            </Typography>
          </Grid>
          <Grid item>
            <Stack spacing={2} direction='row'>
              {card.disciplinas.map(d => (
                <Chip label={d} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Button onClick={_ => navigate('/detalhes-projeto')} color="primary" size="small" variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
}