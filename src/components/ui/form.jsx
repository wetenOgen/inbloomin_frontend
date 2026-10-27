import { memo } from "react";
import ErrorBoundary from "../specials/errorboundary";


const Form = memo((children, onSubmit=f=> f) => {
    <ErrorBoundary>
        <form onSubmit={() => onSubmit()}>
            {children}
        </form>
    </ErrorBoundary>
});

const Button = memo(({children,onClick = f => f}) => {
    return (
        <ErrorBoundary>
            <div>
                <button onClick={() => onClick()} >{children}</button>
            </div>
        </ErrorBoundary>
    )
});

const TextArea = memo(({cols ,value, onChange=f=>f}) => {
    return(
        <ErrorBoundary>
            <div>
            <textarea
                    value={value}
                    onChange={() => onChange()} 
                    spellCheck 
                    autoFocus="true" 
                    autoSave="true" 
                    autoCorrect="true"
                    cols={cols ?? 500}
                    />
            </div>
        </ErrorBoundary>
    )

});

const Input = memo(({value,onChange,type}) => {
    return(
        <ErrorBoundary>
            <>
                <div>
                    <input
                        value={value}
                        onChange={() => onChange()}
                        type={type ?? "text"}
                    />
                </div>
            </>
        </ErrorBoundary>
    )
});

const CheckBox = memo(({value,onChange}) => {
    return (
        <ErrorBoundary>
            <>
                <input
                    value={value}
                    onChange={() => onChange()}
                    type="checkbox"
                    style={{padding:5,fontSize:20   }}
                />
            </>
        </ErrorBoundary>
    )
});

export {Button, TextArea,Input, CheckBox}
export default Form;
