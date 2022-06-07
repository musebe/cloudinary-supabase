import Layout from './components/Layout';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <Gallery />
      <Footer/>
    </Layout>
   
  );
}
