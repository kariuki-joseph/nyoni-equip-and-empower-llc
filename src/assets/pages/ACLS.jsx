import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CourseCard from "../components/CourseCard";
import ACLSThumbnail from "../images/acls_thumbnail.png";
import { useNavigate } from "react-router-dom";

export default function ACLS() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const handleClassBooking = (course) => {
    navigate(`/courses/${course.id}/book`)
    console.log("Booked class", course);
  };

  useEffect(function () {
    setCourses([
      {
        id: 1,
        courseName: "ACLS Initial",
        duration: 2,
        description: "For medical personnell and First Aid Responders",
        date: "24/04/2024",
        time: "10:00am",
        price: 200,
        thumbnail: ACLSThumbnail,
      },
      {
        id: 2,
        courseName: "ACLS Renewal",
        duration: 2,
        description: "For medical personnell and First Aid Responders",
        date: "24/04/2024",
        time: "10:00am",
        price: 200,
        thumbnail: ACLSThumbnail,
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
