import Input from "./Input";
import React, { Component } from "react";

export default {
    title:'Form/input',
    Component:Input
}

export const Small=()=><Input size="small" label="small input"/>
export const Medium=()=><Input size="medium" label="medium input"/>
export const Large=()=><Input size="large" label="large input"/>