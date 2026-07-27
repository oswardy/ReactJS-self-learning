import List from './List.jsx'
import Button from './Button.jsx'
import PictureButton from './PictureButton.jsx'

function App() {

  const listMeats = [{id: 1, name: "Pork", calories: 150},           
                     {id: 2, name: "Chicken", calories: 100},
                     {id: 3, name: "Fish", calories: 80},
                     {id: 4, name: "Prawn", calories: 60}];
                
  const listFruits = [{id: 5, name:"Apple", calories: 40},
                      {id: 6, name:"Banana", calories: 90},
                      {id: 7, name:"Grape", calories: 110}];
        

  return (
    <>
       <List items = {listMeats} category="Meats"/>
       <List items = {listFruits} category="Fruits"/>
       <Button />
       <PictureButton />
    </>
  );
}

export default App
