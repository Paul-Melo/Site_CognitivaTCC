// Serviço centralizado de chamadas à API
// Base URL pode ser configurada via Vite: VITE_API_BASE_URL
// Fallback padrão: http://localhost:5000

const DEFAULT_BASE = 'http://localhost:5000'
export const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || DEFAULT_BASE

// Configuração de rotas
const endpoints = {
  contact: '/api/contact',
  users: '/api/users',
  appointments: '/api/appointments',
  calendar: {
    availableSlots: '/calendar/available_slots',
    schedule: '/calendar/schedule_appointment',
    authStatus: '/calendar/auth_status',
    authorize: '/calendar/authorize',
    logout: '/calendar/logout'
  }
}

// Utilitário base para requisições
async function request(path, { method = 'GET', body, headers = {}, credentials, json = true } = {}) {
  const url = API_BASE_URL + path
  const finalHeaders = { ...headers }
  let payload
  if (body && json) {
    finalHeaders['Content-Type'] = 'application/json'
    payload = JSON.stringify(body)
  } else {
    payload = body
  }

  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    body: payload,
    credentials: credentials ?? 'same-origin'
  })

  let data
  try {
    data = await res.json()
  } catch (_) {
    data = null
  }

  if (!res.ok) {
    const message = data?.error || `Erro ${res.status}`
    const error = new Error(message)
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}

// Funções específicas
export async function sendContactMessage({ name, email, phone, message }) {
  return request(endpoints.contact, {
    method: 'POST',
    body: { name, email, phone, message },
    credentials: 'include'
  })
}

export async function getAvailableSlots({ date, service_type }) {
  if (!date) throw new Error('Data obrigatória para buscar horários')
  if (!service_type) throw new Error('service_type obrigatório (individual | online | premium)')
  return request(endpoints.calendar.availableSlots, {
    method: 'POST',
    body: { date, service_type },
    credentials: 'include'
  })
}

export async function scheduleAppointment({ name, email, phone, service_type, message, date, time }) {
  return request(endpoints.calendar.schedule, {
    method: 'POST',
    body: { name, email, phone, service_type, message, date, time },
    credentials: 'include'
  })
}

export async function getAuthStatus() {
  return request(endpoints.calendar.authStatus, { method: 'GET', credentials: 'include' })
}

export function authorizeCalendar() {
  window.location.href = API_BASE_URL + endpoints.calendar.authorize
}

export async function ensureCalendarAuth() {
  try {
    const status = await getAuthStatus()
    return status?.authenticated
  } catch (_) {
    return false
  }
}

export async function createUser({ name, email, phone }) {
  return request(endpoints.users, { method: 'POST', body: { name, email, phone }, credentials: 'include' })
}

export async function createInternalAppointment({ user_id, appointment_date, service_type, google_event_id }) {
  return request(endpoints.appointments, {
    method: 'POST',
    body: { user_id, appointment_date, service_type, google_event_id },
    credentials: 'include'
  })
}

export async function listAppointments() {
  return request(endpoints.appointments, { method: 'GET', credentials: 'include' })
}

export async function getAppointment(id) {
  return request(`${endpoints.appointments}/${id}`, { method: 'GET', credentials: 'include' })
}

export async function logoutCalendar() {
  return request(endpoints.calendar.logout, { method: 'POST', credentials: 'include' })
}

// Export agrupado (facilita import único)
export const api = {
  sendContactMessage,
  getAvailableSlots,
  scheduleAppointment,
  getAuthStatus,
  authorizeCalendar,
  ensureCalendarAuth,
  createUser,
  createInternalAppointment,
  listAppointments,
  getAppointment,
  logoutCalendar,
  safeApiCall
}

// Helper para tratar exibição segura
export function safeApiCall(fn, ...args) {
  return fn(...args).catch(err => {
    return Promise.reject({ message: err.message, status: err.status, data: err.data })
  })
}
