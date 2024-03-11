 //import { LearnComponents } from "./components/LearnComponents";
 //import { Header } from "./components/Header";

//import { ArraySample } from "./components/ArraySample";
import { OneofSample } from "./components/OneofSample";

//import { ChildComponent } from "./components/ChildComponent";

//import { Student } from "./components/Student";

 

function App() {
  {/*const items = [
    {id:1, name:"Item 1"},
    {id:2, name:"Item 2"},
    {id:3, name: "Item 3"},
  ];*/}
  return (
    <>
      {/* <div>
        <div>ClassWork</div>
        <LearnComponents /> // This line is commented out
      </div> 
     <div>
        <Header />
    </div> 

    <div>
      <Student Name="kajan" age={33} isMarried={true} />
      <Student Name="Pavi" age={30} isMarried={true} />
      <Student Name="Karan" age={24} isMarried={false} />
    </div> */}
    
     {/*<div> <ChildComponent>
        <p>This is sample para 1</p>
        <p>This is sample para 2</p>
        <p>This is sample para 3</p>
      </ChildComponent>
  </div> */}

  {/*<ArraySample items={items} /> */}

  <OneofSample color="green"/>
    </>
  );
}           

export default App;