import BabyShowerInvitation from "@/components/BabyShowerInvitation";
import watercolorStroke from "@/assets/watercolor-stroke.png";

const Balloon = ({ color, left, delay, duration }: { color: string; left: string; delay: string; duration: string }) => (
  <div
    className="balloon absolute w-8 h-10 rounded-full opacity-60"
    style={{
      background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd)`,
      left,
      bottom: '-50px',
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

const Index = () => {
  const balloons = [
    { color: 'hsl(210, 50%, 75%)', left: '5%', delay: '0s', duration: '12s' },
    { color: 'hsl(42, 60%, 75%)', left: '15%', delay: '2s', duration: '14s' },
    { color: 'hsl(350, 40%, 85%)', left: '25%', delay: '4s', duration: '11s' },
    { color: 'hsl(215, 50%, 70%)', left: '35%', delay: '1s', duration: '13s' },
    { color: 'hsl(210, 40%, 80%)', left: '50%', delay: '3s', duration: '15s' },
    { color: 'hsl(42, 50%, 80%)', left: '65%', delay: '5s', duration: '12s' },
    { color: 'hsl(350, 35%, 80%)', left: '75%', delay: '2.5s', duration: '14s' },
    { color: 'hsl(215, 45%, 75%)', left: '85%', delay: '0.5s', duration: '11s' },
    { color: 'hsl(210, 55%, 78%)', left: '95%', delay: '4.5s', duration: '13s' },
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 relative overflow-hidden">
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
      <div className="absolute top-1/4 left-10 w-3 h-3 gold-sparkle rounded-full animate-sparkle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-16 w-2 h-2 gold-sparkle rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-20 w-2 h-2 gold-sparkle rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-10 w-3 h-3 gold-sparkle rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto animate-card-entrance">
        <header className="text-center mb-8">
          <h1 className="font-script text-5xl md:text-6xl text-primary text-shadow-soft mb-2">
            You're Invited!
          </h1>
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">
            A Special Celebration
          </p>
        </header>
        
        <BabyShowerInvitation
          motherName="Bella Smith"
          date="Saturday February"
          dayNumber="28"
          time="2:30 PM"
          venue="Near Clayville ext 77"
          address="In Olifantsfontein 410-JR, Thembisa"
          rsvpContact="Angela"
          rsvpPhone="0743642496"
        />
        
        <footer className="text-center mt-8">
          <p className="font-elegant text-sm text-muted-foreground italic">
            We can't wait to celebrate with you!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-px bg-border" />
            <span className="font-script text-2xl text-dusty-blue">♡</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
