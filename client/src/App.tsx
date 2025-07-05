import { QueryClientProvider } from '@tanstack/react-query';
import { Router, Route } from 'wouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ParallaxBackground } from './components/ParallaxBackground';
import { EntranceAnimation } from './components/EntranceAnimation';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { queryClient } from './lib/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen text-foreground relative">
          <CustomCursor />
          <ParallaxBackground />
          <EntranceAnimation />
          <Navigation />
          
          <Router>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/certifications" component={CertificationsPage} />
            <Route path="/contact" component={ContactPage} />
          </Router>
          
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;