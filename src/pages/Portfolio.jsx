import React from 'react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Site Web de Portfolio Personnel",
      description:
        "Développement d'un portfolio personnel dynamique avec React et Tailwind CSS. Ce projet présente mes compétences, mon parcours, et mes projets de développement web.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      link: "https://monportfolio.com",
      image: "portfolio-image.jpg", // Remplacez par l'URL de votre image de projet
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description:
        "Une application web de gestion de tâches avec React et Redux. Elle permet de suivre les tâches, de les marquer comme complètes, et de filtrer par statut.",
      technologies: ["React", "Redux", "Node.js"],
      link: "https://gestion-taches.com",
      image: "task-manager.jpg", // Remplacez par l'URL de votre image de projet
    },
    {
      id: 3,
      title: "Blog de Développement Web",
      description:
        "Un blog développé avec Next.js pour partager des articles techniques sur le développement web, React, JavaScript, et plus encore.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      link: "https://monblogdev.com",
      image: "dev-blog.jpg", // Remplacez par l'URL de votre image de projet
    },
  ];

  return (
    <section className="bg-white py-16" id="monPortfolio">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Mon Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Technologies :</p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-orange-500 font-semibold hover:underline"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
