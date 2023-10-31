import { useState } from "react";

const Payments = () => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };
  return (
    <section id="registration">
      <div>
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-10 rounded-[20px] leading-9 shadow-lg">
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[42px] text-[32px]">
            Registration{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[30px] text-[32px]">
            Payments{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
          <div>
            <h2 className="bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black ">
              Important Dates
            </h2>
            <ul>
              <li>Early registration deadline - 10th December 2023</li>
              <li>Late registration deadline - 20th December 2023</li>
              <li>Abstract submission deadline - 20th December 2023</li>
            </ul>
            <p className="text-red-400">
              * Late registration will be charged with an extra fee of Rs. 500
            </p>
            <h2 className="bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black ">
              Fees and Bank details
            </h2>
            <ul>
              <li>Students - Rs. 2500</li>
              <li>Postdoc - Rs. 3000</li>
              <li>Faculty - Rs. 5000</li>
              <li>Industry - Rs. 7000</li>
            </ul>
            <p>
              The fee has to be paid through the SBI Collect Portal (
              <a href="link-to-SBI-Collect-Portal">Click Here</a>).
            </p>
            <div className="">
              <button
                onClick={toggleSteps}
                className="bg-white text-black font-bold py-2 px-4 rounded-[20px] m-2 transform hover:scale-105 transition-transform"
              >
                {showSteps ? "Follow these Steps" : "Show Steps"}
              </button>
              {showSteps && (
                <div>
                  <ol className="list-decimal">
                    <li>Select category - Educational Institutions</li>
                    <li>
                      Search for Indian Institute of Science Education and
                      Research (State: Madhya Pradesh)
                    </li>
                    <li>
                      Payment Category: ISPP-Satellite Meeting (IISER Bhopal)
                    </li>
                    <li>
                      Fill in the details accordingly and pay the fees belonging
                      to your category
                    </li>
                    <li>
                      After payment, download the fee receipt as PDF and upload
                      it in the registration form.
                    </li>
                  </ol>
                </div>
              )}
            </div>{" "}
            <p className="text-red-400">
              * Must upload the fee payment receipt as a PDF in the registration
              form
            </p>
            <p className="text-red-400">
              * No travel grant or a fee waiver is available
            </p>
            <h2 className="bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black ">
              Registration includes:
            </h2>
            <ul className="list-disc">
              <li>Registration Kit</li>
              <li>Accommodation</li>
              <li>
                Food (Breakfast on Day 2, Lunch on Day 1 and Day 2, Gala Dinner
                on Day 1, Tea/Coffee)
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-10 my-9 rounded-[20px] shadow-lg leading-9">
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[30px] text-[32px]">
            Abstract Guidelines{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>
          <div>
            <h2 className="bg-white w-60 text-50 p-1 my-3 rounded-[20px] text-center text-black ">
              Abstract Submission
            </h2>
            <p>
              You can upload your abstract as a Word file in the registration
              form.
            </p>

            <p>Title, Authors, Affiliations, & Abstract (500 words max)</p>

            <ul className="list-disc">
              <li>Please select the mode of presentation (Talk/Poster/Both)</li>
              <li>
                Selected talks from abstracts will be notified by email
                on/before December 25th, 2023. The remaining participants will
                be provided with a poster presentation.
              </li>
              <li>
                Poster size: 90 cm x 120 cm (4 feet x 3 feet) (length x width)
              </li>
            </ul>
          </div>

          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[30px] text-[32px]">
            Accommodation{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>

          <h2 className="bg-white w-60 text-50 p-1 my-3 rounded-[20px] text-center text-black ">
            Accommodation Information
          </h2>
          <p>
            Accommodation will be provided on a first-come-first basis until the
            rooms get occupied. Rooms will be provided at the Visitors Hostel or
            Students Hostel based on availability.
          </p>
          <p>
            <strong>
              Please select 'Yes' in the registration form if you need
              accommodation.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payments;
