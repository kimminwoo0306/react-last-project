import {useState, useEffect, Fragment} from "react";
import Header from "./Header";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Home (){
    const [foodTop,setFoodTop]=useState([])

    useEffect( ()=> {
        axios.get("http://localhost/jeju/food_top6").then(response=>{
            console.log(response.data)
            setFoodTop(response.data)
        })
    }, [])
    let html=foodTop.map((food)=>
        <li className="one_third">
            <article><NavLink to={"/jeju/food_detail/"+food.no}><img src={food.poster} style={{"width":"100%"}}/></NavLink>
                <h6 className="heading">{food.title}</h6>
                <p>{food.addr}</p>
            </article>
        </li>
    )
    return (
        <Fragment>
        <div className="bgded overlay" style={{"background-image":"url('images/jeju2.jpg')"}}>
            <div id="pageintro" className="hoc clear">
                <article>
                    <h3 className="heading">제주에서 놀당갑서</h3>
                    <p>제주도에 여행하러 오신 여러분들 환영합니다!!
                        제주도에 놀러갔을때 꼭 가야하는 맛집과 여행지를 홈페이지에서 확인하시고 놀다가세요!</p>
                    <footer><a className="btn" href="https://www.jeju.go.kr/">제주도청 홈페이지는 이곳을 클릭하세요</a></footer>
                </article>
            </div>
        </div>
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <section id="introblocks">
                        <ul className="nospace group btmspace-80 elements elements-four">
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-hand-rock"></i></a>
                                    <h6 className="heading">오늘의 날씨</h6>
                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-dove"></i></a>
                                    <h6 className="heading">오늘의 뉴스</h6>
                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-history"></i></a>
                                    <h6 className="heading">추천 여행</h6>
                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-heartbeat"></i></a>
                                    <h6 className="heading">추천 맛집</h6>
                                </article>
                            </li>
                        </ul>
                    </section>
                    <div className="clear"></div>
                </main>
            </div>
            <div className="bgded overlay light" style={{"background-image":"url('images/demo/backgrounds/01.png')"}}>
                <section id="services" className="hoc container clear">
                    <h2 className="text-center">탐나라제주의 맛집 Top 6!</h2>
                    <ul className="nospace group elements elements-three">
                        {html}
                    </ul>
                </section>
            </div>
        </Fragment>
    )
}

export default Home;