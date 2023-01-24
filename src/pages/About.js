import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";

const DUMMY_PARA =
  "Hello world! I'm Marcus. I'm a New York Metropolitan area software-developer currently focused on Web Development. ";

const About = () => {
  return (
    <Layout>
      <Card text={DUMMY_PARA} />
    </Layout>
  );
};

export default About;

// "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg";
