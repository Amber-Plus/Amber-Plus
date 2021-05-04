const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

// Connect Database
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));

app.use(fileUpload());

app.get('/', (req, res) => res.json({ msg: 'Welcome to sum API' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/personAlert', require('./routes/personAlert'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

// Upload Endpoint
app.post('/upload', (req, res) => {
    // console.log(req.files);
    if (req.files === null || req.files === undefined) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(req.files.file.name);
    // Check mime
    const mimetype = filetypes.test(req.files.file.mimetype);
    // Check File Type
    if (mimetype && extname) {
        const file = req.files.file;
        const filepath = `uploads/${file.name}`;
        const reqPath = path.join(__dirname, `../public/${filepath}`);

        file.mv(reqPath, err => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }

            res.json({ fileName: file.name, filePath: `/${filepath}` });
        });
    } else {
        return res.status(400).json({ msg: 'Error: Images Only!' });
    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
