import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-purple-900/20 via-transparent to-transparent border-t border-purple-500/30 text-gray-200 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
             Always learning, always improving.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">

            </p>
          </div>

          {/* Footer Links */}
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex flex-col space-y-4"
            >
              <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {column.title}
              </h3>
              <div className="flex flex-col space-y-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    {Icon && (
                      <span className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                        <Icon size={20} />
                      </span>
                    )}
                    <span className="text-sm">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Arjun Ramasamy Mudaliyar.
          </p>
          <p className="text-center md:text-right">
           SINCE <span className="text-red-500"></span> @2004
          </p>
        </div>
      </div>
    </footer>
  );
};
