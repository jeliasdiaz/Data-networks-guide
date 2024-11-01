import data from '../data/sideBarData.json';
import { useNavigate } from 'react-router-dom';
import IsOnPage from '../utils/IsOnPage';
import { useState } from 'react';

export const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleTransition = (path) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                navigate(path);
            });
        } else {
            navigate(path);
        }
    };

    return (
        <>
            <button onClick={toggleSidebar}>
                {!isSidebarOpen && (
                    <div className='md:hidden rounded-md p-1 pb-0 backdrop-filter backdrop-blur-md text-white fixed top-2 left-2'>
                        <box-icon
                            name='menu-alt-left'
                            size="30px"
                            className=''
                            onClick={toggleSidebar}
                        ></box-icon>
                    </div>
                )}
            </button>
            <section
                className={`flex flex-col w-64 h-full bg-gray-100 p-3 overflow-y-auto fixed top-0 left-0 z-50 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
                <div className='flex'>
                    <h1 className='text-2xl font-bold'>Guia para redes</h1>{' '}
                    <button className='md:hidden p-2 ms-auto text-white hover:scale-90 active:scale-90' onClick={toggleSidebar}>
                        <box-icon
                            name='x'
                            onClick={toggleSidebar}
                            size='28px'
                        ></box-icon>
                    </button>
                </div>
                <hr className='h-2 text-black' />
                <ul className='flex flex-col'>
                    {data.map((item, index) => (
                        <li key={index} className='mb-2'>
                            <button
                                onClick={() => handleTransition(item.url)}
                                className={`text-left font-bold ${
                                    IsOnPage(item.url) ? 'underline' : ''
                                }`}
                            >
                                {item.title}
                            </button>
                            {item.subItems && (
                                <ul className='pl-4'>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex} className='mb-1'>
                                            <button
                                                onClick={() => handleTransition(subItem.url)}
                                                className={`text-left ${
                                                    IsOnPage(subItem.url) ? 'underline' : ''
                                                }`}
                                            >
                                                {subItem.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};