import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
/*
        1. 메모리 할당
        2. ComponentWillMount()
        3. ComponentDidMount() = mount : 가상 메모리 (가상 돔)
        ================================= 데이터를 서버로부터 읽기
           => useEffect()
        4. render() => 화면 출력
        5. ComponentWillUpdate()
        6. ComponentDidUpdate()
           => setXxx
        6-1 . render()
        7. ComponentWillDestroy()
        8. ComponentDidDestroy()

        ==> props / state : 변경이 가능한 데이터
            ==== 호출시 전송 : 불변
        ==> 데이터 상태 관리 프로그램
        ==> class / function => 지역변수 => 유지하는 변수 (useState()) => Hooks
            ===== 멤버변수 설정이 가능
 */
// <Header /> => return 값을 읽어서 => index.html
function Header(props){
    return (
        <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <h1 className="logoname"><NavLink to={"/"}><span>탐나라제주</span></NavLink></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                        <li><a className="drop" href="#">제주</a>
                            <ul>
                                <li><NavLink to={"/jeju/food_list"}>맛집</NavLink></li>
                                <li><NavLink to={"/jeju/event_list"}>행사&이벤트</NavLink></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">레시피</a>
                            <ul>
                                <li><a href="/jeju/recipe_list">레시피</a></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/jeju/food_find"}>맛집 검색</NavLink></li>
                        <li><NavLink to={"/news/news_list"}>뉴스 검색</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;