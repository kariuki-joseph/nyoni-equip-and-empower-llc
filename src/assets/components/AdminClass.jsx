import adminClassThumbnail from "../images/admin_class_thumbnail.png";
import { BiEditAlt } from "react-icons/bi";
import { FaRegFile } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AdminClass({
  classData,
  onViewClass,
  onEdit,
  onDraft,
  onDelete,
}) {
  return (
    <div
      className="my-4 px-4 py-2 shadow-lg rounded-lg cursor-pointer"
      onClick={() => onViewClass(classData.id)}
    >
      <div className="flex justify-between items-center">
        <img src={adminClassThumbnail} alt="Class Image" className="rounded" />
        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-black">{classData.title}</h3>
          <p className="text-sm font-normal">{classData.description}</p>
        </div>

        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-black">
            No of People: {classData.peopleCount}
          </h3>
          <p className="text-sm">
            Start Date : {classData.startDate} End Date : {classData.endDate}
          </p>
        </div>

        <div className="flex gap-x-6">
          <BiEditAlt
            className="cursor-pointer"
            size={24}
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          />
          <FaRegFile
            className="cursor-pointer"
            size={24}
            onClick={(e) => {
              e.stopPropagation();
              onDraft();
            }}
          />
          <RiDeleteBin6Line
            className="cursor-pointer"
            size={24}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          />
        </div>
      </div>
    </div>
  );
}
