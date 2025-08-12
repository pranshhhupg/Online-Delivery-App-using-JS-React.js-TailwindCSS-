import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
    <div className="Error-Heading">
        <h1>Oooopppsssssss.....!!!!</h1>
        <div className="Error-subHeading">
            <h3>{err.status} : {err.statusText}</h3>
            <h3>{err.data}</h3>
        </div>
    </div>
    );
};

export default Error;