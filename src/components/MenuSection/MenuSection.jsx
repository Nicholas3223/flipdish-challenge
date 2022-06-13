import React from 'react';

import calculatedPrice from '../utils/calculatedPrice';
import './MenuSection.css';

const MenuSection = ({ sectionData }) => {
  const filteredMenuItems = sectionData.MenuItems.filter((item) => item.ImageUrl);
  return(
    <>
      <p className='menuApp__MenuSection--title'>{sectionData.Name}</p>
      {filteredMenuItems.map((item) => {
        return(
          <div key={item.PublicId.toString()} className='menuApp__MenuSection--detailsContainer'>
            <div className='menuApp__MenuSection--imageDetailsContainer'>
              <img 
                src={item.ImageUrl}
                alt={item.ImageName}
                className='menuApp__MenuSection--image'
              />
              <div className='menuApp__MenuSection--detailsTextContainer'>
                <p className='menuApp__MenuSection--nameDetails'>{item.Name}</p>
                <p className='menuApp__MenuSection--descriptionDetails'>{item.Description}</p>
              </div>
            </div>
              <p className='menuApp__MenuSection--price'>{calculatedPrice(item)}€</p>
          </div>
        )
      })}
    </>
  );
};

export default MenuSection;