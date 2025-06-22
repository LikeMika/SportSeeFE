const Welcome = ({ firstName }) => {
  if (!firstName) return <p>Chargement...</p>
  return (
    <div className="greeting">
      <h1>Bonjour {firstName}</h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
export default Welcome
