const firstName='Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm"+ firstName+',a'+(year- birthYear)+' years old '+job+'!';

console.log(jonas);

//Template Literals
const jonasNew = `I'm ${firstName},a ${year-birthYear} year old${job}!`; //easy way to write string(space)
