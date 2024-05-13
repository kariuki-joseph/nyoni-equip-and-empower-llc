import adminClassThumbnail from "../images/admin_class_thumbnail.png";

export default function StudentClass({ classData }) {
  return (
    <div className="my-4 px-4 py-2 shadow-lg rounded-lg">
      <div className="flex justify-evenly">
        <img src={adminClassThumbnail} alt="Class Image" className="rounded" />
        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-black">{classData.title}</h3>
          <p className="text-sm font-normal">{classData.description}</p>
        </div>

        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-black">
            Date: {classData.startDate}
          </h3>
          <p className="text-sm">Time : 10:00am - 12:00pm</p>
        </div>
      </div>
    </div>
  );
}
