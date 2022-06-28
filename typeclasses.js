var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.unChangeableName = firstname;
    }
    // private changeName(): void {
    //     this.unChangeableName = "foo"
    // }
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var Admn = /** @class */ (function (_super) {
    __extends(Admn, _super);
    function Admn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admn.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admn.prototype.getEditor = function () {
        return this.editor;
    };
    return Admn;
}(User));
var myUser = new User("James", "Oladimeji");
console.log(myUser.getFullname());
console.log(User.maxAge);
var admin = new Admn("Max", "Oladimeji");
console.log(admin.getFullname());
admin.setEditor("James");
console.log(admin.getEditor());
