import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactFormFieldProps {
  labelKey: string;
  id: string;
  error?: string;
  showShake?: boolean;
  hint?: React.ReactNode;
  children: React.ReactNode;
}

const ContactFormField = ({
  labelKey,
  id,
  error,
  showShake,
  hint,
  children,
}: ContactFormFieldProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      className={error && showShake ? "animate-form-shake" : ""}
    >
      <label
        htmlFor={id}
        className="block text-sm font-medium text-primary mb-2"
      >
        {t(labelKey)}
      </label>
      {children}
      {hint}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-destructive mt-1"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ContactFormField;
