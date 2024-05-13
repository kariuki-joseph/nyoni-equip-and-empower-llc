import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import StudentClass from "../components/StudentClass";

export default function MyClasses() {
  const [value, setValue] = useState("1");
  const [defaultColor] = useState("#000000");
  const [primaryColor, setPrimaryColor] = useState("");
  const [bookedClasses, setBookedClasses] = useState([]);
  const [attendedClasses, setAttendedClasses] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const primaryColorElement = document.getElementById("primary-color");
    const color = window.getComputedStyle(primaryColorElement).backgroundColor;
    setPrimaryColor(color);
    setBookedClasses([
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
    setAttendedClasses([
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
      <NavBar />

      <div className="flex justify-center w-full mt-10">
        <div className="flex flex-col w-10/12">
          <div className="flex justify-around">
            <div className="spacer"></div>
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
                        label="Booked Classes"
                        style={{
                          color: value === "1" ? primaryColor : defaultColor,
                          fontWeight: "bold",
                        }}
                      />
                      <Tab
                        value="2"
                        label="Attended Classes"
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
            <div className="spacer"></div>
          </div>

          <div className="mt-5">
            <Box sx={{ width: "100%" }}>
              <TabContext value={value}>
                <TabPanel value="1">
                  {bookedClasses.map((classData) => (
                    <StudentClass key={classData.id} classData={classData} />
                  ))}
                </TabPanel>

                <TabPanel value="2">
                  {attendedClasses.map((classData) => (
                    <StudentClass key={classData.id} classData={classData} />
                  ))}
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>

      <div id="primary-color" className="bg-primary hidden"></div>
    </div>
  );
}
