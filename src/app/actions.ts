'use server';

import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendEmail(data: ContactFormValues) {
    try {
        await resend.emails.send({
            from: 'LLL Digital Contact <onboarding@resend.dev>',
            to: 'gerolelant@gmail.com',
            subject: `New Message: ${data.subject}`,
            react: ContactEmail({
                name: data.name,
                email: data.email,
                message: data.message,
                subject: data.subject
            })
        });
        return { success: true };
    } catch (error) {
        console.error("Email sending failed:", error);
        return { success: false, error: "Failed to send email. Please try again." };
    }
}
