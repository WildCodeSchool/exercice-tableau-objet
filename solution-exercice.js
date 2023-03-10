
/* ---------------   constante pour les exercices  -------------------- */

const listeAnimaux = ['caniche', 'persan', 'canari', 'saumon'];

const animaux = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'caniche',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'persan',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'canari',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'saumon',
  },
];

/* ---------------   EXERCICE 1  -------------------- */

// for (let i = 0; i < listeAnimaux.length; i++) {
//   console.log(listeAnimaux[i]);
// }

/* ---------------   EXERCICE 2  -------------------- */

// for (let j = 0; j < animaux.length; j++) {
//   console.log(`Je suis un ${animaux[j].race}`);
// }

/* ---------------   EXERCICE 3  -------------------- */

// for (let j = 0; j < animaux.length; j++) {
//   if (animaux[j].poils) {
//     console.log(
//       `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des poils`
//     );
//   } else {
//     console.log(
//       `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et je n'ai pas de poils`
//     );
//   }
// }

/* ---------------   EXERCICE 4  -------------------- */

// for (let j = 0; j < animaux.length; j++) {
//   if (animaux[j].poils) {
//     console.log(
//       `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des poils`
//     );
//   } else {
//     if (animaux[j].famille === 'poisson') {
//       console.log(
//         `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des écailles`
//       );
//     } else {
//       console.log(
//         `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des plumes`
//       );
//     }
//   }
// }

/* ---------------   BONUS  -------------------- */

const animaux2 = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dalmatien',
  },

  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dobermann',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'siberien',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'chartreux',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'rouge gorge',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'perroquet',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'faisan',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'thon',
  },
  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'bar',
  },
];

// function presentation(animaux) {
//   for (let j = 0; j < animaux.length; j++) {
//     if (animaux[j].poils) {
//       console.log(
//         `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des poils`
//       );
//     } else {
//       if (animaux[j].famille === 'poisson') {
//         console.log(
//           `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des écailles`
//         );
//       } else {
//         console.log(
//           `Je suis un ${animaux[j].race}, je possède ${animaux[j].patte} pattes et j'ai des plumes`
//         );
//       }
//     }
//   }
// }

// presentation(animaux);
// presentation(animaux2);
