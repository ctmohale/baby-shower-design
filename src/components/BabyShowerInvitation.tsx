import babyElephant from "@/assets/baby-elephant.png";
import floralCorner from "@/assets/floral-corner.png";

interface InvitationProps {
  motherName?: string;
  date?: string;
  dayNumber?: string;
  time?: string;
  venue?: string;
  address?: string;
  rsvpContact?: string;
  rsvpPhone?: string;
}

const BabyShowerInvitation = ({
  motherName = "Bella Smith",
  date = "Saturday July",
  dayNumber = "15",
  time = "2:30 PM",
  venue = "Smith Residence",
  address = "200 Gator Pl. Homestead, FL",
  rsvpContact = "Angela",
  rsvpPhone = "355.345.1234",
}: InvitationProps) => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Card */}
      <div className="invitation-card relative rounded-lg p-8 md:p-12 overflow-hidden">
        {/* Watercolor wash background effect */}
        <div className="absolute top-0 left-0 right-0 h-32 watercolor-wash opacity-60" />
        
        {/* Gold sparkle decorations */}
        <div className="absolute top-20 left-1/4 w-2 h-2 gold-sparkle rounded-full opacity-70" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 gold-sparkle rounded-full opacity-60" />
        <div className="absolute top-48 left-1/3 w-1 h-1 gold-sparkle rounded-full opacity-50" />
        <div className="absolute top-60 right-1/4 w-2 h-2 gold-sparkle rounded-full opacity-70" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 gold-sparkle rounded-full opacity-60" />
        
        {/* Top left floral decoration */}
        <div className="absolute -top-8 -left-8 w-40 h-40 opacity-90">
          <img
            src={floralCorner}
            alt=""
            className="w-full h-full object-contain rotate-0"
          />
        </div>
        
        {/* Bottom right floral decoration */}
        <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-90">
          <img
            src={floralCorner}
            alt=""
            className="w-full h-full object-contain rotate-180"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Tagline */}
          <p className="font-script text-3xl md:text-4xl text-dusty-blue mb-1 text-shadow-soft">
            A little peanut
          </p>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold font-medium mb-6">
            is on the way!
          </p>

          {/* Baby Elephant */}
          <div className="relative w-36 h-36 mx-auto mb-4">
            <img
              src={babyElephant}
              alt="Baby elephant"
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>

          {/* Join Us Text */}
          <p className="font-elegant text-sm tracking-wide text-muted-foreground mb-2">
            Join us for a
          </p>
          <p className="font-elegant text-sm tracking-wide text-muted-foreground mb-4">
            baby shower honoring
          </p>

          {/* Ribbon Banner with Name */}
          <div className="relative mx-auto w-4/5 mb-6">
            <div className="ribbon-banner py-3 px-8">
              <p className="font-script text-3xl md:text-4xl text-primary-foreground">
                {motherName}
              </p>
            </div>
            {/* Ribbon tails */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-navy clip-ribbon-left" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-navy clip-ribbon-right" />
          </div>

          {/* Date and Time */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-right">
              <p className="font-elegant text-lg font-medium text-foreground tracking-wide">
                {date.toUpperCase()}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="font-body text-xl font-semibold text-primary-foreground">
                {dayNumber}
              </span>
            </div>
            <div className="text-left">
              <p className="font-body text-xs tracking-wider text-muted-foreground uppercase">
                at
              </p>
              <p className="font-elegant text-lg font-medium text-foreground">
                {time}
              </p>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-1 mb-4">
            <p className="font-body text-sm font-semibold tracking-wider text-foreground uppercase">
              {venue}
            </p>
            <p className="font-body text-xs tracking-wide text-muted-foreground">
              {address}
            </p>
          </div>

          {/* RSVP */}
          <p className="font-body text-xs tracking-wide text-muted-foreground">
            RSVP to {rsvpContact} at {rsvpPhone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BabyShowerInvitation;
