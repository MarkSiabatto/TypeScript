/* const person: {
  name: string;
  age: number;
} = { */
/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Marco",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: [2, "Author"],
}; */

//person.role.push("Admin");
//person.role[0] = 10;


/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

enum Role {ADMIN, READ_ONLY, AUTHOR}
const person = {
  name: "Marco",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};


let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR){
  console.log("Is Author!!!!")
}
