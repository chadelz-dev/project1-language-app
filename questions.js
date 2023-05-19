'use strict';

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

/*

-- Questions for the APP

 - separated from the working code just for ease of use
*/

const questions = [
  // new question
  {
    question: 'What does "Molo" mean?',
    answers: [
      { text: 'Hello', correct: true },
      { text: 'Tomorrow', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Enkosi" ngesiNgesi?',
    answers: [
      { text: 'It is cozy', correct: false },
      { text: 'Thank you', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Unjani?" mean?',
    answers: [
      { text: 'How are you?', correct: true },
      { text: 'Who are you?', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Molweni" ngesiNgesi?',
    answers: [
      { text: 'Hello', correct: false },
      { text: 'Hello (to many)', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiphilile" mean?',
    answers: [
      { text: 'We are fine', correct: false },
      { text: 'I am fine', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Siphilile" ngesiNgesi?',
    answers: [
      { text: 'I am fine', correct: false },
      { text: 'We are fine', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndicela" mean?',
    answers: [
      { text: 'He/ She is Asking', correct: false },
      { text: 'I am asking', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ninjani?" ngesiNgesi?',
    answers: [
      { text: 'How are you all? (to many)', correct: true },
      { text: 'Who are you all? (to many)', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Uxolo" mean?',
    answers: [
      { text: 'I am Sorry / Excuse Me / Peace', correct: true },
      { text: 'Wrong / Mistake', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ewe" ngesiNgesi?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'Ear', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Hayi" mean?',
    answers: [
      { text: 'Hi', correct: false },
      { text: 'No', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ha-a" ngesiNgesi?',
    answers: [
      { text: 'laughter', correct: false },
      { text: 'No', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Mhlawumbi" mean?',
    answers: [
      { text: 'Womb', correct: false },
      { text: 'Maybe', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Andazi" ngesiNgesi?',
    answers: [
      { text: 'we do not know', correct: false },
      { text: "I don't know ", correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Inoba" mean?',
    answers: [
      { text: 'Likely/ Perhaps / Maybe', correct: true },
      { text: 'Unlikely / Perhaps not', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndilibele" ngesiNgesi?',
    answers: [
      { text: 'My belly', correct: false },
      { text: 'I forgot', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Khumbula" mean?',
    answers: [
      { text: 'Forgot', correct: true },
      { text: 'Remember', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ima / Yima" ngesiNgesi?',
    answers: [
      { text: 'Go / Start', correct: false },
      { text: 'Stop / Wait', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Jonga" mean?',
    answers: [
      { text: 'Listen', correct: false },
      { text: 'Look', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Iza / Yiza" ngesiNgesi?',
    answers: [
      { text: 'Go', correct: false },
      { text: 'Come', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Buya" mean?',
    answers: [
      { text: 'Question', correct: false },
      { text: 'Come back', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Hamba" ngesiNgesi?',
    answers: [
      { text: 'Help', correct: false },
      { text: 'Go / Walk', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyahamba" mean?',
    answers: [
      { text: 'I need help', correct: false },
      { text: 'I am going / walking', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Wena" ngesiNgesi?',
    answers: [
      { text: 'You', correct: true },
      { text: 'We', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Mna" mean?',
    answers: [
      { text: 'Me', correct: true },
      { text: 'Mom', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Thina" ngesiNgesi?',
    answers: [
      { text: 'You All', correct: false },
      { text: 'Us', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Nina" mean?',
    answers: [
      { text: 'You All', correct: true },
      { text: 'Us', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Bona" ngesiNgesi?',
    answers: [
      { text: 'Hear', correct: true },
      { text: 'See / Them', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Sonke" mean?',
    answers: [
      { text: 'All of us / Everybody', correct: true },
      { text: 'Softer', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kuhle" ngesiNgesi?',
    answers: [
      { text: 'All is well', correct: true },
      { text: 'It is cooler', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "endleleni" mean?',
    answers: [
      { text: 'The ending of something', correct: false },
      { text: 'On the Road / On the way', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Phandle" ngesiNgesi?',
    answers: [
      { text: 'Outside', correct: true },
      { text: 'Inside', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Indlu" mean?',
    answers: [
      { text: 'House', correct: true },
      { text: 'Iglo', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Emsebenzini" ngesiNgesi?',
    answers: [
      { text: 'At work', correct: true },
      { text: 'At school', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ecaweni" mean?',
    answers: [
      { text: 'At the Library', correct: false },
      { text: 'At Church', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyafunda" ngesiNgesi?',
    answers: [
      { text: 'I want', correct: false },
      { text: 'I am studying / reading', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ekuseni" mean?',
    answers: [
      { text: 'In the morning', correct: true },
      { text: 'At night', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Emini" ngesiNgesi?',
    answers: [
      { text: 'During the day', correct: true },
      { text: 'A little one', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ebusuku" mean?',
    answers: [
      { text: 'In the morning', correct: false },
      { text: 'At night', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "imini" ngesiNgesi?',
    answers: [
      { text: 'During the day', correct: false },
      { text: 'A day', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Kushushu" mean?',
    answers: [
      { text: 'It is hot', correct: true },
      { text: 'Keep quiet', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kuyabanda" ngesiNgesi?',
    answers: [
      { text: 'It is cold', correct: true },
      { text: 'it is warm', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Kuyanetha" mean?',
    answers: [
      { text: 'It is raining', correct: true },
      { text: 'Get the net', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Iveki" ngesiNgesi?',
    answers: [
      { text: 'The vet', correct: false },
      { text: 'A week', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Inyanga" mean?',
    answers: [
      { text: 'The Sun / The heat / The warmth', correct: false },
      { text: 'A month / The moon / Traditional Healer', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Unyaka" ngesiNgesi?',
    answers: [
      { text: 'Snake', correct: false },
      { text: 'A year', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "into" mean?',
    answers: [
      { text: 'Going inside', correct: false },
      { text: 'A thing', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Izinto" ngesiNgesi?',
    answers: [
      { text: 'Friends', correct: false },
      { text: 'Things', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Yintoni Lento?" mean?',
    answers: [
      { text: 'What time?', correct: false },
      { text: 'What is this?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ubomi" ngesiNgesi?',
    answers: [
      { text: 'Life', correct: true },
      { text: 'Boiling', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Umfazi" mean?',
    answers: [
      { text: 'A woman', correct: true },
      { text: 'A man', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Indoda" ngesiNgesi?',
    answers: [
      { text: 'A man', correct: true },
      { text: 'A woman', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Umntana" mean?',
    answers: [
      { text: 'A child', correct: true },
      { text: 'A gift', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Isandla" ngesiNgesi?',
    answers: [
      { text: 'Hand', correct: true },
      { text: 'Sand', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Amehlo" mean?',
    answers: [
      { text: 'Eyes', correct: true },
      { text: 'Metal', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Umncinci" ngesiNgesi?',
    answers: [
      { text: 'Smallest', correct: false },
      { text: 'You are young', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Umdala" mean?',
    answers: [
      { text: 'Telling', correct: false },
      { text: 'Old / Grown up', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Imnandi" ngesiNgesi?',
    answers: [
      { text: 'It is funny', correct: false },
      { text: 'It is Tasty / Enjoyable', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ngena" mean?',
    answers: [
      { text: 'Come inside', correct: true },
      { text: 'Next', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Phakama" ngesiNgesi?',
    answers: [
      { text: 'Stand up', correct: true },
      { text: 'Sit down', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Phakamani" mean?',
    answers: [
      { text: 'All stand up', correct: true },
      { text: 'All sit down', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Hlala" ngesiNgesi?',
    answers: [
      { text: 'Yell', correct: false },
      { text: 'Sit', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Hlalani" mean?',
    answers: [
      { text: 'Bouncing', correct: false },
      { text: 'All sit', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Inyani" ngesiNgesi?',
    answers: [
      { text: 'The Truth', correct: true },
      { text: 'Smaller', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Uboxoki" mean?',
    answers: [
      { text: 'Many boxes', correct: false },
      { text: 'Lies or a lie', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Thetha" ngesiNgesi?',
    answers: [
      { text: 'Speak', correct: true },
      { text: 'Write', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Inxhaki" mean?',
    answers: [
      { text: 'The truth', correct: false },
      { text: 'A problem', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndinenxhaki" ngesiNgesi?',
    answers: [
      { text: 'I have a problem', correct: true },
      { text: 'I have the truth', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndicumile" mean?',
    answers: [
      { text: 'I am singing', correct: false },
      { text: 'I am smiling', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uncumile" ngesiNgesi?',
    answers: [
      { text: 'He / She is smiling', correct: true },
      { text: 'He / She is singing', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ugumbile" mean?',
    answers: [
      { text: 'He / She is smiling / laughing', correct: false },
      { text: 'He / She is frowning / sad / sulking', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Indawo" ngesiNgesi?',
    answers: [
      { text: 'A place', correct: true },
      { text: 'Water', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Apha" mean?',
    answers: [
      { text: 'There', correct: false },
      { text: 'Here', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Phaya" ngesiNgesi?',
    answers: [
      { text: 'There', correct: true },
      { text: 'Here', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Iphi" mean?',
    answers: [
      { text: 'Where are they?', correct: false },
      { text: 'Where is it?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uphi" ngesiNgesi?',
    answers: [
      { text: 'Where are you?', correct: true },
      { text: 'Where is it?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Niphi" mean?',
    answers: [
      { text: 'Where is this thing?', correct: false },
      { text: 'Where are you? (a group of people)', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Intoni?" ngesiNgesi?',
    answers: [
      { text: 'when?', correct: false },
      { text: 'what?', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Njani" mean?',
    answers: [
      { text: 'Why?', correct: false },
      { text: 'How?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ngoba?" ngesiNgesi?',
    answers: [
      { text: 'Why?', correct: true },
      { text: 'When?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ubani?" mean?',
    answers: [
      { text: 'Where?', correct: false },
      { text: 'Who?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyabona" ngesiNgesi?',
    answers: [
      { text: 'I see it / I get it', correct: true },
      { text: 'I hear it', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyakuva" mean?',
    answers: [
      { text: 'I can see you', correct: false },
      { text: 'I can hear you', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyayazi" ngesiNgesi?',
    answers: [
      { text: 'I know it', correct: true },
      { text: 'I do not know it', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Kakhulu" mean?',
    answers: [
      { text: 'A little bit', correct: false },
      { text: 'A lot', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kancinci" ngesiNgesi?',
    answers: [
      { text: 'A little bit', correct: true },
      { text: 'A lot of', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ilapha" mean?',
    answers: [
      { text: 'A patio', correct: false },
      { text: 'it is here', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Sapha" ngesiNgesi?',
    answers: [
      { text: 'Give it to me', correct: true },
      { text: 'Outside', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Thatha" mean?',
    answers: [
      { text: 'Talk', correct: false },
      { text: 'Take', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Izapha" ngesiNgesi?',
    answers: [
      { text: 'Come here', correct: true },
      { text: 'Come outside', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndifuna" mean?',
    answers: [
      { text: 'I am reading', correct: false },
      { text: 'I want', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ayifani" ngesiNgesi?',
    answers: [
      { text: 'It is not the same / Does not look the same', correct: true },
      { text: 'It is the same / Does look the same', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Iyafana" mean?',
    answers: [
      { text: 'It is the same / Does look the same', correct: true },
      { text: 'It is not the same / Does not look the same', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Abafani" ngesiNgesi?',
    answers: [
      { text: 'They are not the same / not similar', correct: true },
      { text: 'They are the same / are similar', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "bayafana" mean?',
    answers: [
      { text: 'They do not look alike / not similar', correct: false },
      { text: 'They look alike / are similar', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ngapha" ngesiNgesi?',
    answers: [
      { text: 'This side / This way', correct: true },
      { text: 'Not this side / Not this way', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndikhape" mean?',
    answers: [
      { text: 'Accompany me', correct: true },
      { text: 'This way / This side', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ithi" ngesiNgesi?',
    answers: [
      { text: 'Hear', correct: false },
      { text: 'Say / Do / You say / It reads', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndithi" mean?',
    answers: [
      { text: 'I am saying', correct: true },
      { text: 'I am hearing', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Lento" ngesiNgesi?',
    answers: [
      { text: 'That thing', correct: false },
      { text: 'This thing', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Lanto" mean?',
    answers: [
      { text: 'That thing', correct: true },
      { text: 'This thing', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Lonto" ngesiNgesi?',
    answers: [
      { text: 'That thing', correct: false },
      { text: 'This thing (near)', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Umhle" mean?',
    answers: [
      { text: 'You are beautiful / She is beautiful', correct: true },
      { text: 'I am sitting', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Intle" ngesiNgesi?',
    answers: [
      { text: 'It is sitting', correct: false },
      { text: 'It is beautiful', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Vuka" mean?',
    answers: [
      { text: 'Wake up', correct: true },
      { text: 'Stand up', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uvukile" ngesiNgesi?',
    answers: [
      { text: 'He / She is standing', correct: false },
      { text: 'He / She is waking up', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Uhleli" mean?',
    answers: [
      { text: 'He / She is awake', correct: true },
      { text: 'He / She is Sitting', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndidiniwe" ngesiNgesi?',
    answers: [
      { text: 'I am Happy', correct: false },
      { text: 'I am tired', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndidikiwe" mean?',
    answers: [
      { text: 'I am fed up / I have had enough', correct: true },
      { text: 'I am rejoicing / celebrating', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyagula" ngesiNgesi?',
    answers: [
      { text: 'I am fine', correct: false },
      { text: 'I am ill / sick', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Xela" mean?',
    answers: [
      { text: 'Tell', correct: true },
      { text: 'Ask', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Xelela" ngesiNgesi?',
    answers: [
      { text: 'Ask someone', correct: false },
      { text: 'Tell someone', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyakuxelela" mean?',
    answers: [
      { text: 'I am telling you', correct: true },
      { text: 'I am questioning you', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Sebenzisa" ngesiNgesi?',
    answers: [
      { text: 'At work', correct: false },
      { text: 'To use something', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Iyasebenza" mean?',
    answers: [
      { text: 'It is working', correct: true },
      { text: 'To use something', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Andiqondi" ngesiNgesi?',
    answers: [
      { text: 'I do not hear you', correct: false },
      { text: 'I do not understand', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Uyasebenza" mean?',
    answers: [
      { text: 'He / She is working', correct: true },
      { text: 'It is working', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Iphelile" ngesiNgesi?',
    answers: [
      { text: 'It is fine', correct: false },
      { text: 'It is finished', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Emva" mean?',
    answers: [
      { text: 'At the back / Behind', correct: true },
      { text: 'at the front / Forward', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Phambili" ngesiNgesi?',
    answers: [
      { text: 'At the back / Behind', correct: false },
      { text: 'At the front / Infront', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Sigqibile" mean?',
    answers: [
      { text: 'We are finished', correct: true },
      { text: 'We are starting', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndicela / Ndiyacela" ngesiNgesi?',
    answers: [
      { text: 'Tell', correct: false },
      { text: 'Please', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyabulela" mean?',
    answers: [
      { text: 'I am praising you', correct: true },
      { text: 'I am not sure', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Wamkelekile" ngesiNgesi?',
    answers: [
      { text: 'You are not welcome', correct: false },
      { text: 'You are welcome', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Kona" mean?',
    answers: [
      { text: 'It', correct: true },
      { text: 'They', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ubuntu" ngesiNgesi?',
    answers: [
      { text: 'Humans', correct: false },
      { text: 'Humanity', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Unobuntu" mean?',
    answers: [
      { text: 'He / She is humane', correct: true },
      { text: 'He / She is family', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Khangela" ngesiNgesi?',
    answers: [
      { text: 'Question', correct: false },
      { text: 'Search', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Thanda" mean?',
    answers: [
      { text: 'Love', correct: true },
      { text: 'Dislike', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Imbizo" ngesiNgesi?',
    answers: [
      { text: 'Fire', correct: false },
      { text: 'Meeting', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Umculo" mean?',
    answers: [
      { text: 'Music', correct: true },
      { text: 'Ask', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Inxaxheba" ngesiNgesi?',
    answers: [
      { text: 'Time', correct: false },
      { text: 'Opportunity', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ubulela" mean?',
    answers: [
      { text: 'Kidness / Generosity', correct: true },
      { text: 'Discontent', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Iindaba" ngesiNgesi?',
    answers: [
      { text: 'Community', correct: false },
      { text: 'News', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Umntu" mean?',
    answers: [
      { text: 'Person', correct: true },
      { text: 'Place', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Umbuzo" ngesiNgesi?',
    answers: [
      { text: 'Asking', correct: false },
      { text: 'Question', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Sabela" mean?',
    answers: [
      { text: 'Respond to a call', correct: true },
      { text: 'Make a call', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Indlela" ngesiNgesi?',
    answers: [
      { text: 'Stocking', correct: false },
      { text: 'Roadway', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ulwandle" mean?',
    answers: [
      { text: 'Sea / Ocean', correct: true },
      { text: 'Speaking', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ubizo" ngesiNgesi?',
    answers: [
      { text: 'Cellphone calling', correct: false },
      { text: 'Traditional calling', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ukupheka" mean?',
    answers: [
      { text: 'To cook', correct: true },
      { text: 'To pack', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukulila" ngesiNgesi?',
    answers: [
      { text: 'To shout', correct: false },
      { text: 'To cry', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ukufa" mean?',
    answers: [
      { text: 'To live', correct: false },
      { text: 'To die', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukucaphuka" ngesiNgesi?',
    answers: [
      { text: 'To get angry', correct: true },
      { text: 'To get sad', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ukubulala" mean?',
    answers: [
      { text: 'To praise', correct: false },
      { text: 'To kill', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukudlala" ngesiNgesi?',
    answers: [
      { text: 'To play', correct: true },
      { text: 'Old man', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ukuwa" mean?',
    answers: [
      { text: 'To cry', correct: false },
      { text: 'To fall', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukuvula" ngesiNgesi?',
    answers: [
      { text: 'To open', correct: true },
      { text: 'To close', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "ukuhleka" mean?',
    answers: [
      { text: 'To sit', correct: false },
      { text: 'To laugh', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukuveza" ngesiNgesi?',
    answers: [
      { text: 'To show / Reveal', correct: true },
      { text: 'To lie', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ukudada" mean?',
    answers: [
      { text: 'To run', correct: false },
      { text: 'To swim', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukubhala" ngesiNgesi?',
    answers: [
      { text: 'To write', correct: true },
      { text: 'To learn', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Undwendwe" mean?',
    answers: [
      { text: 'To visit', correct: false },
      { text: 'A visitor', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ixhego" ngesiNgesi?',
    answers: [
      { text: 'Old man', correct: true },
      { text: 'Young man', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ixhegwazana" mean?',
    answers: [
      { text: 'Young woman', correct: false },
      { text: 'Old woman', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Amanzi" ngesiNgesi?',
    answers: [
      { text: 'Water', correct: true },
      { text: 'Soil', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Sikhona" mean?',
    answers: [
      { text: 'We are going', correct: false },
      { text: 'We are fine / We are here', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Yahko" ngesiNgesi?',
    answers: [
      { text: 'Yours', correct: true },
      { text: 'Mine', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Lam" mean?',
    answers: [
      { text: 'His / Hers', correct: false },
      { text: 'Mine', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Yam" ngesiNgesi?',
    answers: [
      { text: 'Mine (a thing)', correct: true },
      { text: 'Yours (a thing)', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Wam" mean?',
    answers: [
      { text: 'Theirs', correct: false },
      { text: 'Mine (of a person)', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Yena" ngesiNgesi?',
    answers: [
      { text: 'Him / Her', correct: true },
      { text: 'Me', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Mfowethu" mean?',
    answers: [
      { text: 'My father', correct: false },
      { text: 'My brother', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Dadewethu" ngesiNgesi?',
    answers: [
      { text: 'My sister', correct: true },
      { text: 'My dad', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Uthixo" mean?',
    answers: [
      { text: 'Friend', correct: false },
      { text: 'God', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Intlanzi" ngesiNgesi?',
    answers: [
      { text: 'Fish', correct: true },
      { text: 'Weather', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Intsimi" mean?',
    answers: [
      { text: 'House', correct: false },
      { text: 'Farm', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Intsomi" ngesiNgesi?',
    answers: [
      { text: 'Fable / Tale', correct: true },
      { text: 'Farm', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Inja" mean?',
    answers: [
      { text: 'Danger', correct: false },
      { text: 'Dog', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kufutshane" ngesiNgesi?',
    answers: [
      { text: 'Close by', correct: true },
      { text: 'Far away', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Xolisa" mean?',
    answers: [
      { text: 'Asking permission', correct: false },
      { text: 'Bring about peace', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Jika" ngesiNgesi?',
    answers: [
      { text: 'Turn', correct: true },
      { text: 'Dance', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "ekhohlo" mean?',
    answers: [
      { text: 'Left', correct: true },
      { text: 'Right', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ekunene" ngesiNgesi?',
    answers: [
      { text: 'Right', correct: true },
      { text: 'Left', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Misa / Yima" mean?',
    answers: [
      { text: 'Go', correct: false },
      { text: 'Stop', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Hamba" ngesiNgesi?',
    answers: [
      { text: 'Go', correct: true },
      { text: 'Stop', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Bheka Phambili" mean?',
    answers: [
      { text: 'Go backwards', correct: false },
      { text: 'Go forwards', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kusasa" ngesiNgesi?',
    answers: [
      { text: 'In the morning', correct: true },
      { text: 'In the evening', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Emini" mean?',
    answers: [
      { text: 'During the night', correct: false },
      { text: 'During the day', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ngokuhlwa" ngesiNgesi?',
    answers: [
      { text: 'Evening', correct: true },
      { text: 'Midday', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Emyakwemini" mean?',
    answers: [
      { text: 'In the evening', correct: false },
      { text: 'In the afternoon', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ebsuku" ngesiNgesi?',
    answers: [
      { text: 'At night', correct: true },
      { text: 'At day', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Izolo" mean?',
    answers: [
      { text: 'Tomorrow', correct: false },
      { text: 'Yesterday', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Namhlanje" ngesiNgesi?',
    answers: [
      { text: 'Today', correct: true },
      { text: 'TOmorrow', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ngomso" mean?',
    answers: [
      { text: 'Today', correct: false },
      { text: 'Tomorrow', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Unothi" ngesiNgesi?',
    answers: [
      { text: 'Zero', correct: true },
      { text: 'Naughty', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Enye" mean?',
    answers: [
      { text: 'Seven', correct: false },
      { text: 'One', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Zimbini" ngesiNgesi?',
    answers: [
      { text: 'Two', correct: true },
      { text: 'Six', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Zintathu" mean?',
    answers: [
      { text: 'Four', correct: false },
      { text: 'Three', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Zine" ngesiNgesi?',
    answers: [
      { text: 'Four', correct: true },
      { text: 'Eight', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Zintlanu" mean?',
    answers: [
      { text: 'One', correct: false },
      { text: 'Five', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Zinthandathu" ngesiNgesi?',
    answers: [
      { text: 'Six', correct: true },
      { text: 'Two', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Zisixhenxhe" mean?',
    answers: [
      { text: 'Seven', correct: true },
      { text: 'Six', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Zisibhozo" ngesiNgesi?',
    answers: [
      { text: 'Five', correct: false },
      { text: 'Eight', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Zisithoba" mean?',
    answers: [
      { text: 'Nine', correct: true },
      { text: 'three', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Lishumi" ngesiNgesi?',
    answers: [
      { text: 'One', correct: false },
      { text: 'Ten', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Cawe" mean?',
    answers: [
      { text: 'Sunday', correct: true },
      { text: 'Tuesday', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Mvulo" ngesiNgesi?',
    answers: [
      { text: 'Thursday', correct: false },
      { text: 'Monday', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Sibini" mean?',
    answers: [
      { text: 'Tuesday', correct: true },
      { text: 'Friday', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Sithathu" ngesiNgesi?',
    answers: [
      { text: 'Sunday', correct: false },
      { text: 'Wednesday', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Sine" mean?',
    answers: [
      { text: 'Thursday', correct: true },
      { text: 'Saturday', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Sihlanu" ngesiNgesi?',
    answers: [
      { text: 'Monday', correct: false },
      { text: 'Friday', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Mgqibelo" mean?',
    answers: [
      { text: 'Saturday', correct: true },
      { text: 'Wednesday', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "uMdumba" ngesiNgesi?',
    answers: [
      { text: 'December', correct: false },
      { text: 'January', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "uMthupa" mean?',
    answers: [
      { text: 'February', correct: true },
      { text: 'November', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ukwindla" ngesiNgesi?',
    answers: [
      { text: 'October', correct: false },
      { text: 'March', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "uThazimpuni" mean?',
    answers: [
      { text: 'April', correct: true },
      { text: 'September', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "uCanzibe" ngesiNgesi?',
    answers: [
      { text: 'August', correct: false },
      { text: 'May', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "uSilimela" mean?',
    answers: [
      { text: 'June', correct: true },
      { text: 'July', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "uNtulikazi" ngesiNgesi?',
    answers: [
      { text: 'June', correct: false },
      { text: 'July', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "eyeKhala" mean?',
    answers: [
      { text: 'August', correct: true },
      { text: 'May', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "eyoMsintsi" ngesiNgesi?',
    answers: [
      { text: 'April', correct: false },
      { text: 'September', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "eyeDwarha" mean?',
    answers: [
      { text: 'October', correct: true },
      { text: 'March', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "eyeNkanga" ngesiNgesi?',
    answers: [
      { text: 'February', correct: false },
      { text: 'November', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "eyoMnga" mean?',
    answers: [
      { text: 'December', correct: true },
      { text: 'January', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "uMntla" ngesiNgesi?',
    answers: [
      { text: 'West', correct: false },
      { text: 'North', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "eMpuma (eMpumalanga)" mean?',
    answers: [
      { text: 'East', correct: true },
      { text: 'North', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "uMnzantsi (Sude)" ngesiNgesi?',
    answers: [
      { text: 'East', correct: false },
      { text: 'South', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "eNtshona (eNthsonalanga)" mean?',
    answers: [
      { text: 'West', correct: true },
      { text: 'South', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "iHlobo" ngesiNgesi?',
    answers: [
      { text: 'Autumn', correct: false },
      { text: 'Summer', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "uKwindla" mean?',
    answers: [
      { text: 'Autumn', correct: true },
      { text: 'Winter', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "uBusika" ngesiNgesi?',
    answers: [
      { text: 'Spring', correct: false },
      { text: 'Winter', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "iNtwasahlobo" mean?',
    answers: [
      { text: 'Spring', correct: true },
      { text: 'Summer', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kunjani kuwe" ngesiNgesi?',
    answers: [
      { text: 'Good Night', correct: false },
      { text: 'and how are you?', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyaphila, enkos" mean?',
    answers: [
      { text: 'I am fine, Thank you', correct: true },
      { text: 'I have food, Thank you', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ulale kakuhle" ngesiNgesi?',
    answers: [
      { text: 'Good Morning', correct: false },
      { text: 'Good Night', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ngubani igama lakho" mean?',
    answers: [
      { text: 'What is your name?', correct: true },
      { text: 'Where do you live?', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Usebenza kakhulu" ngesiNgesi?',
    answers: [
      { text: 'He / She is not working', correct: false },
      { text: 'He / She is working hard (a lot)', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndicela undikhaphe" mean?',
    answers: [
      { text: 'Please accompany me', correct: true },
      { text: 'Please go to Cape Town', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyavuya ukukwazi" ngesiNgesi?',
    answers: [
      { text: 'I am happy to be here', correct: false },
      { text: 'Nice to meet you', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Igama lam Ngu _______" mean?',
    answers: [
      { text: 'My name is _______', correct: true },
      { text: 'I am going _______', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uxolo andiyanga" ngesiNgesi?',
    answers: [
      { text: "Excuse me, I don't know", correct: false },
      { text: 'Excuse me begging pardon', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Uyindoda emadodeni" mean?',
    answers: [
      { text: 'You are a man amongst men', correct: true },
      { text: 'The men are around us', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Nceda bhalela ekhaya" ngesiNgesi?',
    answers: [
      { text: 'Please come home', correct: false },
      { text: 'Please write home', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ukuthatha inxaxheba" mean?',
    answers: [
      { text: 'To participate', correct: true },
      { text: 'To get lost', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uyazithanda" ngesiNgesi?',
    answers: [
      { text: 'He / She loves everybody', correct: false },
      { text: 'He / She is full of himself', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Amaphuth\' ahlathinye" mean?',
    answers: [
      { text: 'People will be people', correct: false },
      { text: 'Birds of a feather', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Njalo-Njalo" ngesiNgesi?',
    answers: [
      { text: 'and so on', correct: true },
      { text: 'and so it was', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndifuna ukudla" mean?',
    answers: [
      { text: 'I want water', correct: false },
      { text: 'I want food', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Phaka ukudla" ngesiNgesi?',
    answers: [
      { text: 'Serve food', correct: true },
      { text: 'Take food', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Lumkela Inja" mean?',
    answers: [
      { text: 'Be friends with the dog', correct: false },
      { text: 'Beware of the dog', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Abalobi bentlanzi" ngesiNgesi?',
    answers: [
      { text: 'Fisherman', correct: true },
      { text: 'Fishing Boat', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Utyeba okwehagu" mean?',
    answers: [
      { text: 'I want a pig', correct: false },
      { text: 'Fat as a pig', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndixakekile" ngesiNgesi?',
    answers: [
      { text: 'I am busy', correct: true },
      { text: 'I am not ready', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndidiniwe ngoku" mean?',
    answers: [
      { text: 'I am going now', correct: false },
      { text: 'I am tired now', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndifuna ukutya okunesondlo" ngesiNgesi?',
    answers: [
      { text: 'I want foodd with nourishment', correct: true },
      { text: 'I want a lot of food', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Imvula iyana" mean?',
    answers: [
      { text: 'It is hot', correct: false },
      { text: 'it is raining', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Amadoda Endlini" ngesiNgesi?',
    answers: [
      { text: 'Men inside', correct: true },
      { text: 'Men outside', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Khalisa umculo" mean?',
    answers: [
      { text: 'Play the flute', correct: false },
      { text: 'Play the music', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Umculo opholileyo" ngesiNgesi?',
    answers: [
      { text: 'Quiet music', correct: true },
      { text: 'Loud music', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Izakubona" mean?',
    answers: [
      { text: 'I do not see you', correct: false },
      { text: 'I see you', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyabulela kakhulu" ngesiNgesi?',
    answers: [
      { text: 'Thank you very much', correct: true },
      { text: 'No thank you', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ubusika bufikile" mean?',
    answers: [
      { text: 'The summer is here', correct: false },
      { text: 'The winter is here', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ufuna ntoni" ngesiNgesi?',
    answers: [
      { text: 'What do you want?', correct: true },
      { text: 'What can you do?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Baphi abantu abadala" mean?',
    answers: [
      { text: 'Where are the people?', correct: false },
      { text: 'Where are the older people of the house?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ufunda phi" ngesiNgesi?',
    answers: [
      { text: 'Where do you go to school?', correct: true },
      { text: 'Where do you live?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Iphi intokazi yam" mean?',
    answers: [
      { text: 'Who is your girlfriend?', correct: false },
      { text: 'Where is my girlfriend?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Iphi imbizo" ngesiNgesi?',
    answers: [
      { text: 'Where is the meeting', correct: true },
      { text: 'Where is your friend?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Luphi ulwandle" mean?',
    answers: [
      { text: 'Where is the shop?', correct: false },
      { text: 'Where is the sea?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ufuna bani" ngesiNgesi?',
    answers: [
      { text: 'Who do you want?', correct: true },
      { text: 'What do you want?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Sula inyembezi" mean?',
    answers: [
      { text: 'Give me your hand', correct: false },
      { text: 'Wipe your tears', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Amahlandenyuka" ngesiNgesi?',
    answers: [
      { text: 'Ups and downs', correct: true },
      { text: 'Two ways to go', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "ndiyeke!" mean?',
    answers: [
      { text: 'Call me back', correct: false },
      { text: 'Leave me alone', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Qaphela!" ngesiNgesi?',
    answers: [
      { text: 'Look out', correct: true },
      { text: 'Looking around', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndilahlekile" mean?',
    answers: [
      { text: 'I am free', correct: false },
      { text: 'I am lost', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Sthandwa sam" ngesiNgesi?',
    answers: [
      { text: 'My love', correct: true },
      { text: 'My kindness', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Akhonto" mean?',
    answers: [
      { text: 'A lot of things', correct: false },
      { text: 'Nothing much', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Awusemhle" ngesiNgesi?',
    answers: [
      { text: 'You are so beautiful', correct: true },
      { text: 'You are so friendly', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Yazi umhle" mean?',
    answers: [
      { text: 'You know who it is', correct: false },
      { text: 'You know what, you are beautiful', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Kulungile" ngesiNgesi?',
    answers: [
      { text: 'It is good', correct: true },
      { text: 'It is not good', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Izobona" mean?',
    answers: [
      { text: 'Let us see', correct: false },
      { text: 'Come see', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uhambe njani" ngesiNgesi?',
    answers: [
      { text: 'How did it go?', correct: true },
      { text: 'Where did you go?', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndihambe kakuhle" mean?',
    answers: [
      { text: 'it did not go anywhere', correct: false },
      { text: 'it went well', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Andisakukhumbuli" ngesiNgesi?',
    answers: [
      { text: 'I miss you so much!', correct: true },
      { text: 'I am so happy to see you!', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyadlala" mean?',
    answers: [
      { text: 'I am telling you', correct: false },
      { text: 'I am kidding', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Oh okay ke" ngesiNgesi?',
    answers: [
      { text: 'Oh okay then', correct: true },
      { text: 'Oh okay maybe', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Wenzani" mean?',
    answers: [
      { text: 'Where are the people?', correct: false },
      { text: 'What are you up to?', correct: true },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndinesithukuthezi" ngesiNgesi?',
    answers: [
      { text: 'I am bored', correct: true },
      { text: 'I am excited', correct: false },
    ],
  },
  // new question
  {
    question: 'What does "Ubenemini emnandi" mean?',
    answers: [
      { text: 'Have a good day', correct: true },
      { text: 'Have a cup of tea', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndifunda incwadi" ngesiNgesi?',
    answers: [
      { text: 'I am looking for a book', correct: false },
      { text: 'I am reading a book', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Unobubele" mean?',
    answers: [
      { text: 'He / She is kind hearted', correct: true },
      { text: 'He ? she is confused', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Khawuyeka" ngesiNgesi?',
    answers: [
      { text: 'Come over here', correct: false },
      { text: 'Cut it out', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Uyandichaza" mean?',
    answers: [
      { text: 'I think you are cool', correct: true },
      { text: 'I think you are lost', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Uzopheka ntoni" ngesiNgesi?',
    answers: [
      { text: 'Where are you cooking', correct: false },
      { text: 'What are you going to cook', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ugoduka nini" mean?',
    answers: [
      { text: 'When are you going home', correct: true },
      { text: 'Where will you be going', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ucula" ngesiNgesi?',
    answers: [
      { text: 'Shouting', correct: false },
      { text: 'Singing', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ugenaphi" mean?',
    answers: [
      { text: 'Where do you fit in? / What is it to you?', correct: true },
      { text: 'What do you want?', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Undibulisele" ngesiNgesi?',
    answers: [
      { text: 'Send my love', correct: false },
      { text: 'Send my greetings', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Kutheni" mean?',
    answers: [
      { text: 'What is wrong (in general)', correct: true },
      { text: 'Where is the problem?', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Utheni" ngesiNgesi?',
    answers: [
      { text: 'Who is wrong (more than one person)', correct: false },
      { text: 'What is wrong (a person)', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiya endlini" mean?',
    answers: [
      { text: 'I am going home', correct: true },
      { text: 'I am going to work', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiya eKapa" ngesiNgesi?',
    answers: [
      { text: 'I am going to the cape', correct: false },
      { text: 'I am going to Cape Town', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndinexhala" mean?',
    answers: [
      { text: 'I am worried', correct: true },
      { text: 'I am satisfied', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "bendinexhala" ngesiNgesi?',
    answers: [
      { text: 'I was home schooled', correct: false },
      { text: 'I was worried', correct: true },
    ],
  },
  // new question
  {
    question: 'What does "Ndiyakuthanda" mean?',
    answers: [
      { text: 'I love you', correct: true },
      { text: 'I love it', correct: false },
    ],
  },
  // new question
  {
    question: 'Yintoni "Ndiyayithanda" ngesiNgesi?',
    answers: [
      { text: 'I love you', correct: false },
      { text: 'I love it', correct: true },
    ],
  },
];
