import express from 'express'
import { config } from 'dotenv'
import router from '../src/routes/index'
import cors from "cors";
import path from 'path';

config()
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(router);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});
export default app