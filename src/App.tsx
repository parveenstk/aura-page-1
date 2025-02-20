import "./assets/css/global.css";
import Auratoday from "./components/Auratoday";
import Heading from "./components/Heading";
import Body from "./components/Body";


function App() {
  return (
    <>
      <Heading />
      <div className="container mx-auto flex sm:flex-row flex-col items-center sm:items-start justify-center gap-6">
        <div className="px-3 sm:w-7/12 sm:px-0 mx-auto sm:mx-0">
          <Body />
        </div>
        <div className="sticky top-0">
          <Auratoday />
        </div>
      </div>
    </>
  )
}

export default App