import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found in DOM");
} else {
  // React 19 hoists Helmet metadata instead of adopting the build-time tags.
  // Remove only our generated head tags before mounting to avoid two canonicals
  // and stale home schemas after navigation. No-JS clients keep the static tags.
  document.head.querySelectorAll('[data-rh="true"], title').forEach(tag => tag.remove());
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}

