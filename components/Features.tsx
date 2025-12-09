import React from 'react';
import { Grid, Monitor, Layers, PenTool, Cpu, Box, FileCode, Cog } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "VMC Work",
      description: "High-precision Vertical Machining Center operations for complex components and accurate production."
    },
    {
      icon: <Grid className="h-8 w-8" />,
      title: "DRO Milling Work",
      description: "Efficient and accurate milling solutions utilizing Digital Readout systems for various industrial parts."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Jig & Fixture",
      description: "Custom-designed jigs and fixtures to enhance machining accuracy, repeatability, and productivity."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Jig Boring Work",
      description: "Precision boring operations for detailed and fine machining requirements demanding high tolerance."
    },
    {
      icon: <Box className="h-8 w-8" />,
      title: "Mould & Die Works",
      description: "Manufacturing and finishing of moulds and dies with high durability and exact specifications."
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "SPM Works",
      description: "Special Purpose Machine job works customized to meet unique industrial and manufacturing needs."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "2D & 3D Design",
      description: "Professional CAD design services to support product development and machining processes."
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      title: "CAM Program",
      description: "Advanced Computer-Aided Manufacturing programming for optimized and efficient machine operations."
    }
  ];

  return (
    <div className="py-24 bg-brand-blue relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white heading-underline pb-4">
            Our Services
          </h3>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            From design to finished product, we provide comprehensive precision machining solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-brand-blueLight border border-gray-700 p-8 hover:border-brand-yellow transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="bg-brand-blue p-3 inline-block rounded-sm mb-6 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-display uppercase">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-700 pt-3 group-hover:border-brand-blue/20">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};