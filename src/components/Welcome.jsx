import { useEffect, useState } from 'react'
import { getUserById } from '../services/userService'

const Welcome = () => {
  const [firstName, setFirstName] = useState(null)

  useEffect(() => {
    getUserById(18)
      .then(user => setFirstName(user.firstName))
      .catch(err => console.error(err))
  }, [])

  if (!firstName) return <p>Chargement...</p>

  return (
    <div className="greeting">
      <h1>Bonjour {firstName}</h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Welcome
