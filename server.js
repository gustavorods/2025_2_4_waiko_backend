require ('dotenv').config();
import express from 'express';
import { initializeApp } from 'firebase/app';
import cors from 'cors';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Firebase Online Mohantico!')
})
