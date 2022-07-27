//used to group constant
enum Role {
  ADMIN,
  MANGER,
  READ_ONLY_USER,
}

enum Role2 {
  ADMIN = "admin",
  MANGER = 10,
  READ_ONLY_USER, //auto increment
}

console.warn(Role);
// {0: 'ADMIN', 1: 'MANGER', 2: 'READ_ONLY_USER', ADMIN: 0, MANGER: 1, READ_ONLY_USER: 2}
console.warn(Role.MANGER);
// 1

let person = {
  name: "naushad",
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log(person.name);
}

console.log(Role2.ADMIN, Role2.READ_ONLY_USER);

enum resultType {
  as_string = "as-string",
  as_number = "as-number",
}
function combine(a: string | number, b: string | number, type: resultType) {
  if (type == resultType.as_number) {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}

console.warn(combine(10, 20, resultType.as_number));
