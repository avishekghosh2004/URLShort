import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 py-3">
      <div className="container mx-auto px-4 flex items-center justify-center text-sm">
        <p className="text-neutral-500">
          <span className="absolute left-4  text-neutral-500 text-sm">
            All rights reserved.
          </span>
          Built with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            URLShort
          </span>{" "}
          © {new Date().getFullYear()}
          <span className="absolute right-4  text-neutral-500 text-sm">
            Made by Avishek Ghosh
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
