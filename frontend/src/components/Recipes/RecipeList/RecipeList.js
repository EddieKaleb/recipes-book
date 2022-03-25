import { useState } from 'react'

import { RecipeItem } from '../RecipeItem/RecipeItem'

import './RecipeList.css'

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      titulo: 'Bolo de Milho',
      tempo_preparo: 40,
      rendimento: 15,
      ingredientes:
        '1 lata de milho verde, 1/2 lata de óleo, 1 lata de leite, 1 lata de açúcar, 3 ovos, 1 lata de fubá, fermento em pó (usar a tampinha como medida)',
      modo_preparo:
        'Adicione os ingredientes listados ao liquidificador. Adicione a massa a uma forma untada com fubá e manteiga. Asse de 40 a 45 minutos.',
      observacoes: 'respeitar o tempo de cozimento',
      url_imagem:
        'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',
      usuario: {},
      categoria: {
        descricao: 'Bolos e Massas',
      },
      data: '2022-03-24',
      url_video: 'https://www.youtube.com/watch?v=V3rgpmqLJug',
    },
    {
      id: 1,
      titulo: 'Bolo de Milho',
      tempo_preparo: 40,
      rendimento: 15,
      ingredientes:
        '1 lata de milho verde, 1/2 lata de óleo, 1 lata de leite, 1 lata de açúcar, 3 ovos, 1 lata de fubá, fermento em pó (usar a tampinha como medida)',
      modo_preparo:
        'Adicione os ingredientes listados ao liquidificador. Adicione a massa a uma forma untada com fubá e manteiga. Asse de 40 a 45 minutos.',
      observacoes: 'respeitar o tempo de cozimento',
      url_imagem:
        'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',
      usuario: {},
      categoria: {
        descricao: 'Bolos e Massas',
      },
      data: '2022-03-24',
      url_video: 'https://www.youtube.com/watch?v=V3rgpmqLJug',
    },
    {
      id: 1,
      titulo: 'Bolo de Milho',
      tempo_preparo: 40,
      rendimento: 15,
      ingredientes:
        '1 lata de milho verde, 1/2 lata de óleo, 1 lata de leite, 1 lata de açúcar, 3 ovos, 1 lata de fubá, fermento em pó (usar a tampinha como medida)',
      modo_preparo:
        'Adicione os ingredientes listados ao liquidificador. Adicione a massa a uma forma untada com fubá e manteiga. Asse de 40 a 45 minutos.',
      observacoes: 'respeitar o tempo de cozimento',
      url_imagem:
        'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',
      usuario: {},
      categoria: {
        descricao: 'Bolos e Massas',
      },
      data: '2022-03-24',
      url_video: 'https://www.youtube.com/watch?v=V3rgpmqLJug',
    },
    {
      id: 1,
      titulo: 'Bolo de Milho',
      tempo_preparo: 40,
      rendimento: 15,
      ingredientes:
        '1 lata de milho verde, 1/2 lata de óleo, 1 lata de leite, 1 lata de açúcar, 3 ovos, 1 lata de fubá, fermento em pó (usar a tampinha como medida)',
      modo_preparo:
        'Adicione os ingredientes listados ao liquidificador. Adicione a massa a uma forma untada com fubá e manteiga. Asse de 40 a 45 minutos.',
      observacoes: 'respeitar o tempo de cozimento',
      url_imagem:
        'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',
      usuario: {},
      categoria: {
        descricao: 'Bolos e Massas',
      },
      data: '2022-03-24',
      url_video: 'https://www.youtube.com/watch?v=V3rgpmqLJug',
    },
    {
      id: 1,
      titulo: 'Bolo de Milho',
      tempo_preparo: 40,
      rendimento: 15,
      ingredientes:
        '1 lata de milho verde, 1/2 lata de óleo, 1 lata de leite, 1 lata de açúcar, 3 ovos, 1 lata de fubá, fermento em pó (usar a tampinha como medida)',
      modo_preparo:
        'Adicione os ingredientes listados ao liquidificador. Adicione a massa a uma forma untada com fubá e manteiga. Asse de 40 a 45 minutos.',
      observacoes: 'respeitar o tempo de cozimento',
      url_imagem:
        'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',
      usuario: {},
      categoria: {
        descricao: 'Bolos e Massas',
      },
      data: '2022-03-24',
      url_video: 'https://www.youtube.com/watch?v=V3rgpmqLJug',
    },
    {
      id: 1,
      titulo: 'Bolo de Milho',
      tempo_preparo: 40,
      rendimento: 15,
      ingredientes:
        '1 lata de milho verde, 1/2 lata de óleo, 1 lata de leite, 1 lata de açúcar, 3 ovos, 1 lata de fubá, fermento em pó (usar a tampinha como medida)',
      modo_preparo:
        'Adicione os ingredientes listados ao liquidificador. Adicione a massa a uma forma untada com fubá e manteiga. Asse de 40 a 45 minutos.',
      observacoes: 'respeitar o tempo de cozimento',
      url_imagem:
        'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',
      usuario: {},
      categoria: {
        descricao: 'Bolos e Massas',
      },
      data: '2022-03-24',
      url_video: 'https://www.youtube.com/watch?v=V3rgpmqLJug',
    },
  ])

  return (
    <div className="popular-menu segments">
      <div className="container">
        <div className="section-title">
          <h3>
            My Recipes
            <a href="#" className="see-all-link">
              See Categories
            </a>
          </h3>
        </div>
        <div className="row justify-content-md-center justify-content-lg-start">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="col col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
            >
              <RecipeItem recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
