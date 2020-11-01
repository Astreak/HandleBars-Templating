class Student{
    constructor(name, age) {
        this.name = name
        this.age = age
        
    }
    showName() {
        return this.name
    }
}
var g = new Student('praj', 22)




$(document).ready(() => {
    $('#pipi').click(() => {
       console.log($(this))
    })
    

});