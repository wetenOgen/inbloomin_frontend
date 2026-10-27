import { memo } from "react";
import ErrorBoundary from "../specials/errorboundary";
import { Paragraph, Title } from "./typographs";


const Card = memo(({children, className}) => {
    return <ErrorBoundary>
        <div>
            {children}
        </div>
    </ErrorBoundary>
});


const WorkFlowCard = memo(({children}) => {
    return(
        <ErrorBoundary>
            <Card>
                {children}
            </Card>
        </ErrorBoundary>
    )
});

const PricingCard = memo(({label,description,className}) => {
    <Card>
        <Title>
            {label}
        </Title>
        <Paragraph>
            {description}
        </Paragraph>
    </Card>
});

export { WorkFlowCard,PricingCard};
export  default Card;
