import portfolioUser from "../images/portfolio_user.png";

export default function PortfolioItem() {
  return (
    <div className="w-[456px] h-auto my-5 rounded shadow-xl z-30">
      <div className="flex gap-x-5 p-3">
        <img
          src={portfolioUser}
          alt="Portfolio user"
          className="max-w-[72px] max-h-[72px] object-contain"
        />
        <div className="flex flex-col pt-2">
          <h3>Coleman Steve</h3>
          <small className="mt-1">Student</small>
        </div>
      </div>

      <p className="p-3">
        The Training was aimed at providing the best. I got value for my money
        indeed. Nyoni was very accomodating and patient with me during the
        training process as well as during the certification exams.
      </p>
    </div>
  );
}
