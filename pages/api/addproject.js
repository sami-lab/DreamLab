const formidable = require('formidable-serverless');
var cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: '',
});
export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  if (req.method === 'POST') {
    //const { video, logo } = req.file;
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      console.log(files.video);
      const { client, gitURL, imageTitle, summary, title, type, url } = fields;
      cloudinary.uploader.upload(
        files.video.path,
        { upload_preset: 'portfolio' },
        function (err, image) {
          console.log();
          console.log('** File Upload');
          if (err) {
            console.warn(err);
          }
          console.log(
            "* public_id for the uploaded image is generated by Cloudinary's service."
          );
          console.log('* ' + image);
          //waitForAllUploads("pizza", err, image);
        }
      );

      // cloudinary.uploader.upload(

      //   function (error, result) {
      //     console.log(result, error);
      //   }
      // );
      // cloudinary.uploader.upload(
      //   new Date().toDateString() + files.logo.name,
      //   function (error, result) {
      //     console.log(result, error);
      //   }
      // );

      //   fetch('https://api.cloudinary.com/v1_1/dxnoiuj66/image/upload', {
      //     method: 'post',
      //     body: data,
      //   })
      //     .then((res) => res.json())
      //     .then((d) => {
      //       // setPicture(data.url);
      //       console.log(d);
      //       fetch('https://dreamlab-development.firebaseio.com/portfolioData', {
      //         method: 'post',
      //         body: {
      //           client,
      //           gitURL,
      //           imageTitle,
      //           summary,
      //           title,
      //           type,
      //           url,
      //           video: d.video.url,
      //           logo: d.img.url,
      //         },
      //       })
      //         .then((r) => r.json())
      //         .then((d) => {})
      //         .catch((e) => console.log(e));
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    });

    res.end(
      JSON.stringify({
        status: 'success',
        data: {
          message: 'Message Sent Successfully',
        },
      })
    );
  }
};
