import { useState } from "react";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const newsData = [
    {
      id: 1,
      title:
        "Michael B. Jordan's 'Thomas Crown Affair' Lands March 2027 Release",
      category: "releases",
      date: "4/25/2025",
      author: "Ryan Gajewski",
      source: "The Hollywood Reporter",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2025/04/MBJ-Headshot-2025-H-2025.jpg?w=1296&h=730&crop=1",
      excerpt:
        "Amazon MGM Studios is set to release the heist film theatrically and in IMAX on March 5, 2027. Jordan directs and stars alongside Taylor Russell in this reimagining of the classic 1968 film.",
      content:
        "Michael B. Jordan's new movie version of The Thomas Crown Affair will be hoping for a big score in early 2027. Amazon MGM Studios is set to release the heist film theatrically and in IMAX on March 5, 2027. Jordan directs and stars alongside Taylor Russell in the feature that follows Norman Jewison's 1968 original.",
      link: "https://www.hollywoodreporter.com/movies/movie-news/thomas-crown-affair-michael-b-jordan-release-1236200837/",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Warner Bros. Wins Dismissal of 'Superman' Foreign Copyright Suit",
      category: "legal",
      date: "4/25/2025",
      author: "Gene Maddaus",
      source: "Variety",
      image:
        "https://variety.com/wp-content/uploads/2024/12/superman-1-e1735592067723.png?w=1000&h=667&crop=1&resize=1360%2C907",
      excerpt:
        'A judge has thrown out a lawsuit challenging Warner Bros.\' copyright to "Superman" in 10 countries, finding that the federal courts have no jurisdiction.',
      content:
        'A judge has thrown out a lawsuit challenging Warner Bros.\' copyright to "Superman" in 10 countries, finding that the federal courts have no jurisdiction over the dispute.',
      link: "https://variety.com/2025/film/news/warner-bros-superman-copyright-lawsuit-dismissed-1236378512/",
      readTime: "4 min",
    },
    {
      id: 3,
      title:
        "1989's Batman Was Nearly A Bizarrely Overcrowded Movie From A Classic James Bond Screenwriter",
      category: "features",
      date: "4/26/2025",
      author: "Joe Roberts",
      source: "Slash Film",
      image:
        "https://www.slashfilm.com/img/gallery/1989s-batman-was-nearly-a-bizarrely-overcrowded-movie-from-a-classic-james-bond-screenwriter/intro-1744729191.webp",
      excerpt:
        '1989\'s "Batman" made Tim Burton a box office hero and changed how Hollywood marketed blockbuster movies.',
      content:
        '1989\'s "Batman" made Tim Burton a box office hero, exposed mass audiences to a truly dark interpretation of the Dark Knight.',
      link: "https://www.slashfilm.com/1835264/batman-1989-original-script-james-bond-writer-tom-mankiewicz/",
      readTime: "7 min",
    },
  ];

  const categories = [
    { id: "all", label: "📰 All News" },
    { id: "releases", label: "🎬 Releases" },
    { id: "legal", label: "⚖️ Legal" },
    { id: "features", label: "✨ Features" },
  ];

  const filteredNews =
    activeCategory === "all"
      ? newsData
      : newsData.filter((item) => item.category === activeCategory);
  const featuredNews = newsData[0];
  const secondaryNews = filteredNews.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Cinema Insights
          </h1>
          <p className="text-lg text-gray-800">
            Stay ahead with breaking news from the entertainment industry
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-gray-700">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-yellow-500 text-gray-900 scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Article (Hero Section) */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

            {/* Featured Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  🔥 TRENDING
                </span>
                <span className="text-gray-300 text-sm">
                  {featuredNews.readTime} read
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight hover:text-yellow-400 transition-colors">
                {featuredNews.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-2">
                {featuredNews.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span>{featuredNews.date}</span>
                <span className="text-yellow-500">
                  by {featuredNews.author}
                </span>
                <a
                  href={featuredNews.link}
                  className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {featuredNews.source} →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Cards - Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {secondaryNews.length > 0 ? (
              secondaryNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {/* Image */}
                  <div className="md:col-span-1 relative overflow-hidden h-48 md:h-auto">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                          {
                            categories
                              .find((c) => c.id === news.category)
                              ?.label.split(" ")[1]
                          }
                        </span>
                        <span className="text-xs text-gray-400">
                          {news.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors line-clamp-3">
                        {news.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {news.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span className="block">{news.date}</span>
                        <span className="text-yellow-400 font-semibold">
                          {news.author}
                        </span>
                      </div>
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center gap-1"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">
                  No news in this category yet.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter Section */}
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                📬 Get Updates
              </h3>
              <p className="text-gray-900 text-sm mb-4">
                Never miss breaking news from cinema.
              </p>
              <input
                type="email"
                placeholder="Your email..."
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="w-full bg-gray-900 text-yellow-400 font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>

            {/* Trending Section */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span>🔥 Trending</span>
              </h3>
              <div className="space-y-4">
                {filteredNews.map((news, idx) => (
                  <a
                    key={news.id}
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/60 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400 font-bold text-lg flex-shrink-0 w-6">
                        #{idx + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold group-hover:text-yellow-400 transition-colors line-clamp-2">
                          {news.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {news.source}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-6">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    name: "Facebook",
                    emoji: "👍",
                    url: "https://www.facebook.com/",
                  },
                  { name: "Twitter", emoji: "𝕏", url: "https://twitter.com/" },
                  {
                    name: "Instagram",
                    emoji: "📸",
                    url: "https://www.instagram.com/",
                  },
                  {
                    name: "YouTube",
                    emoji: "▶️",
                    url: "https://www.youtube.com/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/30 hover:bg-yellow-500 text-gray-300 hover:text-gray-900 rounded-lg text-center font-semibold transition-all transform hover:scale-105"
                  >
                    <span className="text-xl block mb-1">{social.emoji}</span>
                    <span className="text-xs">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
