/// import the kgButton component
import KgButton from "./KgButton";
import Hello from "./Hello";
import Random from "./random";
// creating a functional component
function App(){
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>Changed Home page</p>
        <KgButton></KgButton>
        <Hello></Hello>
        <Random></Random>
        <Random></Random>
        <Random></Random>
      </div>
    </>
  )
}


export default App;