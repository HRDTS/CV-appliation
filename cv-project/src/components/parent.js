
import React, { useState } from "react";
import Overview from "./overview";
import Educational from "./educational";

const Parent = () => {
    const [inputValue, setInputValue] = useState('')

    const listData = ""
    const testConsole = () => {
        console.log(inputValue)
    }

    return <>
    <Educational inputValue={inputValue} setInputValue={setInputValue} />
    <button onClick={testConsole}>test</button>
    </>
}

export default Parent;