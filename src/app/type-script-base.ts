// variables and types

export class TypeScriptBase {

    variables() {
        let number = 1;
        number += 2;

        const text = 'text';
        // text += 'text';

        let text2 = 'text';
        text2 += 'text';

        let number2: number;
        let text3: string;
        let bool: boolean;
        let array: [];
        let array2: Array<number>;
        let anyType: any;
        let test: Test;
    }

}

export class Test {

}

// classes
export class DataBase {
    text: string;
    public number = 1;
    private bool: boolean = true;
    protected array = [1, 2, 3];
    readonly key = 'KEY';

    constructor(text: string) {
        this.text = text;
    }

    public add(number1: number, number2: number): number {
        return number1 + number2;
    }

    public static add(number1: number, number2: number): number {
        return number1 + number2;
    }

}

export class DataExtended {

    constructor(public text: string, private bool?: boolean) {
    }

    // constructor(public text: string) {
    // }

    print(): string {
        return this.text + this.bool;
    }
}

export class ConstructorTrick {

    text: string;
    number: number;

    constructor(data: { text: string, number?: number }) {
        this.text = data.text;
        this.number = data.number;
    }

    create() {
        let constructorTrick = new ConstructorTrick({text: 'napis'});
        new ConstructorTrick(constructorTrick);
    }
}

interface User {
    username: string;
    age: number
}

export function testUser() {
    let user: User;
    user = {username: 'Franek', age: 99};
}

export class LambdaTricks {

    text: string = 'napis';

    oldFunction() {
        let array = new Array<string>();
        array.forEach(function (value: string) {
            return value + this.text;
        });
    }

    lambdaFunction() {
        let array = new Array<string>();
        array.forEach((value: string) => {
            return value + this.text;
        });
    }

}
