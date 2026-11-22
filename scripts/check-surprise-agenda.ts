import assert from 'node:assert/strict';
import { BRUNETTI_AGENDA_LABEL, getUpcomingSurpriseDates, SURPRISE_WHATSAPP } from '../src/surpriseAgenda';

assert.equal(BRUNETTI_AGENDA_LABEL, 'Dia com personagem');
const dates = (time: string) => getUpcomingSurpriseDates(new Date(time)).map(item => item.date);
assert.deepEqual(dates('2026-11-22T01:20:00Z'), ['2026-11-21','2026-11-22','2026-11-27']);
assert.deepEqual(dates('2026-11-22T03:00:00Z'), ['2026-11-22','2026-11-27','2026-11-28']);
assert.deepEqual(dates('2026-11-23T03:00:00Z'), ['2026-11-27','2026-11-28','2026-11-29']);
assert.deepEqual(dates('2026-12-31T12:00:00Z'), ['2027-01-01','2027-01-02','2027-01-03']);
assert.match(new URL(SURPRISE_WHATSAPP).searchParams.get('text') ?? '', /haverá encontro presencial com personagem.*Alfredo Brunetti/);
console.log('Três próximas datas do padrão sexta/sábado/domingo, no fuso de Penha.');
