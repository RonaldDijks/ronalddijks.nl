export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <a className="underline" href={href}>
      {children}
    </a>
  );
};

export default Link;
