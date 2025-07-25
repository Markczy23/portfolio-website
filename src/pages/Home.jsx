import NavBar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />
    </div>
  );
}

export default Home;
