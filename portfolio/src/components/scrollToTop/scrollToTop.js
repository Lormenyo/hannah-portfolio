import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './scrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  // const ref = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='fixed bottom-9 right-16'>
      <button onClick={scrollToTop}>
        <ArrowUpwardIcon fontSize='large' className='text-appBackground dark:text-appBlue' />
      </button>
    </div>
  ) : null
}

ScrollToTop.propTypes = {};

ScrollToTop.defaultProps = {};

export default ScrollToTop;
