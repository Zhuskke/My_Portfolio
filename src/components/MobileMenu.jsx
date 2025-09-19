const MobileMenu = ({ onClose }) => {
return (
<div className="md:hidden absolute top-20 left-0 w-full bg-[#00184b]/90 backdrop-blur-md p-6 rounded-lg z-40">
<ul className="flex flex-col gap-6 text-center font-semibold text-yellow-100">
<li><a onClick={onClose} href="#home" className="cursor-pointer hover:text-white transition">Home</a></li>
<li><a onClick={onClose} href="#about" className="cursor-pointer hover:text-white transition">About</a></li>
<li><a onClick={onClose} href="#skills" className="cursor-pointer hover:text-white transition">Skills</a></li>
<li><a onClick={onClose} href="#projects" className="cursor-pointer hover:text-white transition">Projects</a></li>
<li><a onClick={onClose} href="#contact" className="cursor-pointer hover:text-white transition">Contact</a></li>
</ul>
</div>
);
};

export default MobileMenu;
