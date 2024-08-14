/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import YearGroup from '../../components/YearGroup/YearGroup';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ calendarData, setCalendarData ] = useState({});


    useEffect(() => {
        // const obj = {
        //     "a": "test1",
        //     "b": "test2",
        //     "c": "test3",
        //     "d": "test4",
        //     "e": "test5",
        //     "f": "test6",
        // }
        const obj = {
            "a": {
                "test1": 10,
                "test2": 20,
                "test3": 30,
                "test4": 40,
            },
            "b": {
                "test5": 50,
                "test6": 60,
                "test7": 70,
                "test8": 80,
            },
        }

        // console.log(Object.entries(obj));
        const objList = Object.entries(obj);
        // const objList2 = Object.entries(obj[1])
        for(let o of objList) {
            const key = o[0];
            const value = Object.entries(o[1]);
            

            // console.log("key: "+ o[0]);
            // console.log("value: "+ o[1]);
            // console.log("key: "+ key);
            // console.log("value: "+ value);
            // console.log("objList2: " + objList2)

            for(let e of value) {
                const key2 = e[0];
                const value2 = e[1];
                // console.log("key2: " + key2);
                // console.log("value2: " + value2);
            }
        }

    }, []);

    useEffect(() => {
        const tempCalendarData = {};

        for(let todo of todolistAll.todolist) {
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);
            const date = dateTime.slice(0, 10);

            if(!tempCalendarData[year]) {
                tempCalendarData[year] = {};
            }
            // console.log(calendarData[year]);
            if(!tempCalendarData[year][month]) {
                tempCalendarData[year][month] = {};
            }
            if(!tempCalendarData[year][month][date]) {
                tempCalendarData[year][month][date] = [];
            }
            
            
            // console.log(calendarData[year][month])
            tempCalendarData[year][month][date].push(todo);
        }
        // console.log(calendarData);
        // const calendarDataEntries = Object.entries(calendarData);

        setCalendarData(tempCalendarData);

    }, [todolistAll]);


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <div css={s.layout}>
                    <BackButtonTop setShow={setShow} />
                    <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                    <TodoCalendar calendarData={calendarData}  />  
                    <RegisterTodoButton />          
                </div>
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;