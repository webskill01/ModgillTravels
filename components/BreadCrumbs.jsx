// components/Breadcrumbs.jsx
import Link from 'next/link';
import { NavigateNextIcon, HomeIcon } from '@/components/Icons';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li className="flex items-center gap-2">
          <Link 
            href="/" 
            className="text-[--color-ink-muted] hover:text-[--color-brand] transition flex items-center gap-1"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </Link>
          {items.length > 0 && <NavigateNextIcon className="w-4 h-4 text-[--color-ink-muted]" />}
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index === items.length - 1 ? (
              <span className="text-[--color-ink] font-medium">{item.label}</span>
            ) : (
              <>
                <Link 
                  href={item.href} 
                  className="text-[--color-ink-muted] hover:text-[--color-brand] transition"
                >
                  {item.label}
                </Link>
                <NavigateNextIcon className="w-4 h-4 text-[--color-ink-muted]" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
