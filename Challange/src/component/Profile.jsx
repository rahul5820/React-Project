
import ProfileCard from "../Pages/ProfileCard"
function Profile() {
  return (
    <div>
      <h1>Profile card Challange</h1>
    
    <ProfileCard Name ={"Rahul"} age ={23} greeting={
        <div><strong>Hi Rahul</strong></div>
    }>
    <p>Hobbies:Gamming </p>
    <button>Conatct </button>
</ProfileCard>
</div>
  )
}

export default Profile
