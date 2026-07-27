// function Button(){

//     const handleClickExpr = function(){
//         console.log("Hehe");
//     }

//     const handleClick = () => console.log("Ouch!");

//     const handleClick2 = (name) => console.log(`${name} stop clicking me`);

//     return(
//         <button onClick={() => handleClick2("Bro")}>Stop clicking me!</button>
//     );
// }

function Button(){
    let count = 0;
    // const handleClick = (name) => console.log(` ${name} Stop Clicking!`);
    const handleClick = (name) => {
        if(count <3){
            console.log(`${name} stop click`);
            count ++;
        }
        else{
            console.log("I said Stop clicking ");
        }
    }

    const eventHandleClick = (e) => e.target.textContent = "Hello World";

    return(<button onDoubleClick={(e)=> eventHandleClick(e)}>Hi</button>)
}
export default Button
