function InlineButton(){
    const styles= {
        backgroundColor:"hsl(400, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer", 
        margin: "10px",
    }

    return(
        <button style={styles}>Inline Button</button>
    );
}

export default InlineButton