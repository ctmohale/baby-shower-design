import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import watercolorStroke from "@/assets/watercolor-stroke.png";
import grokVideo from "@/assets/grok-video.mp4";

const Entry = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

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

      {/* Video ring behind the card */}
      <div
        className={
          "absolute -inset-12 sm:-inset-16 rounded-3xl overflow-hidden shadow-2xl z-0"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-3xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-10 sm:px-12 sm:py-12">
          <header className="flex items-center justify-between mb-6">
            <Link to="/" className="text-sm text-muted-foreground underline">
              Back to home
            </Link>
          </header>

          <section className="mb-6">
            <div className="mx-auto max-w-3xl px-6 py-5 bg-gradient-to-r from-sky-50 via-blue-50 to-white rounded-xl shadow-sm border border-white/60">
              <h4 className="text-xl font-script text-sky-700 mb-2">
                A Heartfelt Message
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                To our dear friends, family, and colleagues — we warmly invite
                you to celebrate this special new chapter with us. Your love,
                support, and presence mean the world to us, and we would be
                honored to share this joyful moment as we prepare to welcome our
                little one.
              </p>
            </div>
          </section>

          {/* Attire Section */}
          <section className="mb-6">
            <h3 className="text-lg font-medium mb-2">Attire</h3>
            <div className="prose text-sm text-muted-foreground">
              <p>
                <strong>Suggested:</strong> Blue &amp; White
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-2">Gifts & Contributions</h3>
            <div className="prose text-sm text-muted-foreground">
              <p>
                If you'd like to give a gift, please view our Takealot wishlist
                (prices shown) or contact the host for delivery details.
              </p>
              <ul>
                <li>
                  Gift registry:{" "}
                  <a
                    href="https://www.takealot.com/wishlist/shared/1:fe93bf1d631343cd8b71ee5920ecf1bf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 underline"
                  >
                    Takealot wishlist — view gift prices
                  </a>
                </li>
                <li>Reference: YourName / GIFT</li>
              </ul>
            </div>
          </section>

          <footer className="mt-6 text-right">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
            >
              Done
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Entry;
