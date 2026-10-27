import Hero from "../components/generic/hero";
import Samples from "../components/generic/samples";
import Services from "../components/generic/services";
import ErrorBoundary from "../components/specials/errorboundary";
import { Button } from "../components/ui/form";
import { Paragraph, Title } from "../components/ui/typographs";




const LandingPage = () => {
    return(<>
    <ErrorBoundary>
      <Hero/>
      <Services  
        />
      <Samples />
      <div>
        <Title>
          Ready to bring your business online and automate ?
        </Title>
        <Paragraph>
          join hundreds of businesses transforming their idea into real success.
        </Paragraph>
         <Button>
            let's build your business
         </Button>
      </div> 

    </ErrorBoundary>
    </>)
};

export default LandingPage;


