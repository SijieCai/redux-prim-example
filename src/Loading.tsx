import React from 'react';
import { useSelector } from 'react-redux';
import appSlice from './store/appSlice';
export default function () {
  const loading = useSelector(s => appSlice.selector(s).loading);
  console.log('render loading', loading);
  return <>{!!loading && <div style={{ display: loading ? 'block' : 'hidden', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, opacity: .3, background: 'black' }}>loading</div>}</>
}