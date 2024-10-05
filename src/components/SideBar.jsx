import data from '../data/sideBarData.json';
import { Link } from 'react-router-dom'
import IsOnPage from '../utils/isOnPage';

export const SideBar = () => {
	return (
		<section className='flex flex-col w-64 h-full bg-gray-100 p-3 overflow-y-auto fixed top-0 left-0'>
			<h1 className='text-2xl font-bold'>Guia para redes</h1>
			<hr className='h-2 text-black' />
			<ul className='flex flex-col'>
				{data.map((item, index) => (
					<li key={index} className='mb-2'>
						<Link to={item.url} className={`text-left font-bold ${IsOnPage(item.url) ? "underline" : ""}`}>
							{item.title}
						</Link>
						{item.subItems && (
							<ul className='pl-4'>
								{item.subItems.map((subItem, subIndex) => (
									<li key={subIndex} className='mb-1'>
										<Link to={subItem.url} className={`text-left ${IsOnPage(subItem.url) ? "underline" : ""}`}>
											{subItem.title}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</section>
	)
}
