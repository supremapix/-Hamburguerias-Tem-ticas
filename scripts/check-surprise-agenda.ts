import assert from 'node:assert/strict';
import { getWeekendConsultation, SURPRISE_WHATSAPP } from '../src/surpriseAgenda';

const dates = (time: string) => getWeekendConsultation(new Date(time)).map(item => item.date);
assert.deepEqual(dates('2026-11-22T01:20:00Z'), ['2026-11-21','2026-11-22']);
assert.deepEqual(dates('2026-11-22T03:00:00Z'), ['2026-11-22']);
assert.deepEqual(dates('2026-11-23T03:00:00Z'), ['2026-11-28','2026-11-29']);
assert.deepEqual(dates('2026-12-31T12:00:00Z'), ['2027-01-02','2027-01-03']);
assert.match(new URL(SURPRISE_WHATSAPP).searchParams.get('text') ?? '', /haverá personagem surpresa presencial.*Alfredo Brunetti/);
console.log('Janela de consulta em hora de Penha, sem converter dias em eventos.');
