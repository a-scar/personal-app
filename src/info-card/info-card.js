import "./info-card.css";

const InfoCard = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default InfoCard;
