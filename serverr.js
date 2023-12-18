const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
//const multer = require('multer');

app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage(); // Обирайте зберігання в пам'яті або на диску
const upload = multer({ storage: storage });

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'ghostjnxV31',
    database: 'annotations',
});

app.listen(5173, () => {
    console.log('Server is running on port 5173');
});

app.post('/annotation', upload.single('image'), (req, res) => {
    try {
        const sentImage = req.file.buffer; // Використовуйте буфер для отримання даних файлу
        const sentTag = req.body.Tag;

        const SQL = 'INSERT INTO annotations (image, tag) VALUES (?, ?)';
        const values = [sentImage, sentTag];

        db.query(SQL, values, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: 'Internal Server Error' });
            } else {
                console.log('Annotation inserted successfully!');
                res.status(201).send({ message: 'Annotation added!' });
            }
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});
