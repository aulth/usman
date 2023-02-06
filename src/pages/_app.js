import '@/styles/globals.css'
import AppContext from 'AppContext'
import { useState } from 'react';
export default function App({ Component, pageProps }) {
  const [projectsTitle, setProjectsTitle] = useState('All Projects');
  const filterProjects = (category) => {
    openDrawer();
    document.querySelectorAll('.project').forEach(item => { item.classList.remove('flex'); item.classList.add('hidden') });
    document.querySelectorAll(`.${category}`).forEach(item => { item.classList.remove('hidden'); item.classList.add('flex') });
    setProjectsTitle(category+" Projects");
  }
  const openDrawer = () => {
    if (typeof window !== 'undefined') {
      setProjectsTitle("All Projects");
      document.querySelectorAll('.project').forEach((item=>{item.classList.remove('hidden');item.classList.add('flex')}))
      document.querySelector("#all-projects").classList.remove('-left-full');
      document.querySelector("#all-projects").classList.add('left-0');
    }
  }
  const closeDrawer = () => {
    if (typeof window !== 'undefined') {
      document.querySelector("#all-projects").classList.remove('left-0');
      document.querySelector("#all-projects").classList.add('-left-full');
    }
  }
  return <AppContext.Provider value={{filterProjects:filterProjects,
  projectsTitle:projectsTitle,
  openDrawer:openDrawer,
  closeDrawer:closeDrawer
  }}>
    <Component {...pageProps} />
  </AppContext.Provider>
}
