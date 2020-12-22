export class BaseJson {
    userId: number;
    id: number;
    title: string;
    completed: boolean;


    constructor(data: {userId: number, id: number, title: string, completed: boolean}) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
    }
}
