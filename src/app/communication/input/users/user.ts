export class User {

    public firstName: string = 'dsadsdas';

    public lastName: string;

    constructor(data: {firstName?: string, lastName: string}) {
        if (data.firstName) {
            this.firstName = data.firstName;
        }
        this.lastName = data.lastName;
    }

    public test() : void {
        const backendResult = [{firstName: 'Olek', lastName: 'Kelo'},{firstName: 'Olek', lastName: 'Kelo'}];

        let users = backendResult.map(value => new User(value));


        let user = new User({lastName: 'Kelo'});
        new User(user);
    }
}
