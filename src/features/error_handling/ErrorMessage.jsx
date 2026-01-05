import { ClimbingBoxLoader } from "react-spinners";
import { BiSolidError } from "react-icons/bi";

function ErrorMessage({ message }) {
    return (
        <div className="error">
            <ClimbingBoxLoader color="#fa5252" />
            <>
                <p className="error_message">
                    <BiSolidError />
                    {message}
                </p>
            </>
        </div>
    );
}

export default ErrorMessage;
