import { ResumeProvider } from './context/ResumeContext';
import AppLayout from './AppLayout';

function App() {
  return (
    <ResumeProvider>
      <AppLayout />
    </ResumeProvider>
  );
}

export default App;
