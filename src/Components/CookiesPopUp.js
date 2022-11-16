import "./styles/cookies.css"

export default function CookiesPopUp () {
  function clickHandler () {
    document.getElementById("cookies").classList.toggle("clicked")
      document.cookie = "accepted";
  }
  return (
    <div id="cookies">
      <button onClick={clickHandler}>
        <div id="animated-button">
          <div className="btn-bar bar1"></div>
          <div className="btn-bar bar2"></div>
        </div>
      </button>
      <p>Ta strona korzysta z plików cookie, aby poprawić jakość obsługi,
          personalizować treści i reklamy oraz analizować ruch.
          Aby uzyskać więcej informacji, zapoznaj się z naszą
          <span> </span>
          <a href="#https://drive.google.com/file/d/1CYpRU3zGlcmLgf4GS4pBJK0h6qHKOKcM/view">polityką prywatności</a>
          Zamykając to okienko, wyrażasz zgodę na wykorzystywanie plików cookie i podobnych technologii.</p>
    </div>
  )
}
