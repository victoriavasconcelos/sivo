import { Box, Button, Chip, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../service/Api";


export default function CriarProjeto() {

    const [nome, setNome] = useState("")
    const [disciplina, setDisciplina] = useState([])
    const [disciplinas, setDisciplinas] = useState([])
    const [descricao, setDescricao] = useState("")
    const [vagas, setVagas] = useState("")
    const [tempo, setTempo] = useState(6)
    const [cronograma, setCronograma] = useState("")

    const duracoes = [{value: 6, label: "6 meses"}, {value: 12, label: "12 meses"}, {value: 18, label: "18 meses"}, {value: 24, label: "24 meses"}, ]

    useEffect(() => {
        api.get("disciplina")
            .then(result => {
                setDisciplinas(result.data)
            })
            .catch(err => {
                alert(err.data)
            })
    }, [])
    
    function handleSubmit() {
        const body = {
            nome : nome,
            disciplinas : disciplina,
            descricao: descricao,
            cronograma : cronograma,
            vagas : vagas,
            duracao : tempo,
        }

        console.log(body)
    }

    return (
        <section>
            <form className='forms'>
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Nome do Projeto"
                                required
                                fullWidth
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Disciplinas</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    label="Disciplinas"
                                    required
                                    multiple
                                    value={disciplina}
                                    onChange={e => setDisciplina(e.target.value)}
                                    renderValue={(selected, i) => (
                                      <Box key={i} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                          <Chip key={value} label={disciplinas.find(d => d.id == value).nome} />
                                        ))}
                                      </Box>
                                    )}
                                >
                                    {disciplinas.map(d => (
                                        <MenuItem
                                            key={d.id}
                                            value={d.id}
                                        >{d.nome}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Descrição"
                                required
                                fullWidth
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                                multiline
                                rows={5}
                            />
                        </Grid>
                        <Grid item xs={6} spacing={2} container direction="column">
                            <Grid item>
                                <TextField
                                    label="Vagas Ofertadas"
                                    required
                                    fullWidth
                                    type="number"
                                    value={vagas}
                                    onChange={e => setVagas(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Tempo de Duração"
                                    required
                                    select
                                    value={tempo}
                                    onChange={e => setTempo(e.target.value)}
                                    fullWidth
                                >
                                    {duracoes.map(d => (
                                        <MenuItem
                                            key={d.value}
                                            value={d.value}
                                        >{d.label}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Cronograma"
                            required
                            fullWidth
                            value={cronograma}
                            onChange={e => setCronograma(e.target.value)}
                            multiline
                            rows={10}
                        />
                    </Grid>
                    <Grid container item xs={12} justifyContent="center">
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                //type="submit"
                                fullWidth
                                color="success"
                                onClick={_ => handleSubmit()}
                            >
                                Concluir
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </section>
    )
}

