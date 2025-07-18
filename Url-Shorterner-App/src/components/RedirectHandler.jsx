import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOriginalURL } from '../services/api';

const RedirectHandler = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    getOriginalURL(shortcode).then(url => {
      window.location.href = url;
    });
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;