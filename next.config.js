const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
  {
    api: {
      bodyParser: {
        sizeLimit: '10mb',
      },
    },
  },
]);

// module.exports = optimizedImages({
//   /* config for next-optimized-images */

//   // your config for other plugins or the general next.js here...
//   api: {
//     bodyParser: {
//       sizeLimit: '15mb',
//     },
//   },
// });
