import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../components/dashboard/modals/LogoutModal";

export default function Sidebar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showLogoutModal, setLogoutModal] = useState(false);
  const { pathname } = useLocation();

  const handleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  const toggleLogoutModal = () => {
    setLogoutModal((prev) => !prev);
  };

  return (
    <>
      <aside className="hidden min-[840px]:flex fixed top-0 left-0 flex-col justify-between items-center bg-[#272C49] h-screen px-[14px] py-[40px] max-w-[80px]">
        <Link to="/">
          <img
            src="../assets/icons/only-baby-logo.png"
            alt="Only Baby Care Logo"
            className="w-[50px] aspect-square object-contain"
          ></img>
        </Link>
        <nav>
          <ul className="flex flex-col justify-center items-center gap-y-[46px]">
            <li>
              <Link to="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <g clipPath="url(#clip0_195_864)">
                    <path
                      d="M0 15.9165C0 11.9383 1.58035 8.12295 4.3934 5.3099C7.20644 2.49686 11.0218 0.916504 15 0.916504C18.9782 0.916504 22.7936 2.49686 25.6066 5.3099C28.4196 8.12295 30 11.9383 30 15.9165C30 19.8948 28.4196 23.7101 25.6066 26.5231C22.7936 29.3362 18.9782 30.9165 15 30.9165C11.0218 30.9165 7.20644 29.3362 4.3934 26.5231C1.58035 23.7101 0 19.8948 0 15.9165ZM16.875 6.5415C16.875 6.04422 16.6775 5.56731 16.3258 5.21568C15.9742 4.86405 15.4973 4.6665 15 4.6665C14.5027 4.6665 14.0258 4.86405 13.6742 5.21568C13.3225 5.56731 13.125 6.04422 13.125 6.5415C13.125 7.03878 13.3225 7.5157 13.6742 7.86733C14.0258 8.21896 14.5027 8.4165 15 8.4165C15.4973 8.4165 15.9742 8.21896 16.3258 7.86733C16.6775 7.5157 16.875 7.03878 16.875 6.5415ZM15 25.2915C17.0684 25.2915 18.75 23.6099 18.75 21.5415C18.75 20.522 18.3457 19.6021 17.6895 18.9282L21.4453 10.3911C21.7559 9.68213 21.4336 8.8501 20.7246 8.53955C20.0156 8.229 19.1836 8.55127 18.873 9.26025L15.1113 17.7915C15.0762 17.7915 15.0352 17.7915 15 17.7915C12.9316 17.7915 11.25 19.4731 11.25 21.5415C11.25 23.6099 12.9316 25.2915 15 25.2915ZM10.3125 9.354C10.3125 8.85672 10.115 8.37981 9.76332 8.02818C9.41169 7.67655 8.93478 7.479 8.4375 7.479C7.94022 7.479 7.46331 7.67655 7.11167 8.02818C6.76004 8.37981 6.5625 8.85672 6.5625 9.354C6.5625 9.85128 6.76004 10.3282 7.11167 10.6798C7.46331 11.0315 7.94022 11.229 8.4375 11.229C8.93478 11.229 9.41169 11.0315 9.76332 10.6798C10.115 10.3282 10.3125 9.85128 10.3125 9.354ZM5.625 17.7915C6.12228 17.7915 6.59919 17.594 6.95083 17.2423C7.30246 16.8907 7.5 16.4138 7.5 15.9165C7.5 15.4192 7.30246 14.9423 6.95083 14.5907C6.59919 14.239 6.12228 14.0415 5.625 14.0415C5.12772 14.0415 4.65081 14.239 4.29917 14.5907C3.94754 14.9423 3.75 15.4192 3.75 15.9165C3.75 16.4138 3.94754 16.8907 4.29917 17.2423C4.65081 17.594 5.12772 17.7915 5.625 17.7915ZM26.25 15.9165C26.25 15.4192 26.0525 14.9423 25.7008 14.5907C25.3492 14.239 24.8723 14.0415 24.375 14.0415C23.8777 14.0415 23.4008 14.239 23.0492 14.5907C22.6975 14.9423 22.5 15.4192 22.5 15.9165C22.5 16.4138 22.6975 16.8907 23.0492 17.2423C23.4008 17.594 23.8777 17.7915 24.375 17.7915C24.8723 17.7915 25.3492 17.594 25.7008 17.2423C26.0525 16.8907 26.25 16.4138 26.25 15.9165Z"
                      fill={`${pathname == "/dashboard" ? "#F8D16D" : "white"}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_864">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.916504)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/baby-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <g clipPath="url(#clip0_195_866)">
                    <path
                      d="M15 12.1664H0.00585938C0.158203 7.82461 2.41992 4.01602 5.80078 1.74258C6.58008 1.2211 7.60547 1.49063 8.13867 2.25821L15 12.1664ZM22.5 10.2914C22.5 8.22305 24.1816 6.54141 26.25 6.54141H28.125C29.1621 6.54141 30 7.3793 30 8.41641C30 9.45352 29.1621 10.2914 28.125 10.2914H26.25V14.0414C26.25 15.518 25.9102 16.9828 25.2539 18.348C24.5977 19.7133 23.625 20.9555 22.4062 21.9984C21.1875 23.0414 19.7402 23.8734 18.1465 24.4359C16.5527 24.9984 14.8477 25.2914 13.125 25.2914C11.4023 25.2914 9.69727 24.9984 8.10352 24.4359C6.50977 23.8734 5.0625 23.0414 3.84375 21.9984C2.625 20.9555 1.6582 19.7133 0.996094 18.348C0.333984 16.9828 0 15.518 0 14.0414H13.125H22.5V10.2914ZM4.6875 25.2914C5.43342 25.2914 6.14879 25.5877 6.67624 26.1152C7.20368 26.6426 7.5 27.358 7.5 28.1039C7.5 28.8498 7.20368 29.5652 6.67624 30.0926C6.14879 30.6201 5.43342 30.9164 4.6875 30.9164C3.94158 30.9164 3.22621 30.6201 2.69876 30.0926C2.17132 29.5652 1.875 28.8498 1.875 28.1039C1.875 27.358 2.17132 26.6426 2.69876 26.1152C3.22621 25.5877 3.94158 25.2914 4.6875 25.2914ZM18.75 28.1039C18.75 27.358 19.0463 26.6426 19.5738 26.1152C20.1012 25.5877 20.8166 25.2914 21.5625 25.2914C22.3084 25.2914 23.0238 25.5877 23.5512 26.1152C24.0787 26.6426 24.375 27.358 24.375 28.1039C24.375 28.8498 24.0787 29.5652 23.5512 30.0926C23.0238 30.6201 22.3084 30.9164 21.5625 30.9164C20.8166 30.9164 20.1012 30.6201 19.5738 30.0926C19.0463 29.5652 18.75 28.8498 18.75 28.1039Z"
                      fill={`${
                        pathname == "/dashboard/baby-data" ? "#F8D16D" : "white"
                      }`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_866">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.916504)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/baby-chart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="29"
                  viewBox="0 0 26 31"
                  fill="none"
                >
                  <g clipPath="url(#clip0_195_868)">
                    <path
                      d="M9.13095 4.90444C9.13095 3.62281 10.2907 2.58301 11.7202 2.58301H13.4464C14.8759 2.58301 16.0357 3.62281 16.0357 4.90444V21.9282C16.0357 23.2099 14.8759 24.2497 13.4464 24.2497H11.7202C10.2907 24.2497 9.13095 23.2099 9.13095 21.9282V4.90444ZM0.5 14.1902C0.5 12.9085 1.65978 11.8687 3.08929 11.8687H4.81548C6.24498 11.8687 7.40476 12.9085 7.40476 14.1902V21.9282C7.40476 23.2099 6.24498 24.2497 4.81548 24.2497H3.08929C1.65978 24.2497 0.5 23.2099 0.5 21.9282V14.1902ZM20.3512 5.67825H22.0774C23.5069 5.67825 24.6667 6.71805 24.6667 7.99967V21.9282C24.6667 23.2099 23.5069 24.2497 22.0774 24.2497H20.3512C18.9217 24.2497 17.7619 23.2099 17.7619 21.9282V7.99967C17.7619 6.71805 18.9217 5.67825 20.3512 5.67825Z"
                      fill={`${
                        pathname == "/dashboard/baby-chart"
                          ? "#F8D16D"
                          : "white"
                      }`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_868">
                      <rect
                        width="25"
                        height="29.1667"
                        fill="white"
                        transform="translate(0.5 0.916504)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/immunization">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <g clipPath="url(#clip0_195_870)">
                    <path
                      d="M25.8396 0.492923L27.7146 2.36792L29.5896 4.24292C30.1404 4.7937 30.1404 5.68433 29.5896 6.22925C29.0388 6.77417 28.1482 6.78003 27.6033 6.22925L26.7244 5.35035L24.4861 7.58277L27.7087 10.8054C28.2595 11.3562 28.2595 12.2468 27.7087 12.7918C27.158 13.3367 26.2673 13.3425 25.7224 12.7918L21.5037 8.573L17.2849 4.36011C16.7341 3.80933 16.7341 2.9187 17.2849 2.37378C17.8357 1.82886 18.7263 1.823 19.2712 2.37378L22.4939 5.59644L24.7322 3.36402L23.8474 2.48511C23.2966 1.93433 23.2966 1.0437 23.8474 0.498782C24.3982 -0.0461397 25.2888 -0.051999 25.8337 0.498782L25.8396 0.492923ZM12.322 9.20581L15.9021 5.62574C15.9197 5.64331 15.9373 5.66675 15.9607 5.68433L16.8982 6.62183L20.1794 9.90308L23.4607 13.1843L24.3982 14.1218C24.4158 14.1394 24.4334 14.157 24.4568 14.1804L13.2654 25.3718C12.6501 25.9871 11.8181 26.3328 10.9451 26.3328H5.73609L2.4021 29.6726C1.85132 30.2234 0.960696 30.2234 0.415774 29.6726C-0.129147 29.1218 -0.135007 28.2312 0.415774 27.6863L3.75562 24.3464V19.1433C3.75562 18.2703 4.10132 17.4382 4.71656 16.823L7.25367 14.2859L10.5935 17.6257C10.9568 17.989 11.5544 17.989 11.9177 17.6257C12.281 17.2625 12.281 16.6648 11.9177 16.3015L8.57788 12.9617L11.0037 10.5359L14.3435 13.8757C14.7068 14.239 15.3044 14.239 15.6677 13.8757C16.031 13.5125 16.031 12.9148 15.6677 12.5515L12.3279 9.21167L12.322 9.20581Z"
                      fill={`${
                        pathname == "/dashboard/immunization"
                          ? "#F8D16D"
                          : "white"
                      }`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_870">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.0830078)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="26"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z"
                    fill={`${
                      pathname == "/dashboard/profile" ? "#F8D16D" : "white"
                    }`}
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleLogoutModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M22.1426 6.20508L29.3379 13.4004C29.7598 13.8223 30 14.4023 30 15C30 15.5977 29.7598 16.1777 29.3379 16.5996L22.1426 23.7949C21.7676 24.1699 21.2637 24.375 20.7363 24.375C19.6406 24.375 18.75 23.4844 18.75 22.3887V18.75H11.25C10.2129 18.75 9.375 17.9121 9.375 16.875V13.125C9.375 12.0879 10.2129 11.25 11.25 11.25H18.75V7.61133C18.75 6.51562 19.6406 5.625 20.7363 5.625C21.2637 5.625 21.7676 5.83594 22.1426 6.20508ZM9.375 5.625H5.625C4.58789 5.625 3.75 6.46289 3.75 7.5V22.5C3.75 23.5371 4.58789 24.375 5.625 24.375H9.375C10.4121 24.375 11.25 25.2129 11.25 26.25C11.25 27.2871 10.4121 28.125 9.375 28.125H5.625C2.51953 28.125 0 25.6055 0 22.5V7.5C0 4.39453 2.51953 1.875 5.625 1.875H9.375C10.4121 1.875 11.25 2.71289 11.25 3.75C11.25 4.78711 10.4121 5.625 9.375 5.625Z"
              fill="white"
            />
          </svg>
        </button>
      </aside>

      <div className="flex min-[840px]:hidden w-full fixed top-0 left-0 justify-between items-center bg-[#272C49] px-[20px] sm:px-[35px] py-3 z-30">
        <button onClick={handleMobileNav}>
          <svg
            className="fill-white text-[26px] cursor-pointer ml-1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <Link to="/">
          <img
            src="../assets/icons/only-baby-logo.png"
            alt="Only Baby Care Logo"
            className="w-[36px] aspect-square object-contain"
          ></img>
        </Link>

        <div
          className={`${
            showMobileNav ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed top-0 left-0 w-full h-screen bg-black/60 duration-500 z-[999]`}
        >
          <div
            className={`${
              showMobileNav ? "translate-x-0" : "translate-x-[-100%]"
            } relative bg-[#272C49] w-full max-w-[280px] h-screen flex flex-col duration-300`}
          >
            <div className="w-full bg-[#1e2238] py-[15px] px-5">
              <svg
                onClick={handleMobileNav}
                className="fill-white text-[30px] cursor-pointer ml-auto"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>

            <nav className="w-full">
              <ul className="flex flex-col justify-between items-center">
                <li className="w-full">
                  <Link to="/dashboard">
                    <div className="w-full flex justify-start items-center gap-x-4 px-5 py-5 border-b border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="24"
                        viewBox="0 0 30 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_195_864)">
                          <path
                            d="M0 15.9165C0 11.9383 1.58035 8.12295 4.3934 5.3099C7.20644 2.49686 11.0218 0.916504 15 0.916504C18.9782 0.916504 22.7936 2.49686 25.6066 5.3099C28.4196 8.12295 30 11.9383 30 15.9165C30 19.8948 28.4196 23.7101 25.6066 26.5231C22.7936 29.3362 18.9782 30.9165 15 30.9165C11.0218 30.9165 7.20644 29.3362 4.3934 26.5231C1.58035 23.7101 0 19.8948 0 15.9165ZM16.875 6.5415C16.875 6.04422 16.6775 5.56731 16.3258 5.21568C15.9742 4.86405 15.4973 4.6665 15 4.6665C14.5027 4.6665 14.0258 4.86405 13.6742 5.21568C13.3225 5.56731 13.125 6.04422 13.125 6.5415C13.125 7.03878 13.3225 7.5157 13.6742 7.86733C14.0258 8.21896 14.5027 8.4165 15 8.4165C15.4973 8.4165 15.9742 8.21896 16.3258 7.86733C16.6775 7.5157 16.875 7.03878 16.875 6.5415ZM15 25.2915C17.0684 25.2915 18.75 23.6099 18.75 21.5415C18.75 20.522 18.3457 19.6021 17.6895 18.9282L21.4453 10.3911C21.7559 9.68213 21.4336 8.8501 20.7246 8.53955C20.0156 8.229 19.1836 8.55127 18.873 9.26025L15.1113 17.7915C15.0762 17.7915 15.0352 17.7915 15 17.7915C12.9316 17.7915 11.25 19.4731 11.25 21.5415C11.25 23.6099 12.9316 25.2915 15 25.2915ZM10.3125 9.354C10.3125 8.85672 10.115 8.37981 9.76332 8.02818C9.41169 7.67655 8.93478 7.479 8.4375 7.479C7.94022 7.479 7.46331 7.67655 7.11167 8.02818C6.76004 8.37981 6.5625 8.85672 6.5625 9.354C6.5625 9.85128 6.76004 10.3282 7.11167 10.6798C7.46331 11.0315 7.94022 11.229 8.4375 11.229C8.93478 11.229 9.41169 11.0315 9.76332 10.6798C10.115 10.3282 10.3125 9.85128 10.3125 9.354ZM5.625 17.7915C6.12228 17.7915 6.59919 17.594 6.95083 17.2423C7.30246 16.8907 7.5 16.4138 7.5 15.9165C7.5 15.4192 7.30246 14.9423 6.95083 14.5907C6.59919 14.239 6.12228 14.0415 5.625 14.0415C5.12772 14.0415 4.65081 14.239 4.29917 14.5907C3.94754 14.9423 3.75 15.4192 3.75 15.9165C3.75 16.4138 3.94754 16.8907 4.29917 17.2423C4.65081 17.594 5.12772 17.7915 5.625 17.7915ZM26.25 15.9165C26.25 15.4192 26.0525 14.9423 25.7008 14.5907C25.3492 14.239 24.8723 14.0415 24.375 14.0415C23.8777 14.0415 23.4008 14.239 23.0492 14.5907C22.6975 14.9423 22.5 15.4192 22.5 15.9165C22.5 16.4138 22.6975 16.8907 23.0492 17.2423C23.4008 17.594 23.8777 17.7915 24.375 17.7915C24.8723 17.7915 25.3492 17.594 25.7008 17.2423C26.0525 16.8907 26.25 16.4138 26.25 15.9165Z"
                            fill={`${
                              pathname == "/dashboard" ? "#F8D16D" : "white"
                            }`}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_195_864">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0 0.916504)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white text-[17px]">Dashboard</span>
                    </div>
                  </Link>
                </li>
                <li className="w-full">
                  <Link to="/dashboard/baby-data">
                    <div className="w-full flex justify-start items-center gap-x-4 px-5 py-5 border-b border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="24"
                        viewBox="0 0 30 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_195_866)">
                          <path
                            d="M15 12.1664H0.00585938C0.158203 7.82461 2.41992 4.01602 5.80078 1.74258C6.58008 1.2211 7.60547 1.49063 8.13867 2.25821L15 12.1664ZM22.5 10.2914C22.5 8.22305 24.1816 6.54141 26.25 6.54141H28.125C29.1621 6.54141 30 7.3793 30 8.41641C30 9.45352 29.1621 10.2914 28.125 10.2914H26.25V14.0414C26.25 15.518 25.9102 16.9828 25.2539 18.348C24.5977 19.7133 23.625 20.9555 22.4062 21.9984C21.1875 23.0414 19.7402 23.8734 18.1465 24.4359C16.5527 24.9984 14.8477 25.2914 13.125 25.2914C11.4023 25.2914 9.69727 24.9984 8.10352 24.4359C6.50977 23.8734 5.0625 23.0414 3.84375 21.9984C2.625 20.9555 1.6582 19.7133 0.996094 18.348C0.333984 16.9828 0 15.518 0 14.0414H13.125H22.5V10.2914ZM4.6875 25.2914C5.43342 25.2914 6.14879 25.5877 6.67624 26.1152C7.20368 26.6426 7.5 27.358 7.5 28.1039C7.5 28.8498 7.20368 29.5652 6.67624 30.0926C6.14879 30.6201 5.43342 30.9164 4.6875 30.9164C3.94158 30.9164 3.22621 30.6201 2.69876 30.0926C2.17132 29.5652 1.875 28.8498 1.875 28.1039C1.875 27.358 2.17132 26.6426 2.69876 26.1152C3.22621 25.5877 3.94158 25.2914 4.6875 25.2914ZM18.75 28.1039C18.75 27.358 19.0463 26.6426 19.5738 26.1152C20.1012 25.5877 20.8166 25.2914 21.5625 25.2914C22.3084 25.2914 23.0238 25.5877 23.5512 26.1152C24.0787 26.6426 24.375 27.358 24.375 28.1039C24.375 28.8498 24.0787 29.5652 23.5512 30.0926C23.0238 30.6201 22.3084 30.9164 21.5625 30.9164C20.8166 30.9164 20.1012 30.6201 19.5738 30.0926C19.0463 29.5652 18.75 28.8498 18.75 28.1039Z"
                            fill={`${
                              pathname == "/dashboard/baby-data"
                                ? "#F8D16D"
                                : "white"
                            }`}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_195_866">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0 0.916504)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white text-[17px]">
                        Baby&apos;s Data
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="w-full">
                  <Link to="/dashboard/baby-chart">
                    <div className="w-full flex justify-start items-center gap-x-4 px-5 py-5 border-b border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="28"
                        viewBox="0 0 26 31"
                        fill="none"
                        className="-mb-1"
                      >
                        <g clipPath="url(#clip0_195_868)">
                          <path
                            d="M9.13095 4.90444C9.13095 3.62281 10.2907 2.58301 11.7202 2.58301H13.4464C14.8759 2.58301 16.0357 3.62281 16.0357 4.90444V21.9282C16.0357 23.2099 14.8759 24.2497 13.4464 24.2497H11.7202C10.2907 24.2497 9.13095 23.2099 9.13095 21.9282V4.90444ZM0.5 14.1902C0.5 12.9085 1.65978 11.8687 3.08929 11.8687H4.81548C6.24498 11.8687 7.40476 12.9085 7.40476 14.1902V21.9282C7.40476 23.2099 6.24498 24.2497 4.81548 24.2497H3.08929C1.65978 24.2497 0.5 23.2099 0.5 21.9282V14.1902ZM20.3512 5.67825H22.0774C23.5069 5.67825 24.6667 6.71805 24.6667 7.99967V21.9282C24.6667 23.2099 23.5069 24.2497 22.0774 24.2497H20.3512C18.9217 24.2497 17.7619 23.2099 17.7619 21.9282V7.99967C17.7619 6.71805 18.9217 5.67825 20.3512 5.67825Z"
                            fill={`${
                              pathname == "/dashboard/baby-chart"
                                ? "#F8D16D"
                                : "white"
                            }`}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_195_868">
                            <rect
                              width="25"
                              height="29.1667"
                              fill="white"
                              transform="translate(0.5 0.916504)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white text-[17px]">Chart</span>
                    </div>
                  </Link>
                </li>
                <li className="w-full">
                  <Link to="/dashboard/immunization">
                    <div className="w-full flex justify-start items-center gap-x-4 px-5 py-5 border-b border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="24"
                        viewBox="0 0 30 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_195_870)">
                          <path
                            d="M25.8396 0.492923L27.7146 2.36792L29.5896 4.24292C30.1404 4.7937 30.1404 5.68433 29.5896 6.22925C29.0388 6.77417 28.1482 6.78003 27.6033 6.22925L26.7244 5.35035L24.4861 7.58277L27.7087 10.8054C28.2595 11.3562 28.2595 12.2468 27.7087 12.7918C27.158 13.3367 26.2673 13.3425 25.7224 12.7918L21.5037 8.573L17.2849 4.36011C16.7341 3.80933 16.7341 2.9187 17.2849 2.37378C17.8357 1.82886 18.7263 1.823 19.2712 2.37378L22.4939 5.59644L24.7322 3.36402L23.8474 2.48511C23.2966 1.93433 23.2966 1.0437 23.8474 0.498782C24.3982 -0.0461397 25.2888 -0.051999 25.8337 0.498782L25.8396 0.492923ZM12.322 9.20581L15.9021 5.62574C15.9197 5.64331 15.9373 5.66675 15.9607 5.68433L16.8982 6.62183L20.1794 9.90308L23.4607 13.1843L24.3982 14.1218C24.4158 14.1394 24.4334 14.157 24.4568 14.1804L13.2654 25.3718C12.6501 25.9871 11.8181 26.3328 10.9451 26.3328H5.73609L2.4021 29.6726C1.85132 30.2234 0.960696 30.2234 0.415774 29.6726C-0.129147 29.1218 -0.135007 28.2312 0.415774 27.6863L3.75562 24.3464V19.1433C3.75562 18.2703 4.10132 17.4382 4.71656 16.823L7.25367 14.2859L10.5935 17.6257C10.9568 17.989 11.5544 17.989 11.9177 17.6257C12.281 17.2625 12.281 16.6648 11.9177 16.3015L8.57788 12.9617L11.0037 10.5359L14.3435 13.8757C14.7068 14.239 15.3044 14.239 15.6677 13.8757C16.031 13.5125 16.031 12.9148 15.6677 12.5515L12.3279 9.21167L12.322 9.20581Z"
                            fill={`${
                              pathname == "/dashboard/immunization"
                                ? "#F8D16D"
                                : "white"
                            }`}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_195_870">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0 0.0830078)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white text-[17px]">
                        Immunization
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="w-full">
                  <Link to="/dashboard/profile">
                    <div className="w-full flex justify-start items-center gap-x-4 px-5 py-5 border-b border-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z"
                          fill={`${
                            pathname == "/dashboard/profile"
                              ? "#F8D16D"
                              : "white"
                          }`}
                        />
                      </svg>
                      <span className="text-white text-[17px]">Profile</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              onClick={toggleLogoutModal}
              className="logout_btn mt-auto w-full flex justify-start items-center gap-x-4 px-5 py-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 30 30"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M22.1426 6.20508L29.3379 13.4004C29.7598 13.8223 30 14.4023 30 15C30 15.5977 29.7598 16.1777 29.3379 16.5996L22.1426 23.7949C21.7676 24.1699 21.2637 24.375 20.7363 24.375C19.6406 24.375 18.75 23.4844 18.75 22.3887V18.75H11.25C10.2129 18.75 9.375 17.9121 9.375 16.875V13.125C9.375 12.0879 10.2129 11.25 11.25 11.25H18.75V7.61133C18.75 6.51562 19.6406 5.625 20.7363 5.625C21.2637 5.625 21.7676 5.83594 22.1426 6.20508ZM9.375 5.625H5.625C4.58789 5.625 3.75 6.46289 3.75 7.5V22.5C3.75 23.5371 4.58789 24.375 5.625 24.375H9.375C10.4121 24.375 11.25 25.2129 11.25 26.25C11.25 27.2871 10.4121 28.125 9.375 28.125H5.625C2.51953 28.125 0 25.6055 0 22.5V7.5C0 4.39453 2.51953 1.875 5.625 1.875H9.375C10.4121 1.875 11.25 2.71289 11.25 3.75C11.25 4.78711 10.4121 5.625 9.375 5.625Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-[17px]">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {showLogoutModal && <LogoutModal handleLogoutModal={toggleLogoutModal} />}
    </>
  );
}
