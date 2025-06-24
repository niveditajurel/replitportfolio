import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Zap, 
  Palette, 
  Smartphone, 
  Settings, 
  Rocket, 
  Code, 
  User,
  Menu,
  Download,
  Play,
  Copy,
  Check,
  Github,
  Twitter
} from "lucide-react";
import { FaReact, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Vite's instant HMR and optimized builds for the fastest development experience possible.",
      badge: "⚡ Hot Module Replacement",
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-600",
      border: "border-blue-100 hover:border-blue-200"
    },
    {
      icon: Palette,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework with PostCSS and Autoprefixer pre-configured.",
      badge: "🎨 Utility-First Styling",
      gradient: "from-emerald-50 to-green-50",
      iconBg: "bg-emerald-600",
      border: "border-emerald-100 hover:border-emerald-200"
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description: "Mobile-first responsive design patterns and components out of the box.",
      badge: "📱 Mobile-First Design",
      gradient: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-600",
      border: "border-purple-100 hover:border-purple-200"
    },
    {
      icon: Settings,
      title: "Modern Setup",
      description: "Latest React patterns with hooks, modern JavaScript, and TypeScript support.",
      badge: "⚙️ Latest Standards",
      gradient: "from-amber-50 to-orange-50",
      iconBg: "bg-amber-600",
      border: "border-amber-100 hover:border-amber-200"
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description: "Optimized build configuration for deployment to any hosting platform.",
      badge: "🚀 Deploy Anywhere",
      gradient: "from-red-50 to-pink-50",
      iconBg: "bg-red-600",
      border: "border-red-100 hover:border-red-200"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "ESLint, Prettier, and other essential development tools pre-configured.",
      badge: "🛠️ Best Practices",
      gradient: "from-slate-50 to-gray-50",
      iconBg: "bg-slate-600",
      border: "border-slate-200 hover:border-slate-300"
    }
  ];

  const teamMembers = [
    { name: "John Doe", role: "Software Engineer", color: "blue" },
    { name: "Jane Smith", role: "Product Designer", color: "emerald" },
    { name: "Mike Johnson", role: "DevOps Engineer", color: "purple" }
  ];

  const codeExample = `# Clone the repository
git clone https://github.com/username/react-vite-starter.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FaReact className="text-white text-sm" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">React Vite Starter</h1>
                <p className="text-xs text-slate-500">with Tailwind CSS</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('components')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Components
              </button>
              <button 
                onClick={() => scrollToSection('setup')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Setup
              </button>
              <button 
                onClick={() => scrollToSection('docs')}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Docs
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Button className="hidden sm:inline-flex items-center bg-slate-900 text-white hover:bg-slate-800">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Modern React Development{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              A lightning-fast starter template with React, Vite, and Tailwind CSS. 
              Everything you need to build modern web applications with the best developer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Download className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="inline-flex items-center px-8 py-4 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Pre-configured with the best tools and patterns for modern React development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`bg-gradient-to-br ${feature.gradient} p-8 border ${feature.border} transition-all duration-300 hover:shadow-lg`}>
                <CardContent className="p-0">
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white text-xl h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <div className="text-sm font-medium text-blue-600">{feature.badge}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section id="components" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Component Examples</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcase of Tailwind CSS components and patterns included in the starter template
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Form Example */}
            <Card className="bg-white shadow-lg p-8 border border-slate-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Modern Form Components</h3>
                <form className="space-y-4">
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-2">Email Address</Label>
                    <Input type="email" placeholder="you@example.com" className="w-full" />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-2">Password</Label>
                    <Input type="password" placeholder="••••••••" className="w-full" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm text-slate-600">Remember me</Label>
                    </div>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">Forgot password?</a>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Card Example */}
            <Card className="bg-white shadow-lg p-8 border border-slate-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Interactive Cards</h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-${member.color}-100 rounded-full flex items-center justify-center`}>
                            <User className={`text-${member.color}-600 h-5 w-5`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">{member.name}</h4>
                            <p className="text-sm text-slate-500">{member.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Code Example */}
          <Card className="bg-slate-900 text-white p-8">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Quick Start Code</h3>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-slate-700 text-white hover:bg-slate-600"
                  onClick={handleCopyCode}
                >
                  {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
              <Card className="bg-slate-800 p-4">
                <CardContent className="p-0">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-emerald-400">
                      {codeExample.split('\n').map((line, index) => (
                        <div key={index}>
                          {line.startsWith('#') ? (
                            <span className="text-slate-400">{line}</span>
                          ) : line.includes('npm install') ? (
                            <span className="text-blue-400">{line}</span>
                          ) : line.includes('npm run dev') ? (
                            <span className="text-purple-400">{line}</span>
                          ) : line.includes('npm run build') ? (
                            <span className="text-amber-400">{line}</span>
                          ) : (
                            line
                          )}
                        </div>
                      ))}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Setup Instructions */}
      <section id="setup" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Easy Setup</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get up and running in minutes with our streamlined setup process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Clone Repository", description: "Download the starter template from GitHub and navigate to the project directory.", color: "blue" },
                { step: "2", title: "Install Dependencies", description: "Run npm install to download all required packages and dependencies.", color: "emerald" },
                { step: "3", title: "Start Developing", description: "Launch the development server and start building your amazing application.", color: "purple" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl font-bold text-${item.color}-600`}>{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <Card className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border border-blue-100">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Development Tools</h4>
                    <ul className="space-y-1 text-slate-600">
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> Vite Build Tool</li>
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> Hot Module Replacement</li>
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> ESLint & Prettier</li>
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> TypeScript Support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Styling & UI</h4>
                    <ul className="space-y-1 text-slate-600">
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> Tailwind CSS</li>
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> PostCSS & Autoprefixer</li>
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> Responsive Components</li>
                      <li className="flex items-center"><Check className="text-emerald-500 mr-2 h-4 w-4" /> Dark Mode Support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="docs" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FaReact className="text-white text-sm" />
                </div>
                <h3 className="text-xl font-semibold">React Vite Starter</h3>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                The fastest way to build modern React applications with Vite and Tailwind CSS. 
                Start your next project with confidence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <FaDiscord className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feature Requests</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contributing</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 React Vite Starter. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">License</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
