import { Button } from '@/components';
import { Link } from 'react-router-dom';
import { useHeader } from './useHeader';

const Header = () => {
  const { isActive, handleActive, handlePublishARide } = useHeader();
  return (
    <header className='header'>
      <img src='/images/Name.png' alt='logo' />
      <div className='header-btn-group'>
        <Button
          onClick={handlePublishARide}
          className={'btn-header btn-header-lg'}
        >
          Publish a ride
          <img src='images/plus.png' alt='plus' />
        </Button>
        <Button
          className={isActive ? 'btn-header-active' : 'btn-header '}
          onClick={handleActive}
        >
          <img src='.\public\images\person.png' alt='person' />
          {isActive ? (
            <>
              <img
                src='.\public\images\down.png'
                alt='down'
                className={'activeLink'}
              />
            </>
          ) : (
            <img src='.\public\images\down.png' alt='down' />
          )}
        </Button>
        {isActive ? (
          <div className='header-links'>
            <Link className='header-link' to='/login'>
              Sign In
            </Link>
            <Link className='header-link' to='/signup'>
              Sign Up
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
