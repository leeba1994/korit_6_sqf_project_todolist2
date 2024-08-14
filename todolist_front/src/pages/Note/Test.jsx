/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import * as s from "./style";

function Test({t, t2}) {

    const user = {
        username: "aaa",
        password: "1234"
    };

    const user2 = {
        // "user-name": "aaa",
        password: "1234"
    };

    user["user"] = "이병안";


    const { username:username2="ddd" } = user;
    const { ["user-name"]:username3="ddd22222" } = user2;
    console.log(username2)
    console.log(username3)
    console.log(user.user);



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