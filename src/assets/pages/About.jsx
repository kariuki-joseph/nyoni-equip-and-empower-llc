import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div className="h-[100vh] relative ">
      <NavBar />

      <div className="flex w-full justify-center">
        <div className="flex-flex-col w-11/12 mt-10">
          About Nyoni Equip Support and Empower LLC

          
          <div className="absolute bottom-0 mb-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
