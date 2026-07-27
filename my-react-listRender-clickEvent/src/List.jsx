function List(props){

    const itemList = props.items;
    const category = props.category;

    itemList.sort((a,b) => b.calories - a.calories);

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);
    return(
        <>
            <h3 className= "food-container">{category}</h3>
            <ul className= "item-style">{listItems}</ul>
        </>
    );
    
    // listMeats.sort((a,b)=> b.calories - a.calories);
    // listFruits.sort((a,b)=> b.calories - a.calories);
    // const listItems = listMeats.map(listMeat=> <li key={listMeat.id}>{listMeat.name}: &nbsp; 
    //                                              <b>{listMeat.calories}</b></li> );      
    // const listFruitsItems = listFruits.map(listFruit => <li key={listFruit.id}>{listFruit.name}: &nbsp;
    //                                              <b>{listFruit.calories}</b></li>)                                    
    // return(
    //     <>
    //         <div className="food-container">
    //             <h3>All calories</h3>
    //             <ul className="item-style">{listItems}</ul>
    //             <ul>{listFruitsItems}</ul>
    //         </div>      
    //     </>
        
    // );
    // const highCalMeats = listMeats.filter(listMeat => listMeat.calories >=100);
    // const listHighItems = highCalMeats.map(highCalMeat=> <li key="{highCalMeat.id}">{highCalMeat.name}: &nbsp; 
    //                                             <b>{highCalMeat.calories}</b></li> );
    //listMeats.sort((a,b)=> a.name.localeCompare(b.name));
}

export default List