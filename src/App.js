import "./App.css";
import InfoCard from "./info-card/info-card";
import Footer from "./footer/footer";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <InfoCard title="About Me &#128056;">
          Hey there, I'm Anthony Scardapane.{" "}
          <p>
            A software engineer who loves to build things that are useful and
            make people happy.
          </p>{" "}
          Currently working at{" "}
          <a href="https://www.cisco.com/c/m/en_us/customer-experience/cx-cloud.html">
            Cisco!
          </a>{" "}
        </InfoCard>
        <div className="second-card"></div>
        <InfoCard title="Other stuff &#129510;">
          Follow me on Twitter{" "}
          <a href="https://twitter.com/a_scardapane">@a_scardapane</a>
          <br></br>
          <br></br>
          Judge my unfinished projects and OSS contributions at{" "}
          <a href="https://github.com/a-scar">Github</a>
        </InfoCard>
      </div>

      <Footer>© 2021 Anthony Scardapane. All Rights Reserved.</Footer>
    </div>
  );
};

export default App;
