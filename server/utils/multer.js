const multer = require('multer');

let storage = multer.diskStorage(
    {

        destination: function (req, file, cb) {
            cb(null, './server/media');
        },

        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        }

    });

let upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 4 } // 4MB
});

module.exports = upload;