import BabyShowerInvitation from "@/components/BabyShowerInvitation";
import watercolorStroke from "@/assets/watercolor-stroke.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 relative overflow-hidden">
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
      
      {/* Gold sparkle background accents */}
      <div className="absolute top-1/4 left-10 w-3 h-3 gold-sparkle rounded-full opacity-40" />
      <div className="absolute top-1/3 right-16 w-2 h-2 gold-sparkle rounded-full opacity-30" />
      <div className="absolute bottom-1/4 left-20 w-2 h-2 gold-sparkle rounded-full opacity-35" />
      <div className="absolute bottom-1/3 right-10 w-3 h-3 gold-sparkle rounded-full opacity-40" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
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
          date="Saturday July"
          dayNumber="15"
          time="2:30 PM"
          venue="Smith Residence"
          address="200 Gator Pl. Homestead, FL"
          rsvpContact="Angela"
          rsvpPhone="355.345.1234"
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
