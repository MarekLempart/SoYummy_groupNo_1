import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";


import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AddRecipies from "./pages/Addrecipies";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import SignInPage from "./components/SigninPage/SigninPage";

const WelcomePage = lazy(() => import("./components/WelcomePage/WelcomePage"));

function App() {
  const StyledLink = styled(NavLink)`
    margin: 0 10px;
    text-decoration: none;
    color: black;
    &.active {
      font-weight: bold;
      color: blue;
    }
  `;
  return (
    <>
      <div>
        <nav>
          <StyledLink to="SoYummy_groupNo_1/">Home</StyledLink>
          <StyledLink to="SoYummy_groupNo_1/categories">Categories</StyledLink>
          <StyledLink to="SoYummy_groupNo_1/addrecipies">
            Add Recipes
          </StyledLink>
          <StyledLink to="SoYummy_groupNo_1/favorites">Favorites</StyledLink>
          <StyledLink to="SoYummy_groupNo_1/shoppinglist">
            Shopping List
          </StyledLink>
          <StyledLink to="SoYummy_groupNo_1/search">Search</StyledLink>
          <StyledLink to="SoYummy_groupNo_1/profile">Profile</StyledLink>
        </nav>

        <Routes>
          <Route path="/SoYummy_groupNo_1/" element={<WelcomePage />} />
          <Route path="SoYummy_groupNo_1/" element={<Home />} />
          <Route path="SoYummy_groupNo_1/categories" element={<Categories />} />
          <Route
            path="SoYummy_groupNo_1/addrecipies"
            element={<AddRecipies />}
          />
          <Route path="SoYummy_groupNo_1/favorites" element={<Favorites />} />
          <Route
            path="SoYummy_groupNo_1/shoppinglist"
            element={<ShoppingList />}
          />
          <Route path="SoYummy_groupNo_1/search" element={<Search />} />
          <Route path="SoYummy_groupNo_1/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
