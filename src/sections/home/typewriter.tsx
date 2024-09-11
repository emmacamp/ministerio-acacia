'use client';
import { useEffect } from 'react';
import { Heading } from '@/components';

export const Typewriter = () => {
  useEffect(() => {
    const dataText = ['Transformando Vidas', 'Impactando las Naciones', 'Ministerio Acacia'];

    // type one text in the typewriter
    const typeWriter = (text: string, i: number, fnCallback: () => void) => {
      if (i < text.length) {
        const h1Element = document.querySelector('#typewriter');
        if (h1Element) {
          h1Element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        }

        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
      }
    };

    // start a typewriter animation for a text in the dataText array
    const startTextAnimation = (i: number) => {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, () => {
          startTextAnimation(i + 1);
        });
      } else {
        setTimeout(() => {
          startTextAnimation(0);
        }, 20000);
      }
    };

    // Start the animation
    startTextAnimation(0);
  }, []);

  return (
    <div>
      <Heading
        size='heading7'
        id='typewriter'
        as='h1'
        className='text-center text-white leading-[72px] tracking-[-2.40px]'
      ></Heading>
    </div>
  );
};
