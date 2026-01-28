import { useRef, useState } from "react";
import BabyShowerInvitation from "@/components/BabyShowerInvitation";
import watercolorStroke from "@/assets/watercolor-stroke.png";
import grokVideo from "@/assets/grok-video.mp4";

const Balloon = ({
  color,
  left,
  delay,
  duration,
}: {
  color: string;
  left: string;
  delay: string;
  duration: string;
}) => (
  <div
    className="balloon absolute w-8 h-10 rounded-full opacity-60"
    style={{
      background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`,
      left,
      bottom: "-50px",
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

const Index = () => {
  const balloons = [
    { color: "hsl(210, 50%, 75%)", left: "5%", delay: "0s", duration: "12s" },
    { color: "hsl(42, 60%, 75%)", left: "15%", delay: "2s", duration: "14s" },
    { color: "hsl(350, 40%, 85%)", left: "25%", delay: "4s", duration: "11s" },
    { color: "hsl(215, 50%, 70%)", left: "35%", delay: "1s", duration: "13s" },
    { color: "hsl(210, 40%, 80%)", left: "50%", delay: "3s", duration: "15s" },
    { color: "hsl(42, 50%, 80%)", left: "65%", delay: "5s", duration: "12s" },
    {
      color: "hsl(350, 35%, 80%)",
      left: "75%",
      delay: "2.5s",
      duration: "14s",
    },
    {
      color: "hsl(215, 45%, 75%)",
      left: "85%",
      delay: "0.5s",
      duration: "11s",
    },
    {
      color: "hsl(210, 55%, 78%)",
      left: "95%",
      delay: "4.5s",
      duration: "13s",
    },
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showInvitation, setShowInvitation] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleView = () => {
    setShowWelcome(false);
    setShowInvitation(true);
    setIsMuted(false);
    const v = videoRef.current;
    if (v) {
      v.muted = false; // user gesture - allow sound
      v.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      const v = videoRef.current;
      if (v) {
        v.muted = next;
        if (!next) v.play().catch(() => {});
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-2 relative overflow-hidden">
      {/* Floating Balloons */}
      {balloons.map((balloon, index) => (
        <Balloon key={index} {...balloon} />
      ))}

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-48 opacity-30">
        <img
          src={watercolorStroke}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20 rotate-180">
        <img
          src={watercolorStroke}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Gold sparkle background accents with animation */}
      <div
        className="absolute top-1/4 left-10 w-3 h-3 gold-sparkle rounded-full animate-sparkle"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 right-16 w-2 h-2 gold-sparkle rounded-full animate-sparkle"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/4 left-20 w-2 h-2 gold-sparkle rounded-full animate-sparkle"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 right-10 w-3 h-3 gold-sparkle rounded-full animate-sparkle"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Mute toggle (top-right) */}
      <button
        onClick={toggleMute}
        aria-pressed={!isMuted}
        aria-label={
          isMuted ? "Unmute background video" : "Mute background video"
        }
        className="fixed top-4 right-4 z-50 w-10 h-10 bg-white/90 dark:bg-slate-900/80 rounded-full shadow flex items-center justify-center"
      >
        {isMuted ? (
          <svg
            className="w-5 h-5 text-gray-800 dark:text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path d="M9 9v6h4l5 5V4l-5 5H9z" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-yellow-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M7 9v6h4l5 5V4l-5 5H7z" />
          </svg>
        )}
      </button>

      {/* Main Content - video ring with welcome card first, invitation card on demand */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="relative">
          {/* Video behind the card — fixed full-viewport during Welcome, larger ring otherwise */}
          <div
            className={
              (showWelcome || showInvitation
                ? "fixed inset-0 z-0"
                : "absolute -inset-16 sm:-inset-20 rounded-4xl z-0") +
              " overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-700 pointer-events-none"
            }
          >
            <video
              ref={videoRef}
              src={grokVideo}
              aria-hidden
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            <div
              className={
                "absolute inset-0 " +
                (showInvitation ? "bg-black/40" : "bg-black/20") +
                " mix-blend-multiply transition-opacity duration-700"
              }
            />
          </div>

          {/* Welcome Card (shown first) */}
          {showWelcome && (
            <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-10 sm:px-12 sm:py-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
                Welcome!
              </h2>
              <p className="mb-6 text-muted-foreground">
                Click below to view the invitation
              </p>
              <button
                onClick={handleView}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              >
                View Invitation
              </button>
            </div>
          )}

          {/* Invitation Card (revealed after clicking View) */}
          {showInvitation && (
            <div className="relative z-10 w-full max-w-6xl bg-white/90 dark:bg-slate-900/75 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-10 sm:px-16 sm:py-16 lg:px-24 lg:py-20">
              <header className="text-center mb-6">
                <h1 className="font-script text-5xl md:text-6xl lg:text-8xl text-primary text-shadow-soft mb-3">
                  You're Invited!
                </h1>
                <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">
                  A Special Celebration
                </p>
                <div className="mt-4">
                  <a
                    href="/entry"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  >
                    Entry & Gifts
                  </a>
                </div>
              </header>

              <BabyShowerInvitation
                motherName="Bella Smith"
                date="Saturday February"
                dayNumber="28"
                time="2:30 PM"
                venue="Near Clayville ext 77"
                address="In Olifantsfontein 410-JR, Thembisa"
                rsvpContact="Chris"
                rsvpPhone="0743642496"
              />

              <footer className="text-center mt-6">
                <p className="font-elegant text-sm text-muted-foreground italic">
                  We can't wait to celebrate with you!
                </p>
              </footer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
