// src/components/TeacherList.js
import React, { useState } from 'react';

function TeacherList({ teachers, addTeacher, addStudent }) {
    const [teacherName, setTeacherName] = useState("");
    const [studentName, setStudentName] = useState("");

    const handleAddTeacher = () => {
        addTeacher(teacherName);
        setTeacherName("");
    };

    const handleAddStudent = (teacher) => {
        addStudent(teacher.name, { name: studentName });
        setStudentName("");
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Teachers</h2>
            <div className="flex mb-2">
                <input
                    type="text"
                    placeholder="Teacher Name"
                    className="border rounded p-2 mr-2"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                />
                <button onClick={handleAddTeacher} className="bg-blue-800 text-white px-4 py-2 rounded">
                    Add Teacher
                </button>
            </div>
            {teachers.map((teacher, index) => (
                <div key={index} className="mb-4 border-b pb-2">
                    <h3 className="text-lg font-semibold">{teacher.name}</h3>
                    <div className="flex mb-2">
                        <input
                            type="text"
                            placeholder="Student Name"
                            className="border rounded p-2 mr-2"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                        />
                        <button onClick={() => handleAddStudent(teacher)} className="bg-green-500 text-white px-4 py-2 rounded">
                            Add Student
                        </button>
                    </div>
                    <ul className="list-disc pl-5">
                        {teacher.students.map((student, idx) => (
                            <li key={idx}>{student.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TeacherList;
