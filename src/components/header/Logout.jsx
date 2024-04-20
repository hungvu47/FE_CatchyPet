import { useContext } from 'react'
import { AuthContext } from '../../page/auth/login/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'

export const Logout = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.handleLogout()
    navigate("/login")
  }

  return (
    <>
      <ul className='account_header'>
        <li>
          <Link className="dropdown-item" to={"/account/profile"}>
            Tài khoản
          </Link>
        </li>

        <li>
          <button className="dropdown-item" onClick={handleLogout}>
            Đăng xuất
          </button>
        </li>
      </ul>
    </>
  )
}