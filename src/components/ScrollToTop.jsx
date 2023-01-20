import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop(){
  const { papthname } = useLocation();

  useEffect(() => {
    window.screenTop(0, 0);
  }, [papthname]);

  return null;
}
