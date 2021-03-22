import "./App.css";
import InfoCard from "./info-card/info-card";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <InfoCard title="About Me &#128056;">
          Hey there, I'm Anthony Scardapane. A software engineer who loves to
          build things that are useful and make people happy. Currently working
          at <a href="https://vanguard.com">Vanguard</a> where I use Angular,
          Node.js, Java, and Python. I've been doing this for
          <strong> 4 years</strong> and feel extremely lucky to love it so much.
        </InfoCard>
        <div className="second-card"></div>
        <InfoCard title="Other stuff &#129510;">
          Writing at{" "}
          <a href="https://eventuallyinteresting.net">Eventually Interesting</a>
          <br></br>
          <br></br>
          Follow me on Twitter{" "}
          <a href="https://twitter.com/a_scardapane">@a_scardapane</a>
          <br></br>
          <br></br>
          Judge my unfinished projects and OSS contributions at{" "}
          <a href="https://github.com/a-scar">Github</a>
        </InfoCard>
      </header>
    </div>
  );
};

export default App;
