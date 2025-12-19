import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // npm install node-fetch

const app = express();
const PORT = process.env.PORT || 3001;
const WEBHOOK_URL = "https://discordapp.com/api/webhooks/1451365634838630431/XgSjwZa8UpqcaNQnfAJnhw6Q3CvY6y0DYYaF1Wb-H7ilMin1ak2c9fRQRf1zm_5D_9sM";

app.use(cors());
app.use(express.json());

app.post("/edital", async (req, res) => {
    const data = req.body;

    try {
        // Envia mensagem para a webhook
        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `📋 **Novo envio de formulário HP** 📋\n
**Nome:** ${data.nome}
**Passaporte:** ${data.passaporte}
**Idade:** ${data.idade}
**Discord:** ${data.discord}
**Tempo na cidade:** ${data.tempoCidade}
**Conhecimentos:** ${data.conhecimentos}
**Atendimento:** ${data.atendimento}
**Experiência:** ${data.experiencia}
**Microfone:** ${data.microfone}
**Tempo disponível:** ${data.tempoDisponivel}
**CNH:** ${data.cnh}
**Períodos:** ${data.periodos}`
            }),
        });

        res.status(200).json({ message: "Formulário enviado com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao enviar para a webhook." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
