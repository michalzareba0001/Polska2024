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
          { text: 'Nik nie dostanie pieniędzy - siłą usuń strajkujących', points: { finanse: 5, popularnosc: -5, obrona: -5, dyplomacja: -5 } },
          
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
        image: require('../assets/images/question3.jpg'),
      },
  ];
  
  export default questions;
  
