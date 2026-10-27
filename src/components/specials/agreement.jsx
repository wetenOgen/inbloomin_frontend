import { useReducer } from "react";
import { Logo } from "../generic/navbar";
import { Button, CheckBox } from "../ui/form";
import ErrorBoundary from "./errorboundary";

const Agreement  = ({onAgree = f => f}) => {
    const [checked, toggle ] = useReducer((checked) => !checked, false);
   return( <>
   <ErrorBoundary>
        <p>Terms and Agreement   </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id commodi, facilis veniam nesciunt sunt optio, perspiciatis eius voluptate maxime expedita illo, doloremque nihil ab quaerat? Quia est tenetur, reiciendis quaerat magni fugiat enim dolorum eius cum magnam neque autem mollitia sed quos cumque ipsum numquam vero, animi, perspiciatis quas.</p>
        <p>These are the terms and agreements. Do you agree.</p>

        <Logo/>
        <div>
            <CheckBox
                value={checked}
                onChange={toggle}
            />
            <Button onClick={onAgree}>
                I agree
            </Button>
        </div>
   </ErrorBoundary>
    </>)
}

export default Agreement;