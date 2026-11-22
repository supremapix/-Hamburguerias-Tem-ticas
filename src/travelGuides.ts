export const BF_ORIGIN = 'https://www.burgerfilms.com.br';
export const SHORT_ID = 'spx3YA6wbnQ';
export const SHORT_URL = `https://www.youtube.com/shorts/${SHORT_ID}`;
export const TRAVEL_HUB = 'guia-beto-carrero';
export const PARK_DIRECTIONS = 'https://destino.betocarrero.com.br/como-chegar-ao-beto-carrero-world/';
export const PARK_LODGING = 'https://destino.betocarrero.com.br/em-qual-cidade-devo-me-hospedar-quando-for-para-o-beto-carrero-world/';

export const NEIGHBORHOOD_VIDEO_NOTES: Record<string,string> = {
  'bairro-armacao': 'Na Armação, o endereço que aparece no vídeo é Av. Eugênio Krause, 3045. A unidade da Av. Alfredo Brunetti, 631, é outra; confira qual endereço você vai usar no mapa.',
  'bairro-centro': 'Saindo do Centro de Penha para comer na Armação, avalie se vale ir à unidade ou pedir no seu endereço. O vídeo mostra a unidade da Av. Eugênio Krause, não um ponto no Centro.',
  'bairro-praia-grande': 'Para encaixar um lanche depois da Praia Grande, compare o caminho da praia até a Av. Eugênio Krause com o trajeto de volta à hospedagem. A unidade filmada fica na Armação.',
  'bairro-gravata': 'Ao preencher o destino, escolha Gravatá de Penha se for o seu caso: confira o município no mapa e informe o endereço completo antes de solicitar entrega. A unidade do vídeo fica na Armação, em Penha.',
  'bairro-santa-lidia': 'Se você está hospedado em Santa Lídia, coloque o endereço da hospedagem como partida. Compare ir à Armação antes de voltar com pedir para o endereço em que está.',
  'bairro-sao-cristovao': 'Se a visita à hamburgueria faz parte da volta para São Cristóvão, trace o percurso inteiro, da Armação até seu destino final, antes de sair do parque.',
  'bairro-sao-miguel': 'Quem pretende combinar o passeio em São Miguel com um lanche pode salvar o endereço da unidade e o da hospedagem separadamente. O vídeo identifica a parada na Armação.',
};

export interface TravelGuide {
  slug: string;
  origin: string;
  group: 'regiao' | 'viagem' | 'penha';
  title: string;
  description: string;
  sections: readonly [string,string][];
}

