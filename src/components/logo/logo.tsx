import React from 'react';
import { Link } from '@mui/material';

function Logo() {
  return (
    <Link href="#" underline="none">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
    </Link>

  );
}

export default Logo;