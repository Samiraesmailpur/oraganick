import "./MainLoader.scss";
import { ThreeDots } from "react-loader-spinner";

const MainLoader = () => {
  return (
    <div className="main-loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default MainLoader;
