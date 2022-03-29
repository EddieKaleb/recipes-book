import * as moment from 'moment'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateRecipeLogic from './CreateRecipeLogic'

export const CreateRecipe = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRecipe = async () => {
      const dataFromServer = await fetch(
        'http://localhost:3000/receitas/buscar/1',
      )
      const data = await dataFromServer.json()
      setData(data)
    }
    fetchRecipe()
  }, [])

  const handleSubmit = async (data) => {
    const submitData = {
      ...data,
      id_usuario: 1,
      data: moment().format('YYYY-MM-DD'),
    }

    delete submitData['id']

    Object.keys(submitData).map((key) => {
      if (submitData[key] == '') {
        delete submitData[key]
      }
    })
    // return async function to submit data to backend
    return fetch('http://localhost:3000/receitas/cadastrar', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then(() => {
        navigate('/')
      })
  }

  const defaultValues = {
    id: data?.id,
    titulo: data?.titulo,
    tempo_preparo: data?.tempo_preparo,
    rendimento: data?.rendimento,
    ingredientes: data?.ingredientes,
    modo_preparo: data?.modo_preparo,
    observacoes: data?.observacoes,
    url_imagem: data?.url_imagem,
    id_categoria: data?.id_categoria,
    id_usuario: data?.id_usuario,
    url_video: data?.url_video,
    data: data?.data,
  }

  return (
    <CreateRecipeLogic defaultValues={defaultValues} onSubmit={handleSubmit} />
  )
}
