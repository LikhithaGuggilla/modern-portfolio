import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ScrollAnimation } from "./scroll-animation";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Get In <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ScrollAnimation delay={100}>
                <div>
                  <h3 className="mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-white/60">Email</p>
                        <p>alex.johnson@email.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-white/60">Phone</p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-white/60">Location</p>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="p-6 bg-gradient-to-br from-amber-900/10 to-amber-800/5 border border-amber-900/20 rounded-xl">
                  <h3 className="mb-2">Let's work together</h3>
                  <p className="text-white/60">
                    I'm currently looking for internship opportunities and freelance projects. Feel free to reach out!
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={300}>
              <div className="bg-white/5 border border-amber-900/20 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm text-white/80">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white/5 border-amber-900/20 focus:border-amber-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-white/80">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white/5 border-amber-900/20 focus:border-amber-700"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm text-white/80">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="bg-white/5 border-amber-900/20 focus:border-amber-700 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-700 hover:to-amber-800">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}