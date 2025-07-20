import { redirect } from 'next/navigation';
import { i18n } from '../next.config';

export default function RootPage() {
  redirect(`/${i18n.defaultLocale}`);
}
