const LEAVES = ["🍃", "🌿", "🍃", "🌱", "🍃", "🦋", "🌿", "🍂"];

export function FallingLeaves() {
  const leaves = Array.from({ length: 28 }, (_, i) => {
    const left = (i * 4.7) % 100;
    const duration = 9 + ((i * 2.3) % 12);
    const delay = (i * 0.9) % 14;
    const size = 1.1 + ((i * 0.4) % 1.6);
    const emoji = LEAVES[i % LEAVES.length];
    return (
      <span
        key={i}
        className="leaf"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          fontSize: `${size}rem`,
        }}
      >
        {emoji}
      </span>
    );
  });
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-[1]">{leaves}</div>;
}
