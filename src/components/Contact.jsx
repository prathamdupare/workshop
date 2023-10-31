const Contact = () => {
  return (
    <section id="registrat">
      <div
        id="contact"
        className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-4 rounded-[20px] shadow-lg flex flex-col items-center justify-center"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[32px] bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black ">
          Contact{" "}
          <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
        </h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[20px] text-[22px] flex flex-col items-center justify-center">
            EMBO-ISPP Satellite meeting committee{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>

          <div className="flex space-x-4">
            <a
              href="mailto:ispp_sat@iiserb.ac.in"
              className="flex items-center p-2 text-blue-500"
            >
              📧 Mail
            </a>
            <a
              href="https://twitter.com/pcdb_lab_iiserb"
              target="_blank"
              className="flex items-center p-2 text-blue-500"
              rel="noreferrer"
            >
              🐦 Tweet
            </a>
          </div>
          <h2 className="bg-white w-60 text-50 p-1 my-3 rounded-[20px] text-center text-black">
            #ISPP24 #EMBOplantBio
          </h2>
        </div>
        <div>
          <h1 className="flex-1 flex-col items-center justify-center text-white font-poppins font-semibold ss:text-[20px] text-[22px]">
            Dr. Sourav Datta{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
          <h2 className="bg-white w-60 text-50 p-1 my-3 rounded-[20px] text-center text-black">
            Mail-{" "}
            <a
              href="mailto:sdatta@iiserb.ac.in"
              className="text-blue-400 hover:underline"
            >
              sdatta@iiserb.ac.in
            </a>
          </h2>

          <h2 className="bg-white w-60 text-50 p-1 my-3 rounded-[20px] text-center text-black">
            Venue: IISER Bhopal, Madhya Pradesh, INDIA
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center my-6">
          <div className="flex-1  text-white font-poppins font-semibold ss:text-[20px] text-[22px]">
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
