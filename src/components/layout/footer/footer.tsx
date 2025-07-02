import { Container } from "../container/container";
import "./footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>MorganSegura {currentYear}</Container>
    </footer>
  );
}
