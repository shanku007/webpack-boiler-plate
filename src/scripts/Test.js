export default class Test{
    constructor(message){

        this.message = message;
        this.handleClick = this.handleClick.bind(this);
        this.newmessage = "What the heck is this";
    }
    handleClick(){
        window.alert(this.message);
    }

    render(){
        return `<h1 onclick="Test('Hello World').handleClick.bind(this)">${this.message}</h1>`;
    }
}