import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo, deletememo } from "../modules/memo";
import ClockComp from "./ClockComp";

const Memo = () => {
    const memolist = useSelector((state)=>state.memo.memolist);
    // input 태그 2개를 만들어서 useState로 title과 text값 받아오기
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // useDispatch()를 통해서, 메모가 추가한 새로운 리스트를 생성 > memo.js 모듈생성
    const dispatch = useDispatch();

    // useCallback을 사용해줄때, 입력값이 있다면 입력값에 따라바뀔수 있도록추가
    // 매개변수로 받아오는 값은 고정되지않음, 매개변수외의 값은 전부 고정
    const addMemo = useCallback(()=>{ 
        dispatch( addmemo( {title:title, text:text} ) )
    },[dispatch,title,text])


    return (  
        <div>
            <h1>방명록을 작성해주세요</h1>
            <hr />
            <span>이름</span>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={addMemo}>작성</button>
            <hr />
            {   
                // map: 배열의 있는 요소들 가져와서 return하는 함수
                memolist.map((memo)=>(
                    <ul>
                        <li>
                            <span>{memo.title} : {memo.text} <ClockComp/></span>
                        </li> 
                    </ul>
                ))
            }
        </div>
    );
}

export default Memo;