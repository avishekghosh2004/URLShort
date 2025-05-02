function Navbar() {
    return (
      <nav className="w-full bg-neutral-950 border-b border-neutral-800 py-4">
        <div className="container mx-auto px-4 flex items-center">
          <div className="ml-4">
            <a 
              href="/" 
              className="text-2xl font-mono hover:opacity-80 transition-opacity inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 font-bold tracking-tighter">
                ./
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;