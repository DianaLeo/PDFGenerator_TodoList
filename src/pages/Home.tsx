import React, { useState, useEffect, useRef, useReducer, useContext, FC } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className='home'>
      <h1>This is a <strong>React with Typescript</strong> learning project</h1>
      <ul className='homeUl'>
        <p className='introduction'>Three sections includes: Learning React hooks, Project 1 - Taskify, and Project 2 - PDFGenerator</p>
        <li>
          <Link className="homelink" to="/learnings">Learning React hooks</Link>
        </li>
        <li>
          <Link className="homelink" to="/taskify">Project 1 - Taskify</Link>
          <div className='details'>
            <ul>
              <li>Taskify is a todo list, where you can add and delete your things to do, and toggle its status </li>
              <li>Its state has three fields: id number, todo description, and complete or not status. It is stored in LocalStorage. And its logic is implemented in useReducer and useEffect</li>
              <li>It supports CRUD methods, which are implemented by useReducer hook</li>
              <li>Components have been destructed into the minimal and meaningful size</li>
            </ul>
            <div className='img taskifyImg'></div>
          </div>

        </li>
        <li>
          <Link className="homelink" to="/pdf" target="_blank" rel="noopener noreferrer">Project 2 - PDFGenerator</Link>
          <div className="details">
            <ul>
              <li>This project is a PDF file generator. Given a specific format of data, it generates a pdf file automatically </li>
              <li>Data format definition is important </li>
              <li>Third-party libraries: its layout is implemented with '@react-pdf/renderer'. And the QR code is generated with 'qrcode'</li>
            </ul>
            <div className='img pdfImg'></div>
          </div>

        </li>
      </ul>
    </div>

  )
};

export default Home;