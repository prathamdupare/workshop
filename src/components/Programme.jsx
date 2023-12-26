import { Component } from "react";
import styles from "../style";

class ConferenceSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDay1: false,
      showDay2: false,
    };
  }

  toggleDay1 = () => {
    this.setState({ showDay1: !this.state.showDay1, showDay2: false });
  };

  toggleDay2 = () => {
    this.setState({ showDay1: false, showDay2: !this.state.showDay2 });
  };

  render() {
    return (
      <div id="schedule" className="pt-[50px]">
        {" "}
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-4 rounded-[20px] shadow-lg pt-[50px]">
          <h1 className={styles.heading2}>Schedule</h1>
          <button
            className="bg-blue-gradient text-black font-bold py-2 px-4 rounded m-2 transform hover:scale-105 transition-transform"
            onClick={this.toggleDay1}
          >
            Day 1
          </button>
          <button
            className="bg-blue-gradient text-black font-bold py-2 px-4 rounded m-2 transform hover:scale-105 transition-transform"
            onClick={this.toggleDay2}
          >
            Day 2
          </button>
          {this.state.showDay1 && (
            <div className="mt-4 leading-9 transition-all duration-500">
              <h2 className="text-2xl mb-2">Day 1: 15 January 2024</h2>
              <p>
                <strong className="text-white">8:30-9:00 </strong>
                <strong className="text-sky-300">
                  Registration and Kit distribution
                </strong>{" "}
              </p>
              <p>
                <strong className="text-white">09:00-9:15 </strong>
                <strong className="text-yellow-300">Inauguration</strong>
              </p>
              <p>
                <strong className="text-black bg-white p-1 rounded-[20px]">
                  Session 1:
                </strong>
              </p>
              <p>
                <strong className="text-white">9:15-09:40</strong>{" "}
                <strong className="text-green-300">Liam Dolan </strong>
                <strong className="text-blue-300">
                  - Light-regulated sporeling development in Marchantia
                  polymorpha
                </strong>
              </p>

              <p>
                <strong className="text-white">9:40-10:05</strong>{" "}
                <strong className="text-green-300">Anjan Banerjee</strong>
                <strong className="text-blue-300">
                  - Photoperiods rule them all: Mobile Macromolecules and
                  epigenetic dynamics in potato development{" "}
                </strong>
              </p>
              <p>
                <strong className="text-white">10:05-10:20</strong>{" "}
                <strong className="text-green-300">Ashish Sharma</strong>
                <strong className="text-blue-300">
                  - Shoot-to-root mobile, light-dependent transcription factor
                  regulates small peptide encoded, miPEP858a and its associated
                  function
                </strong>
              </p>
              <p>
                <strong className="text-white">10:20-10:35</strong>{" "}
                <strong className="text-green-300">
                  Yadukrishnan Premachandran
                </strong>
                <strong className="text-blue-300">
                  - The JAW-TCP transcription factors suppress anthocyanin
                  accumulation during de-etiolation of Arabidopsis seedlings
                </strong>
              </p>
              <p>
                <strong className="text-red-300">
                  10:35-11:00 Coffee Break 1
                </strong>
              </p>
              <p>
                <strong className="text-white">11:00-11:25</strong>{" "}
                <strong className="text-green-300">Ute Hoecker</strong>
                <strong className="text-blue-300">
                  - Evolution of light signaling in the moss Physcomitrium
                  patens
                </strong>
              </p>
              <p>
                <strong className="text-white">11:25-11:50</strong>{" "}
                <strong className="text-green-300">
                  Sreeramaiah N. Gangappa
                </strong>
                <strong className="text-blue-300">
                  - Novel upstream regulators of PIF4-mediated thermosensory
                  growth in Arabidopsis{" "}
                </strong>
              </p>
              <p>
                <strong className="text-white">11:50-12:15</strong>{" "}
                <strong className="text-green-300">Aashish Ranjan</strong>
                <strong className="text-blue-300">
                  - Cross-species transcriptomic insights into shade avoidance
                  and thermomorphogenesis
                </strong>
              </p>
              <p>
                <strong className="text-white">12:15-12:30</strong>{" "}
                <strong className="text-green-300">Kumud Saini</strong>
                <strong className="text-blue-300">
                  - Plant cell-cycle regulation and morphogenesis under warming
                  temperature
                </strong>
              </p>
              <p>
                <strong className="text-white">12:30-12:45</strong>{" "}
                <strong className="text-green-300">Arpan Mukherjee</strong>
                <strong className="text-blue-300">
                  - BBX protein integrating light and hormone signaling to
                  modulate early seedling development in Arabidopsis
                </strong>
              </p>
              <p>
                <strong>
                  <strong className="text-red-300">
                    12:45-14:45 Lunch 1/Group Photo and poster session
                  </strong>
                </strong>
              </p>
              <p>
                <strong className="text-black bg-white p-1 rounded-[20px]">
                  Session 2:
                </strong>
              </p>
              <p>
                <strong className="text-white">14:45-15:10</strong>{" "}
                <strong className="text-green-300">Ashverya Laxmi</strong>
                <strong className="text-blue-300">
                  - Jasmonic Acid in concert with light and glucose signalling
                  regulates lateral root branching angle in Arabidopsis thaliana
                  seedlings
                </strong>
              </p>
              <p>
                <strong className="text-white">15:10-15:35</strong>{" "}
                <strong className="text-green-300">Kalika Prasad</strong>
                <strong className="text-blue-300">
                  - Rhythm for reunion between physically disconnected tissues
                </strong>
              </p>
              <p>
                <strong className="text-white">15:35-15:50</strong>{" "}
                <strong className="text-green-300">Shri Ram Yadav</strong>
                <strong className="text-blue-300">
                  - Species-specific functional innovations of conserved
                  regulators during adventitious root formation
                </strong>
              </p>
              <p>
                <strong className="text-white">15:50-16:05</strong>{" "}
                <strong className="text-green-300">ST6</strong>
                <strong className="text-blue-300">
                  - SlERF36/AtERF3-mediated regulation of the GA pathway
                  controls developmental transitions in plants
                </strong>
              </p>
              <p>
                <strong className="text-red-300">
                  16:05-16:30 Coffee Break 2/ Snacks
                </strong>
              </p>
              <p>
                <strong className="text-white">16:30-16:55</strong>{" "}
                <strong className="text-green-300">Utpal Nath</strong>
                <strong className="text-blue-300">
                  - TCP mediated integration of developmental pathways and light
                  signals
                </strong>
              </p>
              <p>
                <strong className="text-white">16:55-17:20</strong>{" "}
                <strong className="text-green-300">Santosh Satbhai</strong>
                <strong className="text-blue-300">
                  - HY5: A Key Regulator of Iron Uptake and Utilization in
                  Plants
                </strong>
              </p>
              <p>
                <strong className="text-white">17:20-17:35</strong>{" "}
                <strong className="text-green-300">Ashis Nandi</strong>
                <strong className="text-blue-300">
                  -Infection memory development in Arabidopsis
                </strong>
              </p>
              <p>
                <strong className="text-white">17:35-17:50</strong>{" "}
                <strong className="text-green-300">Ajar Anupam Pradhan</strong>
                <strong className="text-blue-300">
                  - Characterization of a light regulated Multidrug and Toxic
                  Efflux transporter
                </strong>
              </p>
              <p>
                <strong className="text-red-300">Dinner</strong>
              </p>
            </div>
          )}

          {this.state.showDay2 && (
            <div className="mt-4 leading-9 transition-all duration-500">
              <h2 className="text-2xl mb-2">Day 2: 16 January 2024</h2>
              <p>
                <strong className="text-black bg-white p-1 rounded-[20px]">
                  Session 3:
                </strong>
              </p>
              <p>
                <strong className="text-white">09:15-09:40</strong>{" "}
                <strong className="text-green-300">
                  Gabriela Toledo-Ortiz
                </strong>
                <strong className="text-blue-300">
                  - Role of phytochromes and cryptochromes in coordinating light
                  responses between the nucleus and the chloroplast
                </strong>
              </p>
              <p>
                <strong className="text-white">09:40-10:05</strong>{" "}
                <strong className="text-green-300">A S Raghavendra</strong>
                <strong className="text-blue-300">
                  - Cytosolic pH of guard cells: An under-explored secondary
                  messenger that facilitates stomatal closure
                </strong>
              </p>

              <p>
                <strong className="text-white">10:05-10:30</strong>{" "}
                <strong className="text-green-300">Shyam Masakapalli</strong>
                <strong className="text-blue-300">
                  - Deciphering the plant metabolic phenotypes under varying
                  light regimes using metabolomics and fluxomics
                </strong>
              </p>

              <p>
                <strong className="text-white">10:30-10:45</strong>{" "}
                <strong className="text-green-300">
                  Rajagopal Subramanyam
                </strong>
                <strong className="text-blue-300">
                  - High light-induced cell proteome and organization of
                  thylakoid supercomplex in cyclic electron transport mutants of
                  Chlamydomonas reinhardtii
                </strong>
              </p>
              <p>
                <strong className="text-white">10:45-11:00</strong>{" "}
                <strong className="text-green-300">Shubhi Dwivedi</strong>
                <strong className="text-blue-300">
                  - Role of BBX22 in UV mediated DNA damage
                </strong>
              </p>
              <p>
                <strong className="text-white">11:00-11:20</strong>{" "}
                <strong className="text-red-300">Coffee Break 3/ Snacks</strong>
              </p>
              <p>
                <strong className="text-white">11:20-11:45</strong>{" "}
                <strong className="text-green-300">Meng Chen</strong>
                <strong className="text-blue-300">
                  - Nucleus-to-plastid signaling for controlling plastid
                  transcription
                </strong>
              </p>
              <p>
                <strong className="text-white">11:45-12:10</strong>{" "}
                <strong className="text-green-300">Elena Monte</strong>
                <strong className="text-blue-300">
                  - Adaptive responses during deetiolation
                </strong>
              </p>

              <p>
                <strong className="text-white">12:10-12:35</strong>{" "}
                <strong className="text-green-300">Vivek Dogra</strong>
                <strong className="text-blue-300">
                  - a novel inter-organelle communication operating under stress
                  conditions in camellia sinensis
                </strong>
              </p>
              <p>
                <strong className="text-white">12:35-12:50</strong>{" "}
                <strong className="text-green-300">Yogesh Pant</strong>
                <strong className="text-blue-300">
                  - Metabolic fates in Mustard during seed to seedling
                  transition and under different wavelengths
                </strong>
              </p>
              <p>
                <strong className="text-white">12:50-13:05</strong>{" "}
                <strong className="text-green-300">ST12</strong>
                <strong className="text-blue-300">
                  - Plasticity in photoprotective functions in tropical and
                  temperate tree species under climate change like conditions
                </strong>
              </p>
              <p>
                <strong className="text-white">13:05-13:15</strong>{" "}
                <strong className="text-green-300">Concluding remarks</strong>
              </p>
              <p>
                <strong>
                  <strong className="text-red-300">
                    13:15-16:00 Lunch 2 and poster
                  </strong>
                </strong>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ConferenceSchedule;
