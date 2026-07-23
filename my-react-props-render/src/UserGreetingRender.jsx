function UserGreetingRender(props){
    const welcomeMsg = {
        fontSize: "2.5em",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "hsla(120, 90%, 30%, 0.7)",
        color:"black",
        border: "1px solid hsla(0, 0%, 0%, 0.8)",
        borderRadius: "5px",
        padding:"10px",
        margin: "0",
    }

    const userLogged = <h2 style={welcomeMsg}>Welcome {props.userName}</h2>
    const noLogged = <h2 className="login-msg"> Please login to continue</h2>
    return(props.isLogged ? userLogged : noLogged);

    // if (props.isLogged){
    //     return <h2>Welcome {props.userName} for attending ! </h2>
    // }
    // return <h2>Please log in to continue</h2>
}

export default UserGreetingRender