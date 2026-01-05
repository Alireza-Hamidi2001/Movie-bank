import { PuffLoader } from "react-spinners";

function Loader() {
    return (
        <div className="loader">
            <PuffLoader size={60} color="#7950f2" />
        </div>
    );
}

export default Loader;
