import { BiSolidError } from "react-icons/bi";
import { HashLoader } from "react-spinners";

function StartSearching() {
    return (
        <div className="error_start-searching">
            <HashLoader color="#b0a31b" />
            <p>
                <BiSolidError className="error_icon" />
                Search a movie
            </p>
            <p>
                Please initiate a search by entering the
                title of a movie. <br /> The corresponding
                results will be displayed once your query
                has been submitted.
            </p>
        </div>
    );
}

export default StartSearching;
