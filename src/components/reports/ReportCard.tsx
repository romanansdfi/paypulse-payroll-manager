
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReportCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  lastGenerated?: string;
}

const ReportCard = ({
  title,
  description,
  icon,
  lastGenerated,
}: ReportCardProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download initiated",
      description: `${title} is being prepared for download.`,
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start space-y-0 pb-2">
        <div className="flex-1">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <div className="text-primary h-6 w-6">{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        {lastGenerated && (
          <p className="text-xs text-muted-foreground mt-2">
            Last generated: {lastGenerated}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleDownload} className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReportCard;
