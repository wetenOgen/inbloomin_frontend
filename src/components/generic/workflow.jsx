import ErrorBoundary from "../specials/errorboundary"
import { WorkFlowCard } from "../ui/cards";
import { Paragraph, Title } from "../ui/typographs";

const steps = [
    {
        "imageurl":"",
        "title": "Share your idea",
        "description":"tell us what you want.It becomes our goals and we use it help build you up."
    },
    {
        "imageurl":"",
        "title": "We plan & Design",
        "description":"we research , plan and design  the perfect solution for you."
    },
    {
        "imageurl":"",
        "title": "Build Automate",
        "description":"We build you a  service and platform to help you  make this services more streamline.we automate the business workflows."
    },
    {
        "imageurl":"",
        "description":"We deploy your new business idea and make it public for others to use it . we also help you in getting your first clients.",
        "title": "Launch",
    },
    {
        "imageurl":"",
        "title": "Support & Sale",
        "description":"We support you and help you grow bigger and better in all your dealings.you just can not your faithful partner."
    },
    {
        "imageurl":"",
        "title": "Advertising & marketting",
        "description":"We can also help you with the marketting all in the aim of making your app go global."
    },
]

const WorkFlow = () => {
    return(
        <ErrorBoundary>
            <div>
                {steps.map((item,index)=> <WorkFlowCard>
                    <Title>
                        {item.title}
                    </Title>
                    <Paragraph>
                        {item.paragraph}
                    </Paragraph>
                </WorkFlowCard>)}
            </div>
        </ErrorBoundary>
    )
};


export default WorkFlow;