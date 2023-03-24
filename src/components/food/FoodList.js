import {useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodList(){
    const [foodList,setFoodList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const [cookieList,setCookieList]=useState([])

    let cookie=document.cookie.split(";")
    let cc=[]
    for(let i=cookie.length-1; i>=0; i--)
    {
        let a=cookie[i];
        let b=a.substring(a.indexOf("=")+1)
        cc.push(b.trim())
    }
    let m=cc.map((mm,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <img src={mm}/>
        </li>
    )


    useEffect(()=>{
        axios.get("http://localhost/jeju/food_list_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data)
        })
        axios.get("http://localhost/jeju/jeju_cookie_react").then(response=>{
            console.log(response.data)
            setCookieList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/jeju/food_page_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }, [])
    // 이벤트 처리
    const pages=(page)=> {
        axios.get("http://localhost/jeju/food_list_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data)
        })
        axios.get("http://localhost/jeju/food_page_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }
    /*
    let cookie=foodList.map((food,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <NavLink to={"/jeju/food_detail/"+food.no}>
                <img src={food.poster} title={food.title}/>
            </NavLink>
        </li>
    )
    */
    const pageChange=(page)=>{
        pages(page)
    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }
    let html=foodList.map((food,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <NavLink to={"/jeju/food_detail/"+food.no}>
                <img src={food.poster} title={food.title}/>
            </NavLink>
        </li>
    )
    let row=[];
    if (startPage>1)
    {
        row.push(<li><a href={"#"} onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if (i==curpage)
        {
            row.push(<li className="current"><strong><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></strong></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }
    return (
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading">제주 맛집</header>
                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>
                </div>
                <nav className="pagination">
                    <ul>
                        {row}
                    </ul>
                </nav>
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading">최근 방문 맛집</header>
                            <ul className="nospace clear">
                                {m}
                            </ul>
                        </figure>
                    </div>
                </div>
                <div className="content">
                </div>
                <div className="clear"></div>
            </main>
        </div>
    )
}

export default FoodList;