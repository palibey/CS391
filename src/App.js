import './App.css';
import {NavBar} from "./NavBar";
import {AboutUs} from "./AboutUs";
import {Home} from "./Home";
import {Documents} from "./Documents";

function App() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
<AboutUs/>
      </div>
      <div>
<Home/>
      </div>
      <div>
<Documents/>
      </div>
    </div>
  );
}

export default App;
