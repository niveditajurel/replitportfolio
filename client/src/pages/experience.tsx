import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "TechFlow Solutions",
    role: "Product Manager Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "San Francisco, CA",
    type: "Internship",
    description: "Led product development for a customer analytics dashboard serving 50+ enterprise clients.",
    achievements: [
      "Redesigned user onboarding flow, reducing time-to-value by 40%",
      "Conducted 25+ user interviews to identify key product gaps",
      "Collaborated with engineering team to ship 3 major feature releases",
      "Presented product roadmap to C-level executives and key stakeholders",
    ],
    skills: ["Product Strategy", "User Research", "Data Analysis", "Agile"],
    website: "https://techflow.com",
  },
  {
    company: "StartupWeekend",
    role: "Product Lead",
    duration: "Mar 2024 - May 2024",
    location: "Remote",
    type: "Competition",
    description: "Led product development for a winning startup idea in a 54-hour competition, focusing on sustainable transportation solutions.",
    achievements: [
      "Won 1st place out of 50+ competing teams",
      "Developed MVP with 200+ beta users in 3 days",
      "Secured $10K in seed funding from competition judges",
      "Managed cross-functional team of 6 designers and developers",
    ],
    skills: ["MVP Development", "Team Leadership", "Rapid Prototyping", "Pitch Presentation"],
    website: null,
  },
  {
    company: "University Research Lab",
    role: "UX Research Assistant",
    duration: "Sep 2023 - May 2024",
    location: "Berkeley, CA",
    type: "Research",
    description: "Conducted user experience research for educational technology platforms, focusing on accessibility and inclusive design.",
    achievements: [
      "Published research paper on accessible learning interfaces",
      "Designed and executed user studies with 100+ participants",
      "Developed accessibility guidelines adopted by 3 university departments",
      "Mentored 5 undergraduate students in research methodologies",
    ],
    skills: ["User Research", "Accessibility Design", "Statistical Analysis", "Academic Writing"],
    website: "https://berkeley.edu/research",
  },
  {
    company: "Design Collective",
    role: "Junior Product Designer",
    duration: "Jan 2023 - Aug 2023",
    location: "Oakland, CA",
    type: "Part-time",
    description: "Supported product design for early-stage startups, focusing on mobile-first experiences and user-centered design.",
    achievements: [
      "Designed user interfaces for 8 different client projects",
      "Improved app store ratings from 3.2 to 4.6 for key client",
      "Facilitated design thinking workshops for startup founders",
      "Created design system components used across 15+ projects",
    ],
    skills: ["UI/UX Design", "Prototyping", "Design Systems", "Client Management"],
    website: "https://designcollective.co",
  },
];

const education = [
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    duration: "Aug 2022 - May 2025",
    gpa: "3.8/4.0",
    activities: [
      "Product Management Club - Vice President",
      "Women in Tech - Mentorship Coordinator",
      "HackBerkeley - Organizing Committee",
    ],
    coursework: [
      "Human-Computer Interaction",
      "Data Structures & Algorithms", 
      "Machine Learning",
      "Software Engineering",
      "Statistics",
    ],
  },
];

function ExperienceCard({ experience, index, isVisible }: { 
  experience: typeof experiences[0], 
  index: number, 
  isVisible: boolean 
}) {
  return (
    <Card
      className={`cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm slide-in-right ${
        isVisible ? "visible" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-body font-bold text-xl text-foreground">
                {experience.role}
              </h3>
              <Badge
                variant="secondary"
                className={`
                  ${experience.type === 'Internship' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : ''}
                  ${experience.type === 'Competition' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : ''}
                  ${experience.type === 'Research' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' : ''}
                  ${experience.type === 'Part-time' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' : ''}
                `}
              >
                {experience.type}
              </Badge>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-body font-semibold text-lg text-primary">
                {experience.company}
              </h4>
              {experience.website && (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <CalendarDays className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {experience.description}
        </p>

        <div className="space-y-6">
          <div>
            <h5 className="font-body font-semibold text-foreground mb-3">Key Achievements</h5>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start space-x-2">
                  <span className="text-primary font-semibold mt-1">•</span>
                  <span className="text-muted-foreground text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-body font-semibold text-foreground mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="bg-background border-border/50 hover-glow cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Experience() {
  const heroRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const educationRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef.ref}
            className={`text-center fade-in ${heroRef.isVisible ? "visible" : ""}`}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From computer science student to product manager—exploring the experiences 
              that shaped my approach to building meaningful digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={experienceRef.ref}
            className={`mb-16 fade-in ${experienceRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Building products and leading teams across startups, research labs, and tech companies.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isVisible={experienceRef.isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={educationRef.ref}
            className={`mb-16 fade-in ${educationRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Education
            </h2>
          </div>

          {education.map((edu, index) => (
            <Card
              key={index}
              className={`cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm slide-in-left ${
                educationRef.isVisible ? "visible" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-body font-bold text-xl text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="font-body font-semibold text-lg text-primary mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <span>•</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>

                    <div>
                      <h5 className="font-body font-semibold text-foreground mb-3">Activities & Leadership</h5>
                      <ul className="space-y-1">
                        {edu.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start space-x-2">
                            <span className="text-primary font-semibold mt-1">•</span>
                            <span className="text-muted-foreground text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-body font-semibold text-foreground mb-3">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="bg-background border-border/50"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}