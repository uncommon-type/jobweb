import { createRoot } from 'react-dom/client';

const Root = () => {
  return <h1>app</h1>
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root />);

