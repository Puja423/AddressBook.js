//UC3 - create new address book array and add new contacts to it
class Contact{
    constructor (...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName=firstName;
        else throw "First Name is Incorrect!! "+firstName;
    }
    get lastName()
    {
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw "Last Name is Incorrect!! "+lastName;
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addRegex = RegExp('^[A-Z]{1}[a-z0-9/_  +]{4,}$');
        if(addRegex.test(address))
        this._address=address;
        else throw "Address is Invalid!! "+address;
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp('^[A-Z]{1}[a-z A-Z +]{4,}$');
        if(cityRegex.test(city))
        this._city=city;
        else throw "City is Invalid!! "+city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Z]{1}[a-z +]{4,}$');
        if(stateRegex.test(state))
        this._state=state;
        else throw "State is Invalid!! "+state;
    }
    get zip(){
        return this._zip; 
    }
    set zip(zip){
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw "ZIP is Invalid!! "+zip;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        let phoneRegex = RegExp('[0-9]{2}[7-9]{1}[0-9]{9}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw "Phone number is Invalid!! "+phone;
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');
        if(emailRegex.test(email))
        this._email=email;
        else throw "Email is Invalid!! "+email;
    }
    toString(){
        return "Contact => First Name : "+this.firstName+" , Last Name : "+this.lastName+" \nAddress : "+this.address+" , City : "+this.city+" , State : "+this.state+" , ZIP : "+this.zip+" \nPhone number : "+this.phone+" , Email : "+this.email+"\n \n";
    }
}

let addressBook = new Array();
try{
    let contact1 = new Contact("Emily","Clark","Address 1","City zero","State zero",123456,919999999999,"ema@yahoo.com");
    addressBook.push(contact1);
    let contact2 = new Contact("Robert","Brown","Address 2","City Two","State two",777777,919898989898,"rob@gmail.com");
    addressBook.push(contact2);
    let contact3 = new Contact("David","Doughlas","Address 3","City Three","State three",222222,919898989811,"dav@gmail.com");
    addressBook.push(contact3);
}catch(e){
    console.error(e);
}
console.log("Address Book Contacts are : \n \n"+addressBook);