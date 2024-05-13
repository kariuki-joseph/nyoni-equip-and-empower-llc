import adminClassThumbnail from "../images/admin_class_thumbnail_lg.png";
import Button from "../components/Button";

export default function CourseCard({ course, onBookClass }) {
  const { courseName, duration, description, date, time, price } = course;
  return (
    <div className="rounded shadow p-5">
      <img
        src={adminClassThumbnail}
        alt="Class Image Thumbnail"
        className="max-h-[230px] w-auto object-contain"
      />
      <div className="flex justify-between mt-3">
        <h3 className="font-bold"> {courseName} </h3>
        <h3 className="font-bold">{duration}hrs</h3>
      </div>
      <p className="my-3">{description}</p>
      <div className="flex justify-between my-2">
        <span>{date}</span>
        <span>{time} -12:00pm</span>
      </div>
      <div className="flex justify-between my-2">
        <h3 className="font-bold">${price}</h3>
        <Button primary onClick={() => onBookClass(course)}>
          Book Class
        </Button>
      </div>
    </div>
  );
}
