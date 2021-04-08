import multer from 'multer';

// const MIME_TYPES = {
//   'image/jpg': '.jpg',
//   'image/jpeg': '.jpg',
//   'image/png': '.jpg',
// };

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'tmp/images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(' ').join('_');
    // const extension = MIME_TYPES[file.mimetype];
    cb(null, `${Date.now()}-${name}`);
  },
});

export default multer({ storage }).single('images');
