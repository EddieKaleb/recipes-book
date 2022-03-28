import React from 'react'
import { CategoryList } from '../Categories/CategoryList/CategoryList'
import { RecipeList } from '../Recipes/RecipeList/RecipeList'

import { Title } from '../Title/Title'

import './Search.css'

export const Search = () => {
  return (
    <div class="page">
      <Title title="Search" backTo={'/'} />
      <div className="container">
        <form className="list">
          <div class="item-input-wrap">
            <input type="text" placeholder="Type a search..." required />
          </div>
        </form>
      </div>

      <div class="page-content">
        <RecipeList />
      </div>
    </div>
  )
}
