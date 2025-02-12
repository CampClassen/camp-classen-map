'use client'
import React from "react";
import "./globals.css"

import dynamic from "next/dynamic";

const ClassenMap = dynamic(() => import("@/app/ClassenMap"), { ssr:false });

export default function Page() {
    return (<ClassenMap/>);
}