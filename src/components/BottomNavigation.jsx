import { useLocation, useNavigate } from 'react-router-dom';
import sidebarData from '../data/sideBarData.json';

const findCurrentIndex = (path, items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].url === path) {
      return i;
    }
    if (items[i].subItems) {
      const subIndex = findCurrentIndex(path, items[i].subItems);
      if (subIndex !== -1) {
        return { parentIndex: i, subIndex };
      }
    }
  }
  return -1;
};

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = findCurrentIndex(location.pathname, sidebarData);

  const handlePrevious = () => {
    if (currentIndex.subIndex !== undefined) {
      const parent = sidebarData[currentIndex.parentIndex];
      const subItems = parent.subItems;
      if (currentIndex.subIndex > 0) {
        navigate(subItems[currentIndex.subIndex - 1].url);
      } else {
        navigate(parent.url);
      }
    } else if (currentIndex > 0) {
      navigate(sidebarData[currentIndex - 1].url);
    }
  };

  const handleNext = () => {
    if (currentIndex.subIndex !== undefined) {
      const parent = sidebarData[currentIndex.parentIndex];
      const subItems = parent.subItems;
      if (currentIndex.subIndex < subItems.length - 1) {
        navigate(subItems[currentIndex.subIndex + 1].url);
      }
    } else if (currentIndex < sidebarData.length - 1) {
      const nextItem = sidebarData[currentIndex + 1];
      if (nextItem.subItems) {
        navigate(nextItem.subItems[0].url);
      } else {
        navigate(nextItem.url);
      }
    }
  };

  return (
    <div className="flex my-10 pb-10 w-full justify-between">
      <button className="px-6 py-3 bg-blue-300 rounded-lg" onClick={handlePrevious}>
        Anterior
      </button>
      <button className="px-6 py-3 bg-blue-300 rounded-lg" onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};