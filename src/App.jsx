// src/App.js
import React, { useState } from 'react';
import TeacherList from './Components/TeacherList';
import FeedbackForm from './Components/FeedbackForm';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
    const [teachers, setTeachers] = useState([]);
    
    const addTeacher = (name) => {
        setTeachers([...teachers, { name, students: [] }]);
    };

    const addStudent = (teacherName, student) => {
        setTeachers(teachers.map(teacher => 
            teacher.name === teacherName
            ? { ...teacher, students: [...teacher.students, student] }
            : teacher
        ));
    };

    const addFeedback = (teacherName, studentName, feedback) => {
        setTeachers(teachers.map(teacher => 
            teacher.name === teacherName
            ? { ...teacher, students: teacher.students.map(student =>
                student.name === studentName ? { ...student, feedback } : student
            )}
            : teacher
        ));
    };

    return (
        <div className="container mx-auto p-4 bg-blue-400">
          <Header/>
           
            <TeacherList teachers={teachers} addTeacher={addTeacher} addStudent={addStudent} />
            <FeedbackForm teachers={teachers} addFeedback={addFeedback} />
            <Footer/>
        </div>
    );
}

export default App;
