import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    // <nav className="nav-container">
    //   <Image src="/logo.png" alt="Vercel Logo" width={80} height={40} />
    //   <div style={{ textAlign: "center" }}>
    // <Link href="#">
    //   <a>Test</a>
    // </Link>
    // <Link href="#">
    //   <a>Test</a>
    // </Link>
    // <Link href="#">
    //   <a>Test</a>
    // </Link>
    //   </div>
    // </nav>
    <div class="container-fluid">
      <div class="row justify-content-center" style={{ height: "50px" }}>
        <div className="col-4 mx-auto my-auto" style={{ width: "auto" }}>
          <Image src="/logo.png" alt="Vercel Logo" width={80} height={40} />
        </div>
        <div className="col-4 text-center align-items-center justify-content-center">
          <div>
            <Link href="#">
              <a>Test</a>
            </Link>
            <Link href="#">
              <a>Test</a>
            </Link>
            <Link href="#">
              <a>Test</a>
            </Link>
          </div>
        </div>
        <div
          className="col-4 mx-auto my-auto"
          style={{ width: "auto", height: "auto" }}
        >
          <button>test</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
