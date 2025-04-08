import { createRoot } from 'react-dom/client';
import App from 'components/App';
import "./style.css";

const root = createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App />,
  document.getElementById("root"),
);
