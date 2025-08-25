import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Status = () => {
  return (
    <Card className="mt-6 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] max-w-md mx-auto group overflow-hidden relative p-0">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-16 h-16 border-2 border-emerald-300/50 shadow-md">
              <AvatarImage src="pfp.png" alt="@michillas" />
              <AvatarFallback className="bg-emerald-100 text-emerald-700">
                M
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                </div>
                <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white border-0 font-medium px-3 py-1 shadow-sm">
                  Disponible para trabajar
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Status;
