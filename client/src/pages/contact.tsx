import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.chen@email.com",
    href: "mailto:alex.chen@email.com",
    description: "Best for project inquiries and collaboration",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexchen",
    href: "https://linkedin.com/in/alexchen",
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexchen",
    href: "https://github.com/alexchen",
    description: "Check out my code and contributions",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@alexchen_pm",
    href: "https://twitter.com/alexchen_pm",
    description: "Product thoughts and industry insights",
  },
];

export default function Contact() {
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const methodsRef = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleScheduleMeeting = () => {
    // Track meeting scheduling
    console.log("Meeting scheduling tracked");
    // Open scheduling link
    window.open("https://calendly.com/alexchen", "_blank");
  };

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
              Let's{" "}
              <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always excited to discuss product opportunities, collaborate on interesting projects, 
              or just chat about the future of technology and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleScheduleMeeting}
                className="inline-flex items-center px-8 py-4 hover-glow bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="inline-flex items-center px-8 py-4 hover-glow border-border/50"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={methodsRef.ref}
            className={`text-center mb-16 fade-in ${methodsRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect—I'm active on all these platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`group cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 slide-in-left ${
                  methodsRef.isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-body font-semibold text-foreground mb-2">
                      {method.label}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.description}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={formRef.ref}
            id="contact-form"
            className={`slide-in-right ${formRef.isVisible ? "visible" : ""}`}
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Send a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Have a specific project in mind? Let's discuss the details.
              </p>
            </div>

            <Card className="cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="bg-background border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your project, ideas, or how we might work together..."
                      rows={6}
                      required
                      className="bg-background border-border/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hover-glow bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Currently based in Berkeley, CA</span>
          </div>
          <p className="text-muted-foreground mt-2">
            Open to remote opportunities and willing to relocate for the right role.
          </p>
        </div>
      </section>
    </div>
  );
}