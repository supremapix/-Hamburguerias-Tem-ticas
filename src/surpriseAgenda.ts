export const BRUNETTI_AGENDA_LABEL = 'Dia com personagem';
export const SURPRISE_ARTICLE = '/blog/personagem-surpresa-em-penha-como-planejar-a-visita';
export const BURGER_INSTAGRAM = 'https://www.instagram.com/burgerfilms_/';
export const SURPRISE_WHATSAPP =
  'https://wa.me/5547992155989?text=' +
  encodeURIComponent('Olá! Para a data que estou planejando, haverá encontro presencial com personagem na unidade da Av. Alfredo Brunetti, 631? Qual horário, e é preciso reservar?');

const tz = 'America/Sao_Paulo';
const dateParts = new Intl.DateTimeFormat('pt-BR', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' });
const dayLabel = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', weekday: 'long' });
const badgeLabel = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit' });

// Preserve the Friday/Saturday/Sunday pattern from the original three cards.
// Use the civil day of Penha even when the visitor is in a different time zone.
export function getUpcomingSurpriseDates(now = new Date()) {
  const p = Object.fromEntries(dateParts.formatToParts(now).map(({type,value})=>[type,value]));
  const cursor = new Date(Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day)));
  const dates: { date: string; day: string; badge: string }[] = [];
  while (dates.length < 3) {
    if ([5, 6, 0].includes(cursor.getUTCDay())) {
      dates.push({
        date: cursor.toISOString().slice(0, 10),
        day: dayLabel.format(cursor).replace('-feira', '').toLocaleUpperCase('pt-BR'),
        badge: badgeLabel.format(cursor),
      });
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return dates;
}
