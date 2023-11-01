import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <section id="registrat">
      <div
        id="contact"
        className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-4 rounded-[20px] shadow-lg flex flex-col items-center justify-center pt-24"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[32px] bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black ">
          Contact{" "}
          <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
        </h1>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-5 mx-auto">
          <h1 className="text-white font-poppins font-semibold text-2xl text-center mb-4">
            EMBO-ISPP Satellite meeting committee
          </h1>

          <div className="flex justify-center space-x-4 mb-4 p-4">
            <a
              href="mailto:ispp_sat@iiserb.ac.in"
              className="flex items-center justify-center p-2 text-blue-500"
            >
              <i className="ri-mail-line text-lg mr-2"></i>ispp_sat@iiserb.ac.in
            </a>
            <a
              href="https://twitter.com/pcdb_lab_iiserb"
              target="_blank"
              className="flex items-center p-2 text-blue-500"
              rel="noreferrer"
            >
              <i className="ri-twitter-x-fill text-lg mr-2"></i>Tweet
            </a>
          </div>

          <h2 className="bg-white text-black p-2 rounded-lg text-center">
            #ISPP24 #EMBOplantBio
          </h2>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-72 mx-auto">
          <h1 className="text-white font-poppins font-semibold text-2xl text-center mb-4">
            Dr. Sourav Datta
          </h1>
          <h2 className="bg-white text-black p-2 rounded-lg text-center mb-4">
            <i className="ri-mail-line"></i>
            <a
              href="mailto:sdatta@iiserb.ac.in"
              className="text-blue-400 hover:underline"
            >
              sdatta@iiserb.ac.in
            </a>
          </h2>
          <h2 className="bg-white text-black p-2 rounded-lg text-center">
            <i className="ri-map-pin-fill"></i>
            Venue: IISER Bhopal, Madhya Pradesh, INDIA
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center my-6">
          <div className="flex-1  text-white font-poppins font-semibold ss:text-[20px] mb-4 text-[22px]">
            Map
          </div>
          <iframe
            className="rounded-[20px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.8253874880093!2d77.27292731134152!3d23.285793578902524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c60d9f8872aef%3A0x9b99241b1431032!2sIISER%20BHOPAL!5e0!3m2!1sen!2sin!4v1698735037933!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
