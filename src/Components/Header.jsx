// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="bg-pink-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                <h1 className="text-2xl font-bold mb-4">FEEDBACK MANAGEMENT SYSTEM</h1>
                    <p className="text-sm">Empowering educators to provide constructive feedback for student growth.</p>
                </div>
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
                    {/* //<!-- Logo (simple school-themed SVG icon) --> */}
                    <path d="M10 8H54C55.1 8 56 8.9 56 10V54C56 55.1 55.1 56 54 56H10C8.9 56 8 55.1 8 54V10C8 8.9 8.9 8 10 8Z"/>
                    <path d="M12 12V52H52V12H12Z" fill="white"/>
                    <path d="M32 8L4 20L32 32L60 20L32 8Z" fill="black"/>
                    <path d="M28 34V50H36V34L32 36L28 34Z" fill="black"/>
                </svg>
            </div>
        </header>
    );
}

export default Header;
