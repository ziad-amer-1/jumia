const CURRENCY_FORMATTER = new Intl.NumberFormat("egypt", {
  style: "currency",
  currency: "EGP",
})
export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number)
}
