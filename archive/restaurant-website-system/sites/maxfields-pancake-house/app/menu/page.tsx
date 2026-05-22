import { redirect } from 'next/navigation';

// /menu redirects to the home anchor — per audit §1, the source's /menu
// stub ("we couldn't find your dish") is dead weight. v1 chooses the
// redirect route over a deep-menu rebuild.
export default function MenuPage() {
  redirect('/#menu');
}
