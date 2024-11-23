function YoutubeLinks() {
  const youtubeLinks = [
    { id: 1, url: "https://www.youtube.com/watch?v=YQfRVo5UwOM&t", img: "https://img.youtube.com/vi/YQfRVo5UwOM/maxresdefault.jpg" },
    { id: 2, url: "https://www.youtube.com/watch?v=FMfLfYus6Yc",img: "https://img.youtube.com/vi/FMfLfYus6Yc/maxresdefault.jpg" },
    { id: 3, url: "https://www.youtube.com/watch?v=o_s6Q-teA6U&t", img: "https://img.youtube.com/vi/o_s6Q-teA6U/maxresdefault.jpg" },
    { id: 4, url: "https://www.youtube.com/watch?v=ixwR9EyvRjs", img: "https://img.youtube.com/vi/ixwR9EyvRjs/maxresdefault.jpg" },
  ];


  return (
    <div className="grid grid-cols-2 gap-12 p-4">
    {youtubeLinks.map((link) => (
      <a
        key={link.id}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={link.img}
          alt={`Miniatura del video ${link.id}`}
          className="w-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </a>
    ))}
  </div>
  );
}
export default YoutubeLinks;