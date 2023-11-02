import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <section id="registration" className="scroll-padding">
      <div
        id="contact"
        className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-4 rounded-[20px] shadow-lg flex flex-col items-center justify-center pt-[130px]"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[32px] bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black ">
          Contact{" "}
          <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
        </h1>

        <div className="bg-gradient-to-r from-white-500 to-black-500 p-4 rounded-lg shadow-lg my-5 max-w-screen-sm mx-auto">
          <h1 className="text-white font-poppins font-semibold text-lg text-center mb-2">
            EMBO-ISPP Satellite meeting committee
          </h1>

          <div className="flex flex-col items-center space-y-2 mb-4">
            <a
              href="mailto:ispp_sat@iiserb.ac.in"
              className="flex items-center font-extrabold text-sky-400 text-base text-blue-500"
            >
              <i className="ri-mail-line text-base text-white mr-2"></i>{" "}
              ispp_sat@iiserb.ac.in
            </a>
            <a
              href="https://twitter.com/pcdb_lab_iiserb"
              target="_blank"
              className="flex items-center font-extrabold text-sky-400 text-base text-blue-500"
              rel="noreferrer"
            >
              <i className="ri-twitter-x-fill text-base text-white mr-2"></i>{" "}
              Tweet
            </a>
          </div>

          <h2 className="text-white text-base font-extrabold text-center">
            #ISPP24 #EMBOplantBio
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center my-6 hidden lg:flex md:flex">
          <div className="flex-1 text-white font-poppins font-semibold ss:text-[20px] mb-4 text-[22px]">
            Map
          </div>
          <div className=" embed-responsive ">
            <iframe
              className="rounded-[20px] w-[800px] h-[400px] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.8253874880093!2d77.27292731134152!3d23.285793578902524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c60d9f8872aef%3A0x9b99241b1431032!2sIISER%20BHOPAL!5e0!3m2!1sen!2sin!4v1698735037933!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
