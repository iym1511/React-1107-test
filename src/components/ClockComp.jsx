// 함수형 컴포넌트 시간 출력

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
    const [time, setTime] = useState(new Date());
    // 1초마다 반복하기위한 setInterval 사용 - 생성될때 한번만 실행


    // useMemo return 값이 바뀌지않는다면, 이전의 return값을 그대로 쓸 수 있다
    const Month = useMemo(()=>{
        let stringHour = String(time.getMonth()+1)
        return stringHour.padStart(2,"0")
    },[time]);

    const Datee = useMemo(()=>{
        let stringSeconds = String(time.getDate())
        return stringSeconds.padStart(2,"0")
    },[time]);

    return (  
        <div>
            <h1 style={{fontSize:"15px"}}>({Month}/{Datee})</h1>
        </div>
    );
}

export default ClockComp;