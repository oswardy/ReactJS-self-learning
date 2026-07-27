function PictureButton(){
    const imgUrl = './src/assets/hero.PNG';
    const handleClick = (e)=> e.target.style.display ="none";
    return(

        <img onClick={(e)=>handleClick(e)} src={imgUrl}></img>
    );
}

export default PictureButton