import {Fragment} from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import FoodList from "./components/food/FoodList";
import EventList from "./components/food/EventList";
import Recipe from "./components/recipe/Recipe";
import FoodDetail from "./components/food/FoodDetail";
import FoodFind from "./components/food/FoodFind";
import NewsList from "./components/news/NewsList";
import Car from "./components/jeju/Car";
import CarDetail from "./components/jeju/CarDetail";
import Hotel from "./components/jeju/Hotel";
import HotelDetail from "./components/jeju/HotelDetail";

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route exact path={"/jeju/food_list"} element={<FoodList/>}/>
            <Route exact path={"/jeju/event_list"} element={<EventList/>}/>
            <Route exact path={"/jeju/recipe_list"} element={<Recipe/>}/>
            <Route exact path={"/jeju/food_detail/:no"} element={<FoodDetail/>}/>
            <Route exact path={"/jeju/food_find"} element={<FoodFind/>}/>
            <Route exact path={"/news/news_list"} element={<NewsList/>}/>
            <Route exact path={"/jeju/car_list"} element={<Car/>}/>
            <Route exact path={"/jeju/hotel_list"} element={<Hotel/>}/>
            <Route exact path={"/jeju/car_detail/:no"} element={<CarDetail/>}/>
            <Route exact path={"/jeju/hotel_detail/:hno"} element={<HotelDetail/>}/>
          </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
