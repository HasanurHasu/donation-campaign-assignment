import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex items-center flex-col justify-center h-screen space-y-1">
            <h1 className="text-2xl font-semibold">Oops!</h1>
            <p className="text-lg">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="text-blue-600 underline">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;