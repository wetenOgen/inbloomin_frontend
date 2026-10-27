import { memo } from "react";
import ErrorBoundary from "../specials/errorboundary"


const Image = memo(({src , alt ,width, className
}) => {
    return(
        <ErrorBoundary>
            <img
                src={src ?? "c"}
                alt={alt ?? "pic src failed"}
                width={width ?? 50}
            />
        </ErrorBoundary>
    )
});

export default Image;