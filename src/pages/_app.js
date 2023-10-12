import '@/styles/globals.css'
import AppContext from 'AppContext'
import { useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  const [projectsTitle, setProjectsTitle] = useState('All Projects');
  const router = useRouter();
  const filterProjects = (category) => {
    openDrawer();
    document.querySelectorAll('.project').forEach(item => { item.classList.remove('flex'); item.classList.add('hidden') });
    document.querySelectorAll(`.${category}`).forEach(item => { item.classList.remove('hidden'); item.classList.add('flex') });
    setProjectsTitle(category + " Projects");
  }
  const openDrawer = () => {
    if (typeof window !== 'undefined') {
      setProjectsTitle("All Projects");
      document.querySelectorAll('.project').forEach((item => { item.classList.remove('hidden'); item.classList.add('flex') }))
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
  return <AppContext.Provider value={{
    filterProjects: filterProjects,
    projectsTitle: projectsTitle,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer
  }}>
    <Head>
      <meta name="google-adsense-account" content="ca-pub-3323291309040065" />
    </Head>
    <NextNProgress color={router.pathname == '/' ? '#73F8AB' : '#2D2F33'} height={router.pathname == '/' ? 2 : 1} />
    <Component {...pageProps} />
  </AppContext.Provider>
}
