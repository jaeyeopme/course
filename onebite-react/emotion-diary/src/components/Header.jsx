import './Header.css'

const Header = ({ title, left_child, right_child }) => {
  return (
    <header className='Header'>
      <div className='header_left'>{left_child}</div>
      <div className='header_center'>{title}</div>
      <div className='header_right'>{right_child}</div>
    </header>
  )
}

export default Header
