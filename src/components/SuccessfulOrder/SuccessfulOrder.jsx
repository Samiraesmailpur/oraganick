import "./SuccessfulOrder.scss";
import Container from "@components/Container/Container";

const SuccessfulOrder = () => {
  return (
    <section className="successful">
      <Container>
        <p className="successful__text">Thank you for your order</p>
      </Container>
      <div className="successful__bg"></div>
    </section>
  );
};

export default SuccessfulOrder;
