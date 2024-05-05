import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import JobCard from "./JobCard";

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/jobs");
        setJobs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="my-24">
      <header className="max-w-xl mx-auto space-y-6 text-center">
        <h1 className="text-3xl font-bold">Browse Jobs By Category</h1>
        <p>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 mt-12">
        <Tabs>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>

          <TabPanel>
            <div className="grid gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                .filter((job) => job.category === "Web Development")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                .filter((job) => job.category === "Graphics Design")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                .filter((job) => job.category === "Digital Marketing")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default BrowseJobs;
