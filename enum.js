"use strict";
//used to group constant
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANGER"] = 1] = "MANGER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
;
console.warn(Role);
// {0: 'ADMIN', 1: 'MANGER', 2: 'READ_ONLY_USER', ADMIN: 0, MANGER: 1, READ_ONLY_USER: 2}
console.warn(Role.MANGER);
// 1
