/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Edge from './components/Edge';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import VoiceAgent from './components/VoiceAgent';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Edge />
        <Projects />
        <CTA />
      </main>
      <Footer />
      <VoiceAgent />
    </div>
  );
}
