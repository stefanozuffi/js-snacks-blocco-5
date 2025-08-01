const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
names.forEach(name => {
    console.log(name)
});



const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
people.forEach(person => {
    console.log(person.name)
});



const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const plus_one = numbers.map(number => {
    return number + 1
});
console.log(plus_one)



const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
const authors = posts.map(post => {
    return post.author
})
console.log(authors)



const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const even = nums.filter(number => {
   return number % 2 === 0  
})
console.log(even)



const pencils = [
  { brand: 'Faber-Castell', weight: 8, sizeInCm: 12 },
  { brand: 'Staedtler', weight: 9, sizeInCm: 18 },
  { brand: 'Faber-Castell', weight: 7, sizeInCm: 10 },
  { brand: 'Staedtler', weight: 10, sizeInCm: 16 },
  { brand: 'Faber-Castell', weight: 6, sizeInCm: 14 },
  { brand: 'Derwent', weight: 5, sizeInCm: 20 },
  { brand: 'Derwent', weight: 4, sizeInCm: 11 },
  { brand: 'Staedtler', weight: 6, sizeInCm: 9 },
  { brand: 'Caran d’Ache', weight: 12, sizeInCm: 22 },
  { brand: 'Caran d’Ache', weight: 11, sizeInCm: 13 },
];

// A partire dall'array fornito, crea due array. Uno con le matite lunghe almeno 15cm. L'altro con le restanti.
const tall_pencils = pencils.filter(pencil => {
    return pencil.sizeInCm >= 15
}) 
console.log(tall_pencils)

const short_pencils = pencils.filter(pencil => {
    return pencil.sizeInCm < 15
}) 
console.log(short_pencils)

// Oppure: 
let t_pens = []
let s_pens = []
pencils.forEach(pencil => {
    if (pencil.sizeInCm >= 15) {
        t_pens.push(pencil)
    }
    else {
        s_pens.push(pencil)
    }
})
console.log(t_pens)
console.log(s_pens)



const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
const second = students.find(student => student.id === 2)
console.log(second)



const students_2 = [
  {
	id: 1,
    name: 'Marco Lanci',
    age: 32,
    classroom: '3C'
  },
  {  
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    classroom: '4A'
  },
  {
	id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classroom: '5B'
  },
];

// Recuperare la classe dello studente Marco Lanci
const Marco = students_2.find(student => student.name === 'Marco Lanci')
const classe_Marco = Marco.classroom
console.log(classe_Marco)