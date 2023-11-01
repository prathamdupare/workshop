import styles from "./style";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testiminials from "./components/Testiminials";
import About from "./components/About";
import YourComponent from "./components/Programme";

import Footer from "./components/Footer";
import Org from "./components/Org";
import ScrollPaddingComponent from "./components/ScrollPaddingComponent";
import Payments from "./components/Payments";
import Programme from "./components/Programme";
import Contact from "./components/Contact";

import ExtraSpeakers from "./components/ExtraSpeakers";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="">
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}  `}>
            <Hero />
            <About />
            <Testiminials />
            <ExtraSpeakers />
            <YourComponent />
            <Payments />
            <Org />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
