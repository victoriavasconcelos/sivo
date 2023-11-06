import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";


export default function CriarProjeto() {

    const [nome, setNome] = useState("")
    const [disciplina, setDisciplina] = useState("")
    const [descricao, setDescricao] = useState("")
    const [vagas, setVagas] = useState("")
    const [tempo, setTempo] = useState("")
    const [cronograma, setCronograma] = useState("")

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
                            <TextField
                                label="Disciplinas"
                                required
                                fullWidth
                                value={disciplina}
                                onChange={e => setDisciplina(e.target.value)}
                            />
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
                                rows={5}
                            />
                        </Grid>
                        <Grid item xs={6} container direction="column">
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
                                    value={tempo}
                                    onChange={e => setTempo(e.target.value)}
                                    fullWidth
                                />
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
                            rows={10}
                        />
                    </Grid>
                    <Grid container item xs={12} justifyContent="center">
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                type="submit"
                                fullWidth
                                color="success"
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

