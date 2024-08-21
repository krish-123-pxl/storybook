import React from "react";
import { Danger } from "./Button.stories";
import { Large } from "./Input.stories";

export default {
    title:'Form/subscription'
}

export const primarySubscription = () => {
    return(
    <>
    <Large/> <br/><br/>
    <Danger/>
    </>
    )

}