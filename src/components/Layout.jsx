import '@/css/globals.css';
import Header from './Header';

export const metadata = {
  title: 'Create Vite App',
  description: 'Generated by create vite app',
};

export default function Layout({ children }) {
  return (
    <div className="font-jetbrainsMono">
      {' '}
      {/* Apply the font class here */}
      <Header />
      {children}
    </div>
  );
}
