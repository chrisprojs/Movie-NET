import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Intro from "./Components/Intro";
import Trending from "./Components/Trending";
import Superhero from "./Components/Superhero";

import "./style/landingpage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>

      {/* superhero section */}
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
