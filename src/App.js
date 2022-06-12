import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuSection from './components/MenuSection/MenuSection';
import { fetchMenuItems } from './actions/menuActions';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const { menuData } = useSelector((state) => state.menuReducer);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  console.log('menuData', menuData)

  return (
    <div className="menuApp__container">
      <p className="menuApp__title">Flipdish Menu</p>
      {menuData.map((section) => {
        return(
          <MenuSection
            key={section.MenuSectionId?.toString()}
            sectionData={section}
          />
        )})
      }
    </div>
  );
}

export default App;
