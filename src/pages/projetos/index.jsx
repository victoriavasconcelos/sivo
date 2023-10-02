import { Autocomplete, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import CardProjeto from "../../components/card-projeto";

const professores = ['Jose Aldo', 'Rafaella Chrystiane de Moura Matos', 'Joao Tinoco', 'Diogenes Carvalho']
const disciplinas = ['Front', 'Back', 'Testes', 'IA', 'Redes']
const duracoes = [6, 12, 18]
const nomes = ['Projeto de Web', 'Plataforma de ensino', 'Análise de Vulnerabilidades do Magister']
const cards = []
for (let c = 0; c < 20; c++) {
    cards.push(
        <Grid item>
            <CardProjeto />
        </Grid>
    )
}
export default function Projetos() {
    return (
        <Grid container spacing={4} padding={8} direction='column'>
            <Grid item xs={12} container justifyContent='space-between'>
                <Grid item xs={4}>
                    <Autocomplete
                        options={nomes}
                        renderInput={(params) =>
                            <TextField {...params} label='Nome do Projeto' />
                        }
                    />
                </Grid>
                <Grid item xs={6} container direction='row' spacing={2}>
                    <Grid item xs={6}>
                        <Autocomplete
                            options={disciplinas}
                            multiple
                            getOptionLabel={(option) => option}
                            renderInput={(params) =>
                                <TextField {...params} label='Disciplinas' placeholder="Disciplinas" />
                            }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete
                            options={professores}
                            renderInput={(params) =>
                                <TextField {...params} label='Professores' />
                            }
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl fullWidth>
                            <InputLabel>Duração</InputLabel>
                            <Select label='Duração'>
                                {duracoes.map(d => (
                                    <MenuItem value={d}>{d} meses</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={4} marginTop={2} justifyContent='center'>
                {cards}
            </Grid>
        </Grid>
    )
}