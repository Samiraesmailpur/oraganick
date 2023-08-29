import Container from "@components/Container/Container";
import TeamItem from "./TeamItem";
import "./Team.scss";

const Team = () => {
  return (
    <section className="team">
      <Container>
        <p className="team__pre-title">Team</p>
        <h3 className="team__title">Our Organic Experts</h3>
        <p className="team__desc">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <TeamItem />
      </Container>
    </section>
  );
};

export default Team;
