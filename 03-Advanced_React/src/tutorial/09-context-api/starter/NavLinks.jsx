import UserContainer from './UserContainer'
const NavLinks = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>link 1</a>
        </li>
        <li>
          <a href='#'>link 2</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  )
}
export default NavLinks
