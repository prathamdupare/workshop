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
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-4 rounded-[20px] shadow-lg">
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
          <div className="mt-4 leading-9 transition-all duration-500 ">
            <h2 className="text-2xl mb-2">Day 1: 15 January 2024</h2>
            <p>
              <strong className="text-sky-400">
                Registration and Kit distribution:
              </strong>{" "}
              <span className="font-bold text-white">8:30-9:15</span>
            </p>
            <p>
              <span className="font-bold text-white">
                09:15-9:45 Inauguration
              </span>
            </p>
            <p>
              <strong className="text-black bg-white p-1 rounded-[20px]">
                Session 1:
              </strong>
            </p>
            <p>
              <span className="font-bold text-white">
                9:45-10:10 Liam Dolan
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                10:10-10:35 Anjan Banerjee
              </span>
            </p>
            <p>
              <span className="font-bold text-white">10:35-10:50 ST1</span>
            </p>
            <p>
              <span className="font-bold text-white">10:50-11:05 ST2</span>
            </p>
            <p>
              <span className="font-bold text-red-400">
                11:05-11:30 Coffee Break 1
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                11:30-11:55 Ute Hoecker
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                11:55-12:20 Sreeram Gangappa
              </span>
            </p>
            <p>
              <span className="font-bold text-white">12:20-12:35 ST3</span>
            </p>
            <p>
              <span className="font-bold text-white">12:35-12:50 ST4</span>
            </p>
            <p>
              <strong>
                <span className="text-red-400">
                  13:00-15:00 Lunch 1/Group Photo and poster session
                </span>
              </strong>
            </p>
            <p>
              <strong className="text-black bg-white p-1 rounded-[20px]">
                Session 2:
              </strong>
            </p>
            <p>
              <span className="font-bold text-white">
                15:00-15:25 Ashverya Laxmi
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                15:25-15:50 Kalika Prasad
              </span>
            </p>
            <p>
              <span className="font-bold text-white">15:50-16:05 ST5</span>
            </p>
            <p>
              <span className="font-bold text-white">16:05-16:20 ST6</span>
            </p>
            <p>
              <span className="font-bold text-red-400">
                16:20-16:45 Coffee Break 2/ Snacks
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                16:45-17:10 Utpal Nath
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                17:10-17:35 Santosh Satbhai
              </span>
            </p>
            <p>
              <span className="font-bold text-white">17:35-17:50 ST7</span>
            </p>
            <p>
              <span className="font-bold text-white">17:50-18:05 ST8</span>
            </p>
            <p>
              <strong>Scientific Games and Gala Dinner</strong>
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
              <span className="font-bold text-white">
                09:30-09:55 Elena Monte
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                9:55-10:20 A S Raghavendra
              </span>
            </p>
            <p>
              <span className="font-bold text-white">10:20-10:35 ST9</span>
            </p>
            <p>
              <span className="font-bold text-white">10:35-10:50 ST10</span>
            </p>
            <p>
              <span className="font-bold text-red-400">
                Coffee Break 3/ Snacks
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                11:15-11:40 Meng Chen
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                11:40-12:05 Gabriela Toledo-Ortiz
              </span>
            </p>
            <p>
              <span className="font-bold text-white">
                12:05-12:30 Vivek Dogra
              </span>
            </p>
            <p>
              <span className="font-bold text-white">12:30-12:45 ST11</span>
            </p>
            <p>
              <span className="font-bold text-white">12:45-1:00 ST12</span>
            </p>
            <p>
              <strong>
                <span className="text-red-400">
                  13:00-16:00 Lunch 2 and poster
                </span>
              </strong>
            </p>
            <p>
              <strong>
                <span className="text-red-400">
                  19:00-21:30 Dinner on your own
                </span>
              </strong>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ConferenceSchedule;
