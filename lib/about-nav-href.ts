export function aboutNavHref(label: string): string {
  switch (label) {
    case "Home":
      return "/"
    case "About":
      return "/about"
    case "Audition":
      return "/audition"
    case "Program":
      return "/#process"
    case "Apply":
      return "/apply"
    default:
      return "/"
  }
}
