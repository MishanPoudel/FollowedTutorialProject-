import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">Welcome to TextUtils</h1>
          <p className="py-10 text-left">
            <strong>TextUtils</strong> is more than just a utility; it's your
            go-to tool for shaping and transforming text according to your
            needs. Whether you're looking to convert case, remove extra spaces,
            capitalize sentences, or even reverse the entire string, TextUtils
            has you covered. Our mission is to provide you with a seamless and
            intuitive experience when it comes to handling text. With a clean
            and user-friendly interface, TextUtils empowers you to effortlessly
            analyze and modify text to suit your preferences.
            <p className="text-2xl font-bold my-4">Key Features:</p>
            <strong>Case Conversion:</strong> Convert text to uppercase or
            lowercase with a single click.
            <br />
            <strong>Sentence Capitalization:</strong> Easily capitalize the
            first letter of each sentence.
            <br />
            <strong>Space Removal:</strong> Say goodbye to extra spaces and
            ensure clean, well-formatted text.
            <br />
            <strong>String Reversal:</strong> Reverse your text to add a
            creative twist.
            <br />
            <br />
            Explore the power of TextUtils and elevate your text-editing
            experience. It's not just about text; it's about your words, your
            way.
          </p>
          <Link className="btn btn-primary" to="/">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
