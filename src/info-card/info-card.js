import "./info-card.css";

const InfoCard = () => {
  return (
    <div className="card">
      <h1>About Me</h1>
      <p>
        Hey there, I'm Anthony Scardapane. A software engineer who loves to
        build things that are useful and make people happy. Currently working at{" "}
        <a href="https://vanguard.com">Vanguard</a> where I use Angular,
        Node.js, Java, and Python. I've been doing this for
        <span className="time-as-engineer"> 4 years</span> and feel extremely
        lucky to love it so much.
      </p>
    </div>
  );
};

export default InfoCard;
