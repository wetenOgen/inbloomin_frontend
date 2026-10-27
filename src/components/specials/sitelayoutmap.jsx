import ErrorBoundary from "./errorboundary"



const SiteLayout = ({children, menu = c => null}) => {
        return (
            <div>
                <div>{menu}</div>
                <div>{children}</div>
            </div>
        )
}

const Menu =() => {
    <ErrorBoundary>
        <p>Todo : Build Menu</p>
    </ErrorBoundary>
}

const CallOut = ({children}) => {
    <ErrorBoundary>
        <div>
            {children}
        </div>
    </ErrorBoundary>
}


const Main = () => { 
    return (<SiteLayout menu={<Menu/>}>
            <CallOut>Welcome to the Site</CallOut>
            <ErrorBoundary>
                <h1>Todo: home page</h1>
                <p>Complete the main contents for this  home page.</p>
            </ErrorBoundary>
        </SiteLayout>
    )
}

export default Main;








