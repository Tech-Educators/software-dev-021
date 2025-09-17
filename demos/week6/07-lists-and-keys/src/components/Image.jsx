import "./Image.css";

//you could also use the props parameter --> props.imgUrl, props.title, props.author
export default function Image({ imgUrl, title, author }) {
  return (
    <section className="image-section">
      <img src={imgUrl} alt={title} className="w-80 h-96 rounded-2xl" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl">{author}</p>
    </section>
  );
}
