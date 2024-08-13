/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import * as s from "./style";

function Test({t, t2}) {

    useEffect(() => {
        console.log("111")
    },[t]);
    
    // console.log(t);
    console.log("ddddd");
    console.log(t2);
    return (
        <div css={s.testBox}>
            {/* {t} */}
            {t2}
        </div>
    );
}

export default Test;