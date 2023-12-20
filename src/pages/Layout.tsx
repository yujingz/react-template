import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-full">
      <Navbar />

      <main>
        <div className="mx-auto max-w-7xl py-1 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
