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
    // <AuthSignUp />
    //<AuthSignIn />
    //<Menu />
    //<RecipeAdd />
    //<RecipeDetail />
    //<CategoryList />
    <Search />
    /*<div id="app">
      <div className="view view-main view-init ios-edges" data-url="/">
        <div className="page page-home">
          <div className="page-content">
            <Header />
            <Home />
          </div>
        </div>
        <Navbar />
      </div>
    </div>*/
  )
}

export default App
