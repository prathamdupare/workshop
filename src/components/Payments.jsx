import { useState } from "react";
import Button from "./Button";
const Payments = () => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };
  return (
    <section id="registration" className="pt-[50px]">
      <div>
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 my-9 px-10 rounded-[20px] leading-9 shadow-lg pt-[50px]">
          <h1 className="flex-1  text-white font-poppins font-semibold pb-5 ss:text-[42px] text-[32px]">
            Registration{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>

          <div>
            <h2 className="bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black  font-extrabold text-[25px]">
              Important Dates
            </h2>
            <ul>
              <li>
                <span className="font-extrabold text-[25px]">
                  Early registration deadline -
                </span>{" "}
                <strong className="text-yellow-200 font-extrabold text-[25px]">
                  10th December 2023
                </strong>
              </li>
              <li>
                <span className="font-extrabold text-[25px]">
                  Late registration deadline -
                </span>{" "}
                <strong className="text-yellow-200 font-extrabold text-[25px]">
                  20th December 2023
                </strong>
              </li>
              <li>
                <span className="font-extrabold text-[25px]">
                  Abstract submission deadline -
                </span>{" "}
                <strong className="text-yellow-200 font-extrabold text-[25px]">
                  20th December 2023
                </strong>
              </li>
            </ul>
            <p className="text-red-400 font-extrabold text-[20px]">
              * Late registration will be charged with an extra fee of Rs. 500
            </p>
            <h2 className="bg-blue-gradient w-60 w-[400px] text-50 p-3 my-3 rounded-[20px] text-center text-black font-extrabold text-[25px] ">
              Fees and Bank details
            </h2>
            <ul>
              <li>
                <strong className="font-extrabold text-[20px]">
                  Students - Rs. 2500
                </strong>
              </li>
              <li>
                <strong className="font-extrabold text-[20px]">
                  Postdoc - Rs. 3000
                </strong>
              </li>
              <li>
                <strong className="font-extrabold text-[20px]">
                  Faculty - Rs. 5000
                </strong>
              </li>
              <li>
                <strong className="font-extrabold text-[20px]">
                  Industry - Rs. 7000
                </strong>
              </li>
            </ul>
            <p className="font-bold text-[20px]">
              The fee has to be paid through the SBI Collect Portal (
              <a href="https://www.onlinesbi.sbi/sbicollect/">Click Here</a>)
            </p>
            <div className="">
              <button
                onClick={toggleSteps}
                className="bg-white text-black font-bold py-2 px-4 rounded-[20px] m-2 transform hover:scale-105 transition-transform font-extrabold text-[20px]"
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
            <p className="text-red-400 font-extrabold text-[20px]">
              * Must upload the fee payment receipt as a PDF in the registration
              form
            </p>
            <h2 className="bg-blue-gradient w-60 text-50 p-3 my-3 rounded-[20px] text-center text-black font-extrabold text-[20px] ">
              Registration includes:
            </h2>
            <ul className="list-disc font-extrabold text-[18px]">
              <li>Registration Kit</li>
              <li>Accommodation</li>
              <li>
                Food (Breakfast on Day 2, Lunch on Day 1 and Day 2, Gala Dinner
                on Day 1, Tea/Coffee)
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center flex-1 justify-center">
          <Button />
        </div>
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-10 my-9 rounded-[20px] shadow-lg leading-9 pt-24">
          <h1 className="flex-1  text-white font-poppins font-semibold ss:text-[30px] text-[32px] pb-6">
            Abstract Guidelines{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px] " />
          </h1>
          <div>
            <p className="font-bold text-[18px] ">
              You can upload your abstract as a Word file in the registration
              form.
            </p>

            <p className="font-bold text-[18px] ">
              Title, Authors, Affiliations, & Abstract (500 words max)
            </p>

            <ul className="list-disc text-[18px] ">
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

          <h1 className="flex-1  text-white font-poppins pt-10 font-semibold ss:text-[30px] text-[32px]">
            Accommodation{" "}
            <br className="sm:block hidden ss:leading-[100px] leading-[75px]" />
          </h1>

          <p className="text-[18px] ">
            Accommodation will be provided on a first-come-first basis until the
            rooms get occupied. Rooms will be provided at the Visitors Hostel or
            Students Hostel based on availability.
          </p>
          <ul className="list-disc text-[18px] ">
            <li>
              Please select 'Yes' in the registration form if you need
              accommodation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Payments;
