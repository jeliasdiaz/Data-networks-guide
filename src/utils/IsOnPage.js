import { useLocation } from "react-router-dom";

const IsOnPage = (url) => {
    const location = useLocation();

    return url == location.pathname;
};

export default IsOnPage;