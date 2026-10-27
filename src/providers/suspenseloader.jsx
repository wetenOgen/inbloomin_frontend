import { Suspense } from "react";


const SuspenseLoader = ({children}) => {
    return(
    <>
    <Suspense fallback={<Loader/>} >
        {children}
    </Suspense>
    </>
    )
}

const Loader = () => {
    return (
        <div>
            loading ...
        </div>
    )
}
export default SuspenseLoader;
