import { blue } from "@mui/material/colors";

export default function CriarProjeto (){
    return (
        <><head>
            <title>Criar Projeto</title>
            <style>


            </style>
        </head>
        <body>
            <section>
                <form>
                    <div>
                        <label>Nome do Projeto</label>
                        <input type="text" name="Nome do Projeto" required></input>
                    </div>
                    <div>
                        <label>Disciplinas</label>
                        <input type="text" name="disciplinas" required />
                    </div>
                    <div id="conteiner-a">
                        <label>Descrição</label>
                        <textarea rows="8" name="msg" required></textarea>
                    </div>
                    <div>
                        <label>Vagas Ofertadas</label>
                        <input type="number" max="10" min="0" />
                    </div>
                    <div>
                        <label>Tempo de duração</label>
                        <input type="month" />
                    </div>
                    <div id="conteiner-b">
                        <label>Cronograma</label>
                        <textarea rows="15" required></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </section>
        </body>
        </>

    )
}

