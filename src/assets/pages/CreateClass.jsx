import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { IoClose } from "react-icons/io5";
import adminClassThumbnail from "../images/admin_class_thumbnail.png";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import TextAreaInput from "../components/TextAreaInput";
import Button from "../components/Button";

export default function CreateClass() {
  const [coverImage, setCoverImage] = useState(adminClassThumbnail);
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
  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center w-full">
        <div className="border w-[690px] shadow rounded pb-4 mb-5">
          <div className="flex justify-between py-3 px-5">
            <span>Add Classes</span>
            <IoClose size={24} className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="border border-dashed rounded-lg p-3 flex flex-col items-center justify-center">
              <img
                src={coverImage}
                alt="Class Image Thumbnail"
                className="mb-2 max-h-[100px] max-w-[168px] object-cover"
              />
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="hidden"
                id="fileInput"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if(file){
                    setCoverImage(URL.createObjectURL(file));
                  }
                  
                }}
              />{" "}
              <label
                htmlFor="fileInput"
                className="underline text-xs cursor-pointer "
              >
                Change Cover Photo
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5 w-full px-5">
              <Input
                placeholder="Name of Training"
                type="text"
                onChange={() => {}}
              />
              <Input placeholder="Price" type="number" onChange={() => {}} />
              <Input
                placeholder="Date of Class"
                type="date"
                onChange={() => {}}
              />
              <Input
                placeholder="Class Start Time"
                type="time"
                onChange={() => {}}
              />
              <Input
                placeholder="Duration (Hrs)"
                type="number"
                onChange={() => {}}
              />
              <SelectInput options={modesOfLearning} onChange={(value) => {}} />
              <TextAreaInput
                className={"col-span-2"}
                placeholder="Training Description"
                onChange={(value) => {}}
              />
            </div>
            <Button primary className="mt-4 px-8">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
