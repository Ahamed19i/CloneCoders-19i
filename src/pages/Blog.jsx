import React from 'react'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les bases de React pour les débutants",
      description:
        "Un guide pour comprendre les fondamentaux de React.js, ses composants, son état, et ses props.",
      date: "02 décembre 2024",
      link: "#",
    },
    {
      id: 2,
      title: "Pourquoi choisir Tailwind CSS pour vos projets",
      description:
        "Découvrez comment Tailwind CSS peut transformer votre façon de concevoir des interfaces modernes.",
      date: "28 novembre 2024",
      link: "#",
    },
    {
      id: 3,
      title: "Améliorer les performances de vos applications web",
      description:
        "Des astuces pour optimiser vos projets React et améliorer l'expérience utilisateur.",
      date: "15 novembre 2024",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="monBlog">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Mon Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-500">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="text-orange-500 font-semibold hover:underline"
              >
                Lire plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
