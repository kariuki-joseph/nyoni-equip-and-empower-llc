import { useState, useEffect } from "react";
import AdminCalendar from "../components/AdminCalendar";
import AdminNavbar from "../components/AdminNavbar";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import AdminClass from "../components/AdminClass";

export default function AdminDashboard() {
  const [value, setValue] = useState("1");
  const [primaryColor, setPrimaryColor] = useState("");
  const [defaultColor] = useState("#000000");
  const [physicalClasses, setPhysicalClasses] = useState([]);
  const [blendedClasses, setBlendedClasses] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const primaryColorElement = document.getElementById("primary-color");
    const color = window.getComputedStyle(primaryColorElement).backgroundColor;
    setPrimaryColor(color);
    setPhysicalClasses([
      {
        id: 1,
        title: "BLS-Initial and Renewal",
        description: "For medical personnell and First Aid Responders",
        peopleCount: 25,
        startDate: "22/04/2024",
        endDate: "26/04/2024",
      },
      {
        id: 2,
        title: "ACLS-Initial and Renewal",
        description: "For medical personnell and First Aid Responders",
        peopleCount: 25,
        startDate: "22/04/2024",
        endDate: "26/04/2024",
      },
    ]);
    setBlendedClasses([
      {
        id: 3,
        title: "PALS-Initial and Renewal",
        description: "For medical personnell and First Aid Responders",
        peopleCount: 25,
        startDate: "22/04/2024",
        endDate: "26/04/2024",
      },
      {
        id: 4,
        title: "CPR-Initial and Renewal",
        description: "For medical personnell and First Aid Responders",
        peopleCount: 25,
        startDate: "22/04/2024",
        endDate: "26/04/2024",
      },
    ]);
  }, []);

  return (
    <div>
      <AdminNavbar />

      <AdminCalendar />

      <div className="flex justify-around mt-[50px]">
        <div></div>
        <div>
          <Box sx={{ width: "100%" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                  indicatorColor="inherit"
                  TabIndicatorProps={{
                    style: { backgroundColor: primaryColor },
                  }}
                  aria-label="secondary tabs example"
                >
                  <Tab
                    value="1"
                    label="Physical"
                    style={{
                      color: value === "1" ? primaryColor : defaultColor,
                      fontWeight: "bold",
                    }}
                  />
                  <Tab
                    value="2"
                    label="Blended"
                    style={{
                      color: value === "2" ? primaryColor : defaultColor,
                      fontWeight: "bold",
                    }}
                  />
                </Tabs>
              </Box>
            </TabContext>
          </Box>
        </div>
        
        <Button primary onClick={() => {}}>
          <FaPlus className="mr-2" /> Create Class
        </Button>
      </div>

      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <TabPanel value="1">
            {physicalClasses.map((classData) => (
              <AdminClass key={classData.id} classData={classData} />
            ))}
          </TabPanel>

          <TabPanel value="2">
            {blendedClasses.map((classData) => (
              <AdminClass key={classData.id} classData={classData} />
            ))}
          </TabPanel>
        </TabContext>
      </Box>

      <div id="primary-color" className="bg-primary hidden"></div>
    </div>
  );
}
