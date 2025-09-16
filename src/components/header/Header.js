import React, { useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/images/companyLogo.png';
import MegaMenuSolutions from '../MegaMenu/megamenuSolutions/MegaMenuSolutions';
import MegaMenuWhoWeAre from '../MegaMenu/megawhoweAre/MegaMenuWhoWeAre';
import { Link, useNavigate } from 'react-router-dom';
// import RegisterForm from '../registerform/RegisterForm';
// import LoginForm from '../login/LoginForm';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';

const Header = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  // Close dropdowns and sidebar logic
  useEffect(() => {
    const clearDropdowns = () => {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
      document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
      });
    };

    clearDropdowns();

    const handleResize = () => clearDropdowns();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidebar = document.querySelector('.navbar-collapse.show');
      const toggler = document.querySelector('.navbar-toggler');
      const nav = document.getElementById('mainNav');

      if (
        sidebar &&
        nav &&
        !nav.contains(event.target) &&
        !toggler.contains(event.target)
      ) {
        sidebar.classList.remove('show');

        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
          menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(toggle => {
          toggle.setAttribute('aria-expanded', 'false');
        });
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const closeMenus = () => {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });

    document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });

    const sidebar = document.querySelector('.navbar-collapse');
    if (sidebar && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
    }
  };

  // const [loggedInUser, setLoggedInUser] = useState(null);

  // useEffect(() => {
  //   const userData = localStorage.getItem('loggedInUser');
  //   if (userData) {
  //     setLoggedInUser(JSON.parse(userData));
  //   }
  // }, []);

  // const handleLogout = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You will be logged out of your account.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, logout',
  //     cancelButtonText: 'Cancel'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       localStorage.removeItem('loggedInUser');
  //       setLoggedInUser(null);
  //       toast.success('🚪 Logged out successfully');
  //       window.location.reload();
  //     }
  //   });
  // };

  const Contactus = () => {
    navigate('/contactus');
    closeMenus();
    setTimeout(() => {
      window.scrollTo({
        top: 300,
        behavior: "smooth"
      });
    }, 200);
  };

  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // const toggleLoginForm = () => {
  //   setIsLoginOpen(!isLoginOpen);
  //   setIsRegisterOpen(false);
  // };

  // const toggleRegisterForm = () => {
  //   setIsRegisterOpen(!isRegisterOpen);
  //   setIsLoginOpen(false);
  // };

  // const toggleForm = () => {
  //   setIsLoginOpen(!isLoginOpen);
  //   setIsRegisterOpen(false);
  // };

  // const RegisterClick = () => {
  //   setIsRegisterOpen(true);
  //   setIsLoginOpen(false);
  // };

  return (
    <div className="header-container fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Company Logo" height="50" width="80" />
            <span className="ms-2 fw-bold">DatanovelTech</span>
          </a>

          {/* Hamburger + Username on small devices */}
          <div className="d-lg-none d-flex align-items-center">

                {/* {loggedInUser && (
              <span className="text-primary fw-bold">
                👋 {loggedInUser.FIRST_NAME}
              </span>
            )} */}

            <button
              className="navbar-toggler me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

        
          </div>

          {/* Sidebar / Main Nav */}
          <div className="collapse navbar-collapse" id="mainNav" ref={sidebarRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="solutionsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <MegaMenuSolutions closeMenus={closeMenus} />
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="whoDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who&nbsp;We&nbsp;Are
                </a>
                <MegaMenuWhoWeAre closeMenus={closeMenus} />
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="blogsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul className="dropdown-menu" aria-labelledby="blogsDropdown">
                  <li><Link className="dropdown-item" to="/data-quality" onClick={closeMenus}>Data Quality</Link></li>
                  <li><Link className="dropdown-item" to="/data-migration" onClick={closeMenus}>Data Migration</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to='/video-analaytics' onClick={closeMenus}>Video Analytics</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blogs" onClick={closeMenus}>Blogs</Link>
              </li>

              {/* Username for large devices */}
              {/* {loggedInUser && (
                <li className="nav-item d-none d-lg-flex align-items-center">
                  <span className="text-primary fw-bold px-2">
                    👋 {loggedInUser.FIRST_NAME}
                  </span>
                </li>
              )} */}

              {/* Register/Login Buttons */}
              {/* {!loggedInUser && (
                <>
                  <li>
                    <button className='register_button' onClick={RegisterClick}>Register Now</button>
                  </li>
                  <li>
                    <button className='register_button' onClick={toggleForm}>Login</button>
                  </li>
                </>
              )} */}

            

              <li className="nav-item">
                <button className='register_button' onClick={Contactus}>Contact Us</button>
              </li>
                {/* {loggedInUser && (
                <li>
                  <button className='register_button' onClick={handleLogout}>Logout</button>
                </li>
              )} */}
            </ul>

            {/* Register and Login Forms */}
            {/* {isRegisterOpen && <RegisterForm closeForm={() => setIsRegisterOpen(false)} toggleForm={toggleLoginForm} />}
            {isLoginOpen && <LoginForm closeForm={() => setIsLoginOpen(false)} toggleForm={toggleRegisterForm} />} */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
