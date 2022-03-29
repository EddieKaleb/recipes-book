import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { RecipeAdd } from '../RecipeAdd/RecipeAdd'

const CreateRecipeFormSchema = yup.object().shape({
  titulo: yup.string().min(3).max(100).required(),
  tempo_preparo: yup.number().min(1).max(1000).required(),
  rendimento: yup.number().min(1).max(1000).required(),
  ingredientes: yup.string().min(1).max(1000).required(),
  modo_preparo: yup.string().min(1).max(1000).required(),
  id_categoria: yup.number().required(),
  observacoes: yup.string().min(0).max(200),
  url_imagem: yup.string().min(0).max(500),
  url_video: yup.string().min(0).max(500),
})

const CreateRecipeLogic = ({ defaultValues, onSubmit }) => {
  const form = useForm({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(CreateRecipeFormSchema),
  })

  const handleSubmit = async (data) => {
    await onSubmit(data)
      .then(() => form.reset(data))
      .catch((err) => console.error(err))
  }

  return <RecipeAdd form={form} onSubmit={handleSubmit} />
}

export default CreateRecipeLogic
