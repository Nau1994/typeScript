"use strict";
class createUser {
    constructor(account) {
        this.account = "";
        this.account = account;
        console.log(this.account);
    }
}
class User extends createUser {
    constructor(name, account) {
        super(account);
        this.name = "";
        this.name = name;
        console.log(this.name);
    }
}
let u1 = new User("naushad", "humana");
