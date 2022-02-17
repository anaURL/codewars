// class Rectangle {
//     constructor (height, width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width=width; 
//     }
//     sayName() {
//         console.log(`Hi, I am a ${this.name}` + '.')
//     }
//     get area () {
//         return this.height * this.width 
//     }
//     set area (value) {
//         this._area = value;
//     }
// }
// class Square extends Rectangle {
//     constructor (length){
//         super(length,length);
//         this.name = 'Square'
//     }
//     sayName () {
//         console.log(`Hi, I am a ${this.name}`)
//     }
// }

const person = {
    _firstName = 'Ana',
    _lastName = 'Urlic'
    get fullName () {
        if (this._firstName && this._lastName) {
            return `${this._firstName}` `${this._lastName}` 
        } else {
            return 'Mising a first name or last name'
        }
    }
}
person.fullName;