
import React from 'react'

const MonParcours = () => {
  const experiences = [
    {
      id: 1,
      title: 'Licence en Génie Logiciel',
      institution: 'Université MIT de Dakar',
      period: '2021 - Présent',
      description:
        "J'acquiers des compétences avancées en développement logiciel, gestion de projet, et conception de systèmes d'information.",
    },
    {
      id: 2,
      title: 'Début de mes études universitaires',
      institution: 'Université Centrale de Tunis',
      period: '2019 - 2021',
      description:
        "J'ai découvert ma passion pour le développement web et appris les bases des langages de programmation comme HTML, CSS et Python.",
    },
    {
      id: 3,
      title: 'Baccalauréat Scientifique',
      institution: 'Lycée XYZ, Comores',
      period: '2018',
      description:
        "C'est ici que j'ai développé mon intérêt pour la logique et les mathématiques, qui ont ensuite influencé mon parcours en informatique.",
    },
  ];

  return (
    <section className="bg-white py-16" id="monParcours">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Mon Parcours
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-500">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-500">
                {experience.institution} | {experience.period}
              </p>
              <p className="text-gray-600 mt-4">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>  
  )
}

export default MonParcours
