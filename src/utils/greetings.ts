const greetings = [
   'duelo',
   'vitória',
   'maldade',
   'diversão',
   'ranqueada',
   'treino',
   'gameplay',
   'roleplay',
]

function pickRandomGreeting(){
   const index = Math.floor(Math.random() * greetings.length)
   return greetings[index]
}

export const randomGreeting = pickRandomGreeting()