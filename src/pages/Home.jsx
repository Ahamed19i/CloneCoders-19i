
import React from 'react'
import '../global.css'

const Home = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-10 px-6">
        
        {/* Photo ou Illustration */}
        <div className="mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/300" // Remplacez par votre photo
            alt="Votre Nom"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Texte de présentation */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bonjour, je suis <span className="text-orange-500">Ahamed Hassani M'homa</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Étudiant en <strong className="text-gray-800">Développement Web</strong>, passionné par la création de solutions numériques innovantes. 
            Je me spécialise dans les technologies modernes comme <span className="font-semibold text-gray-800">React.js</span>, 
            <span className="font-semibold text-gray-800"> Node.js</span>, et 
            <span className="font-semibold text-gray-800"> MongoDB</span>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Mon objectif est de transformer vos idées en expériences utilisateur engageantes. Explorez mon parcours, 
            mes projets, et contactez-moi pour discuter d’opportunités passionnantes.
          </p>

          {/* Appels à l'action */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <a
              href="#portfolio"
              className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-orange-600 transition"
            >
              Voir mon portfolio
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-300 transition"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
