import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 bg-[rgb(36,36,36)] lg:p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Main Content Area</h1>
      <p className="text-gray-300 mb-4">
        This is the main content area that takes up the remaining space after
        the 260px navbar.
      </p>
      <p className="text-gray-300">
        The navbar is only visible on large devices (lg breakpoint and above).
        On smaller screens, the layout switches to a mobile navbar with
        slide-down animation.
      </p>
    </div>
  );
}
