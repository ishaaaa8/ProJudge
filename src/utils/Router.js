import React from "react"
import {BrowserRouter, Routes} from "react-router-dom"

export default function Router(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home><Home/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}