import React from 'react'
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
    AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="mt-auto text-center">
            <div className="text-lg italic">
                Designed by{" "}
                <a
                    className="font-semibold hover:underline not-italic text-xl"
                    href="https://github.com/mucahittasan"
                    target="_blank"
                    rel="noreferrer"
                >
                    Mucahit Tasan
                </a>
            </div>
            <div className="flex justify-center">
                <a
                    className="text-3xl p-3 hover:text-gray-500 transition-colors"
                    href="https://linkedin.com/in/mucahittasan"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillLinkedin />
                </a>
                <a
                    className="text-3xl p-3 hover:text-gray-500 transition-colors"
                    href="https://github.com/mucahittasan"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub />
                </a>
                <a
                    className="text-3xl p-3 hover:text-gray-500 transition-colors"
                    href="https://twitter.com/MurattTasan"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillTwitterCircle />
                </a>
                <a
                    className="text-3xl p-3 hover:text-gray-500 transition-colors"
                    href="https://instagram.com/tasanmucahit"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineInstagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer