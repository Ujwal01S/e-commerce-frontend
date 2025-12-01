interface LayoutProps {
  children: React.ReactNode;
}

const LandingPagelayout = ({ children }: LayoutProps) => {
  return <div className="container w-full mx-auto">{children}</div>;
};

export default LandingPagelayout;
