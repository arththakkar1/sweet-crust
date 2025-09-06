export default function Footer() {
  return (
    <footer className="bg-[var(--soft-brown)] text-white py-8 mt-16 text-center ">
      <div className="flex flex-col items-center gap-4">
        <p>&copy; 2025 Sweet Crust Bakery. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--accent-color)]">
            Instagram
          </a>
          <a href="#" className="hover:text-[var(--accent-color)]">
            Facebook
          </a>
          <a href="#" className="hover:text-[var(--accent-color)]">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
