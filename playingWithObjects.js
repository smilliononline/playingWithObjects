var users = [
{name: "Michael",
age: 37},
{name: "John",
age: 30},
{name: "David",
age: 27}
]

console.log(users[1].age);
console.log(users[0].name);

fu
for(name, age in users){
    console.log(users[name], " - " + users[age]);
}
    
/* I was unable to get the for loop to work pulling variables in the object, only one, so I would have to ask for some help understanding that.*/