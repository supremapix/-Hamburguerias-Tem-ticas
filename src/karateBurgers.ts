import type { MenuItem } from './types';

export const KARATE_ID = 'karate-burgers';
export const KARATE_PARTNERS = 'Burger Films × Miyagi-Do Sushibar';
export const KARATE_INTRO = 'Quatro opções da linha especial Karatê Burgers, uma parceria entre a Burger Films e o Miyagi-Do Sushibar em Penha, SC.';
export const KARATE_COVER = '/karate-burgers/parceria.jpg';
export const KARATE_NOTE = 'Consulte a disponibilidade e a unidade pelo WhatsApp antes de pedir.';
export const formatMenuPrice = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const KARATE_BURGERS: MenuItem[] = [
  { id: 'pequeno-gafanhoto', name: 'Pequeno Gafanhoto', price: 29.90, description: 'Pão colorido (azul ou rosa), hambúrguer de fraldinha de 90 g e mussarela.' },
  { id: 'os-quatro-dojos', name: 'Os Quatro Dojôs', price: 54.90, description: 'Quatro mini burgers de 45 g: dois com queijo prato e bacon e dois com mussarela, alface e tomate.' },
  { id: 'cobra-kai-sem-misericordia', name: 'Cobra Kai Sem Misericórdia', price: 49.90, description: 'Pão preto com gergelim, hambúrguer de fraldinha de 120 g, cream cheese, bacon, alface e tomate.' },
  { id: 'miyagi-do-burger', name: 'Miyagi-Do Burger', price: 39.90, description: 'Pão brioche tradicional, hambúrguer de fraldinha de 120 g, mussarela, alface, tomate e picles.' },
].map(item => ({ ...item, image: '/karate-burgers/' + item.id + '.jpg', category: 'lanches', subcategory: 'karate' }));

export function karateWhatsApp(name?: string) {
  return 'https://wa.me/5547992155989?text=' + encodeURIComponent(
    name ? 'Olá! Gostaria de saber se o ' + name + ' da linha Karatê Burgers está disponível e em qual unidade.' : 'Olá! Quais opções da linha Karatê Burgers estão disponíveis hoje e em qual unidade?',
  );
}
