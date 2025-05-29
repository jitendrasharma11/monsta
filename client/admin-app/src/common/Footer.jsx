import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <a href="https://flowbite.com/" className="hover:underline">WsCube Tech™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap font-medium items-center">
            <li>
              <a href="#">
                <span className="text-blue-500">WsCube Tech</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}