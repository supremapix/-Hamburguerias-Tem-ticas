import assert from 'node:assert/strict';
import fs from 'node:fs';
import { AGENDA_PERSONAGENS, AGENDA_SEMANAL, getAgendaEmulatedImage } from '../src/data';

assert.deepEqual(AGENDA_PERSONAGENS.map(({ day, title, dateBadge }) => ({ day, title, dateBadge })), [
  { day: 'SEXTA', title: 'PERSONAGEM MÁRIO', dateBadge: '06/11' },
  { day: 'SÁBADO', title: 'PERSONAGEM SONIC', dateBadge: '07/11' },
  { day: 'DOMINGO', title: 'PERSONAGEM BARBIE', dateBadge: '08/11' },
]);
assert.deepEqual(AGENDA_SEMANAL.map(({ day, title, dateBadge }) => ({ day, title, dateBadge })), [
  { day: 'QUARTA', title: 'PUB FECHADO', dateBadge: undefined },
  { day: 'SEXTA', title: 'NOITE DA PIZZA', dateBadge: '06/11' },
  { day: 'SÁBADO', title: 'MÚSICA AO VIVO COM PAULINHO GOUVÊA', dateBadge: '07/11' },
  { day: 'DOMINGO A QUINTA', title: 'RODÍZIO DE MINI BURGERS', dateBadge: undefined },
]);
for (const item of AGENDA_PERSONAGENS) assert.match(item.location!, /Alfredo Brunetti, 631/);
for (const item of AGENDA_SEMANAL) assert.match(item.location!, /Eugênio Krause, 3045/);
for (const item of [...AGENDA_PERSONAGENS, ...AGENDA_SEMANAL]) {
  assert.equal(item.time, undefined, 'Os cartazes não informam horários.');
  assert.equal(getAgendaEmulatedImage(item), item.image, `Imagem de ${item.title}`);
  if (item.image.startsWith('/')) assert(fs.existsSync(`public${item.image}`));
}
assert.match(AGENDA_SEMANAL[3].subtitle!, /Exceto às quartas-feiras/);
console.log('Agenda checks passed: 7 entries, dates, locations, images and no unconfirmed times.');
