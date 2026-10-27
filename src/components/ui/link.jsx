import { memo } from "react";
import ErrorBoundary from "../specials/errorboundary"


const NavLink = ({href, label,className}) => {
    return (
        <ErrorBoundary>
            <>
                <a href={href}>
                    {label}
                </a>
            </>
        </ErrorBoundary>
    )
};


const Link = memo(({href,label,className}) => {
    return(<ErrorBoundary>
        <>
            <a href={href}>{label}</a>
        </>
    </ErrorBoundary>)
})

export  {NavLink,Link};