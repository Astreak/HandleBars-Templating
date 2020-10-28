class Member{
    
    constructor(name,password) {
        this.name = name;
        this.password = password;
    }
    showName() {
        console.log(this.name);
    }
}
module.exports = Member;