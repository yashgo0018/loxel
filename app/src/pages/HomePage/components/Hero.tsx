import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="h-screen pt-32">
      <Link to="/org/dashboard">Organization Dashboard</Link>
    </section>
  );
}
