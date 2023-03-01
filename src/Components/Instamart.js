import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisble] = useState(false);
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
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
      />
      <Section
        title={"Contact Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "
        }
      />
      ;
    </div>
  );
};

export default Instamart;
