"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.name.required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.email.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.email.invalid');
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.subject.required');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.message.required');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log("Email sent successfully:", result);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto pb-6 md:pb-12 px-6 mt-24">
      <Card className="relative">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl">{t('contact.title')}</CardTitle>
          <CardDescription className="text-base">
            {t('contact.subtitle')}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  <User className="h-4 w-4" />
                  {t('contact.name.label')}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t('contact.name.placeholder')}
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.name}
                  className={cn(
                    errors.name && "border-destructive focus-visible:border-destructive"
                  )}
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">
                  <Mail className="h-4 w-4" />
                  {t('contact.email.label')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.email.placeholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.email}
                  className={cn(
                    errors.email && "border-destructive focus-visible:border-destructive"
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">
                <MessageSquare className="h-4 w-4" />
                {t('contact.subject.label')}
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder={t('contact.subject.placeholder')}
                value={formData.subject}
                onChange={handleInputChange}
                aria-invalid={!!errors.subject}
                className={cn(
                  errors.subject && "border-destructive focus-visible:border-destructive"
                )}
              />
              {errors.subject && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.subject}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">
                <MessageSquare className="h-4 w-4" />
                {t('contact.message.label')}
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.message.placeholder')}
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                aria-invalid={!!errors.message}
                className={cn(
                  errors.message && "border-destructive focus-visible:border-destructive"
                )}
              />
              {errors.message && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message}
                </p>
              )}
            </div>
            
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  {t('contact.success')}
                </p>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-400 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {t('contact.error')}
                </p>
              </div>
            )}
            
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="rounded-full min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
