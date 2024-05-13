import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { IoArrowBack } from "react-icons/io5";
import adminClassThumbnail from "../images/admin_class_thumbnail_lg.png";
import SelectInput from "../components/SelectInput";
import ColoredInput from "../components/ColoredInput";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { FaCalendarDay } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import paymentPaypal from "../images/payment_paypal.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function CourseBooking() {
  const [course, setCourse] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log("handling payments...");
    setTimeout(function () {
      navigate("/my-classes");
    }, 1000);
  };

  const modesOfLearning = [
    {
      label: "Online",
      value: "online",
    },
    {
      label: "Physical",
      value: "physical",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
  ];

  useEffect(() => {
    setCourse({
      id: 1,
      courseName: "AHA BLS/CPR AED",
      duration: 4,
      description: "For medical personnell and First Aid Responders",
      date: "24/04/2024",
      time: "10:00am",
      price: 80,
      thumbnail: adminClassThumbnail,
    });
  }, []);

  return (
    <div className="relative">
      <NavBar />

      <IoArrowBack
        size={24}
        className="absolute left-10 mt-10 cursor-pointer"
        onClick={() => window.history.back()}
      />

      <div className="flex justify-end w-full mt-10 mb-8">
        <div className="flex flex-col w-10/12">
          <div className="flex gap-x-5">
            <img
              src={course.thumbnail}
              alt="Course Image Thumbnail"
              className="max-w-[360px] max-h-[230px] object-contain"
            />
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold">{course.courseName}</h3>
              <p>{course.description}</p>
              <span>${course.price}</span>
            </div>
          </div>

          <div className="w-1/2">
            <SelectInput
              options={modesOfLearning}
              onChange={(value) => {}}
              className="my-5"
            />
            <h3 className="font-bold">Payment Methods</h3>
            <input
              id="cardPayment"
              type="radio"
              checked={paymentMethod == "card"}
              onChange={() => {}}
              className="my-5 mr-2"
            />
            <label
              htmlFor="cardPayment"
              onClick={() => setPaymentMethod("card")}
            >
              Card/ Payment
            </label>
            <ColoredInput
              placeholder="Card Number"
              onChange={(value) => {}}
              className="mt-3"
              icon={<BiSolidCreditCardFront size={24} color="#585858" />}
            />
            <div className="grid grid-cols-3 gap-x-3 mt-3">
              <ColoredInput
                placeholder="MM/YY"
                onChange={(value) => {}}
                className="col-span-2"
                icon={<FaCalendarDay size={24} color="#585858" />}
              />
              <ColoredInput
                placeholder="CVV"
                onChange={(value) => {}}
                className="flex-1"
                icon={<BiSolidLock size={24} color="#585858" />}
              />
            </div>

            <div className="flex justify-between my-5">
              <label
                htmlFor="paypalPayment"
                onClick={() => setPaymentMethod("paypal")}
              >
                <input
                  id="paypalPayment"
                  type="radio"
                  checked={paymentMethod == "paypal"}
                  onChange={() => {}}
                  className="mr-3 text-red-400"
                />
                Paypal
              </label>
              <label htmlFor="paypalPayment">
                <img
                  src={paymentPaypal}
                  alt="Paypal Img"
                  className="w-[70px] h-[24px]"
                />
              </label>
            </div>

            <div className="rounded-2xl bg-gray-100 px-3 py-2 w-full text-sm">
              <p>
                You will be redirected to PayPal website to complete your order
                securely.
              </p>
            </div>

            <div className="flex justify-between mt-5">
              <Button
                secondary
                onClick={() => window.history.back()}
                className="px-14 font-semibold"
              >
                Back
              </Button>

              <Button primary onClick={ handlePayment} className="px-14">
                Pay ${course.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
