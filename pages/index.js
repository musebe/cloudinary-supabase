import Layout from './components/Layout';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BlurImage from './components/BlurImage';
import { createClient } from '@supabase/supabase-js';

export default function Home({ images }) {
  return (
    <Layout>
      <Navbar />
      {images.length === 0 && <h3>No images to show</h3>}
      <div className=' m-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {images.map((img) => (
          <BlurImage key={img.id} img={img} />
        ))}
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );
  const { data } = await supabaseAdmin.from('images').select('*').order('id');

  console.log(data);
  return {
    props: {
      images: data,
    },
  };
}
