
const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://breinergonza.github.io/' target='_blank' rel='noopener noreferrer'>
        Breitner González
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>

    </p>
  )
}

export default Footer
