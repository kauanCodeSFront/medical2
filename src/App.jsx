import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Edital from './edital.jsx' // importe seu componente Edital

function App() {
  return (
    <Router>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/edital" element={<Edital />} />
      </Routes>
    </Router>
  )
}

function HeaderContent() {
  return (
    <header className='headercontent'>
      <h2>
        Good<span>Life</span> Medical Center
      </h2>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="https://discord.gg/ZDbaA8SW">Discord</a></li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main className="main-content">

      <section className="welcome-section">
        <header>
          <h2>Seja bem-vindo(a) ao GoodLife Medical Center</h2>
        </header>
        <p>
          Este Manual de Conduta apresenta as normas e orientações essenciais para todos os colaboradores e profissionais da instituição.
        </p>
        <p>
          Ele tem como objetivo garantir um ambiente seguro, ético e organizado, orientar o relacionamento com colegas e pacientes, e apoiar o cumprimento do edital.
        </p>
      </section>

      <section>
        <h2>Princípios Gerais</h2>
        <p>Todos os colaboradores devem agir com base nos seguintes princípios:</p>
        <ul>
          <li>Ética e integridade</li>
          <li>Respeito à vida e à dignidade humana</li>
          <li>Sigilo e confidencialidade das informações</li>
          <li>Trabalho em equipe e comunicação clara</li>
          <li>Responsabilidade e cumprimento de normas internas</li>
        </ul>
      </section>

      <section>
        <h2>Conduta Profissional para Paramedic</h2>
        <p>É dever de todos:</p>
        <ul>
          <li>Tratar pacientes, familiares e colegas com respeito e cordialidade</li>
          <li>Cumprir protocolos clínicos, administrativos e de segurança</li>
          <li>Manter postura profissional em todas as dependências do hospital</li>
          <li>Zelar pelo patrimônio, equipamentos e imagem do hospital</li>
        </ul>
      </section>

      <section>
        <h2>Comunicação via Rádio (Estilo EMS)</h2>
        <p><strong>Uso do Rádio:</strong> Obrigatório durante o expediente ou serviço ativo.</p>
        <p><strong>Identificação e Frases Padrão:</strong> Sempre informe unidade e status:</p>
        <ul>
          <li>"EMS 1 a caminho do chamado"</li>
          <li>"EMS 2 chegando no local"</li>
          <li>"EMS 3 paciente estabilizado, retornando ao hospital"</li>
        </ul>
        <p>Mensagens curtas e objetivas, confirmando sempre a recepção: "Copiado", "Entendido".</p>
        <p><strong>Designação de Unidades:</strong></p>
        <ul>
          <li>"EMS 1" – ambulância/equipe 1</li>
          <li>"EMS 2" – ambulância/equipe 2</li>
          <li>"EMS 3" – ambulância/equipe 3</li>
        </ul>
      </section>

      <section>
        <h2>Medidas Disciplinares</h2>
        <p>O descumprimento das normas deste manual poderá resultar em:</p>
        <ul>
          <li>Advertência verbal ou escrita</li>
          <li>Suspensão</li>
          <li>Rescisão contratual</li>
          <li>Outras medidas legais cabíveis</li>
        </ul>
      </section>

      <section>
        <h2>Uniformes e Identificação</h2>
        <ul>
          <li>Uso obrigatório de uniforme limpo e crachá</li>
          <li>Circulação apenas em áreas autorizadas com uniforme</li>
          <li>Uniforme deve estar adequado à função</li>
        </ul>
      </section>

      <section>
        <h2>Segurança do Paciente</h2>
        <ul>
          <li>Cumprir protocolos de higiene e procedimentos clínicos</li>
          <li>Relatar incidentes, riscos ou erros imediatamente</li>
          <li>Priorizar sempre a integridade física e emocional do paciente</li>
        </ul>
      </section>

      <section>
        <h2>Disposições Finais</h2>
        <p>
          Este manual entra em vigor a partir da data de publicação.
          Todos os colaboradores devem declarar ciência e compromisso com as normas aqui estabelecidas, garantindo um ambiente seguro, ético e de excelência no atendimento.
        </p>
      </section>

      <div className='linkdiv'>
        <Link to="/edital" className='editallink'>Fazer Edital</Link>
      </div>

    </main>
  )
}

export default App
