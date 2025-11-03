import { Badge } from "@/components/ui/badge";

interface VersionBadgeProps {
  version?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  showPrefix?: boolean;
}

export default function VersionBadge({ 
  version = "1.0.0", 
  variant = "default",
  showPrefix = true 
}: VersionBadgeProps) {
  return (
    <Badge variant={variant} className="font-mono text-xs">
      {showPrefix ? `v${version}` : version}
    </Badge>
  );
}