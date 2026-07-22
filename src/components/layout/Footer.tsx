import { Container } from "@/components/ui/Container";
import { SITE_NAME } from "@/constants/site";

export function Footer() {
  return (
    <footer className="mt-auto border-neutral-200">
      <Container className="flex h-16 items-center justify-between text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <p>Made with ❤️ by <a href="https://github.com/oody" target="_blank" rel="noopener noreferrer">oody</a></p>
      </Container>
    </footer>
  );
}
