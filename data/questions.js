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
  {
    questionText: 'Tsunami rujnuje Japonię, setki zabitych, tysiące osób bez dachu nad głową',
    answers: [
      { text: 'Przekaż środki finansowe', points: { finanse: -5, popularnosc: +3, obrona: -2, dyplomacja: +3 } },
      { text: 'Wyślij ratowników i pomoc humanitarną', points: { finanse: -4, popularnosc: +5, obrona: -5, dyplomacja: +5 } },
      { text: 'Złóż kondolencje za pośrednictwem mediów społecznościowych', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -3 } },
      { text: 'Sprowadź do domu polaków przebywających w Japonii', points: { finanse: -4, popularnosc: +1, obrona: +1, dyplomacja: -5 } },

    ],
    image: require('../assets/images/question9.jpg'),
  },
  {
    questionText: 'Protesty antyrządowe, niezadowoleni obywatele zbierają się pod sejmem',
    answers: [
      { text: 'Porozmawiaj z protestującymi', points: { finanse: 0, popularnosc: +2, obrona: 0, dyplomacja: +5 } },
      { text: 'Zorganizuj anty-demonstrację', points: { finanse: -1, popularnosc: -3, obrona: -3, dyplomacja: -1 } },
      { text: 'Każ wojsku i policji zakończyć demonstrację siłowo', points: { finanse: -5, popularnosc: -5, obrona: -5, dyplomacja: -5 } },
      { text: 'Nic nie rób', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: -2 } },

    ],
    image: require('../assets/images/question9.jpg'),
  },
  {
    questionText: 'Protesty antyrządowe, niezadowoleni obywatele zbierają się pod sejmem',
    answers: [
      { text: 'Porozmawiaj z protestującymi', points: { finanse: 0, popularnosc: +2, obrona: 0, dyplomacja: +5 } },
      { text: 'Zorganizuj anty-demonstrację', points: { finanse: -1, popularnosc: -3, obrona: -3, dyplomacja: -1 } },
      { text: 'Każ wojsku i policji zakończyć demonstrację siłowo', points: { finanse: -5, popularnosc: -5, obrona: -5, dyplomacja: -5 } },
      { text: 'Nic nie rób', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: -2 } },

    ],
    image: require('../assets/images/question10.jpg'),
  },
  {
    questionText: 'Strajk kierowców limuzyn rządowych. Domagają się wyższych zarobków',
    answers: [
      { text: 'Daj im podwyżki', points: { finanse: -4, popularnosc: +2, obrona: +1, dyplomacja: -3 } },
      { text: 'Negocjuj z protestującymi', points: { finanse: -2, popularnosc: +3, obrona: 0, dyplomacja: -1 } },
      { text: 'Zwolinić wszystkich, od dzisiaj politycy nie będą jeździli limuzynami', points: { finanse: +5, popularnosc: +5, obrona: -5, dyplomacja: -5 } },
      { text: 'Każ wojsku i policji siłowo zakończyć demonstrację', points: { finanse: -3, popularnosc: -5, obrona: -5, dyplomacja: +3 } },
    ],
    image: require('../assets/images/question11.jpg'),
},
{
    questionText: 'Urzędy nie wyrabiają się z wydawaniem Ukraińcom kart pobytu.',
    answers: [
      { text: 'Zwiększ budżet na urzędników.', points: { finanse: -5, popularnosc: 0, obrona: 0, dyplomacja: 0 } },
      { text: 'Trudno, niech sobie radzą.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
      { text: 'Uprość procedury.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +3 } },
      { text: 'Znieś czasowo obowiązek posiadania kart.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +5 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Zapronowałeś ukraińskiemu wojsku stare polskie samoloty, ale nie chcą tych „śmieci".',
    answers: [
      { text: 'Nie, to nie. Olej sprawę.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -5 } },
      { text: 'Sfinansuj kilka nowych jednostek.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 5 } },
      { text: 'Utrudnij ukraińskim imigrantom życie w Polsce.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -3 } },
      { text: 'Publicznie nazwij ukraińców roszeniowymi niewdzięcznikami.', points: { finanse: 0, popularnosc: -5, obrona: -5, dyplomacja: -10 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Metereolodzy wydają alerty o możliwych huraganach i wichurach.',
    answers: [
      { text: 'Od tego są służby ratunkowe.', points: { finanse: 0, popularnosc: -5, obrona: -5, dyplomacja: 0 } },
      { text: 'Postaw wszystkie służby w stan zwiększonej gotowości.', points: { finanse: -5, popularnosc: +5, obrona: +5, dyplomacja: 0 } },
      { text: 'Niech publiczna telewizja nadaje ostrzeżenia.', points: { finanse: 0, popularnosc: +3, obrona: +3, dyplomacja: 0 } },
      { text: 'Przygotuj budżet na pomoc poszkodowanym.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Opozycja zarzuca Ci, że latasz rządowym samolotem nawet po piwo do Żabki.',
    answers: [
      { text: 'Wylicz im w Tweecie ich własne nadużycia.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -2 } },
      { text: 'Odpowiedz, że inaczej nie wyrobisz się z obowiązkami.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -3 } },
      { text: 'Niech rzecznik powie, że to loty techniczne.', points: { finanse: 0, popularnosc: 0, obrona: 0, dyplomacja: +5 } },
      { text: 'Nie odpowiadaj na zaczepki.', points: { finanse: 0, popularnosc: +2, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Poprzedni premier zarzuca Ci łamanie konstytucji.',
    answers: [
      { text: 'Przewróć oczami i uśiechnij się znacząco.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +2 } },
      { text: 'Wymień przykłady, kiedy to on ją łamał.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -3 } },
      { text: 'Udowodni podczas konferencji, że to nieprawda.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +10 } },
      { text: 'To niezbędne, żeby naprawić ten burdel.', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: -2 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Jak zachęcisz młode mamy do powrotu do pracy?',
    answers: [
      { text: 'Darmowe żłobki dla dzieci pracujących.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
      { text: 'Dofinansowanie do opieki nad dzieckiem.', points: { finanse: -5, popularnosc: +3, obrona: 0, dyplomacja: 0 } },
      { text: 'Chcieli mieć dzieci, to ich sprawa.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: +10 } },
      { text: 'Przygotuj program ulg dla firm zatrudniających młode mamy.', points: { finanse: -3, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Polacy narzekają na ceny opieki dentystycznej.',
    answers: [
      { text: 'Rozszerz wachlarz świadczeń na NFZ.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
      { text: 'Ufunduj bon dentystyczny.', points: { finanse: -5, popularnosc: +3, obrona: 0, dyplomacja: 0 } },
      { text: 'Nie ma na to teraz kasy. Dopisz do listy.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
      { text: 'Nie będzie wybielania zębów na NFZ!', points: { finanse: 0, popularnosc: -7, obrona: 0, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'W Polsce jest rekordowo niska liczba urodzeń.',
    answers: [
      { text: 'Podnieś 800+ do 1000+.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
      { text: 'Znieczulenie do porodu dla każdego!', points: { finanse: -5, popularnosc: +7, obrona: 0, dyplomacja: 0 } },
      { text: 'Sfinansuj kampanię społeczną o szkodliwości dwania w szyję.', points: { finanse: -5, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
      { text: 'Zdelegalizuj antykoncepcję.', points: { finanse: 0, popularnosc: -10, obrona: -5, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Psychologia i psychiatria dziecięca w Polsce to jakiś mit!',
    answers: [
      { text: 'Stwórz specjalny program dla studentów tych kierunków.', points: { finanse: -5, popularnosc: 0, obrona: 0, dyplomacja: 0 } },
      { text: 'Zobowiąż wszystkich specjalistów do świadczenia godzin w ramach szkół i NFZ.', points: { finanse: -3, popularnosc: -3, obrona: 0, dyplomacja: +3 } },
      { text: 'Podnieś pensje pracującym w sektorze publicznym.', points: { finanse: -10, popularnosc: 5, obrona: 0, dyplomacja: 0 } },
      { text: 'Ściągnij ukraińskich psychiatrów.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
  {
    questionText: 'Czy kraj powinien być świecki?',
    answers: [
      { text: 'Oczywiście. Won z krzyżami!', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
      { text: 'Polska od zawsze była katolicka.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -3 } },
      { text: 'Kościoły są ważnym elementem polskiej kultury, ale należy zachować rozdział od władzy.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +5 } },
      { text: 'Wszystkie religie powinny być traktowane równo.', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: +5 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
   {
    questionText: 'Opozycja coś kombinuje. ',
    answers: [
      { text: 'Każ ich podsłuchiwać.', points: { finanse: 0, popularnosc: -5, obrona: +3, dyplomacja: +2 } },
      { text: 'Oni wiecznie coś kobinują...', points: { finanse: 0, popularnosc: 0, obrona: -5, dyplomacja: 0 } },
      { text: 'Aresztuj i przesłuchaj podejrzanych.', points: { finanse: 0, popularnosc: -5, obrona: +5, dyplomacja: -5 } },
      { text: 'Zorganizuj prowokację.', points: { finanse: 0, popularnosc: 0, obrona: +5, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question11.jpg'),
  },
]

export default questions;
