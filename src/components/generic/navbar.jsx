import ErrorBoundary from "../specials/errorboundary";
import { Button } from "../ui/form";
import { NavLink } from "../ui/link";



const NavBar = () => {
    return (
        <ErrorBoundary>
            <Logo />
            <NavLinks 
                data={[
                    {
                        href : "/home",
                        label: "home"
                    },
                    {
                        href : "/about",
                        label: "about"
                    },
                    {
                        href : "/contact",
                        label: "contact"
                    },
                    {
                        href : "/services",
                        label: "services"
                    },
                ]}
            />
            <div>
                <Button  >
                    sign up
                </Button>
            </div>
        </ErrorBoundary>
    )
}


const Logo  =  ({src, alt ,width}) =>  {
    return (
        <ErrorBoundary>
            <div>
                <img 
                    alt={alt ?? "logo image"}
                    src={src ?? "/logo.png"}
                    width={width ?? 40}
                />
            </div>
        </ErrorBoundary>
        
        
    )
}

const NavLinks = ({data}) => {
    return (
        <ErrorBoundary>
            <>
                {data.map((item, index) => {
                    return <NavLink  key={index} href={item.href} label={item.label} />
                })}
            </>
        </ErrorBoundary>
    )
}


export {Logo,NavLinks}
export default NavBar;