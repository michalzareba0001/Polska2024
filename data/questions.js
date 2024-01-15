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
    questionText: 'Ceny węgla poszybowały w górę, ludzi nie stać na ogrzewanie',
    answers: [
      { text: 'Zaproponuj dopłaty do zakupu węgla', points: { finanse: -4, popularnosc: +2, obrona: +1, dyplomacja: -3 } },
      { text: 'Zaproponuj dopłąty do wymiany pieców na bardziej ekologiczne źródła energii', points: { finanse: -2, popularnosc: +3, obrona: 0, dyplomacja: -1 } },
      { text: 'Importuj tani węgiel z Rosji', points: { finanse: +5, popularnosc: +5, obrona: -5, dyplomacja: -5 } },
      { text: 'Każ ludziom zbierać chrust w lesie', points: { finanse: -3, popularnosc: -5, obrona: -5, dyplomacja: +3 } },
    ],
    image: require('../assets/images/question12.jpg'),
  },
  {
    questionText: 'Otrzymałeś dofinansowanie z Unii Europejskiej, na co chcesz przeznaczyć pieniądze?',
    answers: [
      { text: 'Służba zdrowia', points: { finanse: +1, popularnosc: +3, obrona: +1, dyplomacja: 0 } },
      { text: 'Edukacja', points: { finanse: +1, popularnosc: +3, obrona: +1, dyplomacja: 0 } },
      { text: 'Wojsko', points: { finanse: +1, popularnosc: +3, obrona: +5, dyplomacja: 0 } },
      { text: 'Premie dla polityków', points: { finanse: +5, popularnosc: -5, obrona: -5, dyplomacja: +5 } },
    ],
    image: require('../assets/images/question13.jpg'),
  },
  {
    questionText: 'PZPN chce większego finansowania (1 miliard PLN), w zamian obiecuje że nasi piłkarze pojadą na mundial',
    answers: [
      { text: 'Daj 2 miliardy i pochwal się tym w mediach społecznościowych', points: { finanse: -5, popularnosc: +5, obrona: -2, dyplomacja: -5 } },
      { text: 'Daj 1 miliard PLN', points: { finanse: -3, popularnosc: +3, obrona: -1, dyplomacja: -3 } },
      { text: 'Daj 500 milionów PLN', points: { finanse: -1, popularnosc: +1, obrona: 0, dyplomacja: 0 } },
      { text: 'Nic nie dostaną koniec finansowania piłki nożnej z budżetu Państwa', points: { finanse: +5, popularnosc: -5, obrona: 0, dyplomacja: +1 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
  {
    questionText: 'Partia „Za wolność” złożyła propozycję ustawy o związkach partnerskich. Pozwoli ona m.in. na uroczyste sformalizowanie związków homo i heteroseksualnych (pozwoli przyjąć wspólne nazwisko, przysposobić dziecko partnera, nabyć prawo np. do majątku po partnerze).',
    answers: [
      { text: 'Poprzyj projekt', points: { finanse: 0, popularnosc: +10, obrona: 0, dyplomacja: -5 } },
      { text: 'Zaproponuj ustawę o osobie najbliższej', points: { finanse: -5, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Odeślij ustawę do poprawek (usuń możliwość przysposabiania dzieci przez homoseksualistów)', points: { finanse: -10, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Skrytykuj ustawę jako gorszącą i demoralizującą', points: { finanse: 0, popularnosc: -10, obrona: 0, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
  {
    questionText: 'Dwóch polityków z Twojej partii zostało skazanych za przestępstwa, których się dopuścili.',
    answers: [
      { text: 'Ułaskaw drani', points: { finanse: 5, popularnosc: -10, obrona: -5, dyplomacja: 0  } },
      { text: 'Niech odbędą karę', points: { finanse: 0, popularnosc: 10, obrona: 0, dyplomacja: 0 } },
      { text: 'Każ im się zgłosić, a potem cichcem ich wypuść', points: { finanse: -10, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Umieść ich w areszcie domowym', points: { finanse: 0, popularnosc: 5, obrona: -5, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
  {
    questionText: 'Obiecałeś nauczycielom podwyżki, których powoli zaczynają się domagać. Co robisz?',
    answers: [
      { text: 'Daj im obiecany 1000 zł podwyżki', points: { finanse: -10, popularnosc: 10, obrona: 0, dyplomacja: 0  } },
      { text: 'Daj im połowę obiecanej kwoty.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Zastąp obiecaną podwyżkę zmniejszeniem wymiaru godzin', points: { finanse: 0, popularnosc: 5, obrona: 0, dyplomacja: 10 } },
      { text: 'Nic i nie dawaj.Mają 2 miesiące wakacji.', points: { finanse: 0, popularnosc: -10, obrona: -5, dyplomacja: -10 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
  {
    questionText: 'Podczas poprzednich rządów telewizja publiczna była tubą propagandową władzy. Co robisz po objęciu sterów?',
    answers: [
      { text: 'Obcinam im finansowanie', points: { finanse: 15, popularnosc: 5, obrona: -5, dyplomacja: 0  } },
      { text: 'Wymieniam kadrę.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Kompletnie usuwam media finansowane przez rząd.', points: { finanse: 0, popularnosc: 0, obrona: 0, dyplomacja: 5 } },
      { text: 'Wykorzystam skorumpowanych dziennikarzy do własnych celów.', points: { finanse: 0, popularnosc: -5, obrona: 5, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
   {
    questionText: 'Nadeszła możliwość wprowadzenia zmian w składzie trybunału konstytucyjnego.Zaproponuj:',
    answers: [
      { text: 'Aby skład pozostał bez zmian', points: { finanse: 0, popularnosc: 0, obrona: -5, dyplomacja: 5  } },
      { text: 'Wymień wszystkich sędziów na swoich ziomków.', points: { finanse: -5, popularnosc: -10, obrona: 10, dyplomacja: 0 } },
      { text: 'Niech kandydaci będą wybierani przez innych sędziów', points: { finanse: -10, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Niech sędziów wybierze sejm', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
  {
    questionText: 'Po ataku USA na Jemen, gwałtownie wzrosły ceny ropy. Co robisz?',
    answers: [
      { text: 'Zapytaj prezydenta USA, co on odjaniepawla?', points: { finanse: 0, popularnosc: -5, obrona: 10, dyplomacja: -5  } },
      { text: 'Dogadaj się z Rosją.', points: { finanse: -10, popularnosc: -5, obrona: 10, dyplomacja: 10 } },
      { text: 'Uspokój społeczeństwo, że dostawy ropy są zabezpieczone (jasne, że nie są!)', points: { finanse: 0, popularnosc: 10, obrona: -5, dyplomacja: 0 } },
      { text: 'Powołaj komisję specjalistów do stworzenia planu na tę okoliczność', points: { finanse: -10, popularnosc: 5, obrona: 10, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
   {
    questionText: 'Opozycja szykuje marsz protestacyjny w związku z Twoimi działaniami.',
    answers: [
      { text: 'Niech protestują - na zdrowie!', points: { finanse: 0, popularnosc: -10, obrona: -5, dyplomacja: 5  } },
      { text: 'Rozgoń protestujących.', points: { finanse: -10, popularnosc: -10, obrona: 10, dyplomacja: -5 } },
      { text: 'Wykorzystaj media, żeby ośmieszyć protestujących', points: { finanse: 10, popularnosc: 5, obrona: 0, dyplomacja: 0 } },
      { text: 'Zaproś przedstawicieli strajku do rozmów', points: { finanse: -5, popularnosc: 10, obrona: 5, dyplomacja: 10 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
]

export default questions;
=======
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
        questionText: 'Lekarze oraz straż graniczna strajkują, co robisz?',
        answers: [
          { text: 'Daj podwyżki strażnikom', points: { finanse: -3, popularnosc: 0, obrona: 5, dyplomacja: 0 } },
          { text: 'Daj podwyżki lekarzom', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 0 } },
          { text: 'Daj podwyżki jednym i drugim', points: { finanse: -5, popularnosc: 5, obrona: 5, dyplomacja: +2 } },
          { text: 'Nik nie dostanie pieniędzy - siłą usuń strajkujących', points: { finanse: 5, popularnosc: -5, obrona: -5, dyplomacja: -5 } },
          
        ],
        image: require('../assets/images/question5.jpg'),
      },
           {
        questionText: 'Za sprawą kolejnej potrawki (tym razem z koszatniczki) musisz poradzić sobie ze skutkami kolejnej pandemii. Co robisz?',
        answers: [
          { text: 'Rozdajesz darmowe maseczki i rękawiczki na ulicach.', points: { finanse: -2, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
          { text: 'Rzucasz całą służbę zdrowia na aferę koszatniczek. Pacjenci z rakiem niech czekają.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -1 } },
          { text: 'Zamykasz lasy.', points: { finanse: 0, popularnosc: -5, obrona: 2, dyplomacja: 0 } },
          { text: 'Opracowujesz szczepionkę i robisz dobry marketing.', points: { finanse: 5, popularnosc: 1, obrona: 0, dyplomacja: +3 } },
          
        ],
        image: require('../assets/images/question6.jpg'),
      },
      {
        questionText: 'Uchodźcy z Ukrainy czują się niechciani. Sytuacja między Polakami i Ukraińcami robi się napięta. Jak ją załagodzisz?',
        answers: [
          { text: 'Nakażesz stacjom radiowym robić wiadomości po ukraińsku.', points: { finanse: -3, popularnosc: -2, obrona: 1, dyplomacja: 2 } },
          { text: 'Nie zareagujesz. Będziesz obserwować.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -1 } },
          { text: 'Zafundujesz rozwój kompetencji, żeby zatrzeć różnice społeczne.', points: { finanse: 0, popularnosc: -5, obrona: 2, dyplomacja: 0 } },
          { text: 'Opłacisz trolle internetowe, każąc im przekierować nienawiść na inną mniejszość.', points: { finanse: 5, popularnosc: 1, obrona: 0, dyplomacja: +3 } },
          
        ],
        image: require('../assets/images/question7.jpg'),
      },
          {
        questionText: 'Mikro-przedsiębiorcy zaczynają strajkować przeciw opłatom na ZUS, wstrzymując płatność podatków. Jak reagujesz?',
        answers: [
          { text: 'Zarządzasz ustawą miesiąc wakacji od ZUS.', points: { finanse: -2, popularnosc: 2, obrona: 0, dyplomacja: 0 } },
          { text: 'Na poważnie planujesz reformę i obiecujesz opcjonalny ZUS.', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 1 } },
          { text: 'Dajesz dużą ulgę od ZUS jednej grupie zawodowej.', points: { finanse: -1, popularnosc: -4, obrona: -1, dyplomacja: 2 } },
          { text: 'Czekasz aż ochłoną.', points: { finanse: -1, popularnosc: -5, obrona: -3, dyplomacja: -1 } },
          
        ],
        image: require('../assets/images/question8.jpg'),
                {
          questionText: 'Brakuje rąk do pracy, bo Zetki wciąż zastanawiają się jaka jest ich „prawdziwa droga życia". Co teraz?',
        answers: [
          { text: 'Jak to co? Trzeba sprzedać wizy azjatom!', points: { finanse: 3, popularnosc: -2, obrona: -3, dyplomacja: 2 } },
          { text: 'Ściągasz ekspatów ciekawymi ulgami i dotacjami.', points: { finanse: -1, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
          { text: 'Zwiększasz podatki, które doprowadzą do masowych zwolnień i bezrobotni się znajdą.', points: { finanse: 1, popularnosc: -5, obrona: -2, dyplomacja: -3 } },
          { text: 'Nic. Niech przedsiębiorcy sobie jakoś radzą.', points: { finanse: 0, popularnosc: -1, obrona: 0, dyplomacja: -1 } },
          
        ],
        image: require('../assets/images/question9.jpg'),
      },
  
  export default questions;
  
