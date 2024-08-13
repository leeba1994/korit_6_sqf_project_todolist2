import React, { useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Test from './Test';



function Note(props) {
    const [ text, setText ] = useState("");
    let testinput = 0;


    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        if(!text.trim()){
            alert("메모를 입력하세요")
        } else {
            console.log("메모: " + text);
            
            }
        setText("");
        setTimeout(()=>console.log(100),0);
        console.log(200);
        console.log(300);
        console.log(400);
        console.log(500);
        
       
    }

    const handleKeyDowe = (e) => {
        if(!e.shiftKey && e.keyCode === 13){
            
            handleClick()
            e.preventDefault();
        }
        // console.log(e);
    }
    

    const handleInputOnChange = (e) => {
        testinput += e.target.value;
    }

    return (
        <MainContainer>
            <div>
                <h1>메모</h1>
            </div>
            <div css={s.memoBox}>
                <textarea css={s.memo} type="text" name='text' value={text} onChange={handleOnChange} onKeyDown={handleKeyDowe}/>
                <button onClick={handleClick}>확인</button>
                <input type="text" onChange={handleInputOnChange} />
                <Test t={testinput} t2={text}/>
            </div>
        </MainContainer>
    );
}

export default Note;