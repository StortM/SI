// A simple express server
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const filenameParts = file.originalname.split(".");
    if (filenameParts.length < 2) {
      cb(new Error("File has no extension: " + file.originalname));
    }

    const ext = filenameParts.pop();
    const originalFilename = filenameParts.join(".");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const newFileName = originalFilename + "-" + uniqueSuffix + "." + ext;

    cb(null, newFileName);
  },
});

const upload = multer({ storage });

app.post("/form", (req, res) => {
  res.send(
    `<h1>Username: ${req.body.username}</h1><h1>Password: ${req.body.password}</h1>`
  );
});

app.post("/fileform", upload.single("file"), (req, res) => {
  res.send({ data: req.body });
});

const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on port", PORT));