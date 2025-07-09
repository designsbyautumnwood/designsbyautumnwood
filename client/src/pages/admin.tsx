import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Mail, Calendar, DollarSign, MessageSquare, User, Briefcase } from "lucide-react";
import type { ContactSubmission } from "@shared/schema";

export default function Admin() {
  const { data: submissions, isLoading } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/contact-submissions'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ocean-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Quote Submissions</h1>
          <p className="text-gray-600 mt-2">
            {submissions?.length || 0} total submissions
          </p>
        </div>

        <div className="grid gap-6">
          {submissions?.map((submission) => (
            <Card key={submission.id} className="shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-gray-900">
                    Quote Request #{submission.id}
                  </CardTitle>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {format(new Date(submission.submittedAt), 'MMM dd, yyyy HH:mm')}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-gray-900">{submission.name}</p>
                      <p className="text-sm text-gray-600">Name</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-gray-900">{submission.email}</p>
                      <p className="text-sm text-gray-600">Email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-gray-900">{submission.service}</p>
                      <p className="text-sm text-gray-600">Service</p>
                    </div>
                  </div>
                  
                  {submission.budget && (
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-ocean-blue" />
                      <div>
                        <p className="font-medium text-gray-900">{submission.budget}</p>
                        <p className="text-sm text-gray-600">Budget</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {submission.message && (
                  <div className="mt-4">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-5 h-5 text-ocean-blue mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Message</p>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-gray-900 whitespace-pre-wrap">{submission.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          
          {!submissions?.length && (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
              <p className="text-gray-600">Quote requests will appear here when submitted.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}