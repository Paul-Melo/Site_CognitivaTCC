import React from 'react'
import { Shield, Lock, Eye, FileText, Phone, Mail, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Shield className="mx-auto mb-4 text-[var(--cognitiva-dourado)]" size={48} />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
          Política de Privacidade
        </h1>
        <p className="text-lg text-gray-700">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
        <div className="mt-6">
          <Button
            type="button"
            onClick={() => (typeof onBack === 'function' ? onBack() : window.history.back())}
            className="inline-flex items-center bg-[var(--cognitiva-bege)]/20 text-[var(--cognitiva-azul-petroleo)] hover:bg-[var(--cognitiva-bege)]/30 px-4 py-2 rounded-full mt-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Voltar para a Home
          </Button>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-[var(--cognitiva-azul-petroleo)] mb-3 flex items-center">
            <Lock className="mr-2" size={20} />
            Compromisso com sua Privacidade
          </h2>
          <p className="text-gray-700 mb-0">
            A Cognitiva TCC está comprometida com a proteção de seus dados pessoais 
            e o cumprimento da Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). Esta política 
            explica como coletamos, usamos, armazenamos e protegemos suas informações.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4 flex items-center">
            <FileText className="mr-2" size={24} />
            1. Dados Coletados
          </h2>
          
          <h3 className="text-lg font-semibold text-[var(--cognitiva-azul-petroleo)] mb-3">
            1.1 Dados Pessoais Básicos
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Nome completo</li>
            <li>Email</li>
            <li>Telefone/WhatsApp</li>
            <li>Informações sobre sintomas e queixas apresentadas (quando fornecida)</li>
           {/* <li>Data de nascimento (quando fornecida)</li>
            <li>Endereço (quando necessário para atendimento presencial)</li> */}
          </ul>

       {/*   <h3 className="text-lg font-semibold text-[var(--cognitiva-azul-petroleo)] mb-3">
            1.2 Dados de Saúde
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Informações sobre sintomas e queixas apresentadas</li>
            <li>Histórico de saúde mental relevante</li>
            <li>Medicações em uso (quando informado)</li>
            <li>Anotações das sessões terapêuticas</li>
            <li>Planos de tratamento e evolução</li>
          </ul>
        */}

          <h3 className="text-lg font-semibold text-[var(--cognitiva-azul-petroleo)] mb-3">
            1.2 Dados Técnicos
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Endereço IP (para segurança do sistema)</li>
            <li>Dados de navegação no site (cookies essenciais)</li>
            <li>Informações de agendamento e histórico de consultas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4 flex items-center">
            <Eye className="mr-2" size={24} />
            2. Finalidades do Tratamento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[var(--cognitiva-azul-petroleo)] mb-2">
                Prestação de Serviços
              </h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Agendamento de consultas</li>
                <li>Atendimento psicológico</li>
                <li>Acompanhamento terapêutico</li>
                <li>Elaboração de relatórios (quando solicitado)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[var(--cognitiva-azul-petroleo)] mb-2">
                Comunicação
              </h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Confirmação de consultas</li>
                <li>Lembretes de agendamento</li>
                <li>Comunicações sobre tratamento</li>
                <li>Informações administrativas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            3. Base Legal
          </h2>
          <p className="text-gray-700 mb-4">
            O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Consentimento:</strong> Para dados fornecidos voluntariamente no agendamento</li>
            <li><strong>Execução de contrato:</strong> Para prestação dos serviços psicológicos</li>
            <li><strong>Tutela da saúde:</strong> Para dados de saúde necessários ao tratamento</li>
            <li><strong>Cumprimento de obrigação legal:</strong> Conforme Código de Ética do Psicólogo</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            4. Compartilhamento de Dados
          </h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-0">
              <strong>Princípio do Sigilo:</strong> Seus dados são protegidos pelo sigilo profissional 
              e não são compartilhados com terceiros, exceto nas situações previstas em lei ou 
              com seu consentimento expresso.
            </p>
          </div>
          
          <h3 className="text-lg font-semibold text-[var(--cognitiva-azul-petroleo)] mb-3">
            Situações Excepcionais de Compartilhamento:
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Ordem judicial</li>
            <li>Risco iminente de vida (do paciente ou terceiros)</li>
            <li>Autorização expressa do paciente</li>
            <li>Supervisão clínica (com dados anonimizados)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            5. Segurança dos Dados
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Lock className="mx-auto mb-2 text-[var(--cognitiva-dourado)]" size={32} />
              <h4 className="font-semibold text-[var(--cognitiva-azul-petroleo)] mb-1">Criptografia</h4>
              <p className="text-sm text-gray-600">Dados protegidos com criptografia avançada</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Shield className="mx-auto mb-2 text-[var(--cognitiva-dourado)]" size={32} />
              <h4 className="font-semibold text-[var(--cognitiva-azul-petroleo)] mb-1">Acesso Restrito</h4>
              <p className="text-sm text-gray-600">Apenas profissionais autorizados</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <FileText className="mx-auto mb-2 text-[var(--cognitiva-dourado)]" size={32} />
              <h4 className="font-semibold text-[var(--cognitiva-azul-petroleo)] mb-1">Backup Seguro</h4>
              <p className="text-sm text-gray-600">Cópias de segurança protegidas</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            6. Seus Direitos
          </h2>
          <p className="text-gray-700 mb-4">
            Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 text-gray-700">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos ou inexatos</li>
              <li>Anonimização ou eliminação de dados desnecessários</li>
            </ul>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados (quando aplicável)</li>
              <li>Revogação do consentimento</li>
              <li>Informações sobre compartilhamento</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            7. Retenção de Dados
          </h2>
          <p className="text-gray-700 mb-4">
            Os dados são mantidos pelo tempo necessário para:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Prontuários:</strong> Mínimo de 5 anos após o último atendimento (CFP)</li>
            <li><strong>Dados de contato:</strong> Até solicitação de exclusão ou fim da relação terapêutica</li>
            <li><strong>Dados de agendamento:</strong> 2 anos para fins administrativos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            8. Cookies e Tecnologias
          </h2>
          <p className="text-gray-700 mb-4">
            Utilizamos apenas cookies essenciais para o funcionamento do site:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Cookies de sessão para agendamento</li>
            <li>Cookies de segurança</li>
            <li>Não utilizamos cookies de rastreamento ou publicidade</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4 flex items-center">
            <Phone className="mr-2" size={24} />
            9. Contato e Exercício de Direitos
          </h2>
          <div className="bg-[var(--cognitiva-bege)]/30 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Mail className="mr-2 text-[var(--cognitiva-dourado)]" size={20} />
                <span className="text-gray-700">karina.dias@cognitivatcc.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-[var(--cognitiva-dourado)]" size={20} />
                <span className="text-gray-700">(32) 99817-8439</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 mb-0">
              <strong>Encarregado de Dados:</strong> Psi. Karina Dias<br />
              <strong>Tempo de resposta:</strong> Até 15 dias úteis
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-4">
            10. Alterações na Política
          </h2>
          <p className="text-gray-700">
            Esta política pode ser atualizada periodicamente. Alterações significativas serão 
            comunicadas por email ou através do site. A versão mais atual estará sempre 
            disponível em nosso site com a data da última atualização.
          </p>
        </section>

        <div className="bg-green-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-[var(--cognitiva-azul-petroleo)] mb-2">
            Dúvidas sobre Privacidade?
          </h3>
          <p className="text-gray-700 mb-4">
            Estamos à disposição para esclarecer qualquer questão sobre o tratamento de seus dados.
          </p>
          <a
            href="mailto:karina.dias@cognitivatcc.com.br"
            className="inline-flex items-center px-6 py-3 bg-[var(--cognitiva-dourado)] text-white rounded-full hover:bg-[var(--cognitiva-dourado)]/90 transition-colors"
          >
            <Mail className="mr-2" size={16} />
            Entrar em Contato
          </a>
        </div>

        {/* footer button removed per request */}
      </div>
    </div>
  )
}

export default PrivacyPolicy

