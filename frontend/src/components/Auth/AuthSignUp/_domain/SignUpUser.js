import { useNavigate } from 'react-router-dom'
import SignUpUserLogic from './SignUpUserLogic'

export const SignUpUser = () => {
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    // return async function to submit data to backend

    return fetch('http://localhost:3000/usuarios/cadastrar', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error()
        }
        return response.json()
      })
      .then((res) => {
        navigate('/signin')
      })
      .catch((res) => {
        console.log(res)
      })
  }

  return <SignUpUserLogic onSubmit={handleSubmit} />
}
