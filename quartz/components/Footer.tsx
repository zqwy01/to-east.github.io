import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <a href="https://www.to-east.org">to-east </a>
          <a href="https://www.en.to-east.org">en.to-east </a>
          <a href="https://www.ru.to-east.org">ru.to-east </a>
          <a href="https://www.de.to-east.org">de.to-east </a>
          <a href="https://www.fr.to-east.org">fr.to-east </a>
          <a href="https://www.po.to-east.org">po.to-east </a>
          <br>
          <a href="https://www.po.to-east.org">po.to-east </a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
