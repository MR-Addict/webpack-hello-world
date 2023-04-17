import style from "./styles/App.module.css";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <img src={logo} alt='logo' />

        <div>
          <h1>MR-Addict</h1>
          <p>Cool Webpack with React!</p>
        </div>
      </header>

      <div className={style.webpack}>
        <div>
          <h1>Loaders:</h1>
          <ul>
            <li>React</li>
            <li>Css</li>
            <li>Images</li>
          </ul>
        </div>

        <div>
          <h1>Plugins:</h1>
          <ul>
            <li>HtmlWebpack</li>
            <li>CopyPlugin</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
