//the props parameter represents the props we added in the component instance (in this case, in App.jsx)

export default function MainSection(props) {
  return (
    <section>
      <img src={props.source} alt={props.altText} />
      <p>{props.content}</p>
      <button>
        <a href={props.link}>Read more</a>
      </button>
    </section>
  );
}

//alternative syntax --> destructuring
// export default function MainSection({ source, altText, content, link }) {
//   return (
//     <section>
//       <img src={source} alt={altText} />
//       <p>{content}</p>
//       <button>
//         <a href={link}>Read more</a>
//       </button>
//     </section>
//   );
// }

// props {
//   source: "",
//   altText: "",
//   content:"" ,
//   link:""
// }
