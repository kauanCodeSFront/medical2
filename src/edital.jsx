import { useState } from "react";
import './App.css';

function EditalMain() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const payload = {
      nome: form.nome.value,
      passaporte: form.passaporte.value,
      idade: form.idade.value,
      discord: form.discord.value,
      tempoCidade: form.tempoCidade.value,
      conhecimentos: form.conhecimentos.value,
      atendimento: form.atendimento.value,
      experiencia: form.experiencia.value,
      microfone: form.microfone.value,
      tempoDisponivel: form.tempoDisponivel.value,
      cnh: form.cnh.value,
      periodos: form.periodos.value,
    };

    try {
      await fetch("https://medical2-3.onrender.com/edital", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar o formulário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="form-container">
      <h1>Formulário de Recrutamento HP</h1>
      <form onSubmit={handleSubmit} className="edital-form">
        <label>
          Nome do Personagem:
          <input name="nome" placeholder="Digite o nome do seu personagem" className="input" required />
        </label>

        <label>
          Passaporte (ID in game):
          <input name="passaporte" placeholder="Digite seu passaporte" className="input" required />
        </label>

        <label>
          Idade (IRL):
          <input name="idade" placeholder="Digite sua idade" type="number" className="input" required />
        </label>

        <label>
          Discord:
          <input name="discord" placeholder="Ex: Enzo#1234" className="input" required />
        </label>

        <label>
          Tempo na cidade:
          <input name="tempoCidade" placeholder="Ex: 3 meses" className="input" required />
        </label>

        <label>
          Conhecimentos fundamentais:
          <input name="conhecimentos" placeholder="Digite seus conhecimentos" className="input" required />
        </label>

        <label>
          Como um paciente procura atendimento:
          <input name="atendimento" placeholder="Explique como funciona" className="input" required />
        </label>

        <label>
          Experiência em hospital (In Game):
          <textarea name="experiencia" placeholder="Descreva sua experiência" rows={4} required />
        </label>

        <fieldset className="radiofieldset">
          <legend>Você possui um microfone de boa qualidade?</legend>
          <label>
            Bom <input type="radio" name="microfone" value="Bom" required />
          </label>
          <label>
            Ruim <input type="radio" name="microfone" value="Ruim" />
          </label>
          <label>
            Sem <input type="radio" name="microfone" value="Sem microfone" />
          </label>
        </fieldset>

        <fieldset className="fieldset">
          <label>
            Tempo disponível para trabalhar (horas/dia):
            <input name="tempoDisponivel" placeholder="Ex: 2h por dia" required />
          </label>

          <label>
            Possui CNH? Se sim, qual:
            <input name="cnh" placeholder="Digite sua CNH" />
          </label>

          <label>
            Períodos disponíveis:
            <input name="periodos" placeholder="Ex: Manhã, Tarde, Noite" />
          </label>
        </fieldset>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {success && <p className="success-msg">Formulário enviado com sucesso!</p>}
      </form>
    </main>
  );
}

export default EditalMain;
