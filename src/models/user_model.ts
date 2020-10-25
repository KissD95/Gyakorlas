
export class User {

    public firstname:string;
    public lastname:string;
    public addressStreet:string;
    public addressNumber:number;
    public zipcode:number;
    public phoneNumber:string;
    public email:string;

    constructor(firstname:string,lastname:string,addressStreet:string,addressNumber:number,zipcode:number,phoneNumber:string,email:string) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.addressStreet = addressStreet;
        this.addressNumber = addressNumber;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.email = email;
        
    }
}

