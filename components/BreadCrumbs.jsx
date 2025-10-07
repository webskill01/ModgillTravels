// components/Breadcrumbs.jsx
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li className="flex items-center gap-2">
          <Link 
            href="/" 
            className="text-gray-400 hover:text-cyan-400 transition flex items-center gap-1"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </Link>
          {items.length > 0 && <NavigateNextIcon className="w-4 h-4 text-gray-600" />}
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index === items.length - 1 ? (
              <span className="text-white font-medium">{item.label}</span>
            ) : (
              <>
                <Link 
                  href={item.href} 
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  {item.label}
                </Link>
                <NavigateNextIcon className="w-4 h-4 text-gray-600" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
