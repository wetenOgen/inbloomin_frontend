import ErrorBoundary from '../specials/errorboundary';
import { Button } from '../ui/form';
import { Highlighted, Paragraph, SubTitle, Title } from '../ui/typographs';



const Hero = () =>  {
    return (
        <ErrorBoundary>
            <div>
                <HeroInfoContent/>
                <HeroImgContent 
                    imageurl="hero.png"
                    width={400}
                
                />
            </div>
        </ErrorBoundary>
    )
};



const HeroInfoContent  =() => {
    return (<ErrorBoundary>
        <Title>
            your business idea.
        </Title>
        
        <Highlighted>
            <SubTitle>
                we make it possible.
            </SubTitle>
        </Highlighted>

        <Paragraph>
            from bringing your business online  to automating your daily tasks, we build smarts-digital solutions that help you save time,
            serve  customers better, and grow faster.
        </Paragraph>
        
        <div>
            <Button>
                Start your business journey
            </Button>
            <Button>
                See how it works
            </Button>
        </div>
        <div>
            <Paragraph>
                custom built solutions
            </Paragraph>
            <Paragraph>
                time-solving automations
            </Paragraph>
            <Paragraph>
                Scalable & Secure
            </Paragraph>
            <Paragraph>
                Ongoing Supports
            </Paragraph>
        </div>

    </ErrorBoundary>)
};



const HeroImgContent = ({imageurl,width, className}) => {
    return (
        <ErrorBoundary>
            <div>
                <img
                    src={imageurl ?? ""}
                    alt={"hero image"}
                    width={width ?? 200}
                />
            </div>
        </ErrorBoundary>
    )
};




export default Hero;