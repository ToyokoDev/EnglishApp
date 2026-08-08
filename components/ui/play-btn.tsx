import { Button } from "@/components/ui/button"
import Link from 'next/link';
export function PlayButton() {
  return (
  <Button asChild>
    <Link href='/session'>Play</Link>
  </Button>
)
}
