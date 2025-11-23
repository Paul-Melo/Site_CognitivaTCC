import React, { useState, useEffect } from 'react'
import { getAvailableSlots, scheduleAppointment, sendContactMessage } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Brain, 
  Heart, 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  MessageCircle,
  Clock,
  Award,
  Menu,
  X,
  CalendarDays,
  User,
  AlertCircle
} from 'lucide-react'
import FAQ from './components/FAQ'
import PrivacyPolicy from './components/PrivacyPolicy'
import  logoCognitivaTopo from './assets/cognitiva_tcc_verde.png'
import  logoCognitivaFim from './assets/cognitiva_tcc_branca.png'
import heroBg from './assets/hero-optimized.png'
import tccEquilibrioImg from './assets/Psi.png'
import psicologaProfissional from './assets/Karina_Dias.png'
import './App.css'

// API_BASE_URL agora centralizado em src/lib/api.js

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [availableSlots, setAvailableSlots] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [currentPage, setCurrentPage] = useState('home')

  // Formulário de agendamento
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: 'individual',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const showMessage = (text, type = 'info') => {
    setMessage(text)
    setMessageType(type)
    setTimeout(() => {
      setMessage('')
      setMessageType('')
    }, 5000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Se o usuário mudou o tipo de serviço e já escolheu uma data, atualizar slots
    if (name === 'service_type' && selectedDate) {
      fetchAvailableSlots(selectedDate)
    }
  }

  const fetchAvailableSlots = async (date) => {
    try {
      setIsLoading(true)
      const data = await getAvailableSlots({ date, service_type: formData.service_type })
      setAvailableSlots(data.available_slots || [])
    } catch (err) {
      const message = err?.message || (err?.data?.error) || 'Erro ao buscar horários disponíveis'
      showMessage(message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDateChange = (e) => {
    const date = e.target.value
    setSelectedDate(date)
    setSelectedTime('')
    if (date) {
      fetchAvailableSlots(date)
    }
  }

  const handleScheduleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime) {
      showMessage('Por favor, preencha todos os campos obrigatórios', 'error')
      return
    }

    try {
      setIsLoading(true)
      await scheduleAppointment({
        ...formData,
        date: selectedDate,
        time: selectedTime
      })
      showMessage('Agendamento realizado com sucesso! Você receberá um email de confirmação.', 'success')
      setShowScheduleModal(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: 'individual',
        message: ''
      })
      setSelectedDate('')
      setSelectedTime('')
    } catch (err) {
      showMessage(err.message || 'Erro ao realizar agendamento', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()

    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    }

    if (!contactData.name || !contactData.email || !contactData.message) {
      showMessage('Por favor, preencha todos os campos obrigatórios', 'error')
      return
    }

    try {
      setIsLoading(true)
      await sendContactMessage(contactData)
      showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: 'individual',
        message: ''
      })
    } catch (err) {
      showMessage(err.message || 'Erro ao enviar mensagem', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  // Obter data mínima (hoje)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Obter data máxima (3 meses à frente)
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    return maxDate.toISOString().split('T')[0]
  }

  // Renderização condicional de páginas
  if (currentPage === 'faq') {
    return <FAQ onBack={() => setCurrentPage('home')} />
  }
  
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Prova Ética */}
      <div className="bg-[var(--cognitiva-azul-petroleo)] text-white py-2 px-4 text-center text-sm">
        <div className="container mx-auto">
          <span className="font-medium">Psi. Karina Dias</span> •
          <span className="mx-2">Psicóloga</span> •
          <span className="mx-2">CRP 04/68113</span>
        </div>
      </div>

      {/* Mensagem de feedback */}
      {message && (
        <div className={`fixed top-16 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
          messageType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
          messageType === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
          'bg-blue-100 text-blue-800 border border-blue-200'
        }`}>
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {message}
          </div>
        </div>
      )}

              {showScheduleModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-[var(--cognitiva-azul-petroleo)]">Agendar Consulta</h3>
                        <button
                          onClick={() => {
                            setShowScheduleModal(false)
                            setCurrentStep(1)
                            setSelectedDate('')
                            setSelectedTime('')
                          }}
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="Fechar modal"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      {/* Stepper */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= currentStep 
                          ? 'bg-[var(--cognitiva-dourado)] text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step}
                      </div>
                      {step < 4 && (
                        <div className={`w-12 h-0.5 mx-2 ${
                          step < currentStep ? 'bg-[var(--cognitiva-dourado)]' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>Serviço</span>
                  <span>Data/Horário</span>
                  <span>Dados</span>
                  <span>Confirmação</span>
                </div>
              </div>

              <form onSubmit={handleScheduleSubmit} className="space-y-4">
                {/* Passo 1: Seleção de Serviço */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-[var(--cognitiva-azul-petroleo)] mb-4">
                      Escolha o tipo de atendimento
                    </h4>
                    <div className="space-y-3">
                      {[
                        { value: 'individual', name: 'Terapia Individual', desc: 'Atendimento presencial', price: '50 min' },
                        { value: 'online', name: 'Terapia Online', desc: 'Atendimento por videochamada', price: '50 min' },
                        { value: 'premium', name: 'Sessão Especial', desc: 'Atendimento diferenciado', price: '80 min' }
                      ].map((service) => (
                        <label key={service.value} className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.service_type === service.value 
                            ? 'border-[var(--cognitiva-dourado)] bg-[var(--cognitiva-dourado)]/5' 
                            : 'border-gray-200 hover:border-[var(--cognitiva-dourado)]'
                        }`}>
                          <input
                            type="radio"
                            name="service_type"
                            value={service.value}
                            checked={formData.service_type === service.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-[var(--cognitiva-azul-petroleo)]">{service.name}</div>
                              <div className="text-sm text-gray-600">{service.desc}</div>
                            </div>
                            <div className="text-lg font-bold text-[var(--cognitiva-dourado)]">{service.price}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Duração:</strong> Sessões de 50 minutos (Especial: 80 min) com intervalo técnico entre atendimentos.
                      </p>
                    </div>
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                    >
                      Continuar
                    </Button>
                  </div>
                )}

                {/* Passo 2: Data e Horário */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-[var(--cognitiva-azul-petroleo)] mb-4">
                      Escolha data e horário
                    </h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data *
                      </label>
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        min={getMinDate()}
                        max={getMaxDate()}
                        required
                        className="w-full"
                      />
                    </div>

                    {selectedDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Horário disponível *
                        </label>
                        {isLoading ? (
                          <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--cognitiva-dourado)] mx-auto"></div>
                            <p className="mt-2 text-gray-600">Carregando horários...</p>
                          </div>
                        ) : availableSlots.length > 0 ? (
                          <div className="grid grid-cols-3 gap-2">
                            {availableSlots.map((slot, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedTime(slot.start)}
                                className={`p-3 text-sm border rounded-lg transition-colors ${
                                  selectedTime === slot.start
                                    ? 'bg-[var(--cognitiva-dourado)] text-white border-[var(--cognitiva-dourado)]'
                                    : 'border-gray-300 hover:border-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/5'
                                }`}
                              >
                                {slot.start}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <Calendar className="mx-auto mb-2" size={32} />
                            <p>Nenhum horário disponível para esta data</p>
                            <p className="text-sm mt-1">Tente outra data ou entre em contato via WhatsApp</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                        className="flex-1"
                      >
                        Voltar
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        disabled={!selectedDate || !selectedTime}
                        className="flex-1 bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Passo 3: Dados Pessoais */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-[var(--cognitiva-azul-petroleo)] mb-4">
                      Seus dados para contato
                    </h4>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem (opcional)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full"
                        placeholder="Conte-nos um pouco sobre o que você gostaria de trabalhar..."
                      />
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        className="flex-1"
                      >
                        Voltar
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        disabled={!formData.name || !formData.email || !formData.phone}
                        className="flex-1 bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                      >
                        Revisar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Passo 4: Confirmação */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-[var(--cognitiva-azul-petroleo)] mb-4">
                      Confirme seus dados
                    </h4>
                    
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Serviço:</span>
                        <span>{formData.service_type === 'individual' ? 'Terapia Individual' : 
                               formData.service_type === 'online' ? 'Terapia Online' : 'Sessão Especial'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Data:</span>
                        <span>{new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Horário:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Nome:</span>
                        <span>{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Telefone:</span>
                        <span>{formData.phone}</span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-medium text-yellow-800 mb-2">Política de Cancelamento</h5>
                      <p className="text-sm text-yellow-700">
                        Cancelamentos devem ser feitos com até 24 horas de antecedência. 
                        Você receberá lembretes por email 24h e 2h antes da consulta.
                      </p>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        variant="outline"
                        className="flex-1"
                      >
                        Voltar
                      </Button>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Agendando...
                          </div>
                        ) : (
                          'Confirmar Agendamento'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-[var(--cognitiva-bege)]/90'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoCognitivaTopo} alt="Cognitiva TCC" className="h-12 w-auto" loading="lazy" />
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('tcc')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors">O que é TCC</button>
              <button onClick={() => scrollToSection('servicos')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('contato')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors">Contato</button>
            </nav>

            <div className="hidden lg:block">
              <Button 
                onClick={() => setShowScheduleModal(true)}
                className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white rounded-full px-6 py-2"
              >
                Agendar Sessão
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[var(--cognitiva-azul-petroleo)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-[var(--cognitiva-azul-petroleo)]/20">
              <div className="flex flex-col space-y-3 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('sobre')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors text-left">Sobre</button>
                <button onClick={() => scrollToSection('tcc')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors text-left">O que é TCC</button>
                <button onClick={() => scrollToSection('servicos')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors text-left">Serviços</button>
                <button onClick={() => scrollToSection('contato')} className="text-[var(--cognitiva-azul-petroleo)] hover:text-[var(--cognitiva-dourado)] transition-colors text-left">Contato</button>
                <Button 
                  onClick={() => setShowScheduleModal(true)}
                  className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white rounded-full px-6 py-2 mt-4"
                >
                  Agendar Sessão
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cognitiva-bege)] to-[var(--cognitiva-verde-salvia)]/20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6 leading-tight">
              TCC - Terapia Cognitivo Comportamental {/*<span className="text-[var(--cognitiva-dourado)]">ansiedade e foco</span> */}
            </h1>
             <h3 className="text-4xl md:text-4xl font-bold text-[var(--cognitiva-bege)] mb-6 leading-tight">
              Explorando perspectivas de uma vida mais leve através do cuidado com a mente!
            </h3>
            <p className="text-xl md:text-2xl text-[var(--cognitiva-azul-petroleo)]/80 mb-8 leading-relaxed">
              Atendimento online e presencial baseado em evidências científicas
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Button 
                onClick={() => setShowScheduleModal(true)}
                className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                aria-label="Agendar consulta"
              >
                <Calendar className="mr-2" size={20} />
                Agendar Consulta
              </Button>

              <a href="https://wa.me/message/QCB7JDKF66MEJ1" target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp">
                <Button
                  type="button"
                  className="bg-[var(--cognitiva-verde-salvia)] hover:bg-[var(--cognitiva-verde-salvia)]/90 text-white px-6 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
            <p className="text-sm text-[var(--cognitiva-azul-petroleo)]/60 mt-4">
              Primeira sessão disponível em até 48 horas
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
                Psi. Karina Dias
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Psicóloga clínica em terapias comportamentais como TCC e do Esquema, em especialização em Neuropsicologia para o atendimento de adultos e adolescentes.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Formada pela Universidade Salgado de Oliveira (UNIVERSO) e pós-graduada em Neuropsicologia pelo Instituto de Pós-Graduação & Graduação (IPOG), dedico-me a ajudar pessoas a utilizarem ferramentas práticas com embasamento científico para lidarem com ansiedade, depressão, estresse e outros desafios emocionais.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="text-[var(--cognitiva-dourado)] mr-2" size={20} />
                  <span className="text-gray-700">CRP 04/68113</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-[var(--cognitiva-dourado)] mr-2" size={20} />
                  <span className="text-gray-700">Atendimento online e presencial</span>
                </div>
                <div className="flex items-center">
                  <Brain className="text-[var(--cognitiva-dourado)] mr-2" size={20} />
                  <span className="text-gray-700">Especialista em Neuropsicologia</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-[var(--cognitiva-dourado)] mr-2" size={20} />
                  <span className="text-gray-700">Abordagem humanizada</span>
                </div>
              </div>
              <Button 
                onClick={() => setShowScheduleModal(true)}
                className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-6 py-3 rounded-full"
              >
                Agendar Consulta
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={psicologaProfissional} 
                alt="Psi. Karina Dias" 
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="lazy"
                width="600"
                height="800"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--cognitiva-dourado)] text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-sm">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é TCC */}
      <section id="tcc" className="py-20 bg-[var(--cognitiva-bege)]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
              O que é Terapia Cognitivo-Comportamental?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A TCC é uma abordagem terapêutica baseada em evidências científicas que trabalha a conexão entre pensamentos, emoções e comportamentos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={tccEquilibrioImg} 
                alt="Equilíbrio TCC" 
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
                Como funciona a TCC?
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A TCC ajuda você a identificar padrões de pensamento negativos e comportamentos disfuncionais, desenvolvendo estratégias práticas para modificá-los de forma positiva e duradoura.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="text-[var(--cognitiva-dourado)] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Foco no presente</h4>
                    <p className="text-gray-700">Trabalhamos com situações atuais e objetivos específicos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="text-[var(--cognitiva-dourado)] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Técnicas práticas</h4>
                    <p className="text-gray-700">Ferramentas que você pode aplicar no dia a dia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[var(--cognitiva-dourado)] mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Resultados comprovados</h4>
                    <p className="text-gray-700">Eficácia cientificamente validada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Brain className="text-[var(--cognitiva-dourado)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-3">Pensamentos</h3>
                <p className="text-gray-700">Identificação e reestruturação de padrões de pensamento negativos</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="text-[var(--cognitiva-dourado)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-3">Emoções</h3>
                <p className="text-gray-700">Regulação emocional e desenvolvimento de inteligência emocional</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="text-[var(--cognitiva-dourado)] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-3">Comportamentos</h3>
                <p className="text-gray-700">Mudança de comportamentos disfuncionais por hábitos saudáveis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
              Modalidades de Atendimento
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Escolha a modalidade que melhor se adapta às suas necessidades e estilo de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--cognitiva-dourado)]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Users className="text-[var(--cognitiva-dourado)] mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">Terapia Individual</h3>
                  <p className="text-gray-600">Atendimento presencial personalizado</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Sessões de 50 minutos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Ambiente acolhedor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Plano terapêutico personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Técnicas de TCC aplicadas</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">Agende</div>
                  <div className="text-gray-600 mb-4">sua sessão</div>
                  <Button 
                    onClick={() => setShowScheduleModal(true)}
                    className="w-full bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--cognitiva-verde-salvia)] transform scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <MessageCircle className="text-[var(--cognitiva-verde-salvia)] mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">Terapia Online</h3>
                  <p className="text-gray-600">Flexibilidade e comodidade</p>
                  <span className="inline-block bg-[var(--cognitiva-verde-salvia)] text-white px-3 py-1 rounded-full text-sm mt-2">
                    Mais Popular
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Sessões por videochamada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Horários flexíveis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Conforto da sua casa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Mesma qualidade do presencial</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">Agende</div>
                  <div className="text-gray-600 mb-4">sua sessão</div>
                  <Button 
                    onClick={() => setShowScheduleModal(true)}
                    className="w-full bg-[var(--cognitiva-verde-salvia)] hover:bg-[var(--cognitiva-verde-salvia)]/90 text-white"
                  >
                    Agendar Online
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--cognitiva-azul-petroleo)]">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Award className="text-[var(--cognitiva-azul-petroleo)] mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">Sessão Especial</h3>
                  <p className="text-gray-600">Atendimento diferenciado</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Sessões de 80 minutos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Atendimento prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Material complementar</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[var(--cognitiva-verde-salvia)] mr-2" size={16} />
                    <span className="text-gray-700">Suporte entre sessões</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-2">Agende</div>
                  <div className="text-gray-600 mb-4">sua sessão</div>
                  <Button 
                    onClick={() => setShowScheduleModal(true)}
                    className="w-full bg-[var(--cognitiva-azul-petroleo)] hover:bg-[var(--cognitiva-azul-petroleo)]/90 text-white"
                  >
                    Agendar Especial
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Estou aqui para ajudar você a dar o primeiro passo em direção ao seu bem-estar emocional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Phone className="text-[var(--cognitiva-dourado)] mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Telefone</div>
                    <div className="text-gray-700">(32) 99817-8439</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[var(--cognitiva-dourado)] mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Email</div>
                    <div className="text-gray-700">karina.dias@cognitivatcc.com.br</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[var(--cognitiva-dourado)] mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Endereço</div>
                    <div className="text-gray-700">Rua Halfeld, 414/1001 - Centro<br />Juiz de Fora - MG</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="text-[var(--cognitiva-dourado)] mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-[var(--cognitiva-azul-petroleo)]">Horário de Atendimento</div>
                    <div className="text-gray-700">Segunda a Sexta: 8h às 18h</div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--cognitiva-bege)]/30 p-6 rounded-lg">
                <h4 className="font-bold text-[var(--cognitiva-azul-petroleo)] mb-3">Primeira Consulta</h4>
                <p className="text-gray-700 mb-4">
                  Na primeira sessão, faremos uma avaliação completa para entender suas necessidades e definir o melhor plano terapêutico.
                </p>
                <Button 
                  onClick={() => setShowScheduleModal(true)}
                  className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                >
                  <CalendarDays className="mr-2" size={16} />
                  Agendar Primeira Consulta
                </Button>  

                <a href="https://wa.me/message/QCB7JDKF66MEJ1" target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp">
                <Button
                  type="button"
                  className="bg-[var(--cognitiva-verde-salvia)] hover:bg-[var(--cognitiva-verde-salvia)]/90 text-white ml-4"
                >
                  <MessageCircle className="mr-2" size={16} />
                  Chamar no WhatsApp
                </Button>
              </a>

              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--cognitiva-azul-petroleo)] mb-6">
                    Envie uma Mensagem
                  </h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        className="w-full"
                        placeholder="Conte-nos um pouco sobre o que você gostaria de trabalhar ou suas dúvidas..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white"
                    >
                      {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[var(--cognitiva-azul-petroleo)] to-[var(--cognitiva-verde-salvia)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo em direção ao equilíbrio emocional que você merece. Agende sua primeira sessão hoje mesmo.
          </p>
          <Button 
            onClick={() => setShowScheduleModal(true)}
            className="bg-[var(--cognitiva-dourado)] hover:bg-[var(--cognitiva-dourado)]/90 text-white px-8 py-4 text-lg rounded-full"
          >
            <Calendar className="mr-2" size={20} />
            Agendar Primeira Sessão
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--cognitiva-azul-petroleo)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoCognitivaFim} alt="Cognitiva TCC" className="h-12 w-auto" />
              </div>
              <p className="text-white/80 mb-4">
                Transformando vidas através da Terapia Cognitivo-Comportamental com uma abordagem humanizada e baseada em evidências.
              </p>
              <div className="text-white/60 text-sm">
                CRP 04/68113 | Psi. Karina Dias
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection('tcc')} className="hover:text-white transition-colors">O que é TCC</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  (32) 99817-8439
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  karina.dias@cognitivatcc.com.br
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Centro, Juiz de Fora - MG
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 Cognitiva TCC. Todos os direitos reservados.</p>
              <div className="mt-2 md:mt-0">
                <button 
                  onClick={() => setCurrentPage('privacy')} 
                  className="hover:text-white transition-colors underline"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

