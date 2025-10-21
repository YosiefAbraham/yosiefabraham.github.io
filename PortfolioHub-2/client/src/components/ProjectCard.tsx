import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" 
      onClick={onClick}
      data-testid={`card-project-${title.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-card-border">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl font-bold text-primary/40">{title.charAt(0)}</div>
        )}
      </div>

      <div className="p-6 md:p-8 space-y-4">
        <h3 className="text-2xl font-bold" data-testid={`text-project-title-${title.toLowerCase().replace(/\s/g, '-')}`}>
          {title}
        </h3>

        <p className="text-base leading-relaxed" data-testid={`text-project-description-${title.toLowerCase().replace(/\s/g, '-')}`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s/g, '-')}`}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-muted-foreground pt-2">
          Click to view details →
        </div>
      </div>
    </Card>
  );
}
