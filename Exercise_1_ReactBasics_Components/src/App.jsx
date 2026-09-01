import React from 'react'
import Card from './card'
import Card2 from './card2'
import Member from './team_member'
import './app.css'

const App = () => {
  const users = [
  {
    image: "https://images.unsplash.com/photo-1527973750241-88d016dd9631",
    name: "Malaika Shabbir",
    designation: "Software Engineer Intern",
    email: "malaika@example.com",
    skills: "Photography"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Ahmed Khan",
    designation: "Frontend Developer",
    email: "ahmed@example.com",
    skills: "React, JavaScript"
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Ayesha Ali",
    designation: "UI/UX Designer",
    email: "ayesha@example.com",
    skills: "Figma, UI Design"
  }
];



// _______________________ TEAM MEMBERS  _______________________
const members = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Shaheer Ahmed",
    designation: "CEO",
    availability: "Available",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Ayesha Khan",
    designation: "UI/UX Designer",
    availability: "Busy",
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    name: "Ali Hassan",
    designation: "Frontend Developer",
    availability: "Available",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    name: "Sara Malik",
    designation: "Project Manager",
    availability: "Available",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Usman Raza",
    designation: "Backend Developer",
    availability: "Busy",
  }
];


  return (
    <div >
      <div className='main_div'>
        <h1>Profile Cards</h1>
        {

          //this loop will runs as many times as the numbers of users in the user array
          //This loop will run once for each user in the users array.
          users.map( (user) => {
            return (
              <>
                <Card 
                  image  = {user.image} 
                  name= {user.name} 
                  designation = {user.designation} 
                  email = {user.email} 
                  skills = {user.skills}
                />
              </>
            );
          })

        }
      </div>

        <br/>
        <br/>
        <br/>


      <div className='main_div'>
        <h1>Profile Cards</h1>
        <Card2 img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNu7sE4iOnV_9OuX2LuXN3j_aZg0XeNgqUXm4y9u6ZaLriG20QREJt1I&s=10" name = "Malaika Shabbir" designation = "Internee"  email = "malaikashabbir1@gmail.com" skill = "photography"/>
        <Card2 img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyFXEzFeY7V57W7iocY1CSOYlq-uvx1G21HirHlxIqck1Z_I0XrYJYc1T&s=10"  name = "Hafiz Muhammad Usman" designation = "Student"  email = "muhammadusman21@gmail.com" skill = "coding"/>
        <Card2 img = "https://www.shutterstock.com/image-photo/backside-asian-child-cute-little-260nw-1118827916.jpg"  name = "Mirha Bint e Danial" designation = "Baby"  email = "mirhababy@gmail.com" skill = "playing"/>
      </div>


      <br/>
      <br/>
      <br/>
        

    
      <h1>Small Team OF orderAlert</h1>
      <div className='main_div'>
        {
          members.map ( (member) => {
            return (
              <Member
                  image = {member.image} 
                  name = {member.name} 
                  designation = {member.designation} 
                  availability= {member.availability}
              />
            )
          })
        }
      </div>
      
    </div>
  )
}

export default App