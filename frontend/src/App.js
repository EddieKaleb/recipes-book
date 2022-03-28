import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'

import { CategoryList } from './components/Categories/CategoryList/CategoryList'
import { RecipeAdd } from './components/Recipes/RecipeAdd/RecipeAdd'
import { Menu } from './components/Menu/Menu'
import { AuthSignIn } from './components/Auth/AuthSignIn/AuthSignIn'
import { AuthSignUp } from './components/Auth/AuthSignUp/AuthSignUp'
import { Search } from './components/Search/Search'
import { RecipeDetail } from './components/Recipes/RecipeDetail/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div id="app">
              <div className="view view-main view-init ios-edges" data-url="/">
                <div className="page page-home">
                  <div className="page-content">
                    <Header />
                    <Home />
                  </div>
                </div>
                <Navbar />
              </div>
            </div>
          }
        />
        <Route path="/signin" exact element={<AuthSignIn />} />
        <Route path="/signup" exact element={<AuthSignUp />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/categories" exact element={<CategoryList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/new-recipe" exact element={<RecipeAdd />} />
        <Route path="/recipes/search" exact element={<Search />} />
        <Route
          path="/recipes/categories/:id"
          exact
          element={<CategoryList />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
