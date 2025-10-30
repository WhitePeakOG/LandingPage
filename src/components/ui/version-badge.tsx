import { Badge } from "@/components/ui/badge";

interface VersionBadgeProps {
  version?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export default function VersionBadge({ 
  version = "1.0.0", 
  variant = "default" 
}: VersionBadgeProps) {
  return (
    <Badge variant={variant} className="font-mono text-xs">
      v{version}
    </Badge>
  );
}
