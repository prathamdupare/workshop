import styles from "../style";

function Programme() {
  const scheduleData = [
    {
      date: "15 January 2024",
      session: "",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "Registration and Kit distribution:",
      time: "8:30-9:15",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "09:15-9:45",
      speaker: "",
      activity: "Inauguration",
    },
    {
      date: "",
      session: "Session 1:",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "9:45-10:10",
      speaker: "Liam Dolan",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "10:10-10:35",
      speaker: "Anjan Banerjee",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "10:35-10:50",
      speaker: "ST1",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "10:50-11:05",
      speaker: "ST2",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "11:05-11:30",
      speaker: "",
      activity: "Coffee Break 1",
    },
    {
      date: "",
      session: "",
      time: "11:30-11:55",
      speaker: "Ute Hoecker",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "11:55-12:20",
      speaker: "Sreeram Gangappa",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "12:20-12:35",
      speaker: "ST3",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "12:35-12:50",
      speaker: "ST4",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "13:00-15:00",
      speaker: "",
      activity: "Lunch 1/Group Photo and poster session",
    },
    {
      date: "",
      session: "Session 2:",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "15:00-15:25",
      speaker: "Ashverya Laxmi",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "15:25-15:50",
      speaker: "Kalika Prasad",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "15:50-16:05",
      speaker: "ST5",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "16:05-16:20",
      speaker: "ST6",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "16:20-16:45",
      speaker: "",
      activity: "Coffee Break 2/ Snacks",
    },
    {
      date: "",
      session: "",
      time: "16:45-17:10",
      speaker: "Utpal Nath",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "17:10-17:35",
      speaker: "Santosh Satbhai",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "17:35-17:50",
      speaker: "ST7",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "17:50-18:05",
      speaker: "ST8",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "",
      speaker: "",
      activity: "Scientific Games and Gala Dinner",
    },
    {
      date: "16 January 2024",
      session: "",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "Session 3:",
      time: "",
      speaker: "",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "09:30-09:55",
      speaker: "Elena Monte",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "9:55-10:20",
      speaker: "A S Raghavendra",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "10:20-10:35",
      speaker: "ST9",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "10:35-10:50",
      speaker: "ST10",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "",
      speaker: "",
      activity: "Coffee Break 3/ Snacks",
    },
    {
      date: "",
      session: "",
      time: "11:15-11:40",
      speaker: "Meng Chen",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "11:40-12:05",
      speaker: "GabrielaToledo-Ortiz",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "12:05-12:30",
      speaker: "Vivek Dogra",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "12:30-12:45",
      speaker: "ST11",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "12:45-1:00",
      speaker: "ST12",
      activity: "",
    },
    {
      date: "",
      session: "",
      time: "13:00-16:00",
      speaker: "",
      activity: "Lunch 2 and poster",
    },
    {
      date: "",
      session: "",
      time: "19:00-21:30",
      speaker: "",
      activity: "Dinner on your own",
    },
    {
      date: "",
      session: "",
      time: "",
      speaker: "",
      activity: "",
    },
  ];

  return (
    <div id="schedule">
      <h2 className={styles.heading2}>Event Schedule</h2>
      <table className="bg-black-gradient-2 rounded-[20px] text-white p-15 ">
        <thead>
          <tr className="bg-blue-gradient text-black rounded-l-lg p-15">
            <th className="p-10 rounded-l-lg">Date</th>
            <th className="p-10">Session</th>
            <th className="p-10">Time</th>
            <th className="p-10">Speaker</th>
            <th className="p-10 rounded-r-lg">Activity</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index} className="border rounded border-gray-300">
              <td className=" p-5 border text-sky-400 ">{item.date}</td>
              <td className=" p-5 border border-gray-300">{item.session}</td>
              <td className=" p-5 border border-gray-300">{item.time}</td>
              <td className=" p-5 border border-gray-300">{item.speaker}</td>
              <td className=" p-5 border border-gray-300">{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Programme;
