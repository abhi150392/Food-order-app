import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisble }) => {
  // const [isVisible, setIsVisble] = useState(false);
  return (
    <div className="p-2 m-28 border-2 text-1xl">
      <h1 className="font-bold">{title}</h1>

      {isVisible ? (
        <button
          className="underline"
          onClick={() => {
            setIsVisble(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline"
          onClick={() => {
            setIsVisble(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p className="py-2">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  /* const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showTeam: false,
    showContact: false,
    showProduct: false,
  }); */
  const [isVisibleSection, setIsVisibleSection] = useState("About");
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
        isVisible={isVisibleSection === "About"}
        setIsVisble={() => {
          /* setSectionConfig({
            showAbout: true,
            showTeam: false,
            showContact: false,
            showProduct: false,
          }); */
          setIsVisibleSection("About");
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
        isVisible={isVisibleSection === "Team"}
        setIsVisble={() => {
          /* setSectionConfig({
            showAbout: false,
            showTeam: true,
            showContact: false,
            showProduct: false,
          }); */
          setIsVisibleSection("Team");
        }}
      />
      <Section
        title={"Contact Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
        isVisible={isVisibleSection === "Contact"}
        setIsVisble={() => {
          /* setSectionConfig({
            showAbout: false,
            showTeam: false,
            showContact: true,
            showProduct: false,
          }); */
          setIsVisibleSection("Contact");
        }}
      />
      <Section
        title={"Product Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
        isVisible={isVisibleSection === "Product"}
        setIsVisble={() => {
          /* setSectionConfig({
            showAbout: false,
            showTeam: false,
            showContact: false,
            showProduct: true,
          }); */
          setIsVisibleSection("Product ");
        }}
      />
      ;
    </div>
  );
};

export default Instamart;
