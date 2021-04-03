import "./footer.css";

const Footer = (props) => {
  return (
    <section>
      <footer>{props.children}</footer>
    </section>
  );
};

export default Footer;
