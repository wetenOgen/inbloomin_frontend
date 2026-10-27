import { memo } from "react";
import ErrorBoundary from "../specials/errorboundary"



const Title = memo(({children, className}) => {
    return(
        <ErrorBoundary>
            <div>{children}</div>
        </ErrorBoundary>
    ) 
});

const SubTitle = memo(({children, className})=> {
    return (
        <ErrorBoundary>
            <div>{children}</div>
        </ErrorBoundary>
    )
});


const Paragraph =  memo(({children, className}) => {
    return (
        <ErrorBoundary>
            <div>{children}</div>
        </ErrorBoundary>
    )
});

const Highlighted = memo(({children ,className}) => {
    return (
        <ErrorBoundary>
            <div>{children}</div>
        </ErrorBoundary>
    )
});

export {Title,SubTitle,Paragraph,Highlighted};