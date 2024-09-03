import React from 'react'
import './App.css'

const App = () => {
  const user = {
    name : "Ali",
    age : 24,
    email : 'ali10@gmail.com',
    hobbies : ["Coder", "Lire", "Jouer", "la musique"]
  }
  // Fonction pour déterminer le style basé en fonction de l'age
  const getAgeStyle = (age) => {
    if (age <18) {
      return {background: "red"};

    } else if (age < 25) {
      return{background: "green"}
    }else {
      return {background: "blue"};
    }
    
  }
  return (
    <div className='box'>
      <h1>Carte utilisateur</h1>
      <div className='card-user' style={getAgeStyle(user.age)}>    
        <div>Nom : {user.name} </div>
        <div>Age : {user.age} ans </div>
        <div>Email : {user.email} </div>
        {user.hobbies.map((hobby, index) => (
          <div key={index} className='hobby'>{hobby} </div>
        ))}
      </div> 
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      </div> 

    </div>
  )
}

export default App
