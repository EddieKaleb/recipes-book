import { useState } from 'react'
import { Title } from '../../Title/Title'

import { CategoryItem } from '../CategoryItem/CategoryItem'

import './CategoryList.css'

export const CategoryList = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      descricao: 'Doces e Salgados',
      url_imagem:
        'https://www.altoastral.com.br/media/_versions/dia_das_criancas_-_5_receitas_widexl.jpg',
    },
    {
      id: 2,
      descricao: 'Cafés',
      url_imagem:
        'https://ichef.bbci.co.uk/news/640/cpsprodpb/17A2C/production/_104421869_cafe1.jpg',
    },
    {
      id: 3,
      descricao: 'Bolos e Tortas',
      url_imagem:
        'https://www.sp.senac.br/documents/20125/45323/14047_01-01-2017.jpg/fa41fcda-f021-922c-ec72-84f5cea06b16?version=1.0&t=1596480353442null&download=true',
    },
  ])

  return (
    <div className="page">
      <Title title={'Categories'} />

      <div className="page-content">
        <div className="categories segments-page">
          <div className="container">
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
