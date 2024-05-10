import AdminCalendar from "../components/AdminCalendar";
import AdminNavbar from "../components/AdminNavbar";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa6";
import Tab from "../components/Tab";

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />

      <AdminCalendar />

      <div className="flex justify-around mt-[50px]">
        <div></div>
        <div className="flex space-x-3">
          <Tab label="Physical" active={true} />
          <Tab label="Blended" />
        </div>
        <Button primary>
          <FaPlus className="mr-2" /> Create Class
        </Button>
      </div>
    </div>
  );
}
