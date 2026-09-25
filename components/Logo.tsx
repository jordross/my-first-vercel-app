type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function LogoMark({ className = "w-9 h-9", inverted = false }: LogoProps) {
  const hex = inverted ? "#ffffff" : "#154a2f";
  const leaf = inverted ? "#154a2f" : "#ffffff";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 2 36 11v18L20 38 4 29V11z" fill={hex} />
      <path d="M13 26c0-8 5-13 14-14-1 9-6 14-14 14z" fill={leaf} />
      <path d="M13 26l8-8" stroke={hex} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="29" cy="11" r="3" fill="#e0a526" />
    </svg>
  );
}

export default function Logo({ inverted = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark inverted={inverted} />
      <span className="leading-tight">
        <span className={`block font-bold text-lg tracking-tight ${inverted ? "text-white" : "text-happy-green-700"}`}>
          Happy Bee
        </span>
        <span className={`block text-[11px] uppercase tracking-[0.18em] ${inverted ? "text-happy-green-100" : "text-earth-600"}`}>
          Landscaping
        </span>
      </span>
    </span>
  );
}
