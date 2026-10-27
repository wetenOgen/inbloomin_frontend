import { memo } from "react"
import ErrorBoundary from "../specials/errorboundary";
import Card from "../ui/cards";
import { Title } from "../ui/typographs";
import Image from "../ui/image";
import { Link } from "../ui/link";


const samplings = [
    {
        title: "Ecommerce",
        url: "https://surge.sh",
        imageurl:""
    },
    {
        title: "Fintech",
        url: "https://surge.sh",
        imageurl:""
    },
    {
        title: "Booking & Appointments",
        url: "https://surge.sh",
        imageurl:""
    },
    {
        title: "Customer Management Service",
        url: "https://surge.sh",
        imageurl:""
    },
    {
        title: "Invoice & Payments",
        url: "https://surge.sh",
        imageurl:""
    },
    {
        title: "Workflow & automation",
        url: "https://surge.sh",
        imageurl:""
    }
]

const Samples = () => {
    return(<ErrorBoundary>
        <div>
            {samplings.map((item,index) => {
                return(<SampleCard  
                        key={index}
                        title={item.title}
                        url={item.url}
                        imageurl={item.imageurl}
                />)
            })}
        </div>
    </ErrorBoundary>)
}



const SampleCard = memo(({title,url,imageurl,className}) => {
    console.log(url)
    return (<ErrorBoundary>
            <Card>
                <Title>
                    {title}
                </Title>
                <Image
                    src={imageurl}
                    alt={"sample image "}
                />
                <Link 
                    href={url}
                    label="go to site"

                />
            </Card>        
    </ErrorBoundary>)
});


export default Samples;