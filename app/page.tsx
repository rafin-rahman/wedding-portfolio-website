import Navbar from "../components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className={"fixed z-10 top-0 w-full "}>
        <Navbar />
      </div>
      <div className={"mb-20"}></div>
      <div className="p-20">
        <Gallery />
      </div>
      <Footer />
    </>
  );
}
