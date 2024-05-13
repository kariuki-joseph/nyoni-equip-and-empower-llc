import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CourseCard from "../components/CourseCard";
import adminClassThumbnail from "../images/admin_class_thumbnail_lg.png";

export default function CPRTraining() {
  const [courses, setCourses] = useState([]);

  const handleClassBooking = (course) => {
    console.log("Booked class", course);
  };

  useEffect(function () {
    setCourses([
      {
        id: 1,
        courseName: "AHA BLS/CPR AED",
        duration: 4,
        description: "For medical personnell and First Aid Responders",
        date: "24/04/2024",
        time: "10:00am",
        price: 80,
        thumbnail: adminClassThumbnail,
      },
      {
        id: 2,
        courseName: "Heartsaver First Aid/CPR AED",
        duration: 4,
        description: "For medical personnell and First Aid Responders",
        date: "24/04/2024",
        time: "10:00am",
        price: 80,
        thumbnail: adminClassThumbnail,
      },
    ]);
  }, []);
  return (
    <div>
      <NavBar />

      <div className="flex justify-center my-10">
        <div className="grid grid-cols-2 gap-x-10 gap-y-16">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onBookClass={handleClassBooking}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
