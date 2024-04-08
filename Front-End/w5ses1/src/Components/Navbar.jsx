


import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="sticky top-0 w-full h-20 shadow-md z-[100] bg-white">
        <div className="flex justify-between items-center overflow-hidden w-full h-full px-4 2xl:px-16 py-10">
          <Link to="/">
            <svg
              className="sm:w-auto w-auto sm:h-20 h-20"
              viewBox="0 0 1200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                 <rect width="1200" height="80" fill="white" />
              <path
                d="M76 9L93.3205 32.25H58.6795L76 9Z"
                fill="#2F3D5D"
              />
              <path
                d="M60 9L77.3205 32.25H42.6795L60 9Z"
                fill="#6268F5"
              />
              <path
                d="M48.37 43.556C49.078 43.688 49.66 44.042 50.116 44.618C50.572 45.194 50.8 45.854 50.8 46.598C50.8 47.27 50.632 47.864 50.296 48.38C49.972 48.884 49.498 49.28 48.874 49.568C48.25 49.856 47.512 50 46.66 50H41.242V37.436H46.426C47.278 37.436 48.01 37.574 48.622 37.85C49.246 38.126 49.714 38.51 50.026 39.002C50.35 39.494 50.512 40.052 50.512 40.676C50.512 41.408 50.314 42.02 49.918 42.512C49.534 43.004 49.018 43.352 48.37 43.556ZM43.762 42.62H46.066C46.666 42.62 47.128 42.488 47.452 42.224C47.776 41.948 47.938 41.558 47.938 41.054C47.938 40.55 47.776 40.16 47.452 39.884C47.128 39.608 46.666 39.47 46.066 39.47H43.762V42.62ZM46.3 47.948C46.912 47.948 47.386 47.804 47.722 47.516C48.07 47.228 48.244 46.82 48.244 46.292C48.244 45.752 48.064 45.332 47.704 45.032C47.344 44.72 46.858 44.564 46.246 44.564H43.762V47.948H46.3ZM54.2664 36.68V50H53.0064V36.68H54.2664ZM61.4217 50.144C60.4977 50.144 59.6637 49.94 58.9197 49.532C58.1877 49.112 57.6057 48.524 57.1737 47.768C56.7537 47 56.5437 46.106 56.5437 45.086C56.5437 44.066 56.7597 43.178 57.1917 42.422C57.6237 41.654 58.2117 41.066 58.9557 40.658C59.6997 40.238 60.5337 40.028 61.4577 40.028C62.3817 40.028 63.2157 40.238 63.9597 40.658C64.7157 41.066 65.3037 41.654 65.7237 42.422C66.1557 43.178 66.3717 44.066 66.3717 45.086C66.3717 46.094 66.1557 46.982 65.7237 47.75C65.2917 48.518 64.6977 49.112 63.9417 49.532C63.1857 49.94 62.3457 50.144 61.4217 50.144ZM61.4217 49.046C62.0697 49.046 62.6697 48.902 63.2217 48.614C63.7737 48.314 64.2177 47.87 64.5537 47.282C64.9017 46.682 65.0757 45.95 65.0757 45.086C65.0757 44.222 64.9077 43.496 64.5717 42.908C64.2357 42.308 63.7917 41.864 63.2397 41.576C62.6877 41.276 62.0877 41.126 61.4397 41.126C60.7917 41.126 60.1917 41.276 59.6397 41.576C59.0877 41.864 58.6437 42.308 58.3077 42.908C57.9837 43.496 57.8217 44.222 57.8217 45.086C57.8217 45.95 57.9837 46.682 58.3077 47.282C58.6437 47.87 59.0817 48.314 59.6217 48.614C60.1737 48.902 60.7737 49.046 61.4217 49.046ZM72.7905 40.028C73.7145 40.028 74.5185 40.244 75.2025 40.676C75.8865 41.108 76.3785 41.654 76.6785 42.314V40.172H77.9385V50.252C77.9385 51.152 77.7405 51.95 77.3445 52.646C76.9605 53.342 76.4205 53.876 75.7245 54.248C75.0285 54.632 74.2365 54.824 73.3485 54.824C72.0885 54.824 71.0385 54.524 70.1985 53.924C69.3705 53.324 68.8545 52.508 68.6505 51.476H69.8925C70.1085 52.16 70.5165 52.706 71.1165 53.114C71.7285 53.522 72.4725 53.726 73.3485 53.726C73.9845 53.726 74.5545 53.588 75.0585 53.312C75.5625 53.048 75.9585 52.652 76.2465 52.124C76.5345 51.596 76.6785 50.972 76.6785 50.252V47.822C76.3665 48.494 75.8685 49.052 75.1845 49.496C74.5125 49.928 73.7145 50.144 72.7905 50.144C71.8905 50.144 71.0805 49.934 70.3605 49.514C69.6525 49.094 69.0945 48.5 68.6865 47.732C68.2905 46.964 68.0925 46.076 68.0925 45.068C68.0925 44.06 68.2905 43.178 68.6865 42.422C69.0945 41.654 69.6525 41.066 70.3605 40.658C71.0805 40.238 71.8905 40.028 72.7905 40.028ZM76.6785 45.086C76.6785 44.294 76.5165 43.598 76.1925 42.998C75.8685 42.398 75.4245 41.936 74.8605 41.612C74.3085 41.288 73.6965 41.126 73.0245 41.126C72.3285 41.126 71.7045 41.282 71.1525 41.594C70.6005 41.906 70.1625 42.362 69.8385 42.962C69.5265 43.55 69.3705 44.252 69.3705 45.068C69.3705 45.872 69.5265 46.58 69.8385 47.192C70.1625 47.792 70.6005 48.254 71.1525 48.578C71.7045 48.89 72.3285 49.046 73.0245 49.046C73.6965 49.046 74.3085 48.884 74.8605 48.56C75.4245 48.236 75.8685 47.774 76.1925 47.174C76.5165 46.574 76.6785 45.878 76.6785 45.086ZM84.541 37.418C85.933 37.418 87.127 37.67 88.123 38.174C89.119 38.678 89.881 39.404 90.409 40.352C90.937 41.3 91.201 42.428 91.201 43.736C91.201 45.032 90.937 46.154 90.409 47.102C89.881 48.038 89.119 48.758 88.123 49.262C87.127 49.754 85.933 50 84.541 50H80.815V37.418H84.541ZM84.541 48.956C86.293 48.956 87.625 48.5 88.537 47.588C89.461 46.664 89.923 45.38 89.923 43.736C89.923 42.08 89.461 40.79 88.537 39.866C87.625 38.93 86.293 38.462 84.541 38.462H82.075V48.956H84.541ZM102.416 44.582C102.416 45.014 102.404 45.344 102.38 45.572H94.226C94.262 46.316 94.442 46.952 94.766 47.48C95.09 48.008 95.516 48.41 96.044 48.686C96.572 48.95 97.148 49.082 97.772 49.082C98.588 49.082 99.272 48.884 99.824 48.488C100.388 48.092 100.76 47.558 100.94 46.886H102.272C102.032 47.846 101.516 48.632 100.724 49.244C99.944 49.844 98.96 50.144 97.772 50.144C96.848 50.144 96.02 49.94 95.288 49.532C94.556 49.112 93.98 48.524 93.56 47.768C93.152 47 92.948 46.106 92.948 45.086C92.948 44.066 93.152 43.172 93.56 42.404C93.968 41.636 94.538 41.048 95.27 40.64C96.002 40.232 96.836 40.028 97.772 40.028C98.708 40.028 99.524 40.232 100.22 40.64C100.928 41.048 101.468 41.6 101.84 42.296C102.224 42.98 102.416 43.742 102.416 44.582ZM101.138 44.546C101.15 43.814 101 43.19 100.688 42.674C100.388 42.158 99.974 41.768 99.446 41.504C98.918 41.24 98.342 41.108 97.718 41.108C96.782 41.108 95.984 41.408 95.324 42.008C94.664 42.608 94.298 43.454 94.226 44.546H101.138ZM108.213 48.776L111.525 40.172H112.857L108.915 50H107.493L103.551 40.172H104.901L108.213 48.776Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className="hidden md:flex items-center">
            <ul className="uppercase flex">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <Link to={"/articles"}>Articles</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-black/70 z-[101] ${
          nav ? "" : "hidden"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-[50%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 ${
            nav ? "" : "left-[-100%]"
          }`}
        >
          <div className="left-0 overflow-hidden">
            <Link to="/">
            <svg
                className="sm:h-20 h-20"
                viewBox="0 0 1200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                   <rect width="1200" height="80" fill="white" />
              <path
                d="M76 9L93.3205 32.25H58.6795L76 9Z"
                fill="#2F3D5D"
              />
              <path
                d="M60 9L77.3205 32.25H42.6795L60 9Z"
                fill="#6268F5"
              />
              <path
                d="M48.37 43.556C49.078 43.688 49.66 44.042 50.116 44.618C50.572 45.194 50.8 45.854 50.8 46.598C50.8 47.27 50.632 47.864 50.296 48.38C49.972 48.884 49.498 49.28 48.874 49.568C48.25 49.856 47.512 50 46.66 50H41.242V37.436H46.426C47.278 37.436 48.01 37.574 48.622 37.85C49.246 38.126 49.714 38.51 50.026 39.002C50.35 39.494 50.512 40.052 50.512 40.676C50.512 41.408 50.314 42.02 49.918 42.512C49.534 43.004 49.018 43.352 48.37 43.556ZM43.762 42.62H46.066C46.666 42.62 47.128 42.488 47.452 42.224C47.776 41.948 47.938 41.558 47.938 41.054C47.938 40.55 47.776 40.16 47.452 39.884C47.128 39.608 46.666 39.47 46.066 39.47H43.762V42.62ZM46.3 47.948C46.912 47.948 47.386 47.804 47.722 47.516C48.07 47.228 48.244 46.82 48.244 46.292C48.244 45.752 48.064 45.332 47.704 45.032C47.344 44.72 46.858 44.564 46.246 44.564H43.762V47.948H46.3ZM54.2664 36.68V50H53.0064V36.68H54.2664ZM61.4217 50.144C60.4977 50.144 59.6637 49.94 58.9197 49.532C58.1877 49.112 57.6057 48.524 57.1737 47.768C56.7537 47 56.5437 46.106 56.5437 45.086C56.5437 44.066 56.7597 43.178 57.1917 42.422C57.6237 41.654 58.2117 41.066 58.9557 40.658C59.6997 40.238 60.5337 40.028 61.4577 40.028C62.3817 40.028 63.2157 40.238 63.9597 40.658C64.7157 41.066 65.3037 41.654 65.7237 42.422C66.1557 43.178 66.3717 44.066 66.3717 45.086C66.3717 46.094 66.1557 46.982 65.7237 47.75C65.2917 48.518 64.6977 49.112 63.9417 49.532C63.1857 49.94 62.3457 50.144 61.4217 50.144ZM61.4217 49.046C62.0697 49.046 62.6697 48.902 63.2217 48.614C63.7737 48.314 64.2177 47.87 64.5537 47.282C64.9017 46.682 65.0757 45.95 65.0757 45.086C65.0757 44.222 64.9077 43.496 64.5717 42.908C64.2357 42.308 63.7917 41.864 63.2397 41.576C62.6877 41.276 62.0877 41.126 61.4397 41.126C60.7917 41.126 60.1917 41.276 59.6397 41.576C59.0877 41.864 58.6437 42.308 58.3077 42.908C57.9837 43.496 57.8217 44.222 57.8217 45.086C57.8217 45.95 57.9837 46.682 58.3077 47.282C58.6437 47.87 59.0817 48.314 59.6217 48.614C60.1737 48.902 60.7737 49.046 61.4217 49.046ZM72.7905 40.028C73.7145 40.028 74.5185 40.244 75.2025 40.676C75.8865 41.108 76.3785 41.654 76.6785 42.314V40.172H77.9385V50.252C77.9385 51.152 77.7405 51.95 77.3445 52.646C76.9605 53.342 76.4205 53.876 75.7245 54.248C75.0285 54.632 74.2365 54.824 73.3485 54.824C72.0885 54.824 71.0385 54.524 70.1985 53.924C69.3705 53.324 68.8545 52.508 68.6505 51.476H69.8925C70.1085 52.16 70.5165 52.706 71.1165 53.114C71.7285 53.522 72.4725 53.726 73.3485 53.726C73.9845 53.726 74.5545 53.588 75.0585 53.312C75.5625 53.048 75.9585 52.652 76.2465 52.124C76.5345 51.596 76.6785 50.972 76.6785 50.252V47.822C76.3665 48.494 75.8685 49.052 75.1845 49.496C74.5125 49.928 73.7145 50.144 72.7905 50.144C71.8905 50.144 71.0805 49.934 70.3605 49.514C69.6525 49.094 69.0945 48.5 68.6865 47.732C68.2905 46.964 68.0925 46.076 68.0925 45.068C68.0925 44.06 68.2905 43.178 68.6865 42.422C69.0945 41.654 69.6525 41.066 70.3605 40.658C71.0805 40.238 71.8905 40.028 72.7905 40.028ZM76.6785 45.086C76.6785 44.294 76.5165 43.598 76.1925 42.998C75.8685 42.398 75.4245 41.936 74.8605 41.612C74.3085 41.288 73.6965 41.126 73.0245 41.126C72.3285 41.126 71.7045 41.282 71.1525 41.594C70.6005 41.906 70.1625 42.362 69.8385 42.962C69.5265 43.55 69.3705 44.252 69.3705 45.068C69.3705 45.872 69.5265 46.58 69.8385 47.192C70.1625 47.792 70.6005 48.254 71.1525 48.578C71.7045 48.89 72.3285 49.046 73.0245 49.046C73.6965 49.046 74.3085 48.884 74.8605 48.56C75.4245 48.236 75.8685 47.774 76.1925 47.174C76.5165 46.574 76.6785 45.878 76.6785 45.086ZM84.541 37.418C85.933 37.418 87.127 37.67 88.123 38.174C89.119 38.678 89.881 39.404 90.409 40.352C90.937 41.3 91.201 42.428 91.201 43.736C91.201 45.032 90.937 46.154 90.409 47.102C89.881 48.038 89.119 48.758 88.123 49.262C87.127 49.754 85.933 50 84.541 50H80.815V37.418H84.541ZM84.541 48.956C86.293 48.956 87.625 48.5 88.537 47.588C89.461 46.664 89.923 45.38 89.923 43.736C89.923 42.08 89.461 40.79 88.537 39.866C87.625 38.93 86.293 38.462 84.541 38.462H82.075V48.956H84.541ZM102.416 44.582C102.416 45.014 102.404 45.344 102.38 45.572H94.226C94.262 46.316 94.442 46.952 94.766 47.48C95.09 48.008 95.516 48.41 96.044 48.686C96.572 48.95 97.148 49.082 97.772 49.082C98.588 49.082 99.272 48.884 99.824 48.488C100.388 48.092 100.76 47.558 100.94 46.886H102.272C102.032 47.846 101.516 48.632 100.724 49.244C99.944 49.844 98.96 50.144 97.772 50.144C96.848 50.144 96.02 49.94 95.288 49.532C94.556 49.112 93.98 48.524 93.56 47.768C93.152 47 92.948 46.106 92.948 45.086C92.948 44.066 93.152 43.172 93.56 42.404C93.968 41.636 94.538 41.048 95.27 40.64C96.002 40.232 96.836 40.028 97.772 40.028C98.708 40.028 99.524 40.232 100.22 40.64C100.928 41.048 101.468 41.6 101.84 42.296C102.224 42.98 102.416 43.742 102.416 44.582ZM101.138 44.546C101.15 43.814 101 43.19 100.688 42.674C100.388 42.158 99.974 41.768 99.446 41.504C98.918 41.24 98.342 41.108 97.718 41.108C96.782 41.108 95.984 41.408 95.324 42.008C94.664 42.608 94.298 43.454 94.226 44.546H101.138ZM108.213 48.776L111.525 40.172H112.857L108.915 50H107.493L103.551 40.172H104.901L108.213 48.776Z"
                fill="black"
              />
              </svg>
            </Link> 
            {/* <div
              onClick={handleNav}
              className="ml-auto flex-shrink-0 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div> */}
          </div>
          <div className="py-4 pl-10">
            <ul className="uppercase">
              <li className="py-4">
                <Link to="/">Home</Link>
              </li>
              <li className="py-4">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="py-4">
                <Link to={"/articles"}>Articles</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden fixed top-4 right-4 z-[102]">
        <div onClick={handleNav} className="p-2 rounded-full bg-white shadow-lg cursor-pointer">
          {nav ? <AiOutlineClose size="24" /> : <AiOutlineMenu size="24" />}
        </div>
      </div>
    </>
  );
}


