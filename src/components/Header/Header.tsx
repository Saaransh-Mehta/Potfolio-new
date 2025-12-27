import { ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-normal outfit">
          it's me
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1729 149"><path d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z" fill="#000"></path></svg>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <div className="relative">
            <svg
              className="absolute -top-3 left-0 right-0"
              width="100%"
              height="8"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="4"
                x2="120"
                y2="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-medium outfit">My Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <p className="text-xs mt-1 outfit">See all of nice project I have done.</p>
          </div>

          <div className="relative cursor-pointer">
            <svg
              className="absolute -top-3 left-0 right-0"
              width="100%"
              height="8"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="4"
                x2="120"
                y2="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-medium outfit">About Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <p className="text-xs mt-1 outfit">Learn about my self what I do</p>
          </div>

          <div className="relative cursor-pointer">
            <svg
              className="absolute -top-3 left-0 right-0"
              width="100%"
              height="8"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="4"
                x2="120"
                y2="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex items-center gap-2">
              <span className="font-medium outfit">Contact me</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <p className="text-xs mt-1 outfit">saaransh1621m@gmail.com</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
