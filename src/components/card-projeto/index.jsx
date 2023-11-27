import { Button, Card, CardActions, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

var card = {
  nome: "Plataforma Interativa de Aprendizado para Ciências Ambientais",
  descricao: "O projeto visa desenvolver uma plataforma online interativa e educacional voltada para o ensino e aprendizado das " +
    "ciências ambientais. A plataforma será uma ferramenta abrangente que oferecerá recursos educativos, como vídeos, animações, " +
    "quizzes e fóruns de discussão, com o objetivo de aumentar a compreensão e conscientização sobre questões ambientais.",
  professor: {
    nome: "Rafaella Chrystiane de Moura Matos",
    id: 1,
  },
  vagas: 20,
  disciplinas: [{ nome: "Front" }, { noome: "Web" }, { nome: "Back" }],
  situacao: 1
}
export default function CardProjeto(props) {
  const { card } = props

  const navigate = useNavigate()
  let situacao = ""
  switch (card?.situacao) {
    case 1:
      situacao = 'ABERTO'
      break;

    case 2:
      situacao = 'INICIADO'
      break;

    case 3:
      situacao = 'ENCERRADO'
      break;

    case 4:
      situacao = 'CANCELADO'
      break;

    default:
      break;
  }
  return (
    <Card sx={{ width: "20vw", background: '#151334' }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography fontWeight={600} gutterBottom>
              {card ? card.nome : ""}
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
              {card ? card.descricao : ""}
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
                {card ? card.professor.nome : ""}
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
                {card ? card.vagas : ""}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={1} direction='row' xs={12}>
            <Grid item>
              <Typography fontWeight={600}>
                Situação:
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="text.primaru">
                {situacao}
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
              {card ? card.disciplinas.map(d => (
                <Chip label={d.nome} key={d.id}/>
              )) : ""}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Button onClick={_ => navigate('/detalhes-projeto', { state: card.id })} color="primary" size="small" variant="contained">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}