import { restrauntList } from "../constants";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return (
    <div className="restraunt-list">
      {restrauntList.map((restraunt) => {
        return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
      })}
    </div>
  );
};

export default Body;
