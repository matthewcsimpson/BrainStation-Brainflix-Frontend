// TEMP
import userimg from "./assets/images/Mohan-muruge.jpg";
import bflogo from "./assets/images/BrainFlix-logo.svg";
import upld from "./assets/images/Icons/upload.svg";

// Not Temp
import Header from "./components/Header";

function App() {
  return (
    <div className="bf__wrapper">
      <Header userimg={userimg} bflogo={bflogo} upld={upld} />
      {/* To Be Worked On */}
      <div className="hero"></div>
      <div className="flexwrapper">
        <section className="details"></section>
        <div className="comments"></div>
        <div className="nextvideos"></div>
      </div>
    </div>
  );
}

export default App;
