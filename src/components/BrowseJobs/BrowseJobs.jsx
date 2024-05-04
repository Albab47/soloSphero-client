import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const BrowseJobs = () => {
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

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default BrowseJobs;
