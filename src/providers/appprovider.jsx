import ErrorBoundary from "../components/specials/errorboundary";
import NavBar from "../components/generic/navbar";
import SuspenseLoader from "./suspenseloader";



 const  AppProvider = ({children}) => {
    return (
        <ErrorBoundary>
            <>
            <NavBar/>
            <SuspenseLoader>
                {children}
            </SuspenseLoader>
            </>
        </ErrorBoundary>
    )
}

export default AppProvider;
