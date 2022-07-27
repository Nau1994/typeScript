let person: object = {
  name: "naushad",
  role: 20,
};

let person1: {} = {
  name: "naushad",
  role: 20,
};

let person2: { name: string; role: number } = {
  name: "naushad",
  role: 20,
};

type per = { name: string; role: number; col: string[] };
let person3: per = {
  name: "naushad",
  role: 20,
  col: ["a", "b"],
};

for (let pers of Object.entries(person3)) {
  console.log(pers);
}

Object.entries(person3).forEach(([key, value]) => console.log(key, value));
