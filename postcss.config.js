import purgecss from '@fullhuman/postcss-purgecss';
import tailwindcss from 'tailwindcss';

const postcssConfig = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: ['output.css'], // Update the path to match your CSS file
};

export default {
  plugins: [
    tailwindcss,
    ...(process.env.NODE_ENV === 'production' ? [purgecss(postcssConfig)] : []),
  ],
};