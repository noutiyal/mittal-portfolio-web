
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Let's discuss how we can work together on your next project.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-4 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12 flex justify-center"> {/* Added flex justify-center here */}
            <Card className="w-full max-w-md"> {/* Added width constraints */}
              <CardHeader>
                <CardTitle>Contact Information</CardTitle> {/* Centered title */}
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div> {/* Centered content */}
                  <h3 className="font-medium">Location</h3>
                  <p>Mohali, Punjab, India</p>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>
                    <a
                      href="mailto:jashanmittal75511@gmail.com"
                      className="text-primary hover:underline"
                    >
                      jashanmittal75511@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>
                    <a href="tel:+919878675146" className="text-primary hover:underline">
                      +91 83601-21598
                    </a>
                  </p>
                </div>

                <div className="pt-1 text-center">
                  <h3 className="font-medium mb-6">Connect</h3>
                  <div className="flex space-x-6 justify-center"> {/* Centered social icons */}
                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/jashan-mittal-9b056b160"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 34 34"
                        fill="#0A66C2"
                      >
                        <path d="M34,2.4v29.2c0,1.3-1.1,2.4-2.4,2.4H2.4C1.1,34,0,32.9,0,31.6V2.4C0,1.1,1.1,0,2.4,0h29.2C32.9,0,34,1.1,34,2.4z" />
                        <path
                          fill="#FFFFFF"
                          d="M10.1 27.3V13.5H5.1v13.8h5zm-2.5-15.7c1.7 0 2.7-1.1 2.7-2.5-.1-1.5-1-2.5-2.6-2.5S5 7.6 5 8.9c0 1.4 1 2.5 2.5 2.5h.1zM28.8 27.3V19c0-4.4-2.4-6.4-5.5-6.4-2.5 0-3.6 1.4-4.2 2.4v-2h-5.1c.1 1.3 0 13.8 0 13.8h5.1v-7.7c0-.4 0-.7.1-1 .3-.7 1-1.4 2.1-1.4 1.5 0 2.1 1.1 2.1 2.7v7.4h5.1z"
                        />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/918360121598?text=Hello%2C%20I%20visited%20your%20site%20and%20want%20to%20connect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center"
                      aria-label="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.42 11.42 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.56 4.07 1.54 5.78L0 24l6.48-1.52a11.43 11.43 0 005.52 1.44c6.63 0 12-5.37 12-12 0-3.2-1.24-6.21-3.48-8.44zM12 21.5a9.42 9.42 0 01-4.92-1.47l-.35-.21-3.85.9.9-3.74-.22-.37A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5c2.53 0 4.91.99 6.68 2.76a9.444 9.444 0 012.76 6.74c0 5.23-4.27 9.5-9.5 9.5zm5.3-7.38c-.29-.15-1.7-.84-1.97-.93-.27-.1-.47-.15-.67.15s-.77.93-.95 1.12c-.18.19-.35.21-.65.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.6-2-.17-.31-.02-.48.13-.63.13-.13.29-.35.44-.53.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.54-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.53.07-.81.39s-1.06 1.04-1.06 2.54 1.09 2.94 1.24 3.15c.15.21 2.13 3.26 5.16 4.57.72.31 1.28.49 1.72.62.72.2 1.38.17 1.9.1.58-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.35z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
