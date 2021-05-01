import multer from 'multer';
import { MIME_TYPES, FILE_SIZE_LIMIT } from '../../constants';

// CONFIGS
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

const fileFilter = (req, file, cb) => {
  if (MIME_TYPES.includes(file.mimetype)) {
    return cb(null, true);
  }
  return cb(new Error('Unsupported file extension'));
};

const limits = {
  files: 1,
  fileSize: FILE_SIZE_LIMIT,
};

// MULTER CONFIGURATION
const uploadImages = multer({
  storage,
  fileFilter,
  limits,
}).single('image');

// ERROR HANDLING
const upload = (req, res, next) => {
  uploadImages(req, res, err => {
    if (err && err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    }
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    return next();
  });
};

export default upload;
