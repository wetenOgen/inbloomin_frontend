import ErrorBoundary from "../specials/errorboundary"
import Card from "../ui/cards";
import { Paragraph, Title } from "../ui/typographs";


const data = [{
        label: 'website design',
        description : "we help you create website for your buisness either new or revitalizing the old.",
        imageurl : "" 
    },
    {
        label: 'mobile applications',
        description : "we build mobile application and also help make your old existing one get more tractions to boost your business.",
        imageurl : "" 
    },
    {
        label: 'AI integrations and Automations',
        description : "we integrate ai services into your platforms or mode of business creating smooth workflows either new or existing ones.",
        imageurl : "" 
    },
    {
        label: 'other services',
        description : "We refactor the old , optimize the old or help keep your old resources or business meet the new era. We can model data or create data pipelines for smooth business process.",
        imageurl : "" 
    }]

const Services = () =>  { 
    return(<ErrorBoundary>
        <div>
            {data.length > 0 && data.map((item,index) =>  {return <ServiceCard 
                key={index}
                {...item}
                />
            })}
        </div>
    </ErrorBoundary>)
};

const ServiceCard = ({imageurl , label , description}) => {
    return (<ErrorBoundary>
            <Card>
                <div>
                    <img
                        src={imageurl ?? "/logo.png"}
                        alt={'service image'}
                        width={200}
                    />
                </div>
                <Title>
                    {label}
                </Title>
                <Paragraph>
                    {description}
                </Paragraph>
            </Card>
        </ErrorBoundary>
    )
};


export {ServiceCard}
export default Services;
