import React, { useState } from 'react'
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FAQ = ({ onBack }) => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: "O que é Terapia Cognitivo-Comportamental (TCC)?",
      answer: "A TCC é uma abordagem terapêutica baseada em evidências científicas que trabalha a conexão entre pensamentos, emoções e comportamentos. É focada no presente e utiliza técnicas práticas para ajudar você a identificar e modificar padrões de pensamento negativos e comportamentos disfuncionais."
    },
    {
      question: "Como funciona o atendimento online?",
      answer: "O atendimento online é realizado por videochamada através de plataformas seguras e confidenciais. Tem a mesma eficácia do atendimento presencial e oferece maior flexibilidade de horários. Você precisa apenas de um dispositivo com câmera, microfone e conexão estável à internet."
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer: "As sessões de Terapia Individual e Online têm duração de 50 minutos. A Sessão Especial tem duração de 80 minutos, oferecendo mais tempo para aprofundamento das questões trabalhadas."
    },
    {
      question: "Com que frequência devo fazer terapia?",
      answer: "Geralmente recomendamos sessões semanais no início do tratamento. A frequência pode ser ajustada conforme seu progresso e necessidades específicas. Isso será discutido e planejado em conjunto durante as primeiras sessões."
    },
    {
      question: "A TCC é eficaz para ansiedade e depressão?",
      answer: "Sim, a TCC é uma das abordagens mais eficazes para transtornos de ansiedade e depressão, com eficácia comprovada cientificamente. Ela oferece ferramentas práticas que você pode usar no dia a dia para gerenciar sintomas e melhorar sua qualidade de vida."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Muitos pacientes começam a perceber melhorias nas primeiras semanas de tratamento. A TCC é uma terapia focada em objetivos e resultados, geralmente com duração entre 12 a 20 sessões, dependendo da complexidade do caso."
    },
    {
      question: "Como posso cancelar ou reagendar uma consulta?",
      answer: "Cancelamentos e reagendamentos devem ser feitos com pelo menos 24 horas de antecedência. Você pode entrar em contato via WhatsApp ou email. Cancelamentos com menos de 24h de antecedência podem ser cobrados."
    },
    {
      question: "Os atendimentos são cobertos por plano de saúde?",
      answer: "Sim, muitos planos de saúde cobrem sessões de psicoterapia. Fornecemos todos os documentos necessários para reembolso. Consulte seu plano para verificar cobertura e procedimentos específicos."
    },
    {
      question: "Qual a diferença entre os tipos de atendimento?",
      answer: "Terapia Individual (presencial): atendimento no consultório com duração de 50 minutos. Terapia Online: mesmo formato, mas por videochamada. Sessão Especial: atendimento diferenciado de 80 minutos com técnicas avançadas e maior aprofundamento."
    },
    {
      question: "Como sei se a TCC é adequada para mim?",
      answer: "A TCC é indicada para diversas questões como ansiedade, depressão, estresse, fobias, transtorno obsessivo-compulsivo, entre outros. Na primeira consulta, faremos uma avaliação completa para determinar se a abordagem é adequada para suas necessidades específicas."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre Terapia Cognitivo-Comportamental e nossos atendimentos.
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

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                aria-expanded={openItems[index]}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-[var(--cognitiva-azul-petroleo)] pr-4">
                  {item.question}
                </span>
                {openItems[index] ? (
                  <ChevronUp className="text-[var(--cognitiva-dourado)] flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-[var(--cognitiva-dourado)] flex-shrink-0" size={20} />
                )}
              </button>
              {openItems[index] && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-white border-t border-gray-200"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="https://wa.me/message/QCB7JDKF66MEJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[var(--cognitiva-dourado)] text-white rounded-full hover:bg-[var(--cognitiva-dourado)]/90 transition-colors"
          >
            Entre em contato via WhatsApp
          </a>
          {/* footer button removed per request */}
        </div>
      </div>
    </section>
  )
}

export default FAQ

