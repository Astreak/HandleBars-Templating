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
        $('#pipi').after(() => {
            return '<li class="list-group-item active"> ' + this.g.name + '</li>'
        })
    })

});