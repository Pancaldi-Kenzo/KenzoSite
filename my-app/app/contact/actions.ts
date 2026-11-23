'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  nom: z.string().min(2, "Votre nom doit contenir au moins 2 caractères.").max(50).trim(),
  email: z.string().email("L'adresse email n'est pas valide (ex: nom@domaine.com).").trim(),
  projet: z.enum(["Site Vitrine Alpha", "Business Pro", "Custom Studio", "Maintenance / Autre"]),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères.").max(3000).trim(),
});

export async function sendEmail(formData: FormData) {
  try {
    const rgpdConsent = formData.get('rgpd-consent');
    if (!rgpdConsent) {
      return { success: false, errors: { rgpd: "Vous devez accepter la politique de confidentialité." } };
    }

    const rawData = {
      nom: formData.get('nom'),
      email: formData.get('email'),
      projet: formData.get('projet'),
      message: formData.get('message'),
    };

    const validatedData = contactSchema.parse(rawData);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact.kzv@gmail.com',
      replyTo: validatedData.email,
      subject: `🚀 [KZV Studio] Demande pour : ${validatedData.projet} par ${validatedData.nom}`,
      html: `<p><strong>Nom :</strong> ${validatedData.nom}</p><p><strong>Email :</strong> ${validatedData.email}</p><p><strong>Message :</strong> ${validatedData.message}</p>`,
    });

    return { success: true };
  } catch (error) {
    // 🛡️ Si c'est une erreur de validation Zod
    if (error instanceof z.ZodError) {
      const flattenedErrors: Record<string, string[] | undefined> = error.flatten().fieldErrors;
      const fieldErrors: Record<string, string> = {};
      
      Object.keys(flattenedErrors).forEach((key) => {
        const messages = flattenedErrors[key];
        if (messages && messages[0]) {
          fieldErrors[key] = messages[0];
        }
      });

      return { success: false, errors: fieldErrors };
    }
    
    // Pour toutes les autres erreurs (ex: Resend, coupure réseau)
    console.error("Erreur lors de l'envoi :", error);
    return { success: false, globalError: "Une erreur est survenue lors de l'envoi. Réessayez plus tard." };
  }
}