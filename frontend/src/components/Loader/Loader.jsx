import { Rings } from "react-loader-spinner";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <Rings
        className="loader"
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
