
function ProfileCard( {Name,age,greeting,children}) {

  return (
    <>
      <h2>Name:{Name}</h2>
      <p>Age:{age}</p>
      <p>greeting:{greeting}</p>
      <div>
        <h3>{children}</h3>
      </div>

    </>
  )
}

export default ProfileCard
