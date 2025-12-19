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
    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
             fields: [
                { name: "👤 Nome", value: data.nome || "Não informado" },
                { name: "🛂 Passaporte", value: data.passaporte || "Não informado" },
                { name: "🎂 Idade", value: data.idade || "Não informado", inline: true },
                { name: "💬 Discord", value: data.discord || "Não informado", inline: true },
                { name: "🏙️ Tempo na cidade", value: data.tempoCidade || "Não informado" },
                { name: "📚 Conhecimentos", value: data.conhecimentos || "Não informado" },
                { name: "🛎️ Atendimento", value: data.atendimento || "Não informado" },
                { name: "💼 Experiência", value: data.experiencia || "Não informado" },
                { name: "🎙️ Microfone", value: data.microfone || "Não informado", inline: true },
                { name: "⏰ Tempo disponível", value: data.tempoDisponivel || "Não informado", inline: true },
                { name: "🚗 CNH", value: data.cnh || "Não informado" },
                { name: "🗓️ Períodos", value: data.periodos || "Não informado" },
            ],
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
