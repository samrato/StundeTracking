// src/components/FeedbackForm.js
import React, { useState } from 'react';

function FeedbackForm({ teachers, addFeedback }) {
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleFeedbackSubmit = () => {
        addFeedback(selectedTeacher, selectedStudent, feedback);
        setFeedback("");
    };

    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Submit Feedback</h2>
            <div className="mb-2">
                <select
                    className="border p-2 rounded w-full"
                    value={selectedTeacher}
                    onChange={(e) => setSelectedTeacher(e.target.value)}
                >
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher, index) => (
                        <option key={index} value={teacher.name}>{teacher.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <select
                    className="border p-2 rounded w-full"
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    disabled={!selectedTeacher}
                >
                    <option value="">Select Student</option>
                    {selectedTeacher && teachers.find(t => t.name === selectedTeacher)?.students.map((student, index) => (
                        <option key={index} value={student.name}>{student.name}</option>
                    ))}
                </select>
            </div>
            <textarea
                className="border p-2 rounded w-full mb-2"
                placeholder="Enter feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            />
            <button onClick={handleFeedbackSubmit} className="bg-blue-800 text-white px-4 py-2 rounded">
                Submit Feedback
            </button>
        </div>
    );
}

export default FeedbackForm;
