import Button from "../ui/button";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10 z-50">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="ProjectInBio Logo" />
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
}
