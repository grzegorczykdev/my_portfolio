import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, CheckCircle, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  website: z.string().trim().url('Invalid URL').max(500),
});

const LeadMagnetSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      formSchema.parse(formData);

      const form = e.target as HTMLFormElement;
      const botFieldValue =
        (form.elements.namedItem('bot-field') as HTMLInputElement | null)?.value || '';

      const body = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        website: formData.website,
        'bot-field': botFieldValue,
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setFormData({ name: '', email: '', website: '' });
      setErrors({});
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        setSubmitError('Coś poszło nie tak. Spróbuj ponownie za chwilę.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-premium-xl"
          >
            {!isSubmitted ? (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      Free Report
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                    {t('lead.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('lead.subtitle')}
                  </p>

                  {/* Benefits list */}
                  <ul className="mt-6 space-y-3">
                    {[
                      'Technical performance analysis',
                      'SEO opportunity identification',
                      'Security recommendations',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - Form */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden" aria-hidden="true">
                    <label className="text-xs text-muted-foreground">
                      Don’t fill this out if you are human:
                      <input
                        name="bot-field"
                        tabIndex={-1}
                        className="mt-1 block w-full bg-transparent text-xs"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      {t('lead.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      {t('lead.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-primary mb-2">
                      {t('lead.website')}
                    </label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className={errors.website ? 'border-destructive' : ''}
                    />
                    {errors.website && (
                      <p className="text-xs text-destructive mt-1">{errors.website}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        {t('lead.submit')}
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                  {submitError && (
                    <p className="text-xs text-destructive text-center">{submitError}</p>
                  )}
                </form>
              </div>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t('lead.success')}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
