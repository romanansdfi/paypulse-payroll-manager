
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateTax(salary: number): number {
  // Simple progressive tax calculation
  if (salary <= 20000) {
    return salary * 0.1; // 10% tax rate
  } else if (salary <= 50000) {
    return 2000 + (salary - 20000) * 0.15; // 15% tax rate on amount over 20000
  } else if (salary <= 100000) {
    return 6500 + (salary - 50000) * 0.25; // 25% tax rate on amount over 50000
  } else {
    return 19000 + (salary - 100000) * 0.3; // 30% tax rate on amount over 100000
  }
}
