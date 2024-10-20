import { useLocation, useNavigate } from 'react-router-dom';
import sidebarData from '../data/sideBarData.json';

/**
 * Finds the index of the current path in the sidebar data.
 * If the path is found in a subItem, it returns an object with parentIndex and subIndex.
 * 
 * @param {string} path - The current path.
 * @param {Array} items - The sidebar data items.
 * @returns {number|Object} - The index of the current path or an object with parentIndex and subIndex.
 */
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

  /**
   * Navigates to the previous item in the sidebar data.
   */
  const handlePrevious = () => {
    const navigateTo = (url) => {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          navigate(url);
        });
      } else {
        navigate(url);
      }
    };

    if (currentIndex.subIndex !== undefined) {
      const parent = sidebarData[currentIndex.parentIndex];
      const subItems = parent.subItems;
      if (currentIndex.subIndex > 0) {
        navigateTo(subItems[currentIndex.subIndex - 1].url);
      } else {
        navigateTo(parent.url);
      }
    } else if (currentIndex > 0) {
      navigateTo(sidebarData[currentIndex - 1].url);
    }
  };

  /**
   * Navigates to the next item in the sidebar data.
   */
  const handleNext = () => {
    const navigateTo = (url) => {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          navigate(url);
        });
      } else {
        navigate(url);
      }
    };

    if (currentIndex.subIndex !== undefined) {
      const parent = sidebarData[currentIndex.parentIndex];
      const subItems = parent.subItems;
      if (currentIndex.subIndex < subItems.length - 1) {
        navigateTo(subItems[currentIndex.subIndex + 1].url);
      }
    } else if (currentIndex < sidebarData.length - 1) {
      const nextItem = sidebarData[currentIndex + 1];
      if (nextItem.subItems) {
        navigateTo(nextItem.subItems[0].url);
      } else {
        navigateTo(nextItem.url);
      }
    }
  };

  return (
    <div className="flex my-10 pb-10 w-full justify-between">
      <button className="px-6 py-3 bg-blue-300 rounded-lg hover:scale-95 hover:bg-blue-200 transition duration-300" onClick={handlePrevious}>
        Anterior
      </button>
      <button className="px-6 py-3 bg-blue-300 rounded-lg hover:scale-95 hover:bg-blue-200 transition duration-300" onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};