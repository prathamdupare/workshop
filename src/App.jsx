import styles from './style';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Business from './components/Business';
import Testiminials from './components/Testiminials';
import YourComponent from './components/Programme';
import Org from './components/Org';
import Info from './components/Info';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Business />
          <Testiminials />
          <YourComponent />
          <Org />
          <Info />
        </div>
      </div>
    </div>
  );
};

export default App;
