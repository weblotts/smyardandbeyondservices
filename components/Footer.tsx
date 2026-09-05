import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-pine-deep py-8 text-paper/70">
      <div className="mx-auto max-w-6xl px-6 text-sm">
        <p>
          © {new Date().getFullYear()} {business.legalName}. Run by {business.owners.join(" & ")}.
        </p>
      </div>
    </footer>
  );
}
