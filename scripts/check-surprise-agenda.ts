import assert from 'node:assert/strict';
import { BRUNETTI_AGENDA_DAYS, BRUNETTI_AGENDA_LABEL, SURPRISE_WHATSAPP } from '../src/surpriseAgenda';

assert.equal(BRUNETTI_AGENDA_LABEL, 'Dia com personagem');
assert.deepEqual(BRUNETTI_AGENDA_DAYS, ['SEXTA', 'SÁBADO', 'DOMINGO']);
assert.match(new URL(SURPRISE_WHATSAPP).searchParams.get('text') ?? '', /haverá encontro presencial com personagem.*Alfredo Brunetti/);
console.log('Padrão fixo sexta/sábado/domingo, sem datas no cartão.');
