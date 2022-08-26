import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <img src="/assets/logo.svg" alt="Logo" />
        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <a>
          <img src="/assets/icon-cart.svg" alt="icon-cart" />
        </a>
        <img src="/assets/image-avatar.png" alt="iamge-avatar" />
      </div>
    </Container>
  );
}
