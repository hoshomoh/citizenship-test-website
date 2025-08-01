import React from 'react';
import Link from 'next/link';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

export function Footer() {
  return (
    <footer className="py-2 mt-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-8 flex flex-wrap justify-center gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150 font-roboto"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground block text-center text-sm font-roboto">
          {' '}
          © {new Date().getFullYear()} CitizenshipTestApp, All rights reserved
        </span>
      </div>
    </footer>
  );
}
