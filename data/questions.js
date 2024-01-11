// data/questions.js
const questions = [
  {
    questionText: 'Prezydent Wołodymyr Zełenski prosi o wsparcie w celu wygrania wojny z Rosją',
    answers: [
      { text: 'Przekaż 1 miliard PLN', points: { finanse: -5, popularnosc: 3, obrona: 0, dyplomacja: 5 } },
      { text: 'Przekaż 500 milionów', points: { finanse: -3, popularnosc: 1, obrona: 0, dyplomacja: 2 } },
      { text: 'Przekaż stary sprzęt wojskowy', points: { finanse: 0, popularnosc: -2, obrona: -2, dyplomacja: 1 } },
      { text: 'Odmów udzielenia pomocy', points: { finanse: 2, popularnosc: -5, obrona: 3, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question1.jpg'),
  },
  {
    questionText: 'Korzystna sytuacja na rynku pracy przynosi dodatkowe dochody (500 mln PLN). Na co chcesz przeznaczyć te pieniądze?',
    answers: [
      { text: 'Służba zdrowia', points: { finanse: -3, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Edukacja', points: { finanse: -3, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Wojsko', points: { finanse: -3, popularnosc: 1, obrona: 5, dyplomacja: 1 } },
      { text: 'TV Republika', points: { finanse: -3, popularnosc: -3, obrona: -3, dyplomacja: -3 } },

    ],
    image: require('../assets/images/question2.jpg'),
  },
  {
    questionText: 'Lekarze oraz straż graniczna strajkują, co robisz?',
    answers: [
      { text: 'Daj podwyżki strażnikom', points: { finanse: -3, popularnosc: 0, obrona: 5, dyplomacja: 0 } },
      { text: 'Daj podwyżki lekarzom', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 0 } },
      { text: 'Daj podwyżki jednym i drugim', points: { finanse: -5, popularnosc: 5, obrona: 5, dyplomacja: +2 } },
      { text: 'Nikt nie dostanie pieniędzy - siłą usuń strajkujących', points: { finanse: 5, popularnosc: -5, obrona: -5, dyplomacja: -5 } },

    ],
    image: require('../assets/images/question3.jpg'),
  },
  {
    questionText: 'Metropolita krakowski proponuje wsparcie polityczne, płatność co łaska (ale nie mniej niż 1% PKB)',
    answers: [
      { text: 'Przyjmij propozycję', points: { finanse: 5, popularnosc: 5, obrona: 0, dyplomacja: -5 } },
      { text: 'Odrzuć propozycję', points: { finanse: -5, popularnosc: -5, obrona: 0, dyplomacja: 5 } },

    ],
    image: require('../assets/images/question4.jpg'),
  },

  {
    questionText: 'Za sprawą kolejnej potrawki (tym razem z koszatniczki) musisz poradzić sobie ze skutkami kolejnej pandemii. Co robisz?',
    answers: [
      { text: 'Rozdajesz darmowe maseczki i rękawiczki na ulicach.', points: { finanse: -2, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Rzucasz całą służbę zdrowia na aferę koszatniczek. Pacjenci z rakiem niech czekają.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -1 } },
      { text: 'Zamykasz lasy.', points: { finanse: 0, popularnosc: -5, obrona: 2, dyplomacja: 0 } },
      { text: 'Opracowujesz szczepionkę i robisz dobry marketing.', points: { finanse: 5, popularnosc: 1, obrona: 0, dyplomacja: +3 } },

    ],
    image: require('../assets/images/question5.jpg'),
  },
  {
    questionText: 'Uchodźcy z Ukrainy czują się niechciani. Sytuacja między Polakami i Ukraińcami robi się napięta. Jak ją załagodzisz?',
    answers: [
      { text: 'Nakażesz stacjom radiowym robić wiadomości po ukraińsku.', points: { finanse: -3, popularnosc: -2, obrona: 1, dyplomacja: 2 } },
      { text: 'Nie zareagujesz. Będziesz obserwować.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -1 } },
      { text: 'Zafundujesz rozwój kompetencji, żeby zatrzeć różnice społeczne.', points: { finanse: 0, popularnosc: -5, obrona: 2, dyplomacja: 0 } },
      { text: 'Opłacisz trolle internetowe, każąc im przekierować nienawiść na inną mniejszość.', points: { finanse: 5, popularnosc: 1, obrona: 0, dyplomacja: +3 } },

    ],
    image: require('../assets/images/question6.jpg'),
  },
  {
    questionText: 'Mikro-przedsiębiorcy zaczynają strajkować przeciw opłatom na ZUS, wstrzymując płatność podatków. Jak reagujesz?',
    answers: [
      { text: 'Zarządzasz ustawą miesiąc wakacji od ZUS.', points: { finanse: -2, popularnosc: 2, obrona: 0, dyplomacja: 0 } },
      { text: 'Na poważnie planujesz reformę i obiecujesz opcjonalny ZUS.', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 1 } },
      { text: 'Dajesz dużą ulgę od ZUS jednej grupie zawodowej.', points: { finanse: -1, popularnosc: -4, obrona: -1, dyplomacja: 2 } },
      { text: 'Czekasz aż ochłoną.', points: { finanse: -1, popularnosc: -5, obrona: -3, dyplomacja: -1 } },

    ],
    image: require('../assets/images/question7.jpg'),
  },
  {
    questionText: 'Brakuje rąk do pracy, bo Zetki wciąż zastanawiają się jaka jest ich „prawdziwa droga życia". Co teraz?',
    answers: [
      { text: 'Jak to co? Trzeba sprzedać wizy azjatom!', points: { finanse: 3, popularnosc: -2, obrona: -3, dyplomacja: 2 } },
      { text: 'Ściągasz ekspatów ciekawymi ulgami i dotacjami.', points: { finanse: -1, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Zwiększasz podatki, które doprowadzą do masowych zwolnień i bezrobotni się znajdą.', points: { finanse: 1, popularnosc: -5, obrona: -2, dyplomacja: -3 } },
      { text: 'Nic. Niech przedsiębiorcy sobie jakoś radzą.', points: { finanse: 0, popularnosc: -1, obrona: 0, dyplomacja: -1 } },

    ],
    image: require('../assets/images/question8.jpg'),
  },
]

export default questions;
