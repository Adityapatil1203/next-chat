import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  return (
    <footer className="p-4 footer footer-center bg-base-300 text-base-content">
      <aside>
        <p>
          {currentMonth} {currentYear} - Copyright © |
          <Link
            href={"https://www.linkedin.com/in/tusharupadhya/"}
            target="_blank"
          >
            {" "}
            <span className="transition-all duration-200 hover:text-white">
              Tushar Upadhyay
            </span>
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
