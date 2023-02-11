export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-12 px-4 text-neutral-500">
      <span className="block text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} K.A apparels
      </span>
    </footer>
  );
}
