export const HamburgerMenu = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-gold transition ease transform duration-300`;
  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center"
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen && 'rotate-45 translate-y-3 '
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen && 'opacity-0'}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen && '-rotate-45 -translate-y-3 '
        }`}
      />
    </button>
  );
};
