import Image from 'next/image';
import { useState } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BlurImage = ({ img }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={img.href} className='group'>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <Image
          alt=''
          src={img.imageSrc}
          layout='fill'
          objectFit='cover'
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700 text-center'>{img.name}</h3>
      <p className='mt-1 text-lg font-medium text-gray-900 text-center'>{img.username}</p>
    </a>
  );
};

export default BlurImage;
