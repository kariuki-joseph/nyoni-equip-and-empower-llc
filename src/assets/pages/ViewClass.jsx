import { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Button from "../components/Button";
import ClassDetails from "../components/ClassDetails";
import { BiDownload } from "react-icons/bi";

export default function ViewClass() {
  const [classDetails, setClassDetails] = useState({});

  useEffect(() => {
    // Fetch class details from the database
    setClassDetails({
      className: "BLS-Initial and Renewal",
      description:
        "This class is for those who are taking the BLS class for the first time or need to renew their certification.",
      numberOfPeople: 10,
      classDate: "June 10, 2023",
      classTime: "8:00 AM - 12:00 PM",
      price: "$80",
    });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <ClassDetails classDetails={classDetails} />
      <div className="flex w-full justify-center items-center flex-col mt-10">
        <div className="flex justify-around bg-primary py-2 text-white rounded w-3/4">
          <div className="spacer"></div>
          <span>BLS-Initial and Renewal</span>
          <BiDownload size={24} className="cursor-pointer" />
        </div>

        <table className="w-3/4 text-left table-auto mt-5 rounded-xl">
          <thead className="bg-gray-200 text-black font-bold">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Amount Paid</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Ryan Reynolds</td>
              <td className="border px-4 py-2">$80</td>
              <td className="border px-4 py-2">Physical</td>
              <td className="border px-4 py-2">Paid</td>
              <td className="border px-4 py-2 flex justify-center">
                <Button
                  secondary
                  className="hover:shadow-xl transition-shadow duration-500"
                >
                  Present
                </Button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
