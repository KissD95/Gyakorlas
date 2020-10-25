
import { User } from '../models/user_model';
import {Order} from '../models/orders';



class UserProfile {

    public user: User;
    public order:Order;


    constructor() {

        const button = document.getElementById('button');
        button.addEventListener('click', this.MakeOrder);

    }

    private MakeOrder() {

        const form = document.getElementById('addProfileForm') as HTMLFormElement;
        const body = new FormData(form);
        this.user = new User(body.get('firstname') as string, body.get('lastname') as string, body.get('streetName') as string, body.get('houseNumber') as any, body.get('zipcode') as any, body.get('phoneNumber') as string, body.get('email') as string)
        this.order= new Order (body.get('pizzaName') as string,body.get('pizzaSize') as any);
        console.log(this.user,this.order);

    }
}

const userProfile = new UserProfile();