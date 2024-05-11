import classThumbnail from "../images/class_thumbnail.png";

export default function ClassDetails({ classDetails }) {
  const {
    className,
    description,
    numberOfPeople,
    classDate,
    classTime,
    price,
  } = classDetails;

  return (
    <div className="flex justify-center items-center gap-x-5">
      <img
        src={classThumbnail}
        alt="Class Thumbnail"
        className="bg-contain max-w-[360px] max-h-[150px]"
      />
      <div className="flex flex-col gap-y-3 max-w-[576px]">
        <h3 className="font-bold">{className}</h3>
        <p>{description}</p>
        <p>
          Number of People: <span className="font-bold">{numberOfPeople}</span>
        </p>
        <p>
          Class Date: <span className="font-bold">{classDate}</span>
        </p>
        <p>
          Class Time : <span className="font-bold">{classTime}</span>
        </p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
}
