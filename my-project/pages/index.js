import Container from "../components/Container";
import Projects from "../components/Projects";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container
      title="Jacob Albrecht - Web 3 Dev"
      description="Web-3 Developer and Advocate. Python and Solidity"
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Header />
        <Projects />
      </div>
    </Container>
  );
}
