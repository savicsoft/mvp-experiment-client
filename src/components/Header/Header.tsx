import { Button } from '@/components';
import { Link } from 'react-router-dom';
import { useHeader } from './useHeader';

const Header = () => {
  const { isActive, handleActive, handlePublishARide } = useHeader();
  return (
    <header className='header'>
      <img src='/images/Name.png' alt='logo' />
      <div className='header-btn-group'>
        <div className='header-search'>
          <input type='text' placeholder='Search' />
          <img src='images/search.png' alt='search' />
        </div>
        <Button
          onClick={handlePublishARide}
          className={'btn-header btn-header-lg'}
        >
          Publish a ride
          <img src='images/plus.png' alt='plus' />
        </Button>
        <Button
          className={isActive ? 'btn-header-active btn-header ' : 'btn-header '}
          onClick={handleActive}
        >
          <img src='images\person.png' alt='person' />
          {isActive ? (
            <>
              <img src='images/down.png' alt='down' className={'activeLink'} />
            </>
          ) : (
            <img src='images/down.png' alt='down' />
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
