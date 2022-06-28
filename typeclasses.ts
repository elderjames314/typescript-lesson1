interface IUser2 {
    getFullname(): string
}

class User implements IUser2 {
    protected firstName: string
    protected lastName: string

    readonly unChangeableName: string
    static readonly maxAge = 50

    constructor(firstname: string, lastname: string) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.unChangeableName = firstname
    }

    // private changeName(): void {
    //     this.unChangeableName = "foo"
    // }

    getFullname(): string {
        return this.firstName +" "+ this.lastName
    }
}

class Admn  extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }
    getEditor(): string {
        return this.editor
    }
}

const myUser = new User("James", "Oladimeji");

console.log(myUser.getFullname())
console.log(User.maxAge)

const admin = new Admn("Max", "Oladimeji");

console.log(admin.getFullname());
admin.setEditor("James")
console.log(admin.getEditor());

