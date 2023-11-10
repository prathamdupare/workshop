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
                <strong className="text-blue-300">Liam Dolan</strong>
              </p>

              <p>
                <strong className="text-white">9:40-10:05</strong>{" "}
                <strong className="text-blue-300">Anjan Banerjee</strong>
              </p>
              <p>
                <strong className="text-white">10:05-10:20</strong>{" "}
                <strong className="text-green-300">ST1</strong>
              </p>
              <p>
                <strong className="text-white">10:20-10:35</strong>{" "}
                <strong className="text-green-300">ST2</strong>
              </p>
              <p>
                <strong className="text-red-300">
                  10:35-11:00 Coffee Break 1
                </strong>
              </p>
              <p>
                <strong className="text-white">11:00-11:25</strong>{" "}
                <strong className="text-blue-300">Ute Hoecker</strong>
              </p>
              <p>
                <strong className="text-white">11:25-11:50</strong>{" "}
                <strong className="text-blue-300">
                  Sreeramaiah N. Gangappa
                </strong>
              </p>
              <p>
                <strong className="text-white">11:50-12:15</strong>{" "}
                <strong className="text-blue-300">Aashish Ranjan</strong>
              </p>
              <p>
                <strong className="text-white">12:15-12:30</strong>{" "}
                <strong className="text-green-300">ST3</strong>
              </p>
              <p>
                <strong className="text-white">12:30-12:45</strong>{" "}
                <strong className="text-green-300">ST4</strong>
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
                <strong className="text-blue-300">Ashverya Laxmi</strong>
              </p>
              <p>
                <strong className="text-white">15:10-15:35</strong>{" "}
                <strong className="text-blue-300">Kalika Prasad</strong>
              </p>
              <p>
                <strong className="text-white">15:35-15:50</strong>{" "}
                <strong className="text-green-300">ST5</strong>
              </p>
              <p>
                <strong className="text-white">15:50-16:05</strong>{" "}
                <strong className="text-green-300">ST6</strong>
              </p>
              <p>
                <strong className="text-red-300">
                  16:05-16:30 Coffee Break 2/ Snacks
                </strong>
              </p>
              <p>
                <strong className="text-white">16:30-16:55</strong>{" "}
                <strong className="text-blue-300">Utpal Nath</strong>
              </p>
              <p>
                <strong className="text-white">16:55-17:20</strong>{" "}
                <strong className="text-blue-300">Santosh Satbhai</strong>
              </p>
              <p>
                <strong className="text-white">17:20-17:35</strong>{" "}
                <strong className="text-green-300">ST7</strong>
              </p>
              <p>
                <strong className="text-white">17:35-17:50</strong>{" "}
                <strong className="text-green-300">ST8</strong>
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
                <strong className="text-blue-300">Gabriela Toledo-Ortiz</strong>
              </p>
              <p>
                <strong className="text-white">09:40-10:05</strong>{" "}
                <strong className="text-blue-300">A S Raghavendra</strong>
              </p>

              <p>
                <strong className="text-white">10:05-10:30</strong>{" "}
                <strong className="text-blue-300">Shyam Masakapalli</strong>
              </p>

              <p>
                <strong className="text-white">10:30-10:45</strong>{" "}
                <strong className="text-green-300">ST9</strong>
              </p>
              <p>
                <strong className="text-white">10:45-11:00</strong>{" "}
                <strong className="text-green-300">ST10</strong>
              </p>
              <p>
                <strong className="text-white">11:00-11:20</strong>{" "}
                <strong className="text-red-300">Coffee Break 3/ Snacks</strong>
              </p>
              <p>
                <strong className="text-white">11:20-11:45</strong>{" "}
                <strong className="text-blue-300">Meng Chen</strong>
              </p>
              <p>
                <strong className="text-white">11:45-12:10</strong>{" "}
                <strong className="text-blue-300">Elena Monte</strong>
              </p>

              <p>
                <strong className="text-white">12:10-12:35</strong>{" "}
                <strong className="text-blue-300">Vivek Dogra</strong>
              </p>
              <p>
                <strong className="text-white">12:35-12:50</strong>{" "}
                <strong className="text-green-300">ST11</strong>
              </p>
              <p>
                <strong className="text-white">12:50-13:05</strong>{" "}
                <strong className="text-green-300">ST12</strong>
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
