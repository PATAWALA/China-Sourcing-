import { site } from "@/data/site";

interface WhatsAppPayload {
  context?: string;
  need?: string;
  destination?: string;
  mode?: string;
  details?: string;
}

export function buildWhatsAppUrl(payload: WhatsAppPayload = {}) {
  const lines: string[] = [`Bonjour ${site.name} / ${site.city},`];

  if (payload.context) lines.push("", `Demande : ${payload.context}`);

  const bullets = [
    payload.need && `Besoin : ${payload.need}`,
    payload.destination && `Destination : ${payload.destination}`,
    payload.mode && `Mode : ${payload.mode}`,
    payload.details && `Détails : ${payload.details}`,
  ].filter(Boolean) as string[];

  if (bullets.length) {
    lines.push("", "Détails de la demande :");
    bullets.forEach((b) => lines.push(`• ${b}`));
  }

  lines.push("", "Merci de me recontacter pour une estimation.");

  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(lines.join("\n"))}`;
}