import './globals.css';
import InternshipPopup from './components/InternshipPopup';

export const metadata = {
  title: 'AIPNT | AI, Robotics and STEM Programs',
  description: 'Corporate training, summer internships, school STEM programs and government work-order focused training programs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <InternshipPopup />
      </body>
    </html>
  );
}