export const TRAVEL_GUIDES: readonly TravelGuide[] = [
  {
    slug: 'praia-alegre-penha', origin: 'Praia Alegre, Penha', group: 'penha', title: 'Da Praia Alegre até a Burger Films em Armação',
    description: 'Veja como combinar Praia Alegre e uma parada para comer na Armação, em Penha, sem confundir a praia com o endereço das unidades.',
    sections: [
      ['Qual endereço colocar no mapa?', 'Se você quer conhecer a unidade do vídeo, use Av. Eugênio Krause, 3045, Armação, Penha. Praia Alegre é o ponto de partida deste roteiro, não o endereço do restaurante.'],
      ['Praia e lanche no mesmo dia', 'Se o carro ficou em outro trecho da orla, faça o trajeto a partir do estacionamento onde você vai sair. Em família, salvar o endereço da hospedagem e o da hamburgueria como destinos separados facilita voltar.'],
      ['Se preferir pedir para onde está', 'Abra o cardápio e informe o endereço completo no canal de pedidos. A cobertura, a taxa e o prazo precisam ser confirmados para o endereço, não só pelo nome da praia.'],
    ],
  },
  {
    slug: 'nossa-senhora-de-fatima-penha', origin: 'Nossa Senhora de Fátima, Penha', group: 'penha', title: 'De Nossa Senhora de Fátima às unidades da Burger Films em Penha',
    description: 'Se você se hospeda na localidade Nossa Senhora de Fátima, confira como comparar os dois destinos em Armação e evitar endereços trocados.',
    sections: [
      ['Comece pelo endereço da hospedagem', 'Use rua e número como origem no mapa, não só o nome Nossa Senhora de Fátima. Confirme que o aplicativo está mostrando Penha, SC, antes de calcular o deslocamento.'],
      ['Compare os dois pontos na Armação', 'Salve a unidade do vídeo na Av. Eugênio Krause, 3045, e a outra na Av. Alfredo Brunetti, 631. Veja qual encaixa no caminho que você já planejou fazer naquele dia.'],
      ['Se o grupo já tem outro passeio', 'Marque a hamburgueria como ponto intermediário somente se fizer sentido no trajeto. Consulte funcionamento e cardápio no canal da casa antes de combinar o horário com o grupo.'],
    ],
  },
  {
    slug: 'sao-francisco-de-assis-penha', origin: 'São Francisco de Assis, Penha', group: 'penha', title: 'De São Francisco de Assis à Burger Films: uma parada na volta',
    description: 'Planeje uma parada na Armação depois do parque se o endereço da sua hospedagem for na localidade São Francisco de Assis, em Penha.',
    sections: [
      ['Monte o percurso da volta primeiro', 'No fim do passeio, consulte o caminho do parque até a hospedagem em São Francisco de Assis. Depois adicione a Av. Eugênio Krause, 3045, como parada e compare os dois percursos.'],
      ['Se mais de um carro fizer a viagem', 'Compartilhe o endereço completo da unidade escolhida com todos. Buscar apenas pelo nome da Burger Films pode mostrar as duas opções em Penha.'],
      ['Encaixe a refeição conforme o dia', 'Se o grupo já estiver cansado, vale voltar primeiro à hospedagem. Se optar por fazer um pedido em vez de sair, confirme pelo endereço exato se é possível entregar.'],
    ],
  },
  {
    slug: 'sao-nicolau-penha', origin: 'São Nicolau, Penha', group: 'penha', title: 'De São Nicolau a Armação: como organizar uma retirada ou visita',
    description: 'Use o endereço certo para traçar a saída da localidade São Nicolau, em Penha, e confirme a unidade antes de pedir retirada.',
    sections: [
      ['Confira o trecho de estrada antes de sair', 'Use o endereço exato em São Nicolau como partida e a unidade de sua preferência como destino. Antes de escolher o percurso mais curto, confira as condições que o mapa indica para o dia.'],
      ['Vai retirar um pedido?', 'Confirme primeiro se a retirada é oferecida naquele momento e em qual unidade o pedido será preparado. Só então trace a rota; a unidade filmada fica na Av. Eugênio Krause, 3045.'],
      ['Retirada e refeição no local são planos diferentes', 'Se a ideia é comer na hamburgueria, consulte o funcionamento da unidade antes de sair e planeje o caminho de volta. Se preferir levar, confirme o endereço de retirada no recibo.'],
    ],
  },
  {
    slug: 'navegantes', origin: 'Navegantes', group: 'regiao', title: 'De Navegantes ao Beto Carrero: aeroporto, parque e lanche',
    description: 'Vem pelo Aeroporto de Navegantes? Planeje o deslocamento até Penha, o que fazer com as malas e onde comer em Armação depois do Beto Carrero.',
    sections: [
      ['Aeroporto e parque são etapas diferentes', 'O aeroporto fica em Navegantes e o parque em Penha. Combine carro, traslado ou transporte antes do desembarque. Se for direto ao parque, planeje onde guardar as malas em vez de contar com uma solução na chegada.'],
      ['Você chega e vai ao parque no mesmo dia?', 'Compare o horário previsto do voo mais retirada de bagagem com o horário do parque. Se a conexão ficar apertada, use o dia da chegada para ir à hospedagem e conhecer Armação.'],
      ['Uma parada em Armação de Penha', 'Para ir à unidade mostrada no vídeo, salve Av. Eugênio Krause, 3045. Se o seu próximo trecho é um voo, reserve margem para o deslocamento e deixe a refeição fora de um horário apertado.'],
    ],
  },
  {
    slug: 'balneario-picarras', origin: 'Balneário Piçarras', group: 'regiao', title: 'De Balneário Piçarras ao Beto Carrero: parque, praia e volta',
    description: 'Hospedado em Balneário Piçarras? Organize o passeio em Penha e decida onde comer sem precisar voltar à hospedagem entre atividades.',
    sections: [
      ['Decida quando encaixar a praia', 'Se você já está hospedado em Piçarras, deixe a praia para outro período do roteiro em vez de tentar voltar à orla no meio do dia do parque. Leve uma troca de roupa se for sair em seguida.'],
      ['Compare o caminho antes de sair do parque', 'Confira no mapa o percurso entre o Beto Carrero e o seu endereço exato em Piçarras. Salve a unidade na Armação como parada intermediária só se fizer sentido para a volta.'],
      ['A unidade do vídeo é em Penha', 'O vídeo mostra a Av. Eugênio Krause, 3045. Se você quer pedir para a hospedagem, consulte a cobertura pelo endereço em vez de presumir entrega em Piçarras.'],
    ],
  },
  {
    slug: 'itajai', origin: 'Itajaí', group: 'regiao', title: 'De Itajaí ao Beto Carrero: escolha o caminho e planeje a refeição',
    description: 'Organize a saída de Itajaí para o Beto Carrero, o ponto de encontro do grupo e uma parada para comer em Armação.',
    sections: [
      ['A saída depende do ponto onde você está', 'Coloque no mapa o endereço real em Itajaí. Para quem está perto da travessia com Navegantes, compare as rotas atuais em vez de presumir que a travessia é sempre a melhor opção.'],
      ['Combine como será a volta', 'Se o grupo sai de lugares diferentes em Itajaí, determine um ponto de encontro e confirme em qual carro cada pessoa volta. Assim, dá para escolher a parada em Penha antes de se dividir.'],
      ['Parada em Armação, não em Itajaí', 'A Av. Eugênio Krause, 3045, exibida no vídeo, fica em Penha. Salve também o destino final em Itajaí para ver os dois trechos no mapa.'],
    ],
  },
  {
    slug: 'balneario-camboriu', origin: 'Balneário Camboriú', group: 'regiao', title: 'Hospedagem em Balneário Camboriú: bate-volta ao Beto Carrero',
    description: 'Vai dormir em Balneário Camboriú e visitar o Beto Carrero? Separe o dia do parque e planeje a refeição antes do retorno.',
    sections: [
      ['Use Penha como destino do dia', 'O parque e a hamburgueria ficam em Penha, não em Balneário Camboriú. Salve os dois destinos separados no mapa e dê margem ao percurso de volta.'],
      ['Refeição antes ou depois da volta?', 'Se o grupo quer comer antes de voltar à hospedagem, escolha a unidade e confirme o funcionamento antes de sair do parque. Para manter a noite livre em Balneário, viaje de volta direto e deixe o lanche em Penha para outra ocasião.'],
      ['Qual unidade aparece no vídeo?', 'O vídeo mostra a unidade da Av. Eugênio Krause, 3045, na Armação. A unidade da Av. Alfredo Brunetti, 631, é outra opção a comparar no mapa.'],
    ],
  },
  {
    slug: 'joinville', origin: 'Joinville', group: 'regiao', title: 'De Joinville ao Beto Carrero: o que decidir antes do bate-volta',
    description: 'Planeje um bate-volta de Joinville a Penha pela BR-101 e organize o retorno com uma parada para comer na Armação.',
    sections: [
      ['Confirme saída e retorno como dois trajetos', 'A BR-101 é o eixo de acesso por terra indicado no guia do parque. Confira a rota de Joinville na ida e, quando terminar a visita, consulte novamente o trânsito para a volta.'],
      ['Se houver crianças ou só um motorista', 'Planeje uma pausa e combine de antemão até que horas vale prolongar o dia. Em vez de decidir na saída do parque, salve uma opção de refeição em Penha para comparar com a volta direta.'],
      ['Use o endereço da unidade para comparar', 'A unidade que aparece no vídeo fica na Av. Eugênio Krause, 3045, na Armação. Use o ponto exato, não apenas o resultado de busca pelo nome da hamburgueria.'],
    ],
  },
  {
    slug: 'blumenau', origin: 'Blumenau', group: 'regiao', title: 'De Blumenau ao Beto Carrero: roteiro do Vale do Itajaí a Penha',
    description: 'Saindo de Blumenau para Penha, confira o roteiro do parque e escolha uma pausa para comer sem depender de tempos fixos de estrada.',
    sections: [
      ['Compare o acesso do Vale à BR-101', 'Antes de sair de Blumenau, use um mapa atualizado para conferir o trecho do Vale do Itajaí até a conexão com a BR-101. Calcule o dia pelo endereço de saída, não pelo centro da cidade.'],
      ['Combine passeio e hospedagem separadamente', 'Se a viagem inclui outras cidades do Vale, não tente encaixar um compromisso de horário rígido logo depois do parque. Um lanche em Penha pode funcionar como pausa entre a visita e a volta.'],
      ['Salve a parada para comer em Armação', 'O vídeo apresenta a unidade da Av. Eugênio Krause, 3045. Na hora de escolher o percurso, confirme se a parada cabe antes de retornar a Blumenau ou seguir para outro município.'],
    ],
  },
  {
    slug: 'curitiba', origin: 'Curitiba', group: 'viagem', title: 'De Curitiba ao Beto Carrero: viagem de carro e parada em Penha',
    description: 'Saindo de Curitiba para visitar o Beto Carrero? Organize a viagem por terra, escolha quando ir ao parque e veja onde comer na Armação.',
    sections: [
      ['Separe a viagem do primeiro ingresso', 'O parque indica a BR-101 como eixo de acesso por terra. Saindo de Curitiba, ajuste o horário pela rota e pelo trânsito da data. Em vez de marcar um compromisso logo na chegada, considere ir primeiro à hospedagem.'],
      ['O grupo volta no mesmo dia?', 'Combine antes quem dirige a volta e se haverá pausa para refeição antes de pegar a estrada. Se for pernoitar, deixe o endereço da pousada salvo junto com os dois endereços da Burger Films.'],
      ['Onde funciona a Burger Films do vídeo?', 'Na Av. Eugênio Krause, 3045, Armação, em Penha. Se quiser comer perto do parque, compare essa unidade com a da Av. Alfredo Brunetti antes de sair.'],
    ],
  },
  {
    slug: 'florianopolis', origin: 'Florianópolis', group: 'viagem', title: 'De Florianópolis ao Beto Carrero: roteiro de bate-volta',
    description: 'Organize o bate-volta de Florianópolis ao Beto Carrero e veja como encaixar uma refeição na Armação antes de retornar.',
    sections: [
      ['Considere de qual lado você sai', 'Comece o mapa na sua hospedagem em Florianópolis. Se estiver na ilha, conte também o acesso às pontes antes da BR-101. Confira o deslocamento novamente para a volta, em vez de assumir o mesmo tempo da ida.'],
      ['Uma parada flexível depois do parque', 'Em vez de marcar o jantar por um horário fixo, confirme o funcionamento da unidade e veja quando o grupo realmente pretende sair. Para um passeio com crianças, consulte o cardápio antes de pegar a estrada.'],
      ['A referência do vídeo está em Penha', 'Av. Eugênio Krause, 3045, Armação. É um ponto para consultar no roteiro de Penha, não uma unidade em Florianópolis.'],
    ],
  },
  {
    slug: 'sao-paulo', origin: 'São Paulo', group: 'viagem', title: 'De São Paulo ao Beto Carrero: como decidir entre avião e carro',
    description: 'Compare voar até Navegantes ou dirigir até Penha. Saiba como organizar a chegada, a hospedagem e uma parada para comer depois do parque.',
    sections: [
      ['Avião: compare de porta a porta', 'Some o deslocamento ao aeroporto de origem, a espera, a retirada de bagagem e o trecho de Navegantes a Penha. Compare com a estrada usando o endereço completo da hospedagem, não só o tempo de voo.'],
      ['Carro: uma viagem separada do dia do parque', 'Se for dirigir por um trajeto longo, planeje pausas e considere deixar o ingresso para o dia seguinte à chegada. Isso evita depender de um horário exato de estrada.'],
      ['Endereço para quem vai conhecer Armação', 'A unidade do vídeo está na Av. Eugênio Krause, 3045, em Penha. Para quem pousa em Navegantes, confira também o guia do aeroporto antes de escolher quando visitar a unidade.'],
    ],
  },
  {
    slug: 'porto-alegre', origin: 'Porto Alegre', group: 'viagem', title: 'De Porto Alegre ao Beto Carrero: chegada e hospedagem em Penha',
    description: 'Planeje a viagem do Rio Grande do Sul a Penha: compare chegar por estrada ou avião e separe tempo para visitar o parque e conhecer Armação.',
    sections: [
      ['Aproveite o dia de chegada sem corrida', 'Se viajar de carro, trate o percurso desde Porto Alegre como uma etapa separada. A BR-101 é referência de acesso indicada pelo parque; confira paradas, trânsito e previsão antes de sair. Se for voar, verifique as opções do seu dia e o transporte até Penha.'],
      ['Hospedagem e parque no mesmo roteiro', 'Escolha primeiro onde dormirá. Se a base for fora de Penha, compare ida e volta antes de decidir voltar ao litoral depois do parque ou parar para comer em Armação.'],
      ['Onde comer sem confundir os municípios', 'A unidade do vídeo está na Av. Eugênio Krause, 3045, em Penha. Se for sair cedo para Porto Alegre no dia seguinte, deixe a refeição para o dia em que já estiver no município.'],
    ],
  }
];

export function guidePath(guide: TravelGuide): string {
  return guide.group === 'penha' ? guide.slug : `${TRAVEL_HUB}/de-${guide.slug}`;
}

export function getTravelGuide(view: string) {
  return TRAVEL_GUIDES.find(guide => guidePath(guide) === view);
}
