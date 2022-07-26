
//used to group constant
enum Role {
    ADMIN,MANGER,READ_ONLY_USER
};

console.warn(Role);
// {0: 'ADMIN', 1: 'MANGER', 2: 'READ_ONLY_USER', ADMIN: 0, MANGER: 1, READ_ONLY_USER: 2}
console.warn(Role.MANGER);
// 1
