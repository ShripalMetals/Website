import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Trading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/products');
  }, [navigate]);

  return null;
};

export default Trading;
