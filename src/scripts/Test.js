export default class Test{
    constructor(message){

        this.message = message;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        window.alert(this.message);
    }

    render(){
        return `<h1 onclick="${function(){
            console.log("hey");
        } }">${this.message}</h1>`;
    }
}