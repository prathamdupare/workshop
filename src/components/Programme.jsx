import styles from '../style';

const programData = [
  {
    day: 'Day 1',
    date: '8 January 2024',
    events: [
      '18:00-21:00 Welcome Dinner and Registration at Hotel Vivanta',
      // Add more events as needed
      // ...
    ],
  },
  {
    day: 'Day 4',
    date: '11 January 2024',
    events: [
      'Session 7: Light regulated gene expression',
      '09:30-09:55 Molecular Network Mediating Light Control of Gene Expression - Xing Wang Deng',

      'Session 8: Light regulated metabolism',
      '11:35-11:50 Tissue properties underlying photosensory responses in plants - Christian Fankhauser',
      '11:50-12:15 Seedling Establishment in an ever challenging environment - Charlotte Gommers',
    ],
  },
  {
    day: 'Day 3',
    date: '10 January 2024',
    events: [
      '14:30-17:30 Keynote Speaker Session',
      // Add more events as needed
      // ...
    ],
  },
  {
    day: 'Day 4',
    date: '11 January 2024',
    events: [
      'Session 7: Light regulated gene expression',
      '09:30-09:55 Molecular Network Mediating Light Control of Gene Expression - Xing Wang Deng',
      "09:55-10:20 5' UTR -key regulators of gene expression in the plant response to environment - Martin Balcerowicz",
      '10:20-10:45 COP1/SPA activity fine-tunes light signal transduction - Ute Hocker',
      '10:45-11:10 Identification and functional characterization of two RING domain-containing E3 ubiquitin ligases as novel regulators of seedling photomorphogenesis in Arabidopsis - Sreeramaiah Gangappa',
      '11:10-11:35 Coffee break 5',
      'Session 8: Light regulated metabolism',
      '11:35-11:50 Tissue properties underlying photosensory responses in plants - Christian Fankhauser',
      '11:50-12:15 Seedling Establishment in an ever challenging environment - Charlotte Gommers',
      '12:15-12:40 Light-Induced bimolecular condensate formation of Fe-regulated transcription factors - Petra Bauer',
      '12:40-13:05 Light-dependent secondary plant product biosynthesis in plants - Prabodh Trivedi',
    ],
  },
  // Add more days as needed
  // ...
];

const Programme = () => {
  return (
    <section id="programme" className={`  `}>
      <h1 className={`${styles.heading2} py-4 `}>Programme</h1>
      <table className="w-full bg-black-gradient-2 rounded-[20px] box-shadow text-white">
        <thead>
          <tr>
            <th className="font-poppins font-semibold text-[20px] leading-[32px] p-3">
              Day
            </th>
            <th className="font-poppins font-semibold text-[20px] leading-[32px] p-3">
              Date
            </th>
            <th className="font-poppins font-semibold text-[20px] leading-[32px] p-3">
              Events
            </th>
          </tr>
        </thead>
        <tbody>
          {programData.map((item, index) => (
            <tr key={index} className="bg-black-gradient-2">
              <td className="p-3">{item.day}</td>
              <td className="p-3">{item.date}</td>
              <td className="p-3">
                {item.events.map((event, eventIndex) => (
                  <div key={eventIndex}>
                    {event.startsWith('Session') ? (
                      <strong className=" text-cyan-500 ">{event}</strong>
                    ) : (
                      <p>{event}</p>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Programme;
