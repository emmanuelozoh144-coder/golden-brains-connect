import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function GalleryVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-navy shadow-lift">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={label}
        className="aspect-[4/5] w-full cursor-pointer object-cover"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy/70 to-transparent" />

      {/* Centre play button with ripple glow */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className={`absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold/95 text-navy shadow-lift transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
          playing ? "scale-90 opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gold/60 ripple-wave" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gold/40 ripple-wave ripple-delay" />
        {playing ? <Pause size={26} /> : <Play size={26} className="translate-x-[2px]" />}
      </button>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-background/90 text-navy shadow-lift transition hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
