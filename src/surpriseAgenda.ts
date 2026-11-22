export const SURPRISE_ARTICLE = '/blog/personagem-surpresa-em-penha-como-planejar-a-visita';
export const BURGER_INSTAGRAM = 'https://www.instagram.com/burgerfilms_/';
export const SURPRISE_WHATSAPP =
  'https://wa.me/5547992155989?text=' +
  encodeURIComponent('Olá! Para a data que estou planejando, haverá personagem surpresa presencial na unidade da Av. Alfredo Brunetti, 631? Qual horário, e é preciso reservar?');

const tz = 'America/Sao_Paulo';
const dateParts = new Intl.DateTimeFormat('pt-BR', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' });
const label = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', weekday: 'long', day: '2-digit', month: '2-digit' });

// Use the civil day of Penha, not the visitor's own date or the UTC date.
// These days are consultation options only, never published as occurrences.
export function getWeekendConsultation(now = new Date()) {
  const p = Object.fromEntries(dateParts.formatToParts(now).map(({type,value})=>[type,value]));
  const day = new Date(Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day)));
  const weekday = day.getUTCDay();
  if (weekday === 0) return [formatDay(day)];
  day.setUTCDate(day.getUTCDate() + (6 - weekday));
  const sunday = new Date(day);
  sunday.setUTCDate(day.getUTCDate() + 1);
  return [formatDay(day), formatDay(sunday)];
}

function formatDay(day: Date) {
  return { date: day.toISOString().slice(0, 10), label: label.format(day) };
}
